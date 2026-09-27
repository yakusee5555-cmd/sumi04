import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Lock, Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { getPlan } from "@/lib/plans";
import { site } from "@/lib/site";

export const Route = createFileRoute("/checkout/$planSlug")({
  loader: ({ params }) => {
    const plan = getPlan(params.planSlug);
    if (!plan) throw notFound();
    return plan;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.name} Checkout | Joseph Animal & Pest Control` : "Checkout | Joseph Animal & Pest Control";
    const description = loaderData ? `Review the ${loaderData.name} plan and continue your Joseph Animal & Pest Control booking.` : "Review your Joseph Animal & Pest Control service selection.";
    return { meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: CheckoutPage,
});

function CheckoutPage() {
  const plan = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <main className="py-36 md:py-44">
        <div className="mx-auto max-w-5xl px-6">
          <Link to="/" hash="pricing" className="inline-flex items-center gap-2 text-sm font-bold text-brand"><ArrowLeft className="size-4" /> Back to plans</Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <section>
              <h1 className="section-title mt-4 text-4xl sm:text-5xl">{plan.name}</h1>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">{plan.blurb}</p>
              <h2 className="mt-10 text-lg font-bold">Included with this selection</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {plan.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />{bullet}</li>)}
              </ul>
            </section>
            <aside className="rounded-2xl bg-card p-7 shadow-card">
              <p className="text-sm font-bold uppercase text-muted-foreground">Order summary</p>
              <div className="mt-5 flex items-end justify-between border-b pb-5">
                <span className="font-bold">Starting at</span>
                <span className="text-3xl font-black text-brand">{plan.price}<small className="text-sm text-muted-foreground"> /visit</small></span>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">Final treatment details and payment are confirmed after we verify your property needs.</p>
              <a href={site.phoneHref} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-bold text-brand-foreground"><Phone className="size-4" /> Complete by phone</a>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"><Lock className="size-3" /> No payment is charged on this page.</p>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCallBar />
      <div aria-hidden="true" className="h-24 md:hidden" />
    </div>
  );
}
