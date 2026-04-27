import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import madMonkeyLogo from "@/assets/mad-monkey-logo.png";

const SLEEP_LOCATIONS: Record<string, string[]> = {
  Australia: ["Coogee Beach Sydney"],
  Cambodia: ["Koh Sdach", "Koh Rong", "Phnom Penh", "Siem Reap"],
  Indonesia: ["Gili Trawangan", "Kuta Lombok", "Nusa Lembongan", "Uluwatu"],
  Laos: ["Luang Prabang", "Vang Vieng"],
  Philippines: ["Dumaguete", "Nacpan Beach", "Manila", "Panglao", "Siargao", "Siquijor"],
  Thailand: ["Bangkok", "Chiang Mai", "Pai", "Phuket"],
  Vietnam: ["Ha Giang", "Hanoi", "Hoi An"],
};

const EXPERIENCE_LINKS = [
  { label: "Signature Tours", url: "https://madmonkeyhostels.com/signature-tours" },
  { label: "Ha Giang Loop", url: "https://madmonkeyhostels.com/ha-giang-loop/" },
  { label: "Group Tours", url: "https://madmonkeyhostels.com/groups" },
  { label: "Mad Loyalty", url: "https://madmonkeyhostels.com/mad-loyalty" },
];

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState<null | "sleep" | "experience">(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-40 w-full bg-[hsl(var(--cream))] border-b-[3px] border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="https://madmonkeyhostels.com" className="flex items-center gap-2 shrink-0">
          <img src={madMonkeyLogo} alt="Mad Monkey" className="h-8 md:h-10 w-auto"
            style={{ filter: "drop-shadow(1px 0 0 white) drop-shadow(-1px 0 0 white) drop-shadow(0 1px 0 white) drop-shadow(0 -1px 0 white)" }}
          />
          <span className="font-pixel text-primary text-[9px] md:text-[10px] hidden sm:inline">15TH BDAY</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 text-[hsl(var(--deep-outline))]">
          <a href="https://madmonkeyhostels.com/ha-giang-loop/" className="font-silk uppercase text-xs px-3 py-2 bg-secondary border-2 border-border hover:bg-primary hover:text-primary-foreground transition-colors">
            Ha Giang Loop
          </a>
          <a href="https://madmonkeyhostels.com/our-story" className="font-silk uppercase text-xs px-3 py-2 hover:text-primary transition-colors">
            Our Story
          </a>

          {/* Sleep dropdown */}
          <div className="relative" onMouseLeave={() => setOpenDropdown(null)}>
            <button
              onMouseEnter={() => setOpenDropdown("sleep")}
              onClick={() => setOpenDropdown(openDropdown === "sleep" ? null : "sleep")}
              className="font-silk uppercase text-xs px-3 py-2 inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              Sleep <ChevronDown className="w-3 h-3" />
            </button>
            {openDropdown === "sleep" && (
              <div className="absolute top-full left-0 mt-1 w-[640px] bg-[hsl(var(--cream))] border-[3px] border-border shadow-[6px_6px_0_hsl(var(--mm-blue))] p-5 grid grid-cols-3 gap-4 z-50">
                {Object.entries(SLEEP_LOCATIONS).map(([country, cities]) => (
                  <div key={country}>
                    <h4 className="font-pixel text-[10px] text-primary mb-2">{country.toUpperCase()}</h4>
                    <ul className="space-y-1">
                      {cities.map((c) => (
                        <li key={c}>
                          <a href={`https://madmonkeyhostels.com/${c.toLowerCase().replace(/\s+/g, "-")}`}
                            className="font-mono-pixel text-base text-[hsl(var(--deep-outline))] hover:text-primary"
                          >
                            {c}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Experience dropdown */}
          <div className="relative" onMouseLeave={() => setOpenDropdown(null)}>
            <button
              onMouseEnter={() => setOpenDropdown("experience")}
              onClick={() => setOpenDropdown(openDropdown === "experience" ? null : "experience")}
              className="font-silk uppercase text-xs px-3 py-2 inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              Experience <ChevronDown className="w-3 h-3" />
            </button>
            {openDropdown === "experience" && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-[hsl(var(--cream))] border-[3px] border-border shadow-[6px_6px_0_hsl(var(--mm-blue))] p-3 z-50">
                <ul className="space-y-1">
                  {EXPERIENCE_LINKS.map((l) => (
                    <li key={l.label}>
                      <a href={l.url} className="block font-mono-pixel text-base text-[hsl(var(--deep-outline))] hover:text-primary px-2 py-1">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a href="https://madmonkeyhostels.com/mad-loyalty" className="font-silk uppercase text-xs px-3 py-2 hover:text-primary transition-colors">
            Mad Loyalty
          </a>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <span className="font-silk uppercase text-[10px] text-[hsl(var(--deep-outline))]/60 px-2">USD | $</span>
          <a href="https://madmonkeyhostels.com/login" className="font-silk uppercase text-[10px] border-2 border-border px-3 py-2 bg-[hsl(var(--cream))] text-[hsl(var(--deep-outline))] hover:bg-secondary transition-colors">
            Login
          </a>
          <a href="https://madmonkeyhostels.com" className="font-silk uppercase text-[10px] border-2 border-border px-3 py-2 bg-primary text-primary-foreground shadow-[3px_3px_0_hsl(var(--mm-blue))] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_hsl(var(--mm-blue))] transition-all">
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden border-2 border-border bg-secondary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(var(--cream))] border-t-2 border-border px-4 py-4 max-h-[80vh] overflow-y-auto">
          <a href="https://madmonkeyhostels.com/ha-giang-loop/" className="block font-silk uppercase text-xs py-2 text-primary">Ha Giang Loop</a>
          <a href="https://madmonkeyhostels.com/our-story" className="block font-silk uppercase text-xs py-2">Our Story</a>
          <div className="py-2">
            <p className="font-silk uppercase text-xs mb-2 text-primary">Sleep</p>
            {Object.entries(SLEEP_LOCATIONS).map(([country, cities]) => (
              <div key={country} className="mb-2">
                <p className="font-pixel text-[9px] mt-2 mb-1 text-[hsl(var(--deep-outline))]/60">{country}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {cities.map((c) => (
                    <a key={c} href={`https://madmonkeyhostels.com/${c.toLowerCase().replace(/\s+/g, "-")}`} className="font-mono-pixel text-base">{c}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="py-2">
            <p className="font-silk uppercase text-xs mb-2 text-primary">Experience</p>
            {EXPERIENCE_LINKS.map((l) => (
              <a key={l.label} href={l.url} className="block font-mono-pixel text-base py-1">{l.label}</a>
            ))}
          </div>
          <a href="https://madmonkeyhostels.com/mad-loyalty" className="block font-silk uppercase text-xs py-2">Mad Loyalty</a>
          <div className="flex gap-2 pt-3 border-t-2 border-border mt-3">
            <a href="https://madmonkeyhostels.com/login" className="flex-1 text-center font-silk uppercase text-[11px] border-2 border-border px-3 py-2.5">Login</a>
            <a href="https://madmonkeyhostels.com" className="flex-1 text-center font-silk uppercase text-[11px] border-2 border-border px-3 py-2.5 bg-primary text-primary-foreground">Book Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
