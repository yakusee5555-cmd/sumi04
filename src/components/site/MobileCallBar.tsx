import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 px-4 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-base font-extrabold text-brand-foreground shadow-soft"
      >
        <Phone className="size-5" /> Call Now
      </a>
      <p className="py-1.5 text-center text-xs text-muted-foreground">{site.phone}</p>
    </div>
  );
}
