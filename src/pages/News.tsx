import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      category: "Corporate",
      title: "Company Awarded Global Health Industry Leader",
      date: "March 15, 2025",
      summary: "At the 2025 Global Health Industry Summit, our company was honored with the Global Health Industry Leader award for outstanding achievements in biotechnology and health services.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    },
    {
      category: "Innovation",
      title: "Major Breakthrough in Stem Cell Storage Technology",
      date: "February 28, 2025",
      summary: "Our research team has successfully developed next-generation stem cell storage technology, improving storage efficiency by 40% and setting a new industry standard.",
      image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=800&h=400&fit=crop",
    },
    {
      category: "Expansion",
      title: "International Market Expansion Continues",
      date: "February 10, 2025",
      summary: "The company has established new research centers and service networks in Europe, further enhancing our global business presence.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    },
    {
      category: "CSR",
      title: "Launching Healthy China Public Welfare Project",
      date: "January 20, 2025",
      summary: "The company announced a $15 million investment to launch the Healthy China public welfare project, providing free health services to remote areas.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    },
    {
      category: "Partnership",
      title: "Strategic Cooperation with Top International Medical Institutions",
      date: "January 5, 2025",
      summary: "The company has signed strategic cooperation agreements with several internationally renowned medical institutions to jointly advance biomedical technology research.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=400&fit=crop",
    },
    {
      category: "Recognition",
      title: "Named Top 500 Most Innovative Company for Fifth Consecutive Year",
      date: "December 15, 2024",
      summary: "With continuous technological innovation and outstanding market performance, the company has been named to the Global Top 500 Most Innovative Companies list for the fifth consecutive year.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    },
  ];

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
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about our latest developments, technological innovations, and industry insights
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
                    Read More
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
