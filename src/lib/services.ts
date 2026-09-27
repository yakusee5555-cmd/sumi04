import general from "@/assets/pest-general.jpg";
import bedbug from "@/assets/pest-bedbug.jpg";
import termite from "@/assets/pest-termite.jpg";
import rodent from "@/assets/pest-rodent.jpg";
import cockroach from "@/assets/pest-cockroach.jpg";

export const services = [
  {
    slug: "wildlife-control",
    title: "Wildlife Control",
    image: rodent,
    summary: "Humane removal of raccoons, squirrels, bats, and other nuisance wildlife.",
    description: "Wildlife in your attic or walls causes damage and health risks. We trap and remove animals humanely, then seal entry points so they can't return.",
    features: ["Raccoon, squirrel, and bat removal",
    "Humane trapping methods",
    "Entry-point exclusion",
    "Attic and crawl-space inspection"],
  },
  {
    slug: "mosquito-control",
    title: "Mosquito Control",
    image: general,
    summary: "Reduce mosquitoes around your home and yard all season long.",
    description: "Our mosquito service treats breeding areas and resting zones to cut populations and let you enjoy your outdoor space.",
    features: ["Property-wide mosquito treatment",
    "Breeding-site elimination",
    "Seasonal protection",
    "Yard barrier applications"],
  },
  {
    slug: "general-pest-control",
    title: "General Pest Control",
    image: general,
    summary: "Reliable pest control for the everyday invaders.",
    description: "Ants, spiders, roaches, and rodents — our general pest control keeps common household pests under control year-round.",
    features: ["Interior and exterior treatment",
    "Common pest coverage",
    "Scheduled protection plans",
    "Free re-treatments between visits"],
  }
] as const;

export type Service = (typeof services)[number];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
