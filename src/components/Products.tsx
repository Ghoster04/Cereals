import { Card, CardContent } from "@/components/ui/card";
import { Wheat, Leaf } from "lucide-react";
import blackEyedPeasImage from "@/assets/black-eyed-peas.jpg";
import pintoBeansImage from "@/assets/pinto-beans.jpg";
import blackBeansImage from "@/assets/black-beans.jpg";
import greenBeansImage from "@/assets/green-beans.jpg";

const Products = () => {
  const cereals = [
    { name: "Black Eyed Peas", image: blackEyedPeasImage },
    { name: "Butter Beans", image: null },
    { name: "Navy Beans", image: null },
    { name: "Black Turtle Beans", image: blackBeansImage },
    { name: "Soy Beans", image: null },
    { name: "Cajanus Cajan", image: greenBeansImage },
    { name: "Pinto Beans", image: pintoBeansImage }
  ];

  const otherProducts = [
    "Cashew Nuts",
    "Various Nuts",
    "Rice",
    "Sesame",
    "Brown Sugar"
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Premium Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-quality cereals and agricultural products sourced from the fertile lands of Mozambique and Southern Africa
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Wheat className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold">Core Cereals</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {cereals.map((cereal, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden shadow-soft hover:shadow-card transition-smooth group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {cereal.image && (
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={cereal.image} 
                        alt={cereal.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  )}
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="font-medium">{cereal.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8 justify-center">
                <Leaf className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl md:text-3xl font-bold">Additional Products</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {otherProducts.map((product, index) => (
                  <div 
                    key={index} 
                    className="bg-card p-4 rounded-lg shadow-soft hover:shadow-card transition-smooth"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="font-medium">{product}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="shadow-card gradient-primary text-white animate-scale-in">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Quality You Can Trust</h4>
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                All products are sourced primarily from Mozambique's central and northern regions, ensuring the highest 
                quality standards. We provide comprehensive monitoring throughout the supply chain with quality checks 
                and logistics supervision.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
