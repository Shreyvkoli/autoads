import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import nodemailer from "nodemailer";
import { z } from "zod";
import fs from "node:fs/promises";
import path from "node:path";

dotenv.config();

const port = Number(process.env.PORT || 3001);
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:8080";
const adminToken = process.env.ADMIN_TOKEN || "";
const contactTo = process.env.CONTACT_TO || "";
const smtpHost = process.env.SMTP_HOST || "";
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER || "";
const smtpPass = process.env.SMTP_PASS || "";
const smtpSecure = (process.env.SMTP_SECURE || "false").toLowerCase() === "true";

const dataDir = path.resolve(process.cwd(), "data");
const contactsFile = path.join(dataDir, "contacts.json");

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  ip?: string;
  userAgent?: string;
};

const ensureDataFile = async () => {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(contactsFile);
  } catch {
    await fs.writeFile(contactsFile, JSON.stringify([], null, 2), "utf8");
  }
};

const readContacts = async (): Promise<ContactSubmission[]> => {
  await ensureDataFile();
  const raw = await fs.readFile(contactsFile, "utf8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) return [];
  return parsed as ContactSubmission[];
};

const writeContacts = async (items: ContactSubmission[]) => {
  await ensureDataFile();
  const tmp = contactsFile + ".tmp";
  await fs.writeFile(tmp, JSON.stringify(items, null, 2), "utf8");
  await fs.rename(tmp, contactsFile);
};

const randomId = () => `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;

const requireAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (!adminToken) {
    return res.status(503).json({ ok: false, error: "Admin token not configured" });
  }
  const token = req.header("x-admin-token") || "";
  if (token !== adminToken) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }
  return next();
};

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: corsOrigin,
  }),
);
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/api/health", (_req: express.Request, res: express.Response) => {
  res.json({ ok: true });
});

app.get(
  "/api/admin/contacts",
  requireAdmin,
  async (_req: express.Request, res: express.Response) => {
    try {
      const contacts = await readContacts();
      const sorted = [...contacts].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
      return res.json({ ok: true, data: sorted });
    } catch (err) {
      console.error("ADMIN_CONTACTS_READ_FAILED", err);
      return res.status(500).json({ ok: false, error: "Internal server error" });
    }
  },
);

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
});

app.post("/api/contact", async (req: express.Request, res: express.Response) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: "Invalid payload",
      details: parsed.error.flatten(),
    });
  }

  const payload = parsed.data;

  try {
    const entry: ContactSubmission = {
      id: randomId(),
      name: payload.name,
      email: payload.email,
      message: payload.message,
      createdAt: new Date().toISOString(),
      ip: req.ip,
      userAgent: req.header("user-agent") || undefined,
    };
    const contacts = await readContacts();
    contacts.push(entry);
    await writeContacts(contacts);
  } catch (err) {
    console.error("CONTACT_PERSIST_FAILED", err);
  }

  console.log("CONTACT_SUBMISSION", {
    name: payload.name,
    email: payload.email,
    messageLength: payload.message.length,
    receivedAt: new Date().toISOString(),
  });

  if (contactTo && smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: smtpUser,
        to: contactTo,
        subject: `AutoAds Contact: ${payload.name}`,
        replyTo: payload.email,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
      });
    } catch (err) {
      console.error("CONTACT_EMAIL_FAILED", err);
    }
  }

  return res.status(201).json({ ok: true });
});

app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ ok: false, error: "Not found" });
});

app.use(
  (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error("UNHANDLED_ERROR", err);
    res.status(500).json({ ok: false, error: "Internal server error" });
  },
);

app.listen(port, () => {
  console.log(`AutoAds backend listening on http://localhost:${port}`);
});
