// HospitalsSection.tsx - Updated with translations
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import hospitalIcon from '@/assets/hospital-icon.jpg';
import BumrungradHospital from '@/assets/Bumrungrad- Hospital.jpg';
import MountElizabeth from '@/assets/Mount-Elizabeth.jpg';
import acibademaltunizade from '@/assets/acibadem-altunizade.png';
import { useLanguage } from '@/contexts/LanguageContext';

const HospitalsSection = () => {
  const { t } = useLanguage();

  const countries = [
    { flag: '🇮🇳', name: 'India', hospitals: '450 hospitals' },
    { flag: '🇹🇭', name: 'Thailand', hospitals: '180 hospitals' },
    { flag: '🇸🇬', name: 'Singapore', hospitals: '85 hospitals' },
    { flag: '🇹🇷', name: 'Turkey', hospitals: '220 hospitals' },
    { flag: '🇲🇽', name: 'Mexico', hospitals: '160 hospitals' },
    { flag: '🇲🇾', name: 'Malaysia', hospitals: '95 hospitals' },
  ];

  const hospitals = [
    {
      name: 'Apollo Hospitals',
      accreditation: 'JCI Accredited',
      location: 'New Delhi, India',
      rating: 4.9,
      reviews: 5847,
      specialties: ['Cardiology', 'Oncology', 'Neurology'],
      patients: '50,000+',
      experience: '25+ years',
      features: ['English Speaking Staff', 'International Patient Care', '24/7 Emergency'],
      image: hospitalIcon,
    },
    // ... other hospitals data
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{t('topRatedPartnerHospitals')}</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('hospitalsDescription')}
          </p>
        </div>

        {/* Rest of your HospitalsSection component remains the same */}
        
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm sm:text-base px-6 sm:px-8 py-3">
            <Link to="/hospitals">{t('viewAllPartnerHospitals')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HospitalsSection;