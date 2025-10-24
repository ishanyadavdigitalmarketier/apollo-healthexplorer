// StatsSection.tsx - Updated with translations
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      number: '500K+',
      label: t('patientsServed'),
    },
    {
      number: '2000+',
      label: t('partnerHospitals'),
    },
    {
      number: '50+',
      label: t('countries'),
    },
    {
      number: '98%',
      label: t('successRate'),
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base lg:text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;