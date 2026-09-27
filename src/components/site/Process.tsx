import { ArrowRight, CalendarCheck2, ClipboardCheck, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Tell Us What You're Seeing",
    text: "Choose your pest problem and give us a few details about your property.",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "Get The Right Service",
    text: "We'll help match your needs with the appropriate treatment or inspection option.",
  },
  {
    n: "03",
    icon: CalendarCheck2,
    title: "We Take Care The Problem",
    text: "Our trained technician arrives ready to assess and address the issue.",
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "Protect Your Property",
    text: "Get recommendations and service options designed to help keep pests from coming back.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-background py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">
              From Pest Problem To Peace Of Mind
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Getting professional pest control shouldn't be complicated. Joseph Animal & Pest Control makes the
              entire process simple, from choosing the right service to protecting your property.
            </p>
          </div>
        </div>

        <ol className="process-journey relative mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
          <li aria-hidden="true" className="process-track absolute left-[8%] right-[8%] top-24 hidden h-1 overflow-hidden rounded-full bg-border xl:block">
            <span className="process-track-runner block h-full w-1/3 bg-brand" />
          </li>
          {steps.map((s, i) => (
            <li key={s.n} className={`process-step group relative z-10 ${i % 2 ? "xl:mt-12" : ""}`}>
              <div className="relative flex h-full min-h-72 flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition duration-500 hover:-translate-y-3 hover:border-brand/30 hover:shadow-card">
                <span className="absolute -left-3 -top-4 grid size-12 place-items-center rounded-full border-4 border-background bg-ink text-sm font-black text-background">
                  {s.n.replace("0", "")}
                </span>
                <span className="process-icon grid size-20 place-items-center rounded-2xl bg-brand text-brand-foreground shadow-soft transition duration-500 group-hover:rotate-6 group-hover:scale-105">
                  <s.icon className="size-9" />
                </span>
                <h3 className="mt-7 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex justify-center">
          <Button asChild className="min-h-12 rounded-full bg-brand px-8 py-6 text-sm font-bold text-brand-foreground transition-transform hover:scale-105 hover:bg-brand/90">
            <a href="#contact">
              Start Your Protection <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
