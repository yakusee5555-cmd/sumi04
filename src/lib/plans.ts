export const plans = [
  {
    slug: "one-time-service",
    name: "One Time Service",
    blurb: "Ideal for a specific pest problem that needs professional attention.",
    price: "$45.00",
    bullets: ["Targeted pest treatment", "Professional inspection", "Service recommendations", "Follow-up guidance"],
    cta: "Choose One Time Service",
    featured: false,
  },
  {
    slug: "recurring-protection",
    name: "Recurring Protection",
    blurb: "Ongoing pest control designed to help prevent recurring problems throughout the year.",
    price: "$99.00",
    bullets: ["Scheduled treatments", "Preventative protection", "Routine inspections", "Priority service options"],
    cta: "Choose Recurring Service",
    featured: true,
  },
  {
    slug: "inspection-estimate",
    name: "Inspection & Estimate",
    blurb: "Start with an inspection and get a clear recommendation for your property.",
    price: "$45.00",
    bullets: ["Property inspection", "Pest identification", "Treatment recommendations", "Clear estimate"],
    cta: "Request Inspection",
    featured: false,
  },
] as const;

export function getPlan(slug: string) {
  return plans.find((plan) => plan.slug === slug);
}
