import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-secondary shadow-md transition-all ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-white font-titillium font-bold text-2xl md:text-3xl">
              TROUBLE<span className="text-primary">SHOOTER</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => handleNavClick('about')}
              className="text-white hover:text-primary font-medium transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-white hover:text-primary font-medium transition duration-300"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className="text-white hover:text-primary font-medium transition duration-300"
            >
              Team
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-white hover:text-primary font-medium transition duration-300"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-primary text-white py-2 px-4 rounded-sm hover:bg-red-700 transition duration-300 font-medium"
            >
              Get Support
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => handleNavClick('about')}
              className="text-white hover:text-primary font-medium py-2 transition duration-300"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-white hover:text-primary font-medium py-2 transition duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('team')}
              className="text-white hover:text-primary font-medium py-2 transition duration-300"
            >
              Team
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-white hover:text-primary font-medium py-2 transition duration-300"
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-primary text-white py-2 px-4 rounded-sm hover:bg-red-700 transition duration-300 font-medium text-center mt-2"
            >
              Get Support
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
