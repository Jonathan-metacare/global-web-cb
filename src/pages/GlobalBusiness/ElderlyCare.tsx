import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Heart, Stethoscope, Users } from "lucide-react";
import elderlyCareImage from "@/assets/elderly-care.jpg";
import { useTranslation } from "react-i18next";

const ElderlyCare = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Home,
      title: t('elderlyCare.services.communities.title'),
      description: t('elderlyCare.services.communities.description'),
    },
    {
      icon: Heart,
      title: t('elderlyCare.services.health.title'),
      description: t('elderlyCare.services.health.description'),
    },
    {
      icon: Stethoscope,
      title: t('elderlyCare.services.medical.title'),
      description: t('elderlyCare.services.medical.description'),
    },
    {
      icon: Users,
      title: t('elderlyCare.services.cultural.title'),
      description: t('elderlyCare.services.cultural.description'),
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
              src={elderlyCareImage}
              alt="健康养老"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Healthy Elderly Care</h1>
                <p className="text-xl max-w-2xl mx-auto">
                  Comprehensive health management and premium elderly care service system
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
                    We are committed to providing comprehensive, premium elderly care services, 
                    creating a modern elderly care service system that combines medical and elderly care. 
                    Our senior communities are located in major cities nationwide, providing multi-level and diversified elderly care services.
                  </p>
                  <p>
                    Our senior communities are equipped with advanced medical facilities and professional nursing teams, 
                    providing 24-hour health monitoring and medical services for seniors. 
                    Meanwhile, we also offer rich cultural and entertainment activities to make seniors' lives more fulfilling and joyful.
                  </p>
                  <p>
                    By integrating quality medical resources and elderly care services, 
                    we have created a safe, comfortable, and dignified living environment for seniors, 
                    enabling them to enjoy a high-quality later life.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Service Content</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Statistics */}
          <section className="animate-fade-in">
            <Card className="shadow-elegant border-none bg-gradient-primary text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">{t('elderlyCare.achievements.title')}</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">100+</div>
                    <div className="text-lg opacity-90">{t('elderlyCare.achievements.communities')}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">50,000+</div>
                    <div className="text-lg opacity-90">{t('elderlyCare.achievements.seniors')}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">98%</div>
                    <div className="text-lg opacity-90">{t('elderlyCare.achievements.satisfaction')}</div>
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

export default ElderlyCare;
