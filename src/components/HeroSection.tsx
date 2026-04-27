import { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const allInRef = useRef<HTMLButtonElement>(null);
  const rafRef = useRef<number | null>(null);
  const restRef = useRef<{ x: number; y: number } | null>(null);
  const targetRef = useRef<{ x: number; y: number } | null>(null);
  const currentRef = useRef<{ x: number; y: number } | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const computeRest = () => {
    const section = sectionRef.current;
    const dialog = dialogRef.current;
    if (!section || !dialog) return null;
    const sRect = section.getBoundingClientRect();
    const w = dialog.offsetWidth;
    const h = dialog.offsetHeight;
    const x = sRect.width / 2 - w / 2;
    const y = sRect.height - h - 32;
    return { x: Math.max(8, x), y: Math.max(8, y) };
  };

  useEffect(() => {
    if (!showDialog) return;
    const init = () => {
      const rest = computeRest();
      if (rest) {
        restRef.current = rest;
        if (!currentRef.current) currentRef.current = rest;
        if (!targetRef.current) targetRef.current = rest;
        setPos(currentRef.current);
      }
    };
    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, [showDialog]);

  useEffect(() => {
    if (!showDialog) return;
    const section = sectionRef.current;
    const dialog = dialogRef.current;
    const btn = allInRef.current;
    if (!section || !dialog || !btn) return;

    const animate = () => {
      const target = targetRef.current;
      const cur = currentRef.current;
      if (!target || !cur) {
        rafRef.current = null;
        return;
      }
      const next = {
        x: cur.x + (target.x - cur.x) * 0.12,
        y: cur.y + (target.y - cur.y) * 0.12,
      };
      currentRef.current = next;
      setPos(next);
      if (Math.abs(target.x - next.x) < 0.3 && Math.abs(target.y - next.y) < 0.3) {
        currentRef.current = target;
        setPos(target);
        rafRef.current = null;
        return;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const ensureAnimating = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent) => {
      const sRect = section.getBoundingClientRect();
      const insideSection =
        e.clientX >= sRect.left &&
        e.clientX <= sRect.right &&
        e.clientY >= sRect.top &&
        e.clientY <= sRect.bottom;

      if (!insideSection) {
        const rest = restRef.current ?? computeRest();
        if (rest) {
          targetRef.current = rest;
          ensureAnimating();
        }
        return;
      }

      const dRect = dialog.getBoundingClientRect();
      const bRect = btn.getBoundingClientRect();
      const btnOffsetX = bRect.left - dRect.left + bRect.width / 2;
      const btnOffsetY = bRect.top - dRect.top + bRect.height / 2;

      const w = dialog.offsetWidth;
      const h = dialog.offsetHeight;
      let x = e.clientX - sRect.left - btnOffsetX;
      let y = e.clientY - sRect.top - btnOffsetY;
      x = Math.max(8, Math.min(sRect.width - w - 8, x));
      y = Math.max(8, Math.min(sRect.height - h - 8, y));

      targetRef.current = { x, y };
      if (!currentRef.current) currentRef.current = { x, y };
      ensureAnimating();
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [showDialog]);


  return (
    <section ref={sectionRef} className="relative w-full bg-denim bg-denim-vignette bg-stars-overlay overflow-hidden border-b-4 border-border">
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

        <button
          onClick={scrollToLocations}
          className="btn-pixel mt-4 md:mt-6 bg-primary text-primary-foreground text-xs md:text-sm px-6 md:px-8 py-3.5 md:py-4"
        >
          Book Your Spot
        </button>

        <p className="mt-6 md:mt-8 font-mono-pixel text-[hsl(var(--cream))] text-lg md:text-2xl max-w-md leading-tight">
          15 years. 7 countries. One mad family.{" "}
          <span className="text-secondary">All in.</span>
        </p>
      </div>

      {/* Win98 dialog — bottom-left, out of the way of stickers */}
      {showDialog && (
        <div
          className="absolute z-30 w-[260px] md:w-[290px] win98 sticker-enter bottom-8 left-1/2 -translate-x-1/2"
        >
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
          <div className="p-3 text-[hsl(var(--deep-outline))]">
            <p className="text-base md:text-lg leading-tight mb-3">
              RSVP to the vibes?
              <br />
              <span className="text-xs md:text-sm opacity-70">System will not respond if ignored.</span>
            </p>
            <div className="flex gap-2 justify-end">
              <button
                ref={allInRef}
                onClick={scrollToLocations}
                className="win98-btn"
                style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, willChange: "transform" }}
              >
                [ All In ]
              </button>
              <button onClick={() => setShowDialog(false)} className="win98-btn">[ Ignore ]</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
