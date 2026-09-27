import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { plans } from "@/lib/plans";

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <div>
            <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">
              Choose The Protection That Fits Your Property
            </h2>
          </div>
        </div>

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-[1.75rem] bg-card p-8 sm:p-9 ${
                p.featured ? "shadow-card ring-1 ring-brand/15" : "shadow-soft"
              }`}
            >
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              <p className="mt-6 text-sm font-bold">Starting At</p>
              <p
                className={`text-4xl font-black ${p.featured ? "text-brand" : "text-foreground"}`}
              >
                {p.price}
                <span className="text-sm font-semibold text-muted-foreground"> /Visit</span>
              </p>
              <ul className="mt-6 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/checkout/$planSlug"
                params={{ planSlug: p.slug }}
                className={`mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? "bg-brand text-brand-foreground"
                    : "border border-brand text-brand"
                }`}
              >
                {p.cta} <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
