import { CheckCircle, Globe, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import warehouseImage from "@/assets/warehouse.jpg";

const Services = () => {
  const strengths = [
    {
      icon: Globe,
      title: "Global Supply Chain",
      description: "Specialized and competitive supply of high-quality cereals on FOB and CIF basis"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Comprehensive monitoring of the supply chain with quality checks and logistics supervision"
    },
    {
      icon: TrendingUp,
      title: "Flexible Pricing",
      description: "Wide range of pricing mechanisms including future contracts and options"
    },
    {
      icon: Shield,
      title: "Tailored Services",
      description: "High degree of flexibility with customized services for document issuance"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Strengths</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering excellence through reliable and customized execution
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-scale-in">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img src={warehouseImage} alt="Modern warehouse facility" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="grid gap-6">
                {strengths.map((strength, index) => (
                  <Card 
                    key={index} 
                    className="shadow-soft hover:shadow-card transition-smooth border-l-4 border-l-primary"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <strength.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">{strength.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <Card className="shadow-card hover:shadow-soft transition-smooth text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">20+</div>
                <p className="text-lg font-semibold mb-2">International Partners</p>
                <p className="text-muted-foreground">Operating worldwide</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-smooth text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">2021</div>
                <p className="text-lg font-semibold mb-2">Established</p>
                <p className="text-muted-foreground">Growing stronger every year</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-smooth text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">7+</div>
                <p className="text-lg font-semibold mb-2">Core Products</p>
                <p className="text-muted-foreground">Premium quality cereals</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
