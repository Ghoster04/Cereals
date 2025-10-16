import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { localeToFlag, useI18n, type SupportedLocale } from "@/lib/i18n";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// Using bundled SVG imports for flags to avoid dev-server fs allow issues
import flagES from "flag-icons/flags/4x3/es.svg";
import flagGB from "flag-icons/flags/4x3/gb.svg";
import flagPT from "flag-icons/flags/4x3/pt.svg";
import flagFR from "flag-icons/flags/4x3/fr.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const { t, locale, setLocale } = useI18n();

  const renderLangSwitcher = () => {
    const locales: SupportedLocale[] = ["pt", "en", "fr", "es"]; // order per request
    const flagByLocale: Record<SupportedLocale, string> = { en: flagGB, pt: flagPT, fr: flagFR, es: flagES };
    const nameByLocale: Record<SupportedLocale, string> = { en: "English", pt: "Português", fr: "Français", es: "Español" };
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="px-3 py-2 rounded-md border border-border bg-background/60 hover:bg-background transition-smooth text-foreground flex items-center gap-2"
            aria-label="Language selector"
          >
            <img src={flagByLocale[locale]} alt={`${locale} flag`} className="h-4 w-auto rounded-sm" />
            <span className="text-sm font-medium">{nameByLocale[locale]}</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[10rem]">
          {locales.map((loc) => (
            <DropdownMenuItem key={loc} onClick={() => setLocale(loc)} className="flex items-center gap-2 cursor-pointer">
              <img src={flagByLocale[loc]} alt={`${loc} flag`} className="h-4 w-auto rounded-sm" />
              <span className="font-medium">{nameByLocale[loc]}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 animate-fade-in">
            <img src={logo} alt="Unique Cereals Logo" className="h-10 w-14" />
            <div className="text-2xl font-bold text-gradient">UNIQUE CEREALS</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 animate-fade-in">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-smooth font-medium">
              {t("nav_home")}
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-smooth font-medium">
              {t("nav_about")}
            </button>
            <button onClick={() => scrollToSection("products")} className="text-foreground hover:text-primary transition-smooth font-medium">
              {t("nav_products")}
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-smooth font-medium">
              {t("nav_services")}
            </button>
            <button onClick={() => scrollToSection("location")} className="text-foreground hover:text-primary transition-smooth font-medium">
              {t("nav_location")}
            </button>
            <Button onClick={() => scrollToSection("contact")} className="gradient-primary">
              {t("nav_contact")}
            </Button>
            {renderLangSwitcher()}
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
                {t("nav_home")}
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary transition-smooth font-medium">
                {t("nav_about")}
              </button>
              <button onClick={() => scrollToSection("products")} className="text-left text-foreground hover:text-primary transition-smooth font-medium">
                {t("nav_products")}
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-primary transition-smooth font-medium">
                {t("nav_services")}
              </button>
              <button onClick={() => scrollToSection("location")} className="text-left text-foreground hover:text-primary transition-smooth font-medium">
                {t("nav_location")}
              </button>
              <Button onClick={() => scrollToSection("contact")} className="gradient-primary w-full">
                {t("nav_contact")}
              </Button>
              <div className="pt-2">{renderLangSwitcher()}</div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
