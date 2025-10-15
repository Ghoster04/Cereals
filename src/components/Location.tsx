import { MapPin, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Reach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Operating across Southern Africa with strong presence in Mozambique and South Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card hover:shadow-soft transition-smooth animate-slide-in-right">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Headquarters - Mozambique</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Based in Maputo, the capital city, our headquarters coordinates operations across the central 
                  and northern regions of Mozambique, where we source the finest quality cereals.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="font-semibold min-w-fit">Address:</span>
                    <span>José Sidumo Street, 172, Maputo - Mozambique</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-smooth animate-slide-in-right">
              <CardContent className="p-8">
                <Globe2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Regional Operations</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our strategy focuses on development opportunities in Africa, particularly in Southern Africa, 
                  including strong operations in South Africa.
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Coverage Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">Mozambique</span>
                    <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">South Africa</span>
                    <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">Southern Africa</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card gradient-primary text-white animate-scale-in">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Strategic Growth in Africa</h4>
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                Our strategy is augmented through a commitment to further grow by maintaining our established focus 
                on development opportunities in Africa, particularly in the Southern Africa region, whilst keeping 
                our portfolio in balance to ensure a steady flow of projects to grow value and reserves.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;
