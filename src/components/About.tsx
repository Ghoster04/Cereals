import { Eye, Target, Heart, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import farmlandImage from "@/assets/farmland.jpg";

const About = () => {
  const values = [
    {
      icon: Handshake,
      title: "Trust Earned",
      description: "Building successful relationships through accountability and mutual respect."
    },
    {
      icon: Heart,
      title: "Company First",
      description: "Achieving more together through collegial culture and teamwork."
    },
    {
      icon: Target,
      title: "Embracing Challenges",
      description: "Always striving to be better and finding innovative solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Story */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Unique Cereals</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Established in Mozambique in June 2021, Unique Cereals is a comprehensive food and nutrition trading company 
                operating across the entire value chain. We specialize in sourcing, processing, and distributing premium cereals 
                and agricultural products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With partnerships spanning over 20 international food and nutrition companies worldwide, we bring global 
                expertise to African agriculture while maintaining our commitment to quality and reliability.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card animate-scale-in">
              <img src={farmlandImage} alt="African farmland" className="w-full h-full object-cover" />
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
                  To make long-term difference in our industry and earn the trust of our partners and shareholders 
                  through consistent excellence and innovative solutions.
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
