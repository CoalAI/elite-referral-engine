import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)]" 
          : "bg-transparent"
      }`}
    >
      <div className="container-luxury">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-accent to-luxury-bronze rounded-full"></div>
            <span className="text-2xl font-bold font-serif">EliteHomes</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("benefits")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground hover:text-accent transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("calculator")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Calculator
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Testimonials
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection("apply")}
            className="btn-luxury"
          >
            Join Program
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;