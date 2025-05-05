import HeroSection from "@/components/home/hero-section";
import StatsSection from "@/components/home/stats-section";
import ServicesSection from "@/components/home/services-section";
import TeamSection from "@/components/home/team-section";
import CallToAction from "@/components/home/call-to-action";
import ContactSection from "@/components/home/contact-section";
import SeparatorDemo from "@/components/home/separator-demo";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SeparatorDemo /> {/* Added to show the separator options */}
      <StatsSection />
      <ServicesSection />
      <TeamSection />
      <CallToAction />
      <ContactSection />
    </main>
  );
}
