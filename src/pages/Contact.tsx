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
      title: "Phone",
      content: "+1 (800) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@globalhealth.com",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      content: "1000 Century Avenue, Pudong, Shanghai, China",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We look forward to connecting with you and providing professional health service solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  If you have any questions or needs, please feel free to contact us through the following methods. We are at your service.
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
                  <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-lg opacity-90">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: 10:00 AM - 5:00 PM</p>
                    <p className="mt-4 text-sm opacity-75">
                      Open on holidays, providing uninterrupted service
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="border-none shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input placeholder="Briefly describe your inquiry" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Please describe your needs or questions in detail"
                        rows={6}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Submit Message
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
