import { BadgeCheck, Clock3, MapPin, ShieldCheck } from "lucide-react";
import truck from "@/assets/why-truck.jpg";

const stats = [
  {
    icon: <ShieldCheck className="size-6" />,
    number: "Licensed",
    label: "fully licensed & insured",
  },
  {
    icon: <Clock3 className="size-6" />,
    number: "Same-Day",
    label: "fast service when you need it",
  },
  {
    icon: <MapPin className="size-6" />,
    number: "Local",
    label: "experts who know your area",
  },
  {
    icon: <BadgeCheck className="size-6" />,
    number: "Guaranteed",
    label: "satisfaction guaranteed",
  },
];

export function WhyUs() {
  return (
    <section className="bg-surface py-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={truck}
            alt="Pest control service truck outside a home"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card"
          />
          <div className="absolute -bottom-5 right-6 rounded-2xl bg-brand p-6 text-brand-foreground shadow-card">
            <strong className="block text-4xl font-extrabold">15+</strong>
            <span className="block text-xs font-bold">years of pest control</span>
          </div>
        </div>
        <div>
          <h2 className="section-title mt-3 text-4xl sm:text-5xl">
            Why Choose Us
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">
            You'll know who's arriving, what's being done and why. We find the
            problem, treat it right and make sure it stays gone.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.number} className="border-l-2 border-brand pl-5">
                <div className="text-brand">{s.icon}</div>
                <strong className="mt-4 block text-2xl font-extrabold" style={{fontFamily: '"Outfit", sans-serif'}}>
                  {s.number}
                </strong>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
