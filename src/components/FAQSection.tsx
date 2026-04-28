import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "What's included in the ticket?", a: "Entry to the main event at your chosen Mad Monkey. Just a heads up: check the specific event details for your location before you buy. Every Mad Monkey does things a little differently — for example, a few spots might swap the boat party for something else equally wild depending on the local setup." },
  { q: "What if I'm already staying at Mad Monkey?", a: "Love that for you — you've already got the shortest commute home. But your bed doesn't get you into the party. You'll still need a ticket to get your wristband for the free-flow, and other event highlights like the pub crawl and the boat party. Don't be that person sitting in a quiet dorm alone while the rest of the hostel is going mental downstairs." },
  { q: "How long is the DJ playing?", a: "We're going hard from the jump! Our DJs will be dropping sets right up until the bar closes. We're packing all that 15th Birthday energy into one massive session, so make sure you're front and center early — once the bar shuts, the music stops, and we all head out (or pass out)." },
  { q: "Can I book multiple locations?", a: "We love the energy, but physics is a hater. These parties are all happening on the same night, so you can't exactly be in two places at once. Pick the Mad Monkey you want to be at on Saturday 27 June and commit!" },
  { q: "Refund policy?", a: "No refunds, but the tickets are fully transferable. If you can't make it, don't stress — just pass your ticket to a mate and let them have the night of their life instead." },
];

const FAQSection = () => {
  return (
    <section className="relative bg-accent py-14 md:py-20 px-5 md:px-16 border-b-4 border-border overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="pill-mono">// HELP.TXT</span>
          <h2 className="font-pixel text-2xl md:text-5xl text-[hsl(var(--deep-outline))] mt-4 [text-shadow:4px_4px_0_hsl(var(--cream))]">
            FAQs
          </h2>
        </div>

        <div className="win98 p-1">
          <div className="win98-title">
            <span>FAQ.EXE — README FIRST</span>
            <span className="flex gap-1">
              <span className="w-3 h-3 bg-[hsl(var(--cream))] border border-[hsl(var(--deep-outline))]" />
              <span className="w-3 h-3 bg-[hsl(var(--cream))] border border-[hsl(var(--deep-outline))]" />
              <span className="w-3 h-3 bg-[hsl(var(--cream))] border border-[hsl(var(--deep-outline))]" />
            </span>
          </div>
          <div className="p-3 md:p-5 bg-[hsl(var(--cream))]">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b-2 border-[hsl(var(--deep-outline))]/30 last:border-0">
                  <AccordionTrigger className="font-silk uppercase text-sm md:text-base text-[hsl(var(--deep-outline))] hover:no-underline text-left">
                    &gt; {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-mono-pixel text-lg md:text-xl text-[hsl(var(--deep-outline))]/80 leading-snug">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
