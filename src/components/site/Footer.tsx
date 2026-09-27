import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Company",
    links: ["Wildlife Control", "Mosquito Control", "General Pest Control"],
  },
  {
    title: "Services",
    links: ["Wildlife Control", "Mosquito Control", "General Pest Control"],
  },
  {
    title: "Support",
    links: ["Wildlife Control", "Mosquito Control", "General Pest Control"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid size-9 place-items-center rounded-xl bg-brand text-lg font-black">
              P
            </span>
            <span className="text-lg font-black uppercase tracking-tight">
              Pest<span className="text-[#FFC300]">Corex</span>
            </span>
          </div>
          <p className="mt-4 text-sm">
            Professional pest control for homes and businesses, with straightforward service
            options and transparent pricing.
          </p>
          <div className="mt-5 space-y-3 text-sm">
            <span className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#FFC300]" /> {site.address}
            </span>
            <a href={`mailto:${site.email}`} className="flex min-h-12 items-center gap-2 hover:text-[#FFC300]">
              <Mail className="size-4 shrink-0 text-[#FFC300]" /> {site.email}
            </a>
            <a href={site.phoneHref} className="flex min-h-12 items-center gap-2 hover:text-[#FFC300]">
              <Phone className="size-4 shrink-0 text-[#FFC300]" /> {site.phone}
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-black uppercase tracking-wide text-white">{col.title}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                   <a href="#contact" className="flex min-h-12 items-center transition-colors hover:text-[#FFC300]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs">
          © {new Date().getFullYear()} {site.name} · {site.legal}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
