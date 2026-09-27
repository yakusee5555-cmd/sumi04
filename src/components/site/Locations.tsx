import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function Locations() {
  return (
    <section id="locations" className="bg-background py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <h2 className="section-title mt-4 max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Professional Pest Control Near You
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              Joseph Animal & Pest Control provides professional pest control services throughout our local service
              area. Check your location during booking to see available services.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground"
          >
            Check Service Availability <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-[minmax(0,1fr)_280px] lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <iframe
              title="Joseph Animal & Pest Control service area map"
              src="https://www.google.com/maps?q=Paterson,%20NJ&z=11&output=embed"
              loading="lazy"
              className="h-80 w-full border-0 sm:h-[420px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <ul className="space-y-3">
            {site.areas.map((area, i) => (
              <li
                key={area}
                className={`flex items-center gap-3 rounded-2xl px-5 py-4 text-sm font-bold shadow-soft ${
                  i === 0 ? "bg-brand text-brand-foreground" : "bg-surface"
                }`}
              >
                <MapPin className="size-4 shrink-0" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
