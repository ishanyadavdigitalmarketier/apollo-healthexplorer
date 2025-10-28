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
// HeroSection.tsx - Updated with translations and functional search
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Stethoscope, Building2, UserCheck, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-medical.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('treatments');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const { t } = useLanguage();

  // Sample data for locations and tabs (mock data - replace with API in production)
  const dataByLocation = {
    india: {
      hospitals: [
        { id: '1', name: 'Apollo Hospitals Chennai', description: 'World-class multi-specialty hospital with advanced cardiac care.', specialty: 'Cardiology, Oncology' },
        { id: '2', name: 'Fortis Hospital Mumbai', description: 'Leading facility for orthopedic and neurology treatments.', specialty: 'Orthopedics, Neurology' },
        { id: '3', name: 'Max Super Speciality Delhi', description: 'Premier hospital for cosmetic and fertility services.', specialty: 'Cosmetic, Fertility' },
      ],
      treatments: [
        { id: '1', name: 'Heart Bypass Surgery', description: 'Advanced cardiac procedure with 70% cost savings.', price: '$4,000', duration: '7-10 days' },
        { id: '2', name: 'Knee Replacement', description: 'Robotic-assisted orthopedic surgery.', price: '$950', duration: '5-7 days' },
        { id: '3', name: 'LASIK Eye Surgery', description: 'Bladeless vision correction.', price: '$1,200', duration: '1 day' },
      ],
      doctors: [
        { id: '1', name: 'Dr. Rajesh Kumar', specialty: 'Cardiologist', experience: '20+ years', rating: 4.9 },
        { id: '2', name: 'Dr. Priya Sharma', specialty: 'Orthopedic Surgeon', experience: '15+ years', rating: 4.8 },
        { id: '3', name: 'Dr. Amit Patel', specialty: 'Ophthalmologist', experience: '18+ years', rating: 4.7 },
      ],
    },
    thailand: {
      hospitals: [
        { id: '4', name: 'Bumrungrad International Hospital', description: 'Top-rated for dental and cosmetic procedures.', specialty: 'Dentistry, Cosmetic' },
        { id: '5', name: 'Samitivej Sukhumvit Hospital', description: 'Excellent for fertility and wellness treatments.', specialty: 'Fertility, Wellness' },
      ],
      treatments: [
        { id: '4', name: 'Dental Implants', description: 'Premium dental solutions with 80% savings.', price: '$800', duration: '2-3 days' },
        { id: '5', name: 'IVF Treatment', description: 'Advanced fertility care.', price: '$3,500', duration: '4-6 weeks' },
      ],
      doctors: [
        { id: '4', name: 'Dr. Somchai Lee', specialty: 'Dentist', experience: '12+ years', rating: 4.9 },
        { id: '5', name: 'Dr. Nida Wong', specialty: 'Fertility Specialist', experience: '14+ years', rating: 4.8 },
      ],
    },
    singapore: {
      hospitals: [
        { id: '6', name: 'Mount Elizabeth Hospital', description: 'Premium care for complex surgeries.', specialty: 'Cardiology, Oncology' },
      ],
      treatments: [
        { id: '6', name: 'Cancer Treatment', description: 'Cutting-edge oncology therapies.', price: '$15,000', duration: 'Varies' },
      ],
      doctors: [
        { id: '6', name: 'Dr. Lim Wei', specialty: 'Oncologist', experience: '22+ years', rating: 4.9 },
      ],
    },
    // Add more locations as needed (turkey, mexico, malaysia)
    turkey: {
      hospitals: [{ id: '7', name: 'Acibadem Hospital Istanbul', description: 'Specialized in hair transplants and eye surgery.', specialty: 'Cosmetic, Ophthalmology' }],
      treatments: [{ id: '7', name: 'Hair Transplant', description: 'Advanced FUE technique.', price: '$2,500', duration: '3 days' }],
      doctors: [{ id: '7', name: 'Dr. Ahmet Oz', specialty: 'Plastic Surgeon', experience: '16+ years', rating: 4.8 }],
    },
    mexico: {
      hospitals: [{ id: '8', name: 'Hospital Angeles Tijuana', description: 'Affordable dental and bariatric care.', specialty: 'Dentistry, Bariatric' }],
      treatments: [{ id: '8', name: 'Gastric Sleeve Surgery', description: 'Weight loss procedure.', price: '$4,500', duration: '2 days' }],
      doctors: [{ id: '8', name: 'Dr. Maria Gonzalez', specialty: 'Bariatric Surgeon', experience: '10+ years', rating: 4.7 }],
    },
    malaysia: {
      hospitals: [{ id: '9', name: 'Gleneagles Hospital Kuala Lumpur', description: 'Comprehensive wellness and check-up programs.', specialty: 'Wellness, General' }],
      treatments: [{ id: '9', name: 'Full Body Health Checkup', description: 'Executive screening package.', price: '$500', duration: '1 day' }],
      doctors: [{ id: '9', name: 'Dr. Tan Lee', specialty: 'General Physician', experience: '13+ years', rating: 4.6 }],
    },
  };

  const handleSearch = () => {
    if (selectedLocation) {
      setSearchTriggered(true);
    } else {
      alert('Please select a preferred location before searching.');
    }
  };

  const getDetailsLink = (tab: string, id: string) => {
    switch (tab) {
      case 'hospitals':
        return `/hospitals/${id}`;
      case 'treatments':
        return `/details/${id}`;
      case 'doctors':
        return `/doctors/${id}`;
      default:
        return '/';
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

    const locationData = dataByLocation[selectedLocation] || { hospitals: [], treatments: [], doctors: [] };
    let results = [];

    switch (activeTab) {
      case 'hospitals':
        results = locationData.hospitals.filter(hospital =>
          hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hospital.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hospital.specialty.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 'treatments':
        results = locationData.treatments.filter(treatment =>
          treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          treatment.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 'doctors':
        results = locationData.doctors.filter(doctor =>
          doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      default:
        results = [];
    }

    if (results.length === 0) {
      return (
        <div className="text-center py-6 sm:py-8 text-muted-foreground">
          No results found for "{searchQuery}" in {selectedLocation}. Try adjusting your search.
        </div>
      );
    }

    return (
      <div className="mt-6 space-y-4">
        <p className="text-sm text-muted-foreground">
          Showing {results.length} results for "{searchQuery}" in {selectedLocation}:
        </p>
        {results.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-start justify-between">
                <span className="text-lg font-semibold">{item.name}</span>
                {activeTab === 'treatments' && <Badge variant="outline">${item.price}</Badge>}
                {activeTab === 'doctors' && <Badge variant="outline">⭐ {item.rating}</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
              {activeTab === 'hospitals' && <Badge variant="secondary">{item.specialty}</Badge>}
              {activeTab === 'treatments' && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                  <Calendar className="w-3 h-3" />
                  <span>{item.duration}</span>
                </div>
              )}
              {activeTab === 'doctors' && (
                <div className="text-xs text-muted-foreground mt-2">
                  <span>{item.experience}</span>
                </div>
              )}
              <Button asChild variant="ghost" size="sm" className="mt-2 flex items-center gap-1">
                <Link to={getDetailsLink(activeTab, item.id)}>
                  View Details <ArrowRight className="w-3 h-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
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
                      onClick={() => setSearchQuery(treatment)}
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