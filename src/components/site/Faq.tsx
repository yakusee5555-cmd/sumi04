import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "How quickly can you schedule a pest-control visit?",
    answer: "Availability varies by location and season, but we aim to offer the earliest practical appointment for your property.",
  },
  {
    question: "Are your treatments suitable for homes with children and pets?",
    answer: "Your technician will explain the products, preparation, and re-entry guidance for your specific service before treatment begins.",
  },
  {
    question: "Do I need to leave my property during treatment?",
    answer: "That depends on the pest and treatment method. We will provide clear instructions before your appointment so you can plan ahead.",
  },
  {
    question: "What is included in the initial inspection?",
    answer: "We inspect likely activity areas, identify visible pest signs and entry points, then recommend an appropriate service plan.",
  },
  {
    question: "Do recurring plans include follow-up service?",
    answer: "Recurring plans include scheduled visits and ongoing recommendations. Exact follow-up terms are confirmed with your selected plan.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <div>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="border-t">
          {questions.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index + 1}`}>
              <AccordionTrigger className="min-h-12 py-6 text-left text-base font-bold hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
