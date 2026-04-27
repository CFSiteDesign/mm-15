import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "What's included in the ticket?", a: "Entry to the party at your chosen Mad Monkey, a welcome shot, themed décor, DJs, drink specials all night, and bragging rights for being part of our 15th birthday." },
  { q: "Can I book multiple locations?", a: "You can only party in one place at a time, legend. Pick the Mad Monkey closest to wherever you'll be on Saturday 27 June and lock it in. Touring? Grab a ticket for each city you'll hit." },
  { q: "What if I'm already staying at Mad Monkey?", a: "Even better. In-house guests still need a ticket to guarantee entry — the party will be capped at venue capacity and we don't want you to miss out." },
  { q: "Dress code?", a: "Full Y2K. Think low-rise denim, butterfly clips, baby tees, tracksuits, frosted everything. The more chaotic the better. Bonus points for anything that looks like it came out of a 2002 catalogue." },
  { q: "Refund policy?", a: "Tickets are non-refundable, but they are transferable. Can't make it? Pass it to a mate and let them have the night of their life instead." },
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
