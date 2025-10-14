import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Truck, Store, Smartphone } from "lucide-react";
import modernCommerceImage from "@/assets/modern-commerce.jpg";

const ModernCommerce = () => {
  const platforms = [
    {
      icon: Store,
      title: "Retail Network",
      description: "Nationwide retail network providing convenient offline shopping experiences",
    },
    {
      icon: Smartphone,
      title: "E-commerce Platform",
      description: "Innovative e-commerce platform achieving online-offline integration",
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Efficient logistics and delivery system ensuring fast product delivery",
    },
    {
      icon: ShoppingBag,
      title: "Membership Service",
      description: "Comprehensive membership service system providing personalized shopping experiences",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-16 animate-fade-in">
            <img
              src={modernCommerceImage}
              alt="现代商业"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Modern Commerce</h1>
                <p className="text-xl max-w-2xl mx-auto">
                  Innovative business models creating modernized service platforms
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-16 animate-fade-in">
            <Card className="shadow-elegant border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">Business Overview</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our modern commerce division is dedicated to creating innovative retail service platforms, 
                    providing quality shopping experiences through online-offline integrated business models.
                  </p>
                  <p>
                    We have established a nationwide retail network with large flagship stores and community convenience stores in major cities, 
                    providing convenient offline shopping services. Meanwhile, we have developed an innovative e-commerce platform, 
                    achieving seamless online-offline integration and creating new shopping experiences for consumers.
                  </p>
                  <p>
                    By integrating quality supply chain resources and advanced information technology, 
                    we provide consumers with abundant product selections, competitive prices, and efficient delivery services, 
                    continuously improving customer satisfaction.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Platforms */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Business Platforms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card
                  key={index}
                  className="border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <platform.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{platform.title}</h3>
                    <p className="text-muted-foreground">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Statistics */}
          <section className="animate-fade-in">
            <Card className="shadow-elegant border-none bg-gradient-primary text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Business Scale</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">1,000+</div>
                    <div className="text-lg opacity-90">Retail Locations</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">5M+</div>
                    <div className="text-lg opacity-90">Registered Members</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">$1.5B+</div>
                    <div className="text-lg opacity-90">Annual Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModernCommerce;
