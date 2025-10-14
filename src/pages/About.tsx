import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "使命",
      description: "通过科技创新和专业服务，为人类健康事业做出卓越贡献",
    },
    {
      icon: Users,
      title: "愿景",
      description: "成为全球领先的生命健康服务企业",
    },
    {
      icon: Award,
      title: "价值观",
      description: "专业、创新、责任、共赢",
    },
    {
      icon: TrendingUp,
      title: "发展战略",
      description: "全球化布局，多元化发展，科技化创新",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              我们是一家致力于生命健康产业的全球化企业，专注于生物免疫、干细胞存储、健康养老等领域
            </p>
          </div>

          {/* Company Overview */}
          <section className="mb-20 animate-fade-in">
            <Card className="shadow-elegant border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">企业概况</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    作为全球领先的生命健康服务企业，我们始终坚持以科技创新为驱动力，
                    以客户需求为导向，构建了完整的健康产业链。
                  </p>
                  <p>
                    公司业务遍布全球主要市场，拥有世界一流的科研团队和服务体系。
                    在干细胞存储领域，我们保持全球第一的市场地位；在养老服务领域，
                    我们树立了行业标杆；在生物免疫治疗领域，我们不断突破创新。
                  </p>
                  <p>
                    未来，我们将继续秉承"专业、创新、责任、共赢"的核心价值观，
                    为全球客户提供更优质的健康服务，为人类健康事业做出更大贡献。
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Core Values */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">核心价值</h2>
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
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="animate-fade-in">
            <Card className="shadow-elegant border-none bg-gradient-primary text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">发展成就</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">200+</div>
                    <div className="text-lg opacity-90">服务城市</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">100万+</div>
                    <div className="text-lg opacity-90">客户信赖</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">20+</div>
                    <div className="text-lg opacity-90">年行业经验</div>
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
