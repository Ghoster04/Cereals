import { Card, CardContent } from "@/components/ui/card";
import { Wheat, Leaf } from "lucide-react";
import beansImage from "@/assets/beans-collection.jpg";

const Products = () => {
  const cereals = [
    "Black Eyed Peas",
    "Butter Beans",
    "Navy Beans",
    "Black Turtle Beans",
    "Soy Beans",
    "Cajanus Cajan",
    "Pinto Beans"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Premium Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-quality cereals and agricultural products sourced from the fertile lands of Mozambique and Southern Africa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 animate-slide-in-right">
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img src={beansImage} alt="Variety of premium beans" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Wheat className="w-10 h-10 text-primary" />
                  <h3 className="text-3xl font-bold">Core Cereals</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cereals.map((cereal, index) => (
                    <div 
                      key={index} 
                      className="bg-card p-4 rounded-lg shadow-soft hover:shadow-card transition-smooth"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-medium">{cereal}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-10 h-10 text-secondary" />
                  <h3 className="text-3xl font-bold">Additional Products</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
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
