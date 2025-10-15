import { Wheat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Wheat className="w-8 h-8" />
                <span className="text-2xl font-bold">UNIQUE CEREALS</span>
              </div>
              <p className="text-background/80 leading-relaxed mb-4">
                Premium quality cereals from the heart of Africa. Established in 2021, 
                we connect farmers with global markets across Southern Africa.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#home" className="hover:text-background transition-smooth">Home</a></li>
                <li><a href="#about" className="hover:text-background transition-smooth">About</a></li>
                <li><a href="#products" className="hover:text-background transition-smooth">Products</a></li>
                <li><a href="#services" className="hover:text-background transition-smooth">Services</a></li>
                <li><a href="#contact" className="hover:text-background transition-smooth">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-background/80">
                <li>info@uniquecereals.com</li>
                <li>+258 87 938 8553</li>
                <li>José Sidumo Street, 172</li>
                <li>Maputo, Mozambique</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; {new Date().getFullYear()} Unique Cereals. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
