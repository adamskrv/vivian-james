import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export function FAQ({
  title = "FAQ",
  items = [
    {
      question: "What is the dress code?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-160 text-balance">
            Formal / Traditional attire. Guests are kindly encouraged to dress
            elegantly in the colours of the day: Peach, Brown, and Gold.
          </p>
        </>
      ),
    },
    {
      question: "What time should guests arrive?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-150">
            Guests are kindly requested to arrive at least 30 minutes early to
            be seated before the ceremony begins promptly.
          </p>
        </>
      ),
    },
    {
      question: "Whom can I contact for enquiries?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-145">
            Rita Ugochukwu — +234 708 575 7483
          </p>
          <p className="text-muted-foreground mb-4 max-w-145">
            Onyeka Nwakaeze — +234 803 136 206
          </p>
        </>
      ),
    },
    {
      question: "Is parking available at the venues?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-145">
            Yes, parking is available at both the church and reception venues.
          </p>
        </>
      ),
    },
    {
      question: "Can I take photos during the ceremony?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-145">
          Yes, you may. We kindly ask that guests tag us using #JV2026 and also
          allow our professional photographer to capture the moment. Photos are
          especially welcome during the reception.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2
          className="text-center text-3xl font-semibold sm:text-5xl"
          style={{
            fontFamily: "quintessential",
            fontWeight: "lighter",
          }}
        >
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-200">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger className="text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
}
