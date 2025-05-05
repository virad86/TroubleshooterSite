import { scrollToElement } from "@/lib/utils";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="font-titillium font-bold text-2xl">
                TROUBLE<span className="text-primary">SHOOTER</span>
              </span>
            </a>
            <p className="mt-2 text-sm opacity-70 max-w-md">
              At Troubleshooter, we're your IT pit crew, swiftly managing challenges with the precision of a Formula 1 pit stop.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-8">
            <div>
              <h4 className="font-titillium font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => scrollToElement('hero')}
                    className="opacity-70 hover:opacity-100 hover:text-primary transition duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('about')}
                    className="opacity-70 hover:opacity-100 hover:text-primary transition duration-300"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="opacity-70 hover:opacity-100 hover:text-primary transition duration-300"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('team')}
                    className="opacity-70 hover:opacity-100 hover:text-primary transition duration-300"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('contact')}
                    className="opacity-70 hover:opacity-100 hover:text-primary transition duration-300"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-titillium font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="opacity-70 hover:opacity-100 hover:text-primary transition duration-300"
                  >
                    Managed Service Desk
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="opacity-70 hover:opacity-100 hover:text-primary transition duration-300"
                  >
                    IT Maintenance
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="opacity-70 hover:opacity-100 hover:text-primary transition duration-300"
                  >
                    Branch Office Support
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="opacity-70 hover:opacity-100 hover:text-primary transition duration-300"
                  >
                    Business Appliances
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="opacity-70 hover:opacity-100 hover:text-primary transition duration-300"
                  >
                    System Integration
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">
            &copy; {currentYear} Troubleshooter (Pvt) Ltd. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition duration-300">
              Cookie Policy
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition duration-300">
            <Facebook className="h-5 w-5 text-white" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition duration-300">
            <Twitter className="h-5 w-5 text-white" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition duration-300">
            <Instagram className="h-5 w-5 text-white" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition duration-300">
            <Linkedin className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
