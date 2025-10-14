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
      title: "全球化业务布局",
      description: "覆盖全球主要市场，为客户提供国际化的专业服务",
    },
    {
      icon: Sparkles,
      title: "干细胞存储数量全球第一",
      description: "拥有世界领先的干细胞存储技术和最大的存储量",
    },
    {
      icon: Heart,
      title: "全球养老服务领军企业",
      description: "提供全方位、高品质的养老健康服务解决方案",
    },
  ];

  const businessSegments = [
    {
      title: "生物免疫",
      description: "创新生物免疫治疗技术，为疾病治疗提供新的解决方案",
      image: bioImmuneImage,
      link: "/global-business/bio-immune",
    },
    {
      title: "脐血干细胞",
      description: "专业的脐带血干细胞采集、检测、制备和储存服务",
      image: stemCellsImage,
      link: "/global-business/stem-cells",
    },
    {
      title: "健康养老",
      description: "全方位的健康管理和高品质养老服务体系",
      image: elderlyCareImage,
      link: "/global-business/elderly-care",
    },
    {
      title: "现代商业",
      description: "创新的商业模式，打造现代化的服务平台",
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
            引领全球健康产业未来
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            致力于生物科技创新与健康服务，为人类健康事业做出卓越贡献
          </p>
          <Link to="/about">
            <Button size="lg" variant="secondary" className="animate-scale-in">
              了解更多 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">我们的优势</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            专业、创新、全球化的服务理念
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
          <h2 className="text-4xl font-bold text-center mb-4">业务板块</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            多元化的业务布局，全面覆盖健康产业链
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
                      了解更多
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
          <h2 className="text-4xl font-bold mb-6">携手共创健康未来</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            我们致力于为全球客户提供最优质的健康服务和解决方案
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              联系我们 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
