import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      titleKey: "innovation",
    },
    {
      icon: Users,
      titleKey: "quality",
    },
    {
      icon: Award,
      titleKey: "people",
    },
    {
      icon: TrendingUp,
      titleKey: "responsibility",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Company Overview */}
          <section className="mb-20 animate-fade-in">
            <Card className="shadow-elegant border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">{t('about.overview.title')}</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>{t('about.overview.content')}</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Core Values */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">{t('about.values.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {t(`about.values.${value.titleKey}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`about.values.${value.titleKey}.description`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="animate-fade-in">
            <Card className="shadow-elegant border-none bg-gradient-primary text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">{t('about.achievements.title')}</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">200+</div>
                    <div className="text-lg opacity-90">{t('about.achievements.cities')}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">1M+</div>
                    <div className="text-lg opacity-90">{t('about.achievements.clients')}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">20+</div>
                    <div className="text-lg opacity-90">{t('about.achievements.experience')}</div>
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

export default About;
