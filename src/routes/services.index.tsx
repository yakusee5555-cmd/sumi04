import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Pest Control Services | Joseph Animal & Pest Control" },
      { name: "description", content: "Explore Joseph Animal & Pest Control pest-control services for general pests, bed bugs, termites, rodents, and cockroaches." },
      { property: "og:title", content: "Pest Control Services | Joseph Animal & Pest Control" },
      { property: "og:description", content: "Professional pest-control services tailored to your property and pest problem." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <main className="pb-24 pt-36 md:pt-44">
        <section className="mx-auto max-w-7xl px-6">
          <h1 className="section-title mt-4 max-w-4xl text-4xl sm:text-6xl">Professional Protection For Every Pest Problem</h1>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="card-soft overflow-hidden">
                <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.summary}</p>
                  <Link to="/services/$serviceSlug" params={{ serviceSlug: service.slug }} className="mt-6 inline-flex items-center gap-2 font-bold text-brand">
                    Learn more <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
      <div aria-hidden="true" className="h-24 md:hidden" />
      <WhatsAppFab />
    </div>
  );
}
