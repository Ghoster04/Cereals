import { Eye, Target, Heart, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
// Image served from public folder

const About = () => {
  const { t } = useI18n();

  const values = [
    {
      icon: Handshake,
      title: t("about_value_trust_title"),
      description: t("about_value_trust_desc")
    },
    {
      icon: Heart,
      title: t("about_value_company_title"),
      description: t("about_value_company_desc")
    },
    {
      icon: Target,
      title: t("about_value_drive_title"),
      description: t("about_value_drive_desc")
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Story */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{t("about_title")}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("about_p1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about_p2")}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card animate-scale-in">
              <img src="/farmland.jpg" alt="African farmland" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card hover:shadow-soft transition-smooth animate-fade-in">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">{t("about_vision_title")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                {t("about_vision_text")}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-smooth animate-fade-in">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">{t("about_mission_title")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about_mission_text")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">{t("about_core_values_title")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-soft transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <value.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
