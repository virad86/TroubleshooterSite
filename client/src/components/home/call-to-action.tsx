import { ArrowRight } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

export default function CallToAction() {
  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 checkered-flag"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-titillium font-bold text-3xl md:text-4xl text-white">Start your race with Troubleshooter</h2>
          <p className="mt-4 text-lg text-white opacity-80 max-w-3xl">
            Ready to accelerate your IT performance? Partner with Troubleshooter and experience the precision and speed of a world-class IT pit crew.
          </p>
          <button 
            onClick={() => scrollToElement('contact')}
            className="mt-8 bg-primary text-white py-3 px-8 rounded-sm hover:bg-red-700 transition duration-300 font-medium inline-flex items-center"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
