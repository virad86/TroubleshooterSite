import { scrollToElement } from "@/lib/utils";
import RacingLine from "@/components/ui/racing-line";
import heroImage from "../../assets/images/troubleshooter-hero.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[600px] md:min-h-[650px]">
      {/* TroubleShooter hero image with blue pit crew background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="hero-overlay"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-white mb-10 md:mb-0">
            <h1 className="font-titillium font-bold text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg">
              Race to victory with <span className="text-primary">Troubleshooter</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed bg-black bg-opacity-50 p-4 rounded-md">
              Just like in Formula 1, having the best car isn't enough; it's the precision and speed of a pit crew that makes the difference. At Troubleshooter, we're your IT pit crew.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToElement('services')}
                className="btn-racing text-center"
              >
                Our Solutions
              </button>
              <button 
                onClick={() => scrollToElement('contact')}
                className="btn-racing-outline text-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <RacingLine />
      </div>
    </section>
  );
}
