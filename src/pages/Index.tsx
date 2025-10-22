import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const bannerSlides = [
    {
      image: heroImage,
      title: t('home.hero.title'),
      description: t('home.hero.subtitle')
    },
    {
      image: heroImage2,
      title: t('home.hero.title'),
      description: t('home.hero.subtitle')
    },
    {
      image: heroTech,
      title: t('home.hero.title'),
      description: t('home.hero.subtitle')
    },
    {
      image: worldMap,
      title: t('home.worldMap.title'),
      description: t('home.worldMap.subtitle')
    }
  ];

  const businessSegments = [
    {
      title: t('home.business.bioImmune.title'),
      description: t('home.business.bioImmune.description'),
      image: bioImmuneImage,
      link: "/global-business/bio-immune",
    },
    {
      title: t('home.business.stemCells.title'),
      description: t('home.business.stemCells.description'),
      image: stemCellsImage,
      link: "/global-business/stem-cells",
    },
    {
      title: t('home.business.elderlyCare.title'),
      description: t('home.business.elderlyCare.description'),
      image: elderlyCareImage,
      link: "/global-business/elderly-care",
    },
    {
      title: t('home.business.modernCommerce.title'),
      description: t('home.business.modernCommerce.description'),
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
                        {t('home.hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
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
          <Card className="border-none shadow-glow max-w-5xl mx-auto bg-gradient-to-br from-card via-card to-card/80 backdrop-blur">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-accent bg-clip-text text-transparent">
                {t('home.advantages.title')}
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                {t('home.advantages.subtitle')}
              </p>
              <div className="space-y-8">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="pb-8 border-b border-border/50 last:border-0 last:pb-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      {t(`home.advantages.items.${index}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {t(`home.advantages.items.${index}.description`)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-12 pt-8 border-t border-border/50">
                <VideoModal />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('home.business.title')}</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {t('home.business.subtitle')}
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
                        {t('home.business.learnMore')}
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
              <h2 className="text-4xl font-bold mb-2">{t('home.news.title')}</h2>
              <p className="text-muted-foreground text-lg">{t('home.news.subtitle')}</p>
            </div>
            <Link to="/news">
              <Button variant="outline" size="lg" className="shadow-glow">
                {t('home.news.viewAll')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4 max-w-5xl mx-auto">
            {[0, 1, 2].map((index) => (
              <Link
                key={index}
                to="/news"
                className="group block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="border-none shadow-elegant hover:shadow-glow transition-all duration-300 hover:translate-x-2 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-accent flex items-center justify-center">
                        <Calendar className="h-8 w-8 text-background" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <span>{t(`news.items.${index}.date`)}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {t(`news.items.${index}.title`)}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                          {t(`news.items.${index}.summary`)}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="flex items-center text-primary font-medium">
                          {t('news.readMore')}
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* External Links Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t('home.links.title')}</h2>
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
