import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 animate-fade-in">
            <img src={logo} alt="Unique Cereals Logo" className="h-12 w-12" />
            <div className="text-2xl font-bold text-gradient">UNIQUE CEREALS</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 animate-fade-in">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("location")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Location
            </button>
            <Button onClick={() => scrollToSection("contact")} className="gradient-primary">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-left text-foreground hover:text-primary transition-smooth font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary transition-smooth font-medium">
                About
              </button>
              <button onClick={() => scrollToSection("products")} className="text-left text-foreground hover:text-primary transition-smooth font-medium">
                Products
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-primary transition-smooth font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection("location")} className="text-left text-foreground hover:text-primary transition-smooth font-medium">
                Location
              </button>
              <Button onClick={() => scrollToSection("contact")} className="gradient-primary w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
