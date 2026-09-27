import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Reviews } from "@/components/site/Reviews";
import { Faq } from "@/components/site/Faq";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { Locations } from "@/components/site/Locations";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileCallBar } from "@/components/site/MobileCallBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseph Animal & Pest Control | Pest Control in Paterson, NJ" },
      {
        name: "description",
        content:
          "Professional pest control for homes and businesses in Paterson, NJ. Transparent pricing, simple service options, and easy online booking.",
      },
      { property: "og:title", content: "Joseph Animal & Pest Control | Pest Control in Paterson, NJ" },
      {
        property: "og:description",
        content:
          "Pest problems solved, protection made simple. Termite, bed bug, rodent and cockroach control from local experts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Faq />
        <WhyUs />
        <Process />
        <Reviews />
        <Contact />
        <Locations />
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileCallBar />
      {/* Spacer so the sticky mobile call bar never covers footer content */}
      <div aria-hidden="true" className="h-24 md:hidden" />
    </div>
  );
}
