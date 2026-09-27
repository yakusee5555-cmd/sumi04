import { ArrowRight, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-technician.mp4";
import heroPoster from "@/assets/hero-poster.jpg";
import { site } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[560px] overflow-hidden pt-28 md:min-h-[680px] md:pt-36">
      <video
        className="absolute inset-0 -z-20 size-full object-cover"
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 -z-10 bg-[#1B4332]/60" />

      <div className="mx-auto grid min-h-[432px] max-w-7xl items-center gap-10 px-4 pb-20 pt-12 sm:px-6 md:min-h-[544px] md:pb-28 md:pt-20 lg:grid-cols-[minmax(0,1fr)_400px]">
        <div className="flex flex-col justify-center gap-8">
        <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[.94] text-white sm:text-7xl lg:text-8xl" style={{fontFamily: '"Outfit", sans-serif'}}>
          Pest-free home. Guaranteed.
        </h1>
        <p className="-mt-4 max-w-2xl text-xl text-white/90 sm:text-2xl" style={{fontFamily: '"Outfit", sans-serif'}}>
          Same-day service. Safe for kids and pets.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-brand-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            Book A Service Now <ArrowRight className="size-5" />
          </a>
          <Button asChild variant="outline" className="min-h-12 rounded-full border-background/70 bg-background/10 px-8 py-4 text-base font-bold text-background backdrop-blur hover:bg-background hover:text-foreground">
            <a href={site.phoneHref}>
              <Phone className="size-5" /> Call Now
            </a>
          </Button>
        </div>

        <div className="flex w-fit max-w-full items-center gap-4 rounded-2xl bg-background/95 px-5 py-3 shadow-soft backdrop-blur">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border text-lg font-black">
            <span className="bg-gradient-to-br from-[#4285F4] via-[#EA4335] to-[#FBBC05] bg-clip-text text-transparent">
              G
            </span>
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-[#FFC300] text-[#FFC300]" />
              ))}
              <span className="ml-1 text-sm font-bold">74+ Reviews</span>
            </div>
            <div className="mt-1 flex -space-x-2">
              {["AJ", "MR", "CW", "TT"].map((initials) => (
                <span
                  key={initials}
                  className="grid size-7 place-items-center rounded-full border-2 border-background bg-muted text-[10px] font-bold text-muted-foreground"
                >
                  {initials}
                </span>
              ))}
              <span className="grid size-7 place-items-center rounded-full border-2 border-background bg-brand text-[10px] font-bold text-brand-foreground">
                +
              </span>
            </div>
          </div>
        </div>
        </div>

        <div className="w-full max-w-md justify-self-center lg:justify-self-end">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
