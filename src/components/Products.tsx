import { Card, CardContent } from "@/components/ui/card";
import { Wheat, Leaf } from "lucide-react";
import { useI18n } from "@/lib/i18n";
// Images are now served from public folder
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Products = () => {
  const { ref: cerealsRef, isVisible: cerealsVisible } = useScrollAnimation(0.1);
  const { ref: otherRef, isVisible: otherVisible } = useScrollAnimation(0.1);
  
  const { t } = useI18n();

  const cereals = [
    { name: "Mung Beans", image: "/green-beans.jpg" },
    { name: "Light Speckled Sugar Beans ", image: "/red_speckled sugar_beans.jpeg" },
    { name: "Black Beans", image: "/black-beans.jpg" },
    { name: "Black Eyed Peas or Cowpea", image: "/black-eyed-peas.jpg" },
    { name: "Red Kidney Beans", image: "/red_kidney_beans.jpeg" },
    { name: "Corn Oil", image: "/corn_oil.jpeg" },
    { name: "Peanuts", image: "/nuts.jpeg" },
    { name: "Cocoa Beans", image: "/cocoa_beans.jpeg" },
    { name: "2 Mm red lentils", image: "/2 Mm red lentils.jpeg" },
    { name: "Malaysian origin CP6 oil", image: "/Malaysian origin CP6 oil for sale.jpeg" },
    { name: "Arabica AA grade coffee beans", image: "/Arabica AA grade coffee beans.jpeg" },
    { name: "Cloves", image: "/Cloves.jpeg" },
    { name: "Flax seeds", image: "/Flax seeds.jpeg" },
    { name: "Achiote seeds", image: "/Achiote seeds.jpeg" }
  ];

  const otherBeans = [
    "Fava Beans",
    "Red Speckled beans",
    "Jugo Beans also called bambara groundnuts",
    "White Beans",
    "Black Beans",
    "Coffee Beans",
    "Soya Beans",
    "Butter Beans also called Lima Beans"
  ];

  const otherProducts = [
    "Sunflower Seeds",
    "Sesame Seeds",
    "Sugar",
    "Cashew Nuts",
    "Maize",
    "Nuts",
    "Rice",
    "other varieties"
  ];

  const oils = [
    "Refined Sunflower Oil",
    "Palm Oil",
    "Crude Oil"
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">{t("products_core_title")}</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">{t("products_core_desc")}</p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Wheat className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold">{t("products_main_title")}</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {[
                  "Mung Beans also called green beans",
                  "Butter Beans also called lima beans",
                  "White Haricot Beans also called White Pea Beans or Navy Beans",
                  "Red Speckled Sugar Beans also called Light Speckled Kidney Beans",
                  "Soya Beans",
                  "Pigeon Pea",
                  "Red Kidney Beans"
                ].map((bean, index) => (
                  <span 
                    key={index} 
                    className="text-lg text-muted-foreground hover:text-green-500 hover:underline cursor-pointer transition-all"
                  >
                    {bean}
                  </span>
                ))}
              </div>
            </div>
            <div ref={cerealsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {cereals.map((cereal, index) => (
                <Card 
                  key={index} 
                  className={`overflow-hidden shadow-soft hover:shadow-card transition-smooth group ${
                    cerealsVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: cerealsVisible ? `${index * 0.1}s` : '0s' }}
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
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-green-500 transition-colors"></div>
                      <span className="font-medium group-hover:text-green-500 group-hover:underline transition-all">{cereal.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Other Beans Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <Leaf className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl md:text-3xl font-bold">{t("products_add_beans_title")}</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherBeans.map((product, index) => (
                  <div 
                    key={index} 
                    className="bg-card p-4 rounded-lg shadow-soft hover:shadow-card transition-smooth animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="font-medium">{product}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Products Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <Leaf className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl md:text-3xl font-bold">{t("products_add_products_title")}</h3>
              </div>
              <div ref={otherRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherProducts.map((product, index) => (
                  <div 
                    key={index} 
                    className={`bg-card p-4 rounded-lg shadow-soft hover:shadow-card transition-smooth ${
                      otherVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: otherVisible ? `${index * 0.1}s` : '0s' }}
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
              <h4 className="text-2xl font-bold mb-4">{t("products_quality_title")}</h4>
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">{t("products_quality_desc")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
