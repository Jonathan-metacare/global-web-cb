import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Lock, Award, Globe2 } from "lucide-react";
import stemCellsImage from "@/assets/stem-cells.jpg";

const StemCells = () => {
  const features = [
    {
      icon: Database,
      title: "专业存储",
      description: "采用国际领先的干细胞存储技术，确保细胞活性和安全",
    },
    {
      icon: Lock,
      title: "安全保障",
      description: "多重安全防护体系，24小时监控，确保样本安全",
    },
    {
      icon: Award,
      title: "权威认证",
      description: "通过国际权威机构认证，质量标准达到国际一流水平",
    },
    {
      icon: Globe2,
      title: "全球服务",
      description: "覆盖全球主要城市，提供便捷的采集和存储服务",
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
                <h1 className="text-5xl font-bold mb-4">脐血干细胞</h1>
                <p className="text-xl max-w-2xl mx-auto">
                  专业的脐带血干细胞采集、检测、制备和储存服务
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
                    作为全球最大的干细胞存储企业，我们为家庭提供专业的脐带血干细胞存储服务。
                    脐带血中含有丰富的造血干细胞，可用于治疗多种血液系统疾病和免疫系统疾病。
                  </p>
                  <p>
                    我们拥有国际领先的干细胞库，采用最先进的液氮储存技术，
                    确保细胞在超低温环境下长期保存，保持细胞的活性和功能。
                    我们的存储设施通过了国际权威机构的认证，质量标准达到国际一流水平。
                  </p>
                  <p>
                    多年来，我们已经为超过200万个家庭提供了干细胞存储服务，
                    存储的干细胞已成功应用于数千例疾病治疗，取得了良好的临床效果。
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">服务特色</h2>
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
                <h2 className="text-3xl font-bold mb-8 text-center">服务数据</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">200万+</div>
                    <div className="text-lg opacity-90">存储家庭</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">99.9%</div>
                    <div className="text-lg opacity-90">细胞活性</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">5000+</div>
                    <div className="text-lg opacity-90">成功应用</div>
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
