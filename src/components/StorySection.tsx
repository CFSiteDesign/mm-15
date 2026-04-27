import cds from "@/assets/y2k/cds.png";
import glasses from "@/assets/y2k/glasses.png";
import sparkles from "@/assets/y2k/sparkles.png";

const StorySection = () => {
  return (
    <section className="relative bg-secondary py-8 md:py-20 px-5 md:px-16 border-b-4 border-border overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-[1fr_auto] md:grid-cols-2 gap-3 md:gap-16 items-center">
        <div>
          <span className="pill-mono mb-3 md:mb-4">15 Years of Madness</span>
          <h2 className="font-pixel text-[hsl(var(--deep-outline))] text-xl md:text-4xl lg:text-5xl leading-tight mt-2 md:mt-3 mb-3 md:mb-5 [text-shadow:3px_3px_0_hsl(var(--cream))] md:[text-shadow:4px_4px_0_hsl(var(--cream))]">
            7 COUNTRIES.<br />
            ONE MAD<br />
            FAMILY.
          </h2>
          <div className="space-y-2 md:space-y-4 text-[hsl(var(--deep-outline))] font-bold text-xs md:text-base leading-snug md:leading-relaxed max-w-lg">
            <p>
              Since 2011, Mad Monkey has been the home of social travel — built on big nights, real connections, and stories you'll be telling for years.
            </p>
            <p>
              We're turning 15. Every hostel. One night. Boat parties, free flow, live DJs and the entire Mad Monkey family in one place.
            </p>
            <p className="font-pixel text-[10px] md:text-sm text-primary mt-3 md:mt-5">
              &gt;&gt; YOU'RE INVITED.
            </p>
          </div>
        </div>

        {/* Decorative images — vertical stack on mobile (right column), original layout on desktop */}
        <div className="relative w-[90px] h-[200px] md:w-auto md:h-[400px]">
          <img src={cds} alt="" loading="lazy" className="absolute top-0 right-0 md:left-1/4 md:right-auto w-20 md:w-64 sticker rotate-[-8deg]" />
          <img src={glasses} alt="" loading="lazy" className="absolute bottom-0 right-0 w-20 md:w-56 sticker rotate-[12deg]" />
          <img src={sparkles} alt="" loading="lazy" className="absolute top-1 left-0 md:top-8 md:right-10 md:left-auto w-4 md:w-14" />
          <img src={sparkles} alt="" loading="lazy" className="absolute bottom-2 left-1 md:bottom-12 md:left-2 w-3 md:w-10" />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
