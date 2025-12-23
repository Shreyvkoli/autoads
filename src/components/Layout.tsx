
import { Outlet } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Layout = () => {
    return (
        <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(253, 251, 247)"
            gradientBackgroundEnd="rgb(245, 245, 220)"
            firstColor="255, 248, 231"
            secondColor="250, 240, 230"
            thirdColor="250, 235, 215"
            fourthColor="255, 228, 196"
            fifthColor="255, 235, 205"
            pointerColor="222, 184, 135"
        >
            <div className="relative z-10 w-full min-h-screen">
                <Outlet />
            </div>
        </BackgroundGradientAnimation>
    );
};

export default Layout;
