import { useState, useMemo } from "react";
import { PROPERTIES, COUNTRIES, type CountryFilter } from "@/data/properties";
import sparkles from "@/assets/y2k/sparkles.png";

const PropertySelector = () => {
  const [filter, setFilter] = useState<CountryFilter>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      const matchesCountry = filter === "All" || p.country === filter;
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.country.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCountry && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <section id="selector" className="relative bg-denim bg-stars-overlay py-14 md:py-20 border-b-4 border-border overflow-hidden">
      <div className="relative z-10 px-5 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <span className="pill-mono">// Pick Your Party</span>
          <h2 className="font-pixel text-2xl md:text-5xl text-secondary mt-4 [text-shadow:5px_5px_0_hsl(var(--deep-outline))] leading-tight">
            ONE NIGHT.<br/>EVERY HOSTEL.
          </h2>
          <p className="text-[hsl(var(--cream))] font-bold mt-3 text-sm md:text-base">
            Find your closest Mad Monkey and lock it in.
          </p>
        </div>

        <div className="sticky top-0 z-20 py-3 bg-denim">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="SEARCH LOCATION..."
              className="w-full p-3.5 md:p-4 font-silk text-xs md:text-sm border-[3px] border-border uppercase outline-none bg-card text-card-foreground placeholder:text-foreground/40"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
              {COUNTRIES.map((country) => (
                <button
                  key={country}
                  onClick={() => setFilter(country)}
                  className={`whitespace-nowrap px-4 md:px-5 py-2 md:py-2.5 font-silk uppercase text-[11px] md:text-xs border-[3px] border-border transition-all ${
                    filter === country
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-secondary"
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((prop, i) => (
              <div
                key={prop.id}
                className="relative card-pixel card-pixel-hover bg-card p-5 md:p-6 flex flex-col"
              >
                {i % 4 === 0 && (
                  <img src={sparkles} alt="" loading="lazy" className="absolute -top-3 -right-3 w-7 md:w-9 pointer-events-none" />
                )}
                <div className="flex justify-between items-start mb-4 md:mb-5">
                  <span className="pill-mono">{prop.country}</span>
                  <span className="text-2xl md:text-3xl leading-none" aria-hidden>{prop.flag}</span>
                </div>
                <h3 className="font-pixel text-sm md:text-base text-foreground leading-tight mb-2">
                  MAD MONKEY<br/>{prop.name.toUpperCase()}
                </h3>
                <p className="font-mono-pixel text-foreground/70 text-base md:text-lg mb-5">
                  Sat 27 June · One night only · Free flow + DJs
                </p>
                <div className="mt-auto">
                  {prop.bookingUrl ? (
                    <a
                      href={prop.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pixel w-full bg-primary text-primary-foreground text-[11px] md:text-xs py-3"
                    >
                      Book Tickets
                    </a>
                  ) : (
                    <span className="block w-full text-center font-silk uppercase text-[11px] md:text-xs py-3 border-[3px] border-border bg-muted text-foreground/60 cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="font-pixel text-xl md:text-3xl text-[hsl(var(--cream))]">404 // No party found.</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center font-silk uppercase text-[10px] md:text-xs tracking-widest text-[hsl(var(--cream))]/70">
          Showing {filteredProperties.length} of {PROPERTIES.length} hostels
        </div>
      </div>
    </section>
  );
};

export default PropertySelector;
