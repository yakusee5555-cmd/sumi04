import { ArrowUpRight, Bug } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="services" className="bg-surface py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-[#1B4332] px-6 pb-28 pt-10 text-white sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
            <div>
              <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">
                Our Service
              </h2>
            </div>
            <div>
              <p className="text-sm text-white/75">
                From everyday household pests to more serious infestations, Joseph Animal & Pest Control provides
                targeted solutions designed around your property and your specific pest problem.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground"
              >
                View All Services <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="-mt-16 px-1 sm:px-4">
          <Carousel opts={{ align: "start", loop: true, dragFree: true }} className="w-full touch-pan-y">
            <CarouselContent className="-ml-4">
              {services.map((s) => (
                <CarouselItem key={s.title} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <article className="card-soft h-full overflow-hidden">
                    <div className="relative">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        width={944}
                        height={704}
                        className="h-52 w-full object-cover"
                      />
                      <span className="absolute -bottom-6 left-6 grid size-12 place-items-center rounded-full bg-[#1B4332] text-brand shadow-card">
                        <Bug className="size-5" />
                      </span>
                    </div>
                    <div className="p-6 pt-10">
                      <h3 className="text-lg font-bold">{s.title}</h3>
                       <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                       <Link
                         to="/services/$serviceSlug"
                         params={{ serviceSlug: s.slug }}
                        className="mt-5 inline-flex min-h-12 items-center gap-1 text-sm font-bold text-brand"
                      >
                        Read More <ArrowUpRight className="size-4" />
                       </Link>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 hidden sm:flex" />
            <CarouselNext className="-right-2 hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
