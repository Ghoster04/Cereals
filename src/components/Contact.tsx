import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useI18n();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("toast_sent_title"),
      description: t("toast_sent_desc"),
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{t("contact_title")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("contact_desc")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-right">
              <Card className="shadow-card h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{t("contact_info_title")}</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{t("contact_email_label")}</h4>
                        <a 
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@uniquecereals.com" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2"
                        >
                          info@uniquecereals.com
                          <span className="text-sm text-primary">{t("contact_open_gmail")}</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{t("contact_whatsapp_label")}</h4>
                        <a 
                          href="https://wa.me/258879288553" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2"
                        >
                          +258 87 928 8553
                          <span className="text-sm text-primary">{t("contact_click_to_chat")}</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{t("contact_phones_label")}</h4>
                        <div className="text-muted-foreground space-y-1">
                          <p>+258 87 928 8553</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{t("contact_address_label")}</h4>
                        <p className="text-muted-foreground">
                          Avenida Amílcar Cabral 407, Prédio Fonte Alegre, Flat 1<br />
                          Maputo – Mozambique
                        </p>
                        <p className="text-muted-foreground mt-2">
                          207/UTRECHT Avenue, Clubview, Centurion, Gauteng 0014<br />
                          South Africa
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">{t("contact_business_hours_title")}</h4>
                    <p className="text-muted-foreground">{t("contact_hours_mon_fri")}</p>
                    <p className="text-muted-foreground">{t("contact_hours_sat")}</p>
                    <p className="text-muted-foreground">{t("contact_hours_sun")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{t("contact_form_title")}</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">{t("contact_full_name")}</label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("contact_full_name_ph")}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">{t("contact_email")}</label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t("contact_email_ph")}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">{t("contact_message")}</label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t("contact_message_ph")}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full gradient-primary text-lg py-6">
                      {t("contact_send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
