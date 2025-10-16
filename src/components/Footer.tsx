import { Wheat } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();
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
              <p className="text-background/80 leading-relaxed mb-4">{t("footer_tagline")}</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t("footer_quick_links")}</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#home" className="hover:text-background transition-smooth">{t("nav_home")}</a></li>
                <li><a href="#about" className="hover:text-background transition-smooth">{t("nav_about")}</a></li>
                <li><a href="#products" className="hover:text-background transition-smooth">{t("nav_products")}</a></li>
                <li><a href="#services" className="hover:text-background transition-smooth">{t("nav_services")}</a></li>
                <li><a href="#contact" className="hover:text-background transition-smooth">{t("nav_contact")}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t("footer_contact")}</h4>
              <ul className="space-y-2 text-background/80">
                <li>info@uniquecereals.com</li>
                <li>+258 87 938 8553</li>
                <li>José Sidumo Street, 172</li>
                <li>Maputo, Mozambique</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; {new Date().getFullYear()} Unique Cereals. {t("footer_rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
