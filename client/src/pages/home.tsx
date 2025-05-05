import HeroSection from "@/components/home/hero-section";
import StatsSection from "@/components/home/stats-section";
import ServicesSection from "@/components/home/services-section";
import TeamSection from "@/components/home/team-section";
import CallToAction from "@/components/home/call-to-action";
import ContactSection from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TeamSection />
      <CallToAction />
      <ContactSection />
    </main>
  );
}
