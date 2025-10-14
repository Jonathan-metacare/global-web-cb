import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      category: "企业动态",
      title: "公司荣获全球健康产业领军企业称号",
      date: "2025年3月15日",
      summary: "在2025年全球健康产业峰会上，公司凭借在生物科技和健康服务领域的卓越成就，荣获全球健康产业领军企业称号。",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    },
    {
      category: "技术创新",
      title: "干细胞存储技术取得重大突破",
      date: "2025年2月28日",
      summary: "我们的科研团队成功研发出新一代干细胞存储技术，存储效率提升40%，为行业树立新标杆。",
      image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=800&h=400&fit=crop",
    },
    {
      category: "业务拓展",
      title: "海外市场布局再下一城",
      date: "2025年2月10日",
      summary: "公司在欧洲设立新的研发中心和服务网点，进一步完善全球化业务布局。",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    },
    {
      category: "社会责任",
      title: "启动健康中国公益项目",
      date: "2025年1月20日",
      summary: "公司宣布投入1亿元启动健康中国公益项目，为偏远地区提供免费健康服务。",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    },
    {
      category: "行业合作",
      title: "与国际顶尖医疗机构达成战略合作",
      date: "2025年1月5日",
      summary: "公司与多家国际知名医疗机构签署战略合作协议，共同推进生物医疗技术研发。",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=400&fit=crop",
    },
    {
      category: "企业荣誉",
      title: "连续五年入选全球最具创新力企业500强",
      date: "2024年12月15日",
      summary: "公司凭借持续的技术创新和卓越的市场表现，连续五年入选全球最具创新力企业500强榜单。",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    },
  ];

  const categoryColors: { [key: string]: string } = {
    企业动态: "default",
    技术创新: "default",
    业务拓展: "default",
    社会责任: "default",
    行业合作: "default",
    企业荣誉: "default",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">新闻动态</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              了解我们的最新动态、技术创新和行业资讯
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={categoryColors[item.category] as any}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {item.summary}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    阅读更多
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
