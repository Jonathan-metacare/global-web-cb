import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Microscope, Activity, Zap } from "lucide-react";
import bioImmuneImage from "@/assets/bio-immune.jpg";
import { useTranslation } from "react-i18next";

const BioImmune = () => {
  const { t } = useTranslation();
  
  const features = [
    { icon: Shield, key: "technology" },
    { icon: Microscope, key: "team" },
    { icon: Activity, key: "safety" },
    { icon: Zap, key: "personalized" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-16 animate-fade-in">
            <img
              src={bioImmuneImage}
              alt="Bio-Immune Therapy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">{t('bioImmune.title')}</h1>
                <p className="text-xl max-w-2xl mx-auto">
                  Innovative bio-immune therapy technologies providing new solutions for disease treatment
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-16 animate-fade-in">
            <Card className="shadow-elegant border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">{t('bioImmune.overview.title')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('bioImmune.overview.content')}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">{t('bioImmune.advantages.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{t(`bioImmune.advantages.${feature.key}.title`)}</h3>
                    <p className="text-muted-foreground">{t(`bioImmune.advantages.${feature.key}.description`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Statistics */}
          <section className="animate-fade-in">
            <Card className="shadow-elegant border-none bg-gradient-primary text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">{t('bioImmune.achievements.title')}</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">10,000+</div>
                    <div className="text-lg opacity-90">{t('bioImmune.achievements.treatments')}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">98%</div>
                    <div className="text-lg opacity-90">{t('bioImmune.achievements.satisfaction')}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">50+</div>
                    <div className="text-lg opacity-90">{t('bioImmune.achievements.partners')}</div>
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

export default BioImmune;
