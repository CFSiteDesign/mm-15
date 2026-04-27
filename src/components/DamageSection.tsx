import walkman from "@/assets/y2k/walkman.png";
import cds from "@/assets/y2k/cds.png";
import glassesOrange from "@/assets/y2k/glasses-orange.png";

const CARDS = [
  {
    title: "Boat Party",
    description: "Sail off into the sunset with the crew. Drinks flowing, music pumping, no land in sight.",
    badge: "All Aboard",
    sticker: cds,
    rotate: "rotate-[-8deg]",
    bg: "bg-card",
  },
  {
    title: "Free Flow",
    description: "Open bar. Need we say more.",
    badge: "All In",
    sticker: glassesOrange,
    rotate: "rotate-[10deg]",
    bg: "bg-secondary",
  },
  {
    title: "Live DJs",
    description: "Local legends behind the decks until the early hours.",
    badge: "Til Late",
    sticker: walkman,
    rotate: "rotate-[-6deg]",
    bg: "bg-card",
  },
];

const DamageSection = () => {
  return (
    <section className="relative bg-primary py-14 md:py-20 px-5 md:px-16 border-b-4 border-border overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="pill-mono bg-[hsl(var(--cream))] text-[hsl(var(--deep-outline))]">// What's Going Down</span>
          <h2 className="font-pixel text-2xl md:text-5xl text-[hsl(var(--cream))] mt-4 [text-shadow:5px_5px_0_hsl(var(--deep-outline))]">
            THE BIG THREE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`relative card-pixel card-pixel-hover ${card.bg} p-6 md:p-7 pt-10 md:pt-12`}
            >
              <img
                src={card.sticker}
                alt=""
                loading="lazy"
                className={`sticker-rotate sticker-sm absolute -top-8 -right-4 w-20 md:w-28 ${card.rotate} pointer-events-none`}
              />
              <span className="pill-mono mb-3">{card.badge}</span>
              <h3 className="font-pixel text-base md:text-xl text-foreground mt-3 mb-3 leading-tight">
                {card.title.toUpperCase()}
              </h3>
              <p className="font-bold text-foreground/80 text-sm md:text-base leading-snug">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DamageSection;
