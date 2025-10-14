import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Truck, Store, Smartphone } from "lucide-react";
import modernCommerceImage from "@/assets/modern-commerce.jpg";

const ModernCommerce = () => {
  const platforms = [
    {
      icon: Store,
      title: "零售网络",
      description: "遍布全国的零售网点，提供便捷的线下购物体验",
    },
    {
      icon: Smartphone,
      title: "电商平台",
      description: "创新的电商平台，实现线上线下融合发展",
    },
    {
      icon: Truck,
      title: "物流配送",
      description: "高效的物流配送体系，确保商品快速送达",
    },
    {
      icon: ShoppingBag,
      title: "会员服务",
      description: "完善的会员服务体系，提供个性化的购物体验",
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
              src={modernCommerceImage}
              alt="现代商业"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">现代商业</h1>
                <p className="text-xl max-w-2xl mx-auto">
                  创新的商业模式，打造现代化的服务平台
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
                    我们的现代商业板块致力于打造创新的零售服务平台，
                    通过线上线下融合的商业模式，为消费者提供优质的购物体验。
                  </p>
                  <p>
                    我们建立了覆盖全国的零售网络，在主要城市设有大型旗舰店和社区便利店，
                    为消费者提供便捷的线下购物服务。同时，我们开发了创新的电商平台，
                    实现了线上线下的无缝对接，为消费者创造全新的购物体验。
                  </p>
                  <p>
                    通过整合优质的供应链资源和先进的信息技术，
                    我们为消费者提供丰富的商品选择、优惠的价格和高效的配送服务，
                    不断提升客户满意度。
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Platforms */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">业务平台</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <Card
                  key={index}
                  className="border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <platform.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{platform.title}</h3>
                    <p className="text-muted-foreground">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Statistics */}
          <section className="animate-fade-in">
            <Card className="shadow-elegant border-none bg-gradient-primary text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">业务规模</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">1000+</div>
                    <div className="text-lg opacity-90">零售网点</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">500万+</div>
                    <div className="text-lg opacity-90">注册会员</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">100亿+</div>
                    <div className="text-lg opacity-90">年销售额</div>
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

export default ModernCommerce;
