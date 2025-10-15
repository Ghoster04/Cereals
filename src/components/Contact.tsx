import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to partner with us? Reach out and let's discuss how we can serve your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-right">
              <Card className="shadow-card h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a 
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@uniquecereals.com" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2"
                        >
                          info@uniquecereals.com
                          <span className="text-sm text-primary">(Open in Gmail)</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">WhatsApp</h4>
                        <a 
                          href="https://wa.me/258879288553" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2"
                        >
                          +258 87 928 8553
                          <span className="text-sm text-primary">(Click to chat)</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Phone Numbers</h4>
                        <div className="text-muted-foreground space-y-1">
                          <p>+258 87 938 8553</p>
                          <p>+258 87 928 8553</p>
                          <p>+258 85 328 8553</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          José Sidumo Street, 172<br />
                          Maputo - Mozambique
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 8:00 AM - 12:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full gradient-primary text-lg py-6">
                      Send Message
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
