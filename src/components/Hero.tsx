import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
// Image served from public folder

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const { t } = useI18n();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-cereals.jpg" alt={t("hero_alt")} className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{t("hero_title")}</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {t("hero_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToContact} size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              {t("hero_cta_contact")}
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} 
              variant="outline" 
              size="lg" 
              className="border-white bg-white/20 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 font-medium"
            >
              {t("hero_cta_products")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
