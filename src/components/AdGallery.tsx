import daytimeAuto from "@/assets/daytime-auto.png";
import nightAutos from "@/assets/night-autos.png";
import autoDriverQrGlow from "@/assets/auto-driver-qr-glow.png";
import autoDriverQrColor from "@/assets/auto-driver-qr-color.png";

const images = [
    { src: daytimeAuto, alt: 'Daytime Auto Rickshaw Ad' },
    { src: nightAutos, alt: 'Night-time Auto Rickshaw Glow Ad' },
    { src: autoDriverQrGlow, alt: 'Auto Rickshaw Interior Glow QR' },
    { src: autoDriverQrColor, alt: 'Auto Rickshaw Interior Colour QR' },
];

const AdGallery = () => {
    return (
        <section className="py-20 bg-[#09090b] overflow-hidden border-y border-white/5 relative flex flex-col items-center">
            {/* Minimalist Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

            <div className="container relative z-10 px-4 max-w-[1200px] mx-auto mb-10 text-center animate-fade-up">
                <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-white drop-shadow-sm"><span className="text-primary">Dynamic</span> Placements</h2>
                <p className="text-slate-400 text-lg mt-3 font-medium">Auto advertising that integrates perfectly inside and out.</p>
            </div>

            <div className="relative z-10 w-full overflow-hidden flex whitespace-nowrap pt-4 pb-12 before:absolute before:left-0 before:top-0 before:w-16 sm:before:w-32 before:h-full before:bg-gradient-to-r before:from-[#09090b] before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:w-16 sm:after:w-32 after:h-full after:bg-gradient-to-l after:from-[#09090b] after:to-transparent after:z-20">
                <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
                    {/* First continuous set */}
                    <div className="flex gap-6 sm:gap-8 px-3 sm:px-4">
                        {images.map((item, index) => (
                            <div key={index} className="w-[280px] sm:w-[400px] flex-shrink-0 group overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 shadow-2xl glass-card relative cursor-pointer">
                                <div className="h-[220px] sm:h-[300px] w-full relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Second continuous set for seamless loop */}
                    <div className="flex gap-6 sm:gap-8 px-3 sm:px-4">
                        {images.map((item, index) => (
                            <div key={`dup-${index}`} className="w-[280px] sm:w-[400px] flex-shrink-0 group overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 shadow-2xl glass-card relative cursor-pointer">
                                <div className="h-[220px] sm:h-[300px] w-full relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdGallery;
