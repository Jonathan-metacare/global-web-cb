import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VideoModal from "@/components/VideoModal";
import heroImage from "@/assets/hero-lab.jpg";
import heroImage2 from "@/assets/hero-lab-2.jpg";
import heroTech from "@/assets/hero-tech.jpg";
import worldMap from "@/assets/world-map.jpg";
import bioImmuneImage from "@/assets/bio-immune.jpg";
import stemCellsImage from "@/assets/stem-cells.jpg";
import elderlyCareImage from "@/assets/elderly-care.jpg";
import modernCommerceImage from "@/assets/modern-commerce.jpg";

const Index = () => {
  const bannerSlides = [
    {
      image: heroImage,
      title: "Leading the Future of Global Health",
      description: "Dedicated to biotechnology innovation and health services, making outstanding contributions to human health"
    },
    {
      image: heroImage2,
      title: "Innovation in Biotechnology",
      description: "Advancing medical research with cutting-edge technology and expertise"
    },
    {
      image: heroTech,
      title: "Digital Health Solutions",
      description: "Transforming healthcare through data-driven insights and innovation"
    },
    {
      image: worldMap,
      title: "Global Presence",
      description: "Service centers in Nanjing, Singapore, and Malaysia serving clients worldwide"
    }
  ];

  const advantages = [
    {
      title: "Global Business Network",
      description: "Operating across major markets worldwide with service centers strategically located in Asia-Pacific region, providing professional international services and support to clients globally.",
    },
    {
      title: "World's Largest Stem Cell Bank",
      description: "Leading the industry with world-class stem cell storage technology and capacity, ensuring the highest standards of preservation and accessibility for future medical treatments.",
    },
    {
      title: "Leader in Elderly Care Services",
      description: "Providing comprehensive, premium elderly care and health solutions with compassionate service, state-of-the-art facilities, and experienced healthcare professionals.",
    },
  ];

  const latestNews = [
    {
      category: "Corporate",
      title: "Company Awarded Global Health Industry Leader",
      date: "March 15, 2025",
      summary: "At the 2025 Global Health Industry Summit, our company was honored with the Global Health Industry Leader award for outstanding achievements in biotechnology and health services.",
    },
    {
      category: "Innovation",
      title: "Major Breakthrough in Stem Cell Storage Technology",
      date: "February 28, 2025",
      summary: "Our research team has successfully developed next-generation stem cell storage technology, improving storage efficiency by 40% and setting a new industry standard.",
    },
    {
      category: "Expansion",
      title: "International Market Expansion Continues",
      date: "February 10, 2025",
      summary: "The company has established new research centers and service networks in Europe, further enhancing our global business presence.",
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
      
      {/* Hero Carousel Section */}
      <section className="relative mt-16">
        <Carousel className="w-full">
          <CarouselContent>
            {bannerSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-hero"></div>
                  </div>
                  <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
                      {slide.description}
                    </p>
                    <Link to="/about">
                      <Button size="lg" variant="secondary" className="animate-scale-in">
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Advantages</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Professional, Innovative, and Global Service Philosophy
          </p>
          <Card className="border-none shadow-elegant max-w-5xl mx-auto">
            <CardContent className="p-12">
              <div className="space-y-8">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="pb-8 border-b border-border last:border-0 last:pb-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-primary">{advantage.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{advantage.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-12 pt-8 border-t border-border">
                <VideoModal />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Business Segments</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Diversified business portfolio covering the complete health industry chain
          </p>
          <div className="space-y-6 max-w-7xl mx-auto">
            {businessSegments.map((segment, index) => (
              <Link
                key={index}
                to={segment.link}
                className="group block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-72 overflow-hidden rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300">
                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover blur-sm group-hover:blur-none group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent flex items-center">
                    <div className="container px-12">
                      <h3 className="text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {segment.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                        {segment.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold text-lg">
                        Learn More
                        <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Latest News</h2>
              <p className="text-muted-foreground text-lg">Stay updated with our recent developments</p>
            </div>
            <Link to="/news">
              <Button variant="outline" size="lg">
                View All News <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <Card
                key={index}
                className="border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {news.summary}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* External Links Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Useful Links</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <a
              href="https://www.who.int"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <ExternalLink className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">World Health Organization</h3>
            </a>
            <a
              href="https://www.nih.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <ExternalLink className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">National Institutes of Health</h3>
            </a>
            <a
              href="https://www.fda.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <ExternalLink className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">FDA</h3>
            </a>
            <a
              href="https://www.nature.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <ExternalLink className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Nature Research</h3>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
