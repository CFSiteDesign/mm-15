import { useState } from "react";
import titleLockup from "@/assets/y2k/title.png";
import camera from "@/assets/y2k/camera.png";
import walkman from "@/assets/y2k/walkman.png";
import cds from "@/assets/y2k/cds.png";
import glasses from "@/assets/y2k/glasses.png";
import glassesOrange from "@/assets/y2k/glasses-orange.png";
import sparkles from "@/assets/y2k/sparkles.png";

const scrollToLocations = () => {
  document.getElementById("selector")?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  const [showDialog, setShowDialog] = useState(true);

  return (
    <section className="relative w-full bg-denim bg-denim-vignette bg-stars-overlay overflow-hidden border-b-4 border-border">
      {/* Stickers — desktop */}
      <img src={camera} alt="" loading="lazy" className="hidden md:block absolute top-[6%] right-[5%] w-44 lg:w-52 sticker -rotate-12 z-10 pointer-events-none" />
      <img src={walkman} alt="" loading="lazy" className="hidden md:block absolute top-[10%] left-[3%] w-48 lg:w-56 sticker rotate-6 z-10 pointer-events-none" />
      <img src={cds} alt="" loading="lazy" className="hidden md:block absolute bottom-[8%] right-[4%] w-44 lg:w-52 sticker rotate-12 z-10 pointer-events-none" />
      <img src={glasses} alt="" loading="lazy" className="hidden md:block absolute bottom-[10%] left-[4%] w-40 lg:w-48 sticker -rotate-6 z-10 pointer-events-none" />
      <img src={glassesOrange} alt="" loading="lazy" className="hidden lg:block absolute top-[45%] left-[10%] w-28 sticker rotate-[15deg] z-10 pointer-events-none" />

      {/* Stickers — mobile (smaller, fewer) */}
      <img src={camera} alt="" loading="lazy" className="md:hidden absolute top-[4%] right-[2%] w-20 sticker -rotate-12 z-10 pointer-events-none" />
      <img src={cds} alt="" loading="lazy" className="md:hidden absolute bottom-[6%] left-[3%] w-24 sticker rotate-6 z-10 pointer-events-none" />
      <img src={glasses} alt="" loading="lazy" className="md:hidden absolute bottom-[10%] right-[4%] w-20 sticker -rotate-12 z-10 pointer-events-none" />

      {/* Sparkles */}
      <img src={sparkles} alt="" loading="lazy" className="absolute bottom-[28%] right-[38%] w-5 md:w-9 z-10 pointer-events-none" />

      {/* Centerpiece */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-8 pb-12 md:pt-12 md:pb-16">
        <img
          src={titleLockup}
          alt="Mad Monkey 15th Birthday"
          loading="eager"
          className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto drop-shadow-[5px_5px_0_hsl(var(--mm-blue))]"
        />

        <div className="mt-3 md:mt-5 flex flex-wrap justify-center gap-2">
          <span className="pill-mono">Sat 27 June</span>
          <span className="pill-mono bg-secondary text-secondary-foreground">One Night</span>
          <span className="pill-mono bg-accent text-accent-foreground">Every Hostel</span>
        </div>

        {/* Win98 dialog — replaces the old Book Your Spot button */}
        {showDialog && (
          <div className="mt-5 md:mt-7 w-[260px] md:w-[290px] win98 sticker-enter">
            <div className="win98-title">
              <span>⚠ WARNING.EXE</span>
              <button
                onClick={() => setShowDialog(false)}
                className="bg-[hsl(var(--cream))] text-[hsl(var(--deep-outline))] border border-[hsl(var(--deep-outline))] w-4 h-4 leading-none text-[10px] flex items-center justify-center"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="p-3 text-[hsl(var(--deep-outline))] text-left">
              <p className="text-base md:text-lg leading-tight mb-3">
                RSVP to the vibes?
                <br />
                <span className="text-xs md:text-sm opacity-70">System will not respond if ignored.</span>
              </p>
              <div className="flex gap-2 justify-end">
                <button onClick={scrollToLocations} className="win98-btn">[ All In ]</button>
                <button onClick={() => setShowDialog(false)} className="win98-btn">[ Ignore ]</button>
              </div>
            </div>
          </div>
        )}

        <p className="mt-6 md:mt-8 font-mono-pixel text-[hsl(var(--cream))] text-lg md:text-2xl max-w-md leading-tight [text-shadow:2px_2px_0_hsl(var(--deep-outline)),-1px_-1px_0_hsl(var(--deep-outline)),1px_-1px_0_hsl(var(--deep-outline)),-1px_1px_0_hsl(var(--deep-outline))]">
          15 years. 7 countries. One mad family.{" "}
          <span className="text-secondary">All in.</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
