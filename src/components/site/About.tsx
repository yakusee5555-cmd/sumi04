import { ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-technician.jpg";

export function About() {
  return (
    <section id="about" className="bg-background py-10 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">
            Local Expertise. Reliable Protection. Simple Service.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Our team takes a practical, property-focused approach to pest control. We identify the
            problem, recommend an appropriate solution, and provide professional service designed
            around your specific needs.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 rounded-3xl bg-surface p-7 shadow-soft sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-black text-brand">15+</span>
              <span className="text-sm font-semibold leading-tight">
                Years of work
                <br />
                experience
              </span>
            </div>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground transition-transform hover:scale-[1.03]"
            >
              Learn More About Joseph <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-card">
          <img
            src={aboutImg}
            alt="Pest control technician treating a home baseboard"
            loading="lazy"
            width={1008}
            height={1104}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
