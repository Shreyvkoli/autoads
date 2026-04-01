import { Outlet } from "react-router-dom";
import { StarsBackground } from "@/components/stars";

const Layout = () => {
    return (
        <StarsBackground className="relative min-h-screen overflow-hidden">
            {/* Global Background Blobs - Applied to all pages */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/4 pointer-events-none" />

            <div className="relative z-10 w-full">
                <Outlet />
            </div>
        </StarsBackground>
    );
};

export default Layout;
