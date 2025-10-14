import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "联系电话",
      content: "+86 400-123-4567",
    },
    {
      icon: Mail,
      title: "电子邮箱",
      content: "contact@globalhealth.com",
    },
    {
      icon: MapPin,
      title: "总部地址",
      content: "中国上海市浦东新区世纪大道1000号",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">联系我们</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              我们期待与您交流，为您提供专业的健康服务解决方案
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-6">联系方式</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  如有任何疑问或需求，欢迎通过以下方式联系我们，我们将竭诚为您服务。
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-elegant hover:shadow-hover transition-all duration-300"
                  >
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-none shadow-elegant bg-gradient-primary text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">工作时间</h3>
                  <div className="space-y-2 text-lg opacity-90">
                    <p>周一至周五：9:00 - 18:00</p>
                    <p>周六至周日：10:00 - 17:00</p>
                    <p className="mt-4 text-sm opacity-75">
                      节假日照常营业，为您提供不间断服务
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="border-none shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">在线留言</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        姓名 *
                      </label>
                      <Input placeholder="请输入您的姓名" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        电子邮箱 *
                      </label>
                      <Input type="email" placeholder="请输入您的邮箱" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        联系电话
                      </label>
                      <Input type="tel" placeholder="请输入您的电话" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        咨询主题 *
                      </label>
                      <Input placeholder="请简要描述咨询主题" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        留言内容 *
                      </label>
                      <Textarea
                        placeholder="请详细描述您的需求或问题"
                        rows={6}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      提交留言
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
