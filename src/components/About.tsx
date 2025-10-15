import { Eye, Target, Heart, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
// Image served from public folder

const About = () => {
  const values = [
    {
      icon: Handshake,
      title: "THE TRUST EARNED",
      description: "Trust isn't given, it's earned. By consistently delivering on our promises whether to our collegues, partners or shareholders, we build successeful relationships that are build on accountability and mutual respect. This is essential to our long-term success."
    },
    {
      icon: Heart,
      title: "PUTTING THE COMPANY FIRST",
      description: "We know we can achieve more as a company than we can as individuals. Our collegial culture and flat herarchy means, we consider different points of view and approaches to deliver the best solutions for the business. When the business succeed, we succeed."
    },
    {
      icon: Target,
      title: "OUR DRIVE TO SUCCESS",
      description: "Our passion for what we do Comes through in every area of our business. We are confident and open minded, which enables us to pioneer new and better solutions and approaches whether analysing data or at the negociation table."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Story */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Us</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                UNIQUE CEREALS was established and based in Mozambique since June 2021 and it's a whole of life food and nutrition 
                trading company, active in all phases of the associated Value Chain, continually seeking to build and optimise it's 
                license portfolio by the development and maturing of the existing licenses, as well as acquiring new licenses through 
                licenses rouds or by the farming into licenses held by others.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                UNIQUE CEREALS has partnership with more than 20 international food and nutrition companies, operating worldwide.
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
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognised as a company and partner of choice in the African food and nutrition industry 
                  for delivery on our promises, pioneering new opportunities and approaches, and bringing value to 
                  our industry, shareholders, and community.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-smooth animate-fade-in">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To make long-term difference in our industry and earn the trust of our partners and shareholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">Our Core Values</h3>
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
