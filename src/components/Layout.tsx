
import { Outlet } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Layout = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Global Background Blobs - Applied to all pages */}
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4" />
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/4" />

            <div className="relative z-10 w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
