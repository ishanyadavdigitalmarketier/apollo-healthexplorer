// // HeroSection.tsx - Updated with translations
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Badge } from '@/components/ui/badge';
// import { Search, Stethoscope, Building2, UserCheck, MapPin, Calendar, DollarSign } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import heroImage from '@/assets/hero-medical.jpg';
// import { useLanguage } from '@/contexts/LanguageContext';

// const HeroSection = () => {
//   const [activeTab, setActiveTab] = useState('treatments');
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchTriggered, setSearchTriggered] = useState(false);
//   const { t } = useLanguage();

//   // ... (keep all your existing dataByLocation and other logic)

//   const handleSearch = () => {
//     if (selectedLocation) {
//       setSearchTriggered(true);
//     } else {
//       alert('Please select a preferred location before searching.');
//     }
//   };

//   const renderTabContent = () => {
//     if (!selectedLocation || !searchTriggered) {
//       return (
//         <div className="text-center py-6 sm:py-8 text-muted-foreground">
//           Please select a location and click Search to view details.
//         </div>
//       );
//     }

//     // ... (keep your existing renderTabContent logic)
//   };

//   return (
//     <section 
//       className="relative min-h-[70vh] sm:min-h-[80vh] bg-cover bg-center bg-no-repeat"
//       style={{ 
//         backgroundImage: `url(${heroImage})`,
//       }}
//     >
//       {/* Gradient overlay */}
//       <div 
//         className="absolute inset-0"
//         style={{ 
//           background: 'var(--hero-gradient)',
//           opacity: 0.9
//         }}
//       ></div>
      
//       {/* Content */}
//       <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-20">
//         <div className="max-w-4xl mx-auto">
//           {/* Hero Text */}
//           <div className="text-white mb-8 sm:mb-12">
//             <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
//               {t('worldClassHealthcare')}
//             </h1>
//             <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl leading-relaxed">
//               {t('connectWithTopHospitals')}
//             </p>
//           </div>

//           {/* Search Card */}
//           <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
//             <div className="mb-4 sm:mb-6">
//               <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
//                 {t('findYourPerfectMedicalSolution')}
//               </h2>
//               <p className="text-muted-foreground text-sm sm:text-base">
//                 {t('searchFromThousands')}
//               </p>
//             </div>

//             {/* Tabs */}
//             <div className="flex flex-wrap gap-2 sm:gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
//               <Button
//                 variant={activeTab === 'hospitals' ? 'default' : 'outline'}
//                 onClick={() => setActiveTab('hospitals')}
//                 className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none min-w-[100px]"
//                 size="sm"
//               >
//                 <Building2 size={14} className="sm:size-16" />
//                 {t('hospitalsTab')}
//               </Button>
//               <Button
//                 variant={activeTab === 'treatments' ? 'default' : 'outline'}
//                 onClick={() => setActiveTab('treatments')}
//                 className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none min-w-[100px]"
//                 size="sm"
//               >
//                 <Stethoscope size={14} className="sm:size-16" />
//                 {t('treatmentsTab')}
//               </Button>
//               <Button
//                 variant={activeTab === 'doctors' ? 'default' : 'outline'}
//                 onClick={() => setActiveTab('doctors')}
//                 className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none min-w-[100px]"
//                 size="sm"
//               >
//                 <UserCheck size={14} className="sm:size-16" />
//                 {t('doctorsTab')}
//               </Button>
//             </div>

//             {/* Search Form */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
//               <div className="sm:col-span-2">
//                 <label className="block text-xs sm:text-sm font-medium mb-2">
//                   {t('whatAreYouLookingFor')}
//                 </label>
//                 <Input 
//                   placeholder={`${t('search')} ${activeTab}...`} 
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="h-10 sm:h-12 text-sm"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xs sm:text-sm font-medium mb-2">
//                   {t('preferredLocation')}
//                 </label>
//                 <Select value={selectedLocation} onValueChange={setSelectedLocation}>
//                   <SelectTrigger className="h-10 sm:h-12">
//                     <SelectValue placeholder={t('selectCountry')} />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="india">India</SelectItem>
//                     <SelectItem value="thailand">Thailand</SelectItem>
//                     <SelectItem value="singapore">Singapore</SelectItem>
//                     <SelectItem value="turkey">Turkey</SelectItem>
//                     <SelectItem value="mexico">Mexico</SelectItem>
//                     <SelectItem value="malaysia">Malaysia</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             <Button 
//               size="lg" 
//               className="w-full md:w-auto bg-accent hover:bg-accent/90 h-10 sm:h-12 px-6 sm:px-8 mb-4 sm:mb-6 text-sm sm:text-base"
//               onClick={handleSearch}
//             >
//               <Search size={16} className="mr-2 sm:mr-2" />
//               {t('search')}
//             </Button>

//             {/* Tab Content */}
//             {renderTabContent()}

//             {/* Fallback Popular Treatments */}
//             {activeTab === 'treatments' && !selectedLocation && (
//               <div className="mt-4 sm:mt-6">
//                 <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
//                   {t('popularTreatments')}:
//                 </p>
//                 <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
//                   {[
//                     t('heartSurgery'),
//                     t('orthopedicSurgery'), 
//                     t('cosmeticSurgery'),
//                     t('dentalTreatments'),
//                     t('eyeSurgery'),
//                     t('cancerTreatment')
//                   ].map((treatment, index) => (
//                     <Badge 
//                       key={index} 
//                       variant="secondary" 
//                       className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs sm:text-sm px-2 sm:px-3 py-1"
//                     >
//                       {treatment}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// HeroSection.tsx - Updated with translations
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Stethoscope, Building2, UserCheck, MapPin, Calendar, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-medical.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('treatments');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const { t } = useLanguage();

  // ... (keep all your existing dataByLocation and other logic)

  const handleSearch = () => {
    if (selectedLocation) {
      setSearchTriggered(true);
    } else {
      alert('Please select a preferred location before searching.');
    }
  };

  const renderTabContent = () => {
    if (!selectedLocation || !searchTriggered) {
      return (
        <div className="text-center py-6 sm:py-8 text-muted-foreground">
          Please select a location and click Search to view details.
        </div>
      );
    }

    // ... (keep your existing renderTabContent logic)
  };

  return (
    <section 
      className="relative min-h-[70vh] sm:min-h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'var(--hero-gradient)',
          opacity: 0.9
        }}
      ></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <div className="text-white mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {t('worldClassHealthcare')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl leading-relaxed">
              {t('connectWithTopHospitals')}
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {t('findYourPerfectMedicalSolution')}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                {t('searchFromThousands')}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
              <Button
                variant={activeTab === 'hospitals' ? 'default' : 'outline'}
                onClick={() => setActiveTab('hospitals')}
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none min-w-[100px]"
                size="sm"
              >
                <Building2 size={14} className="sm:size-16" />
                {t('hospitalsTab')}
              </Button>
              <Button
                variant={activeTab === 'treatments' ? 'default' : 'outline'}
                onClick={() => setActiveTab('treatments')}
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none min-w-[100px]"
                size="sm"
              >
                <Stethoscope size={14} className="sm:size-16" />
                {t('treatmentsTab')}
              </Button>
              <Button
                variant={activeTab === 'doctors' ? 'default' : 'outline'}
                onClick={() => setActiveTab('doctors')}
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none min-w-[100px]"
                size="sm"
              >
                <UserCheck size={14} className="sm:size-16" />
                {t('doctorsTab')}
              </Button>
            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="sm:col-span-2">
                <label className="block text-xs sm:text-sm font-medium mb-2">
                  {t('whatAreYouLookingFor')}
                </label>
                <Input 
                  placeholder={`${t('search')} ${activeTab}...`} 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 sm:h-12 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">
                  {t('preferredLocation')}
                </label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="h-10 sm:h-12">
                    <SelectValue placeholder={t('selectCountry')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="thailand">Thailand</SelectItem>
                    <SelectItem value="singapore">Singapore</SelectItem>
                    <SelectItem value="turkey">Turkey</SelectItem>
                    <SelectItem value="mexico">Mexico</SelectItem>
                    <SelectItem value="malaysia">Malaysia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full md:w-auto bg-accent hover:bg-accent/90 h-10 sm:h-12 px-6 sm:px-8 mb-4 sm:mb-6 text-sm sm:text-base"
              onClick={handleSearch}
            >
              <Search size={16} className="mr-2 sm:mr-2" />
              {t('search')}
            </Button>

            {/* Tab Content */}
            {renderTabContent()}

            {/* Fallback Popular Treatments */}
            {activeTab === 'treatments' && !selectedLocation && (
              <div className="mt-4 sm:mt-6">
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  {t('popularTreatments')}:
                </p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {[
                    t('heartSurgery'),
                    t('orthopedicSurgery'), 
                    t('cosmeticSurgery'),
                    t('dentalTreatments'),
                    t('eyeSurgery'),
                    t('cancerTreatment')
                  ].map((treatment, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs sm:text-sm px-2 sm:px-3 py-1"
                    >
                      {treatment}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;