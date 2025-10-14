import { ArrowRight, Globe, Heart, Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-lab.jpg";
import bioImmuneImage from "@/assets/bio-immune.jpg";
import stemCellsImage from "@/assets/stem-cells.jpg";
import elderlyCareImage from "@/assets/elderly-care.jpg";
import modernCommerceImage from "@/assets/modern-commerce.jpg";

const Index = () => {
  const advantages = [
    {
      icon: Globe,
      title: "Global Business Network",
      description: "Operating across major markets worldwide, providing professional international services",
    },
    {
      icon: Sparkles,
      title: "World's Largest Stem Cell Bank",
      description: "Leading the industry with world-class stem cell storage technology and capacity",
    },
    {
      icon: Heart,
      title: "Leader in Elderly Care Services",
      description: "Providing comprehensive, premium elderly care and health solutions",
    },
  ];

  const businessSegments = [
    {
      title: "Bio-Immune",
      description: "Innovative bio-immune therapy technologies providing new solutions for disease treatment",
      image: bioImmuneImage,
      link: "/global-business/bio-immune",
    },
    {
      title: "Stem Cells",
      description: "Professional umbilical cord blood stem cell collection, testing, preparation and storage services",
      image: stemCellsImage,
      link: "/global-business/stem-cells",
    },
    {
      title: "Elderly Care",
      description: "Comprehensive health management and premium elderly care service system",
      image: elderlyCareImage,
      link: "/global-business/elderly-care",
    },
    {
      title: "Modern Commerce",
      description: "Innovative business models creating modernized service platforms",
      image: modernCommerceImage,
      link: "/global-business/modern-commerce",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Leading the Future of Global Health
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Dedicated to biotechnology innovation and health services, making outstanding contributions to human health
          </p>
          <Link to="/about">
            <Button size="lg" variant="secondary" className="animate-scale-in">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Advantages</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Professional, Innovative, and Global Service Philosophy
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Business Segments</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Diversified business portfolio covering the complete health industry chain
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {businessSegments.map((segment, index) => (
              <Link
                key={index}
                to={segment.link}
                className="group block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden border-none shadow-elegant hover:shadow-hover transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {segment.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{segment.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Building a Healthy Future Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We are committed to providing the highest quality health services and solutions to global clients
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
