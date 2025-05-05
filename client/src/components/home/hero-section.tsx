import { scrollToElement } from "@/lib/utils";
import RacingLine from "@/components/ui/racing-line";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[600px] md:min-h-[650px]">
      {/* Animated background image with pit crew */}
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-white mb-10 md:mb-0">
            <h1 className="font-titillium font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Race to victory with <span className="text-primary">Troubleshooter</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-90 leading-relaxed">
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
            
            {/* Animated stat card */}
            <div className="mt-12 inline-block bg-black bg-opacity-50 border border-primary p-4 rounded-sm transform hover:translate-y-[-5px] transition-transform duration-300">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 border-4 border-primary rounded-full flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">TS</span>
                  </div>
                </div>
                <div>
                  <div className="font-titillium font-bold text-2xl text-primary">5,000+ Pit Stops</div>
                  <p className="text-white text-sm">Successfully resolving IT challenges every day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <RacingLine />
    </section>
  );
}
