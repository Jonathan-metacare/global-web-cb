import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Heart, Stethoscope, Users } from "lucide-react";
import elderlyCareImage from "@/assets/elderly-care.jpg";

const ElderlyCare = () => {
  const services = [
    {
      icon: Home,
      title: "养老社区",
      description: "提供高品质的养老社区服务，打造温馨舒适的养老环境",
    },
    {
      icon: Heart,
      title: "健康管理",
      description: "专业的健康管理团队，提供全方位的健康监护服务",
    },
    {
      icon: Stethoscope,
      title: "医疗护理",
      description: "配备专业医疗设施和护理团队，确保老人健康安全",
    },
    {
      icon: Users,
      title: "文娱活动",
      description: "丰富多彩的文化娱乐活动，让老年生活更加充实",
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
                <h1 className="text-5xl font-bold mb-4">健康养老</h1>
                <p className="text-xl max-w-2xl mx-auto">
                  全方位的健康管理和高品质养老服务体系
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
                    我们致力于为老年人提供全方位、高品质的养老服务，
                    打造医养结合的现代化养老服务体系。
                    我们的养老社区分布在全国主要城市，提供多层次、多样化的养老服务。
                  </p>
                  <p>
                    我们的养老社区配备了先进的医疗设施和专业的护理团队，
                    为老年人提供24小时的健康监护和医疗服务。
                    同时，我们还提供丰富的文化娱乐活动，让老年人的生活更加充实和快乐。
                  </p>
                  <p>
                    通过整合优质的医疗资源和养老服务，
                    我们为老年人创造了一个安全、舒适、有尊严的生活环境，
                    让他们享受高品质的晚年生活。
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">服务内容</h2>
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
                <h2 className="text-3xl font-bold mb-8 text-center">服务规模</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">100+</div>
                    <div className="text-lg opacity-90">养老社区</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">50000+</div>
                    <div className="text-lg opacity-90">服务老人</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">98%</div>
                    <div className="text-lg opacity-90">满意度</div>
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
