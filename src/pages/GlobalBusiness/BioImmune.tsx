import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Microscope, Activity, Zap } from "lucide-react";
import bioImmuneImage from "@/assets/bio-immune.jpg";

const BioImmune = () => {
  const features = [
    {
      icon: Shield,
      title: "免疫治疗",
      description: "利用先进的生物技术增强人体免疫系统，提供个性化免疫治疗方案",
    },
    {
      icon: Microscope,
      title: "细胞疗法",
      description: "采用最新的细胞工程技术，开发创新的细胞治疗产品",
    },
    {
      icon: Activity,
      title: "精准医疗",
      description: "基于基因组学的精准诊断和治疗，实现个体化医疗",
    },
    {
      icon: Zap,
      title: "快速响应",
      description: "高效的研发和生产体系，快速响应市场需求",
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
              src={bioImmuneImage}
              alt="生物免疫"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">生物免疫</h1>
                <p className="text-xl max-w-2xl mx-auto">
                  创新生物免疫治疗技术，为疾病治疗提供新的解决方案
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-16 animate-fade-in">
            <Card className="shadow-elegant border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">业务概述</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    我们的生物免疫业务专注于开发创新的免疫治疗技术和产品，
                    致力于为肿瘤、自身免疫性疾病等重大疾病提供有效的治疗方案。
                  </p>
                  <p>
                    通过整合国际领先的生物技术和临床资源，
                    我们建立了完整的生物免疫治疗产业链，
                    从研发到生产，从临床试验到市场应用，为患者提供全方位的服务。
                  </p>
                  <p>
                    我们的研发团队由国际知名的免疫学专家组成，
                    拥有多项核心技术专利，在细胞免疫治疗、抗体药物等领域取得了突破性进展。
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">核心优势</h2>
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
                <h2 className="text-3xl font-bold mb-8 text-center">业务成就</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">50+</div>
                    <div className="text-lg opacity-90">在研项目</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">30+</div>
                    <div className="text-lg opacity-90">核心专利</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">10000+</div>
                    <div className="text-lg opacity-90">服务患者</div>
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
