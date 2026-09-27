import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="bg-background shadow-soft">
          <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
            <a href="#top" className="flex min-h-12 min-w-0 items-center gap-2">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-lg font-black text-brand-foreground">
                P
              </span>
              <span className="truncate text-lg font-black tracking-tight uppercase">
                Pest<span className="text-brand">Corex</span>
              </span>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex min-h-12 items-center text-sm font-semibold uppercase text-foreground/80 transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <Button asChild variant="outline" className="min-h-12 rounded-full border-brand px-5 font-bold text-brand shadow-none hover:bg-brand-soft">
                <a href={site.phoneHref}>
                  <Phone className="size-4" /> Call Now
                </a>
              </Button>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                Get A Free Estimate <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <Button asChild variant="outline" size="icon" className="size-12 rounded-full border-brand text-brand shadow-none">
                <a href={site.phoneHref} aria-label={`Call Joseph Animal & Pest Control at ${site.phone}`}>
                  <Phone className="size-4" />
                </a>
              </Button>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-4 text-xs font-bold text-brand-foreground sm:px-5 sm:text-sm"
              >
                Book Service
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="grid size-12 shrink-0 place-items-center rounded-xl border border-border lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out drawer */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-label="Mobile menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-background shadow-card transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-6 py-4">
          <span className="text-lg font-black tracking-tight uppercase">
            Pest<span className="text-brand">Corex</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-12 place-items-center rounded-xl border border-border"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b py-3 text-base font-semibold uppercase hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="border-t px-6 py-5">
          <a
            href={site.phoneHref}
            className="flex min-h-12 items-center gap-2 text-base font-bold"
          >
            <Phone className="size-5 text-brand" /> {site.phone}
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-base font-bold text-brand-foreground"
          >
            Get A Free Estimate <ArrowRight className="size-4" />
          </a>
        </div>
      </aside>
    </>
  );
}
