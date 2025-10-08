import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, Mail, Shield, Users, Clock, Link as LucideLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us Now',
      description: 'Speak with our medical experts',
      action: '+1-800-APOLLO-PARTNERS',
      buttonText: 'Call Now',
      href: 'tel:+1-800-APOLLO-PARTNERS',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Quick response & support',
      action: 'Start Chat',
      buttonText: 'WhatsApp',
      href: 'https://wa.me/1234567890',
    },
    {
      icon: Mail,
      title: 'Email Consultation',
      description: 'Detailed medical inquiry',
      action: 'Send Email',
      buttonText: 'Email Us',
      href: 'mailto:info@apollohospitals.com',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock medical assistance and consultation support',
    },
    {
      icon: Shield,
      title: 'Confidential & Secure',
      description: 'Your medical information is protected with highest security standards',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced medical tourism coordinators and healthcare professionals',
    },
  ];

  const finalStats = [
    { number: '500K+', label: 'Successful Treatments' },
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '50+', label: 'Partner Countries' },
    { number: '24/7', label: 'Medical Support' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your <br />
            <span className="text-primary">Medical Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get personalized treatment plans, cost estimates, and expert guidance from our medical tourism specialists. Your health transformation starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
              <Link to="/book">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/book">Book Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <method.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <p className="font-semibold text-lg mb-4">{method.action}</p>
                <Button asChild className="w-full">
                  {method.href.startsWith('http') || method.href.startsWith('tel') || method.href.startsWith('mailto') ? (
                    <a href={method.href} target={method.href.startsWith('http') ? '_blank' : '_self'}>
                      {method.buttonText}
                    </a>
                  ) : (
                    <Link to={method.href}>{method.buttonText}</Link>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Final Stats */}
        <Card className="bg-muted/30 border-0 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Join Thousands of Satisfied Patients</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {finalStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to take the next step? Our medical experts are standing by.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="tel:+1-800-APOLLO-PARTNERS">Call Now: +1-800-APOLLO-PARTNERS</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    WhatsApp Chat
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;