// TestimonialsSection.tsx - Updated with translations
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonial = {
    text: "The care I received at Apollo Hospitals was exceptional. From the moment I landed in Delhi to my complete recovery, Apollo Partners took care of everything. The doctors were world-class, and I saved over $80,000 compared to US prices. I couldn't be happier with my decision.",
    name: "Sarah Johnson, 45",
    country: "🇺🇸 USA",
    treatment: "Heart Bypass Surgery",
    hospital: "Apollo Hospitals, Delhi",
    savings: "$80,000",
    recovery: "2 weeks",
    date: "March 2024",
    avatar: "SJ",
  };

  const stats = [
    { number: '98%', label: t('patientSatisfaction') },
    { number: '500K+', label: t('happyPatients') },
    { number: '70%', label: t('averageSavings') },
    { number: '24/7', label: t('patientSupport') },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{t('realPatientSuccessStories')}</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('testimonialsDescription')}
          </p>
        </div>

        {/* Rest of your TestimonialsSection component remains the same */}
        
        <div className="text-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-sm sm:text-base px-6 sm:px-8 py-3">
            <Link to="/story">{t('shareYourSuccessStory')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;