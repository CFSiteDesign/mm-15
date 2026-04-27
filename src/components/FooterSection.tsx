import madMonkeyLogo from "@/assets/mad-monkey-logo.png";
import sparkles from "@/assets/y2k/sparkles.png";

const COLUMNS = [
  {
    title: "Rules & Legal",
    links: [
      { label: "Tour & Groups", url: "https://madmonkeyhostels.com/groups" },
      { label: "No Sex Tourists", url: "https://madmonkeyhostels.com/no-sex-tourists" },
      { label: "Cancellation Policy", url: "https://madmonkeyhostels.com/cancellation-policy" },
      { label: "Privacy Policy", url: "https://madmonkeyhostels.com/privacy-policy" },
      { label: "Terms & Conditions", url: "https://madmonkeyhostels.com/terms-and-conditions" },
    ],
  },
  {
    title: "Partner With Us",
    links: [
      { label: "Investor", url: "https://madmonkeyhostels.com/partners/investors" },
      { label: "Property Partners", url: "https://madmonkeyhostels.com/partners/property-partners" },
      { label: "Content Creators", url: "https://madmonkeyhostels.com/creative-hub" },
      { label: "Travel Agencies", url: "https://madmonkeyhostels.com/partners/travel-agents" },
      { label: "Tour Operators & Suppliers", url: "https://madmonkeyhostels.com/partners/suppliers" },
    ],
  },
  {
    title: "Career",
    links: [{ label: "We're Hiring", url: "https://madmonkeyhostels.com/career/" }],
  },
  {
    title: "Press",
    links: [
      { label: "Mad Monkey News", url: "https://madmonkeyhostels.com/mad-monkey-in-the-news" },
      { label: "Press Releases", url: "https://madmonkeyhostels.com/press-releases" },
      { label: "Corporate Social Responsibility", url: "https://madmonkeyhostels.com/corporate-social-responsibility" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Backpacker Guides", url: "https://madmonkeyhostels.com/backpackers-guide" },
      { label: "Mad Monkey's Travel Blog", url: "https://madmonkeyhostels.com/our-blog" },
      { label: "Free Content Creator Stays", url: "https://madmonkeyhostels.com/creative-hub" },
    ],
  },
];

const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/madmonkeyhostels/" },
  { name: "TikTok", url: "https://www.tiktok.com/@madmonkeyhostels" },
  { name: "X", url: "http://twitter.com/madmonkeyhostel" },
  { name: "Facebook", url: "https://www.facebook.com/MadMonkeyHostels" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCkUGlFdhp5Ndk68j_QRS1kw" },
];

const FooterSection = () => {
  return (
    <footer className="relative bg-[hsl(var(--deep-outline))] text-[hsl(var(--cream))] py-12 md:py-16 px-5 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 mb-10 md:mb-14">
          <img src={sparkles} alt="" className="w-6 md:w-8" />
          <p className="font-pixel text-secondary text-sm md:text-lg text-center [text-shadow:3px_3px_0_hsl(var(--mm-blue))]">
            15 YEARS IN.<br className="md:hidden"/> JUST GETTING STARTED.
          </p>
          <img src={sparkles} alt="" className="w-6 md:w-8" />
        </div>

        {/* Brand row */}
        <div className="grid md:grid-cols-[260px_1fr] gap-8 md:gap-12 mb-10 md:mb-12 pb-10 md:pb-12 border-b-2 border-[hsl(var(--cream))]/15">
          <div>
            <img src={madMonkeyLogo} alt="Mad Monkey" className="w-32 md:w-40 mb-4"
              style={{ filter: "drop-shadow(1px 0 0 white) drop-shadow(-1px 0 0 white) drop-shadow(0 1px 0 white) drop-shadow(0 -1px 0 white)" }}
            />
            <h3 className="font-pixel text-base md:text-lg mb-4">MAD MONKEY</h3>
            <div className="flex gap-2 mb-4 flex-wrap">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="font-silk uppercase text-[10px] border-2 border-[hsl(var(--cream))] bg-transparent text-[hsl(var(--cream))] px-2.5 py-1.5 hover:bg-primary hover:border-primary transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
            <p className="font-mono-pixel text-base md:text-lg text-[hsl(var(--cream))]/70">
              All rights reserved © Mad Monkey. 2026
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-pixel text-sm md:text-base mb-4">STAY UPDATED WITH US</h3>
            <form className="space-y-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="NAME *"
                required
                className="w-full p-3 font-silk text-xs uppercase border-2 border-[hsl(var(--cream))]/40 bg-transparent text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream))]/40 outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="EMAIL *"
                required
                className="w-full p-3 font-silk text-xs uppercase border-2 border-[hsl(var(--cream))]/40 bg-transparent text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream))]/40 outline-none focus:border-primary"
              />
              <button type="submit" className="btn-pixel bg-primary text-primary-foreground text-xs px-6 py-3">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-pixel text-[10px] md:text-[11px] text-secondary mb-3">
                {col.title.toUpperCase()}
              </h4>
              <ul className="space-y-1.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer"
                      className="font-mono-pixel text-base md:text-lg text-[hsl(var(--cream))]/80 hover:text-primary transition-colors leading-tight"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="font-silk text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--cream))]/40 text-center mt-10 md:mt-14">
          © 2026 MAD MONKEY HOSTELS · ALL IN SINCE DAY ONE
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
