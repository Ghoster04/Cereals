import { MapPin, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

const Location = () => {
  const { t } = useI18n();
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{t("location_reach_title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("location_reach_desc")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card hover:shadow-soft transition-smooth animate-slide-in-right">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">{t("location_hq_title")}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("location_hq_desc")}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="font-semibold min-w-fit">{t("location_address_label")}</span>
                    <span>José Sidumo Street, 172, Maputo - Mozambique</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-smooth animate-slide-in-right">
              <CardContent className="p-8">
                <Globe2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">{t("location_regional_title")}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("location_regional_desc")}
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">{t("location_coverage_label")}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">{t("mozambique")}</span>
                    <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">{t("south_africa")}</span>
                    <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">{t("southern_africa")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card gradient-primary text-white animate-scale-in">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">{t("location_growth_title")}</h4>
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">{t("location_growth_desc")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
