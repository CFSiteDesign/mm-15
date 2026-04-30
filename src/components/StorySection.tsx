import cds from "@/assets/y2k/cds.png";
import glasses from "@/assets/y2k/glasses.png";
import sparkles from "@/assets/y2k/sparkles.png";
import partyCrowd from "@/assets/y2k/party-crowd.png";

const StorySection = () => {
  return (
    <section className="relative bg-secondary py-8 md:py-20 px-5 md:px-16 border-b-4 border-border overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-[1fr_auto] md:grid-cols-[auto_auto_2fr] gap-3 md:gap-32 items-center md:justify-center">
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

        {/* Party photo with sticker corners */}
        <div className="relative w-[140px] h-[200px] md:w-auto md:h-[460px] md:aspect-[3/4]">
          <div className="card-pixel bg-card p-1.5 md:p-2 w-full h-full rotate-[-2deg]">
            <img
              src={partyCrowd}
              alt="Mad Monkey 15th birthday crowd going wild"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <img src={cds} alt="" loading="lazy" className="absolute -top-4 -left-4 md:-top-8 md:-left-10 w-14 md:w-32 sticker rotate-[-12deg] pointer-events-none" />
          <img src={glasses} alt="" loading="lazy" className="absolute -bottom-3 -right-3 md:-bottom-8 md:-right-10 w-14 md:w-32 sticker rotate-[14deg] pointer-events-none" />
          <img src={sparkles} alt="" loading="lazy" className="absolute -top-2 right-2 md:-top-4 md:right-6 w-4 md:w-10" />
          <img src={sparkles} alt="" loading="lazy" className="absolute bottom-4 -left-2 md:bottom-10 md:-left-4 w-3 md:w-8" />
        </div>
        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </section>
  );
};

export default StorySection;
