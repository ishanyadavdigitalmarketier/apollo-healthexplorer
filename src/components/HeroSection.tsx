// // HeroSection.tsx - Updated with translations and functional search
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Badge } from '@/components/ui/badge';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Search, Stethoscope, Building2, UserCheck, MapPin, Calendar, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import heroImage from '@/assets/hero-medical.jpg';
// import { useLanguage } from '@/contexts/LanguageContext';

// const HeroSection = () => {
//   const [activeTab, setActiveTab] = useState('treatments');
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchTriggered, setSearchTriggered] = useState(false);
//   const { t } = useLanguage();

//   // Sample data for locations and tabs (mock data - replace with API in production)
//   const dataByLocation = {
//     india: {
//       hospitals: [
//         { id: '1', name: 'Apollo Hospitals Chennai', description: 'World-class multi-specialty hospital with advanced cardiac care.', specialty: 'Cardiology, Oncology' },
//         { id: '2', name: 'Fortis Hospital Mumbai', description: 'Leading facility for orthopedic and neurology treatments.', specialty: 'Orthopedics, Neurology' },
//         { id: '3', name: 'Max Super Speciality Delhi', description: 'Premier hospital for cosmetic and fertility services.', specialty: 'Cosmetic, Fertility' },
//       ],
//       treatments: [
//         { id: '1', name: 'Heart Bypass Surgery', description: 'Advanced cardiac procedure with 70% cost savings.', price: '$4,000', duration: '7-10 days' },
//         { id: '2', name: 'Knee Replacement', description: 'Robotic-assisted orthopedic surgery.', price: '$950', duration: '5-7 days' },
//         { id: '3', name: 'LASIK Eye Surgery', description: 'Bladeless vision correction.', price: '$1,200', duration: '1 day' },
//       ],
//       doctors: [
//         { id: '1', name: 'Dr. Rajesh Kumar', specialty: 'Cardiologist', experience: '20+ years', rating: 4.9 },
//         { id: '2', name: 'Dr. Priya Sharma', specialty: 'Orthopedic Surgeon', experience: '15+ years', rating: 4.8 },
//         { id: '3', name: 'Dr. Amit Patel', specialty: 'Ophthalmologist', experience: '18+ years', rating: 4.7 },
//       ],
//     },
//     thailand: {
//       hospitals: [
//         { id: '4', name: 'Bumrungrad International Hospital', description: 'Top-rated for dental and cosmetic procedures.', specialty: 'Dentistry, Cosmetic' },
//         { id: '5', name: 'Samitivej Sukhumvit Hospital', description: 'Excellent for fertility and wellness treatments.', specialty: 'Fertility, Wellness' },
//       ],
//       treatments: [
//         { id: '4', name: 'Dental Implants', description: 'Premium dental solutions with 80% savings.', price: '$800', duration: '2-3 days' },
//         { id: '5', name: 'IVF Treatment', description: 'Advanced fertility care.', price: '$3,500', duration: '4-6 weeks' },
//       ],
//       doctors: [
//         { id: '4', name: 'Dr. Somchai Lee', specialty: 'Dentist', experience: '12+ years', rating: 4.9 },
//         { id: '5', name: 'Dr. Nida Wong', specialty: 'Fertility Specialist', experience: '14+ years', rating: 4.8 },
//       ],
//     },
//     singapore: {
//       hospitals: [
//         { id: '6', name: 'Mount Elizabeth Hospital', description: 'Premium care for complex surgeries.', specialty: 'Cardiology, Oncology' },
//       ],
//       treatments: [
//         { id: '6', name: 'Cancer Treatment', description: 'Cutting-edge oncology therapies.', price: '$15,000', duration: 'Varies' },
//       ],
//       doctors: [
//         { id: '6', name: 'Dr. Lim Wei', specialty: 'Oncologist', experience: '22+ years', rating: 4.9 },
//       ],
//     },
//     // Add more locations as needed (turkey, mexico, malaysia)
//     turkey: {
//       hospitals: [{ id: '7', name: 'Acibadem Hospital Istanbul', description: 'Specialized in hair transplants and eye surgery.', specialty: 'Cosmetic, Ophthalmology' }],
//       treatments: [{ id: '7', name: 'Hair Transplant', description: 'Advanced FUE technique.', price: '$2,500', duration: '3 days' }],
//       doctors: [{ id: '7', name: 'Dr. Ahmet Oz', specialty: 'Plastic Surgeon', experience: '16+ years', rating: 4.8 }],
//     },
//     mexico: {
//       hospitals: [{ id: '8', name: 'Hospital Angeles Tijuana', description: 'Affordable dental and bariatric care.', specialty: 'Dentistry, Bariatric' }],
//       treatments: [{ id: '8', name: 'Gastric Sleeve Surgery', description: 'Weight loss procedure.', price: '$4,500', duration: '2 days' }],
//       doctors: [{ id: '8', name: 'Dr. Maria Gonzalez', specialty: 'Bariatric Surgeon', experience: '10+ years', rating: 4.7 }],
//     },
//     malaysia: {
//       hospitals: [{ id: '9', name: 'Gleneagles Hospital Kuala Lumpur', description: 'Comprehensive wellness and check-up programs.', specialty: 'Wellness, General' }],
//       treatments: [{ id: '9', name: 'Full Body Health Checkup', description: 'Executive screening package.', price: '$500', duration: '1 day' }],
//       doctors: [{ id: '9', name: 'Dr. Tan Lee', specialty: 'General Physician', experience: '13+ years', rating: 4.6 }],
//     },
//   };

//   const handleSearch = () => {
//     if (selectedLocation) {
//       setSearchTriggered(true);
//     } else {
//       alert('Please select a preferred location before searching.');
//     }
//   };

//   const getDetailsLink = (tab: string, id: string) => {
//     switch (tab) {
//       case 'hospitals':
//         return `/hospitals/${id}`;
//       case 'treatments':
//         return `/details/${id}`;
//       case 'doctors':
//         return `/doctors/${id}`;
//       default:
//         return '/';
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

//     const locationData = dataByLocation[selectedLocation] || { hospitals: [], treatments: [], doctors: [] };
//     let results = [];

//     switch (activeTab) {
//       case 'hospitals':
//         results = locationData.hospitals.filter(hospital =>
//           hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           hospital.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           hospital.specialty.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         break;
//       case 'treatments':
//         results = locationData.treatments.filter(treatment =>
//           treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           treatment.description.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         break;
//       case 'doctors':
//         results = locationData.doctors.filter(doctor =>
//           doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         break;
//       default:
//         results = [];
//     }

//     if (results.length === 0) {
//       return (
//         <div className="text-center py-6 sm:py-8 text-muted-foreground">
//           No results found for "{searchQuery}" in {selectedLocation}. Try adjusting your search.
//         </div>
//       );
//     }

//     return (
//       <div className="mt-6 space-y-4">
//         <p className="text-sm text-muted-foreground">
//           Showing {results.length} results for "{searchQuery}" in {selectedLocation}:
//         </p>
//         {results.map((item) => (
//           <Card key={item.id} className="hover:shadow-md transition-shadow">
//             <CardHeader className="pb-2">
//               <CardTitle className="flex items-start justify-between">
//                 <span className="text-lg font-semibold">{item.name}</span>
//                 {activeTab === 'treatments' && <Badge variant="outline">${item.price}</Badge>}
//                 {activeTab === 'doctors' && <Badge variant="outline">⭐ {item.rating}</Badge>}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
//               {activeTab === 'hospitals' && <Badge variant="secondary">{item.specialty}</Badge>}
//               {activeTab === 'treatments' && (
//                 <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
//                   <Calendar className="w-3 h-3" />
//                   <span>{item.duration}</span>
//                 </div>
//               )}
//               {activeTab === 'doctors' && (
//                 <div className="text-xs text-muted-foreground mt-2">
//                   <span>{item.experience}</span>
//                 </div>
//               )}
//               <Button asChild variant="ghost" size="sm" className="mt-2 flex items-center gap-1">
//                 <Link to={getDetailsLink(activeTab, item.id)}>
//                   View Details <ArrowRight className="w-3 h-3" />
//                 </Link>
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     );
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
//                       onClick={() => setSearchQuery(treatment)}
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
// HeroSection.tsx - Updated with translations, functional search, and inline modal for details (no 404)
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';
import { Search, Stethoscope, Building2, UserCheck, MapPin, Calendar, ArrowRight, Phone, Mail, Star } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('treatments');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // For modal
  const { t } = useLanguage();

  // Sample data for locations and tabs (mock data - replace with API in production)
  const dataByLocation = {
    india: {
      hospitals: [
        { 
          id: '1', 
          name: 'Apollo Hospitals Chennai', 
          description: 'World-class multi-specialty hospital with advanced cardiac care.', 
          specialty: 'Cardiology, Oncology',
          fullDetails: {
            address: '21 Greams Lane, Off Greams Road, Chennai - 600006, India',
            phone: '+91 44 2829 3333',
            email: 'info@apollohospitals.com',
            rating: 4.8,
            facilities: ['JCI Accredited', '24/7 Emergency', 'Advanced ICU', 'Helipad for Air Ambulance'],
            image: 'https://via.placeholder.com/400x200?text=Apollo+Chennai'
          }
        },
        { 
          id: '2', 
          name: 'Fortis Hospital Mumbai', 
          description: 'Leading facility for orthopedic and neurology treatments.', 
          specialty: 'Orthopedics, Neurology',
          fullDetails: {
            address: 'Mulund Goregaon Link Road, Mulund West, Mumbai - 400078, India',
            phone: '+91 22 836 3300',
            email: 'info@fortismumbai.com',
            rating: 4.7,
            facilities: ['Robotic Surgery', 'Neurology Center', 'Rehab Unit', 'VIP Suites'],
            image: 'https://via.placeholder.com/400x200?text=Fortis+Mumbai'
          }
        },
        { 
          id: '3', 
          name: 'Max Super Speciality Delhi', 
          description: 'Premier hospital for cosmetic and fertility services.', 
          specialty: 'Cosmetic, Fertility',
          fullDetails: {
            address: '1, 2, Press Enclave Road, Saket, New Delhi - 110017, India',
            phone: '+91 11 6611 5000',
            email: 'info@maxhealthcare.in',
            rating: 4.9,
            facilities: ['IVF Lab', 'Cosmetic Surgery Wing', 'Genetic Counseling', 'Luxury Recovery Rooms'],
            image: 'https://via.placeholder.com/400x200?text=Max+Delhi'
          }
        },
      ],
      treatments: [
        { 
          id: '1', 
          name: 'Heart Bypass Surgery', 
          description: 'Advanced cardiac procedure with 70% cost savings.', 
          price: '$4,000', 
          duration: '7-10 days',
          fullDetails: {
            overview: 'CABG surgery to restore blood flow around blocked arteries.',
            benefits: 'Minimally invasive options, quick recovery, JCI-accredited surgeons.',
            inclusions: 'Hospital stay, surgeon fees, post-op care, airport transfers.',
            successRate: '98%',
            image: 'https://via.placeholder.com/400x200?text=Heart+Bypass'
          }
        },
        { 
          id: '2', 
          name: 'Knee Replacement', 
          description: 'Robotic-assisted orthopedic surgery.', 
          price: '$950', 
          duration: '5-7 days',
          fullDetails: {
            overview: 'Total knee arthroplasty with custom implants.',
            benefits: 'Pain-free mobility, lifetime warranty on prosthetics, physio included.',
            inclusions: 'Pre-op assessment, surgery, rehab program, follow-up.',
            successRate: '95%',
            image: 'https://via.placeholder.com/400x200?text=Knee+Replacement'
          }
        },
        { 
          id: '3', 
          name: 'LASIK Eye Surgery', 
          description: 'Bladeless vision correction.', 
          price: '$1,200', 
          duration: '1 day',
          fullDetails: {
            overview: 'Laser reshaping of cornea for glasses-free vision.',
            benefits: '20/20 vision guarantee, same-day procedure, minimal downtime.',
            inclusions: 'Consultation, surgery, post-op checkups, medications.',
            successRate: '99%',
            image: 'https://via.placeholder.com/400x200?text=LASIK+Eye'
          }
        },
      ],
      doctors: [
        { 
          id: '1', 
          name: 'Dr. Rajesh Kumar', 
          specialty: 'Cardiologist', 
          experience: '20+ years', 
          rating: 4.9,
          fullDetails: {
            bio: 'Renowned cardiologist with expertise in interventional cardiology and heart transplants.',
            qualifications: 'MBBS, MD, DM (Cardiology), Fellowship in Interventional Cardiology',
            hospital: 'Apollo Hospitals Chennai',
            languages: 'English, Hindi, Tamil',
            image: 'https://via.placeholder.com/400x200?text=Dr+Rajesh'
          }
        },
        { 
          id: '2', 
          name: 'Dr. Priya Sharma', 
          specialty: 'Orthopedic Surgeon', 
          experience: '15+ years', 
          rating: 4.8,
          fullDetails: {
            bio: 'Expert in joint replacement and sports medicine surgeries.',
            qualifications: 'MBBS, MS (Orthopedics), Fellowship in Arthroscopy',
            hospital: 'Fortis Hospital Mumbai',
            languages: 'English, Hindi, Marathi',
            image: 'https://via.placeholder.com/400x200?text=Dr+Priya'
          }
        },
        { 
          id: '3', 
          name: 'Dr. Amit Patel', 
          specialty: 'Ophthalmologist', 
          experience: '18+ years', 
          rating: 4.7,
          fullDetails: {
            bio: 'Specialist in refractive surgery and corneal transplants.',
            qualifications: 'MBBS, MS (Ophthalmology), Fellowship in Cornea & Refractive Surgery',
            hospital: 'Max Super Speciality Delhi',
            languages: 'English, Hindi',
            image: 'https://via.placeholder.com/400x200?text=Dr+Amit'
          }
        },
      ],
    },
    thailand: {
      hospitals: [
        { 
          id: '4', 
          name: 'Bumrungrad International Hospital', 
          description: 'Top-rated for dental and cosmetic procedures.', 
          specialty: 'Dentistry, Cosmetic',
          fullDetails: {
            address: '33 Sukhumvit Soi 3, Wattana, Bangkok 10110, Thailand',
            phone: '+66 2 066 8888',
            email: 'info@bumrungrad.com',
            rating: 4.9,
            facilities: ['International Wing', 'Dental Center', 'Cosmetic Surgery', 'VIP Services'],
            image: 'https://via.placeholder.com/400x200?text=Bumrungrad'
          }
        },
        { 
          id: '5', 
          name: 'Samitivej Sukhumvit Hospital', 
          description: 'Excellent for fertility and wellness treatments.', 
          specialty: 'Fertility, Wellness',
          fullDetails: {
            address: '133 Sukhumvit 49, Klongtan Nua, Wattana, Bangkok 10110, Thailand',
            phone: '+66 2 022 2222',
            email: 'info@samitivej.co.th',
            rating: 4.8,
            facilities: ['IVF Center', 'Wellness Spa', 'Maternity Services', 'Executive Health Check'],
            image: 'https://via.placeholder.com/400x200?text=Samitivej'
          }
        },
      ],
      treatments: [
        { 
          id: '4', 
          name: 'Dental Implants', 
          description: 'Premium dental solutions with 80% savings.', 
          price: '$800', 
          duration: '2-3 days',
          fullDetails: {
            overview: 'Titanium implants for natural-looking teeth.',
            benefits: 'Same-day placement, lifetime guarantee, pain-free.',
            inclusions: 'Consultation, implants, crown fitting, follow-up.',
            successRate: '97%',
            image: 'https://via.placeholder.com/400x200?text=Dental+Implants'
          }
        },
        { 
          id: '5', 
          name: 'IVF Treatment', 
          description: 'Advanced fertility care.', 
          price: '$3,500', 
          duration: '4-6 weeks',
          fullDetails: {
            overview: 'In vitro fertilization with PGS screening for higher success.',
            benefits: 'Personalized cycles, emotional support, donor options.',
            inclusions: 'Medications, monitoring, embryo transfer, counseling.',
            successRate: '50%',
            image: 'https://via.placeholder.com/400x200?text=IVF+Treatment'
          }
        },
      ],
      doctors: [
        { 
          id: '4', 
          name: 'Dr. Somchai Lee', 
          specialty: 'Dentist', 
          experience: '12+ years', 
          rating: 4.9,
          fullDetails: {
            bio: 'Leading expert in implantology and cosmetic dentistry.',
            qualifications: 'DDS, MSc in Implant Dentistry',
            hospital: 'Bumrungrad International Hospital',
            languages: 'English, Thai',
            image: 'https://via.placeholder.com/400x200?text=Dr+Somchai'
          }
        },
        { 
          id: '5', 
          name: 'Dr. Nida Wong', 
          specialty: 'Fertility Specialist', 
          experience: '14+ years', 
          rating: 4.8,
          fullDetails: {
            bio: 'Renowned for successful IVF treatments and reproductive medicine.',
            qualifications: 'MD, Fellowship in Reproductive Endocrinology',
            hospital: 'Samitivej Sukhumvit Hospital',
            languages: 'English, Thai',
            image: 'https://via.placeholder.com/400x200?text=Dr+Nida'
          }
        },
      ],
    },
    singapore: {
      hospitals: [
        { 
          id: '6', 
          name: 'Mount Elizabeth Hospital', 
          description: 'Premium care for complex surgeries.', 
          specialty: 'Cardiology, Oncology',
          fullDetails: {
            address: '3 Mount Elizabeth, Singapore 228510',
            phone: '+65 6737 2666',
            email: 'info@mounte.com',
            rating: 4.9,
            facilities: ['Robotic Surgery', 'Oncology Center', 'Private Rooms', 'International Patient Services'],
            image: 'https://via.placeholder.com/400x200?text=Mount+Elizabeth'
          }
        },
      ],
      treatments: [
        { 
          id: '6', 
          name: 'Cancer Treatment', 
          description: 'Cutting-edge oncology therapies.', 
          price: '$15,000', 
          duration: 'Varies',
          fullDetails: {
            overview: 'Personalized cancer care including chemotherapy, radiation, and immunotherapy.',
            benefits: 'Multidisciplinary team, latest clinical trials, supportive care.',
            inclusions: 'Consultation, treatment plan, medications, palliative support.',
            successRate: '85%',
            image: 'https://via.placeholder.com/400x200?text=Cancer+Treatment'
          }
        },
      ],
      doctors: [
        { 
          id: '6', 
          name: 'Dr. Lim Wei', 
          specialty: 'Oncologist', 
          experience: '22+ years', 
          rating: 4.9,
          fullDetails: {
            bio: 'Expert in hematology and solid tumor oncology.',
            qualifications: 'MBBS, FRCP, Fellowship in Medical Oncology',
            hospital: 'Mount Elizabeth Hospital',
            languages: 'English, Mandarin',
            image: 'https://via.placeholder.com/400x200?text=Dr+Lim'
          }
        },
      ],
    },
    turkey: {
      hospitals: [
        { 
          id: '7', 
          name: 'Acibadem Hospital Istanbul', 
          description: 'Specialized in hair transplants and eye surgery.', 
          specialty: 'Cosmetic, Ophthalmology',
          fullDetails: {
            address: 'Kadikoy, Istanbul, Turkey',
            phone: '+90 216 544 4646',
            email: 'info@acibadem.com.tr',
            rating: 4.8,
            facilities: ['Hair Transplant Center', 'Eye Clinic', 'Aesthetic Surgery', 'Medical Tourism Desk'],
            image: 'https://via.placeholder.com/400x200?text=Acibadem+Istanbul'
          }
        },
      ],
      treatments: [
        { 
          id: '7', 
          name: 'Hair Transplant', 
          description: 'Advanced FUE technique.', 
          price: '$2,500', 
          duration: '3 days',
          fullDetails: {
            overview: 'Follicular Unit Extraction for natural hair restoration.',
            benefits: 'No scars, high density, quick recovery.',
            inclusions: 'Consultation, procedure, post-op care, hotel stay.',
            successRate: '95%',
            image: 'https://via.placeholder.com/400x200?text=Hair+Transplant'
          }
        },
      ],
      doctors: [
        { 
          id: '7', 
          name: 'Dr. Ahmet Oz', 
          specialty: 'Plastic Surgeon', 
          experience: '16+ years', 
          rating: 4.8,
          fullDetails: {
            bio: 'World-renowned for aesthetic and reconstructive surgery.',
            qualifications: 'MD, Plastic Surgery Board Certified',
            hospital: 'Acibadem Hospital Istanbul',
            languages: 'English, Turkish',
            image: 'https://via.placeholder.com/400x200?text=Dr+Ahmet'
          }
        },
      ],
    },
    mexico: {
      hospitals: [
        { 
          id: '8', 
          name: 'Hospital Angeles Tijuana', 
          description: 'Affordable dental and bariatric care.', 
          specialty: 'Dentistry, Bariatric',
          fullDetails: {
            address: 'Paseo del Rio 100, Tijuana, Mexico',
            phone: '+52 664 621 0000',
            email: 'info@hospitalangeles.com',
            rating: 4.6,
            facilities: ['Dental Clinic', 'Bariatric Center', 'Cross-Border Services', 'English-Speaking Staff'],
            image: 'https://via.placeholder.com/400x200?text=Hospital+Angeles'
          }
        },
      ],
      treatments: [
        { 
          id: '8', 
          name: 'Gastric Sleeve Surgery', 
          description: 'Weight loss procedure.', 
          price: '$4,500', 
          duration: '2 days',
          fullDetails: {
            overview: 'Laparoscopic sleeve gastrectomy for obesity treatment.',
            benefits: 'Significant weight loss, low complication rate, quick recovery.',
            inclusions: 'Pre-op diet, surgery, nutrition counseling, follow-up.',
            successRate: '90%',
            image: 'https://via.placeholder.com/400x200?text=Gastric+Sleeve'
          }
        },
      ],
      doctors: [
        { 
          id: '8', 
          name: 'Dr. Maria Gonzalez', 
          specialty: 'Bariatric Surgeon', 
          experience: '10+ years', 
          rating: 4.7,
          fullDetails: {
            bio: 'Specialist in minimally invasive weight loss surgeries.',
            qualifications: 'MD, Fellowship in Bariatric Surgery',
            hospital: 'Hospital Angeles Tijuana',
            languages: 'English, Spanish',
            image: 'https://via.placeholder.com/400x200?text=Dr+Maria'
          }
        },
      ],
    },
    malaysia: {
      hospitals: [
        { 
          id: '9', 
          name: 'Gleneagles Hospital Kuala Lumpur', 
          description: 'Comprehensive wellness and check-up programs.', 
          specialty: 'Wellness, General',
          fullDetails: {
            address: '282 & 286 Jalan Ampang, Kuala Lumpur 50450, Malaysia',
            phone: '+60 3 4141 3000',
            email: 'info@gleneagles.com.my',
            rating: 4.7,
            facilities: ['Health Screening Center', 'Wellness Programs', 'General Medicine', 'International Clinic'],
            image: 'https://via.placeholder.com/400x200?text=Gleneagles+KL'
          }
        },
      ],
      treatments: [
        { 
          id: '9', 
          name: 'Full Body Health Checkup', 
          description: 'Executive screening package.', 
          price: '$500', 
          duration: '1 day',
          fullDetails: {
            overview: 'Comprehensive health assessment with lab tests and consultations.',
            benefits: 'Early detection, personalized reports, follow-up recommendations.',
            inclusions: 'Blood tests, imaging, doctor consultation, nutrition advice.',
            successRate: 'N/A',
            image: 'https://via.placeholder.com/400x200?text=Health+Checkup'
          }
        },
      ],
      doctors: [
        { 
          id: '9', 
          name: 'Dr. Tan Lee', 
          specialty: 'General Physician', 
          experience: '13+ years', 
          rating: 4.6,
          fullDetails: {
            bio: 'Experienced in preventive medicine and chronic disease management.',
            qualifications: 'MBBS, Diploma in Family Medicine',
            hospital: 'Gleneagles Hospital Kuala Lumpur',
            languages: 'English, Malay, Mandarin',
            image: 'https://via.placeholder.com/400x200?text=Dr+Tan'
          }
        },
      ],
    },
  };

  const handleSearch = () => {
    if (selectedLocation) {
      setSearchTriggered(true);
    } else {
      alert('Please select a preferred location before searching.');
    }
  };

  const openDetails = (item) => {
    setSelectedItem({ ...item, tab: activeTab });
  };

  const closeDetails = () => {
    setSelectedItem(null);
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

    // If no query, show all results
    if (searchQuery.trim() === '') {
      switch (activeTab) {
        case 'hospitals':
          results = locationData.hospitals;
          break;
        case 'treatments':
          results = locationData.treatments;
          break;
        case 'doctors':
          results = locationData.doctors;
          break;
      }
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
          Showing {results.length} results for "{searchQuery || 'all'}" in {selectedLocation}:
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
              <Button onClick={() => openDetails(item)} variant="ghost" size="sm" className="mt-2 flex items-center gap-1">
                View Details <ArrowRight className="w-3 h-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  // Details Modal
  if (selectedItem) {
    const { name, fullDetails, tab, rating } = selectedItem;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold">{name}</h2>
            <Button variant="ghost" size="sm" onClick={closeDetails}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-6 space-y-4">
            <img src={fullDetails.image} alt={name} className="w-full h-48 object-cover rounded mb-4" />
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-bold">{rating || fullDetails.rating}</span>
            </div>
            {tab === 'hospitals' && (
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{fullDetails.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${fullDetails.phone}`} className="hover:underline">{fullDetails.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${fullDetails.email}`} className="hover:underline">{fullDetails.email}</a>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {fullDetails.facilities.map((facility, index) => (
                    <Badge key={index} variant="secondary">{facility}</Badge>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-primary text-primary-foreground">Book Appointment</Button>
              </div>
            )}
            {tab === 'treatments' && (
              <div className="space-y-3">
                <h3 className="font-semibold">Overview</h3>
                <p>{fullDetails.overview}</p>
                <h3 className="font-semibold">Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {fullDetails.benefits.split('. ').filter(b => b.trim()).map((benefit, index) => (
                    <li key={index}>{benefit.trim()}.</li>
                  ))}
                </ul>
                <h3 className="font-semibold">Inclusions</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {fullDetails.inclusions.split('. ').filter(i => i.trim()).map((inclusion, index) => (
                    <li key={index}>{inclusion.trim()}.</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-4 border-t">
                  <Badge variant="outline" className="text-lg">Success Rate: {fullDetails.successRate}</Badge>
                  <Button variant="outline" size="sm">Book Now</Button>
                </div>
                <Button className="w-full mt-4 bg-primary text-primary-foreground">Get Quote</Button>
              </div>
            )}
            {tab === 'doctors' && (
              <div className="space-y-3">
                <h3 className="font-semibold">Bio</h3>
                <p>{fullDetails.bio}</p>
                <h3 className="font-semibold">Qualifications</h3>
                <p>{fullDetails.qualifications}</p>
                <h3 className="font-semibold">Affiliated Hospital</h3>
                <p>{fullDetails.hospital}</p>
                <h3 className="font-semibold">Languages Spoken</h3>
                <p>{fullDetails.languages}</p>
                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline" size="sm">Book Appointment</Button>
                  <Button variant="ghost" size="sm">View Profile</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

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