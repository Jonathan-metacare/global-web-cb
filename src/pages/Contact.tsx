import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      titleKey: "phone",
      content: "+1 (800) 123-4567",
    },
    {
      icon: Mail,
      titleKey: "email",
      content: "contact@globalhealth.com",
    },
    {
      icon: MapPin,
      titleKey: "headquarters",
      content: "1000 Century Avenue, Pudong, Shanghai, China",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
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
                        <h3 className="font-semibold mb-1">{t(`contact.${info.titleKey}`)}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-none shadow-elegant bg-gradient-primary text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{t('contact.businessHours.title')}</h3>
                  <div className="space-y-2 text-lg opacity-90">
                    <p>{t('contact.businessHours.weekdays')}: {t('contact.businessHours.time')}</p>
                    <p>{t('contact.businessHours.weekend')}: {t('contact.businessHours.time')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="border-none shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">{t('contact.form.title')}</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <Input placeholder={t('contact.form.name')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <Input type="email" placeholder={t('contact.form.email')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <Input type="tel" placeholder={t('contact.form.phone')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.form.subject')} *
                      </label>
                      <Input placeholder={t('contact.form.subject')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.form.message')} *
                      </label>
                      <Textarea
                        placeholder={t('contact.form.message')}
                        rows={6}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      {t('contact.form.send')}
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
