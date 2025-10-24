// CTASection.tsx - Updated with translations
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, Mail, Shield, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      title: t('callUsNow'),
      description: t('speakWithOurMedicalExperts'),
      action: '+1-800-APOLLO-PARTNERS',
      buttonText: t('callNow'),
      href: 'tel:+1-800-APOLLO-PARTNERS',
    },
    {
      icon: MessageCircle,
      title: t('whatsAppChat'),
      description: t('quickResponseSupport'),
      action: t('startChat'),
      buttonText: 'WhatsApp',
      href: 'https://wa.me/1234567890',
    },
    {
      icon: Mail,
      title: t('emailConsultation'),
      description: t('detailedMedicalInquiry'),
      action: t('sendEmail'),
      buttonText: t('emailUs'),
      href: 'mailto:Info@apolopartners.com',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: t('support24_7'),
      description: 'Round-the-clock medical assistance and consultation support',
    },
    {
      icon: Shield,
      title: t('confidentialSecure'),
      description: 'Your medical information is protected with highest security standards',
    },
    {
      icon: Users,
      title: t('expertTeam'),
      description: 'Experienced medical tourism coordinators and healthcare professionals',
    },
  ];

  const finalStats = [
    { number: '500K+', label: 'Successful Treatments' },
    { number: '98%', label: t('patientSatisfaction') },
    { number: '50+', label: t('countries') },
    { number: '24/7', label: t('patientSupport') },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main CTA */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            {t('readyToStartYourMedicalJourney')}
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            {t('ctaDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
              <Link to="/book">{t('getFreeQuote')}</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
            >
              <a 
                href="https://api.whatsapp.com/send?phone=919971616131&text=Hello,%20please%20contact%20me%20regarding%20https://www.vaidam.com?source=wpchat_HPCL,%20Thank%20you!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <img 
                  loading="lazy" 
                  src="https://d3lclm53tbcdw6.cloudfront.net/v2/new-home/images/whatsaap-icon01.webp" 
                  alt="Chat with Us" 
                  width="24" 
                  height="24" 
                  className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
                  title="Chat with Us"
                />
                <span>{t('whatsappChat')}</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Rest of your CTASection component remains the same */}
        
        <Card className="bg-muted/30 border-0 shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">{t('joinThousandsOfSatisfiedPatients')}</h3>
            
            {/* Final stats and other content */}
            
            <div className="text-center">
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {t('readyToTakeTheNextStep')}
              </p>
              {/* Buttons */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;