import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Making outstanding contributions to human health through technological innovation and professional services",
    },
    {
      icon: Users,
      title: "Vision",
      description: "To become a global leader in life and health services",
    },
    {
      icon: Award,
      title: "Values",
      description: "Professional, Innovative, Responsible, Win-Win",
    },
    {
      icon: TrendingUp,
      title: "Strategy",
      description: "Global expansion, diversified development, technological innovation",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a global enterprise dedicated to the life and health industry, specializing in bio-immune therapy, stem cell storage, and elderly care
            </p>
          </div>

          {/* Company Overview */}
          <section className="mb-20 animate-fade-in">
            <Card className="shadow-elegant border-none">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    As a global leader in life and health services, we consistently drive innovation through technology 
                    and customer-centric approaches, building a complete health industry ecosystem.
                  </p>
                  <p>
                    Our business spans major markets worldwide, supported by world-class research teams and service systems. 
                    We maintain the world's number one position in stem cell storage, set industry benchmarks in elderly care, 
                    and continuously innovate in bio-immune therapy.
                  </p>
                  <p>
                    Looking ahead, we will continue to uphold our core values of "Professional, Innovative, Responsible, Win-Win", 
                    providing superior health services to global clients and making greater contributions to human health.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Core Values */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
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
                <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold mb-2">200+</div>
                    <div className="text-lg opacity-90">Cities Served</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">1M+</div>
                    <div className="text-lg opacity-90">Trusted Clients</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">20+</div>
                    <div className="text-lg opacity-90">Years of Excellence</div>
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
