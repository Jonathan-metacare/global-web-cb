import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  const categoryColors: { [key: string]: string } = {
    Corporate: "default",
    Innovation: "default",
    Expansion: "default",
    CSR: "default",
    Partnership: "default",
    Recognition: "default",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">{t('news.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('news.subtitle')}
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${[
                      '1486312338219-ce68d2c6f44d',
                      '1532187643603-ba119ca4109e',
                      '1454165804606-c3d57bc86b40',
                      '1522071820677-9b67ffeca8e8',
                      '1559757148-5c350d0d3c56',
                      '1582213782179-e0d53f98f2ca',
                      '1552664730-d307ca884978'
                    ][index]}?w=800&h=400&fit=crop`}
                    alt={t(`news.items.${index}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="default">
                      {t(`news.items.${index}.category`)}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {t(`news.items.${index}.date`)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {t(`news.items.${index}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {t(`news.items.${index}.summary`)}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    {t('news.readMore')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
