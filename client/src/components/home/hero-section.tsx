import { scrollToElement } from "@/lib/utils";
import RacingLine from "@/components/ui/racing-line";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-64 -right-10 top-10 bg-primary transform -rotate-12 opacity-20"></div>
        <div className="absolute w-full h-32 -left-10 bottom-10 bg-primary transform rotate-12 opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
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
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary opacity-10 rounded-lg transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Racing car representing speed and precision" 
                className="relative z-10 rounded-lg shadow-xl transform rotate-3"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-sm shadow-lg">
                <span className="font-titillium font-bold">5,000+</span>
                <span className="text-sm block">Successful Pit Stops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <RacingLine />
    </section>
  );
}
