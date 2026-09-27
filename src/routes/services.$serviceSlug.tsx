import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { getService } from "@/lib/services";

export const Route = createFileRoute("/services/$serviceSlug")({
  loader: ({ params }) => {
    const service = getService(params.serviceSlug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} | Joseph Animal & Pest Control` : "Service Not Found | Joseph Animal & Pest Control";
    const description = loaderData?.summary ?? "The requested Joseph Animal & Pest Control service could not be found.";
    return { meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="pt-28 md:pt-36">
        <section className="bg-surface py-10 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-brand"><ArrowLeft className="size-4" /> All services</Link>
              <h1 className="section-title mt-6 text-4xl sm:text-6xl">{service.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{service.description}</p>
              <a href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-bold text-brand-foreground">Book this service <ArrowRight className="size-5" /></a>
            </div>
            <img src={service.image} alt={service.title} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" />
          </div>
        </section>
        <section className="py-10 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="section-title text-3xl sm:text-4xl">What To Expect</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 border-t pt-5 font-semibold"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />{feature}</div>
              ))}
            </div>
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
