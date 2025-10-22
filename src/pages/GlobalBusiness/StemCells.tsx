import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Lock, Award, Globe2 } from "lucide-react";
import stemCellsImage from "@/assets/stem-cells.jpg";
import { useTranslation } from "react-i18next";

const StemCells = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Database,
      title: t('stemCells.features.technology.title'),
      description: t('stemCells.features.technology.description'),
    },
    {
      icon: Lock,
      title: t('stemCells.features.standards.title'),
      description: t('stemCells.features.standards.description'),
    },
    {
      icon: Award,
      title: t('stemCells.features.monitoring.title'),
      description: t('stemCells.features.monitoring.description'),
    },
    {
      icon: Globe2,
      title: t('stemCells.features.team.title'),
      description: t('stemCells.features.team.description'),
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
              src={stemCellsImage}
              alt="脐血干细胞"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Umbilical Cord Blood Stem Cells</h1>
                <p className="text-xl max-w-2xl mx-auto">
                  Professional umbilical cord blood stem cell collection, testing, preparation, and storage services
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
                    As the world's largest stem cell storage company, we provide professional umbilical cord blood stem cell storage services for families. 
                    Umbilical cord blood is rich in hematopoietic stem cells that can be used to treat various blood system and immune system diseases.
                  </p>
                  <p>
                    We operate internationally leading stem cell banks using the most advanced liquid nitrogen storage technology, 
                    ensuring cells are preserved long-term in ultra-low temperature environments while maintaining cell viability and functionality. 
                    Our storage facilities are certified by international authoritative organizations with world-class quality standards.
                  </p>
                  <p>
                    Over the years, we have provided stem cell storage services to more than 2 million families, 
                    and the stored stem cells have been successfully applied in thousands of disease treatments with excellent clinical results.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Service Features</h2>
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
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Statistics */}
          <section className="animate-fade-in">
            <Card className="shadow-elegant border-none bg-gradient-primary text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">{t('stemCells.achievements.title')}</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">2M+</div>
                    <div className="text-lg opacity-90">{t('stemCells.achievements.families')}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">99.9%</div>
                    <div className="text-lg opacity-90">{t('stemCells.achievements.viability')}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">5,000+</div>
                    <div className="text-lg opacity-90">{t('stemCells.achievements.applications')}</div>
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

export default StemCells;
