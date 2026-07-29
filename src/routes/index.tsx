import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { QuoteSection } from "@/components/site/QuoteSection";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { CallToAction } from "@/components/site/CallToAction";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useScrollReveal } from "@/hooks/use-reveal";

const title = "MUA Hapsari — Jasa Make Up Artist Elegan di Boyolali";
const description =
  "MUA Hapsari menghadirkan rias pengantin, keluarga, wisuda, dan party yang elegan, natural, dan tahan lama di Boyolali. Booking mudah via WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <QuoteSection />
        <Gallery />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
