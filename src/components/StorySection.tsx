import cds from "@/assets/y2k/cds.png";
import glasses from "@/assets/y2k/glasses.png";
import sparkles from "@/assets/y2k/sparkles.png";

const StorySection = () => {
  return (
    <section className="relative bg-secondary py-14 md:py-20 px-5 md:px-16 border-b-4 border-border overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <span className="pill-mono mb-4">15 Years of Madness</span>
          <h2 className="font-pixel text-[hsl(var(--deep-outline))] text-2xl md:text-4xl lg:text-5xl leading-tight mt-3 mb-5 [text-shadow:4px_4px_0_hsl(var(--cream))]">
            7 COUNTRIES.<br />
            ONE MAD<br />
            FAMILY.
          </h2>
          <div className="space-y-3 md:space-y-4 text-[hsl(var(--deep-outline))] font-bold text-sm md:text-base leading-relaxed max-w-lg">
            <p>
              Since 2011, Mad Monkey has been the home of social travel — built on big nights, real connections, and stories you'll be telling for years.
            </p>
            <p>
              We're turning 15. Every hostel. One night. Boat parties, free flow, live DJs and the entire Mad Monkey family in one place.
            </p>
            <p className="font-pixel text-xs md:text-sm text-primary mt-5">
              &gt;&gt; YOU'RE INVITED.
            </p>
          </div>
        </div>

        <div className="relative h-[260px] md:h-[400px]">
          <img src={cds} alt="" loading="lazy" className="absolute top-0 left-1/4 w-40 md:w-64 sticker rotate-[-8deg]" />
          <img src={glasses} alt="" loading="lazy" className="absolute bottom-0 right-0 w-36 md:w-56 sticker rotate-[12deg]" />
          <img src={sparkles} alt="" loading="lazy" className="absolute top-8 right-10 w-8 md:w-14" />
          <img src={sparkles} alt="" loading="lazy" className="absolute bottom-12 left-2 w-6 md:w-10" />
        </div>
      </div>
    </section>
  );
};

export default StorySection;
