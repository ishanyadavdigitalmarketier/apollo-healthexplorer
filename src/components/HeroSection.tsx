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
// HeroSection.tsx - Updated with translations, functional search, and inline details modal
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
            image: 'https://example.com/apollo-chennai.jpg'
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
            image: 'https://example.com/fortis-mumbai.jpg'
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
            image: 'https://example.com/max-delhi.jpg'
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
            image: 'https://example.com/heart-bypass.jpg'
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
            image: 'https://example.com/knee-replacement.jpg'
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
            image: 'https://example.com/lasik-eye.jpg'
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
            image: 'https://example.com/dr-rajesh.jpg'
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
            image: 'https://example.com/dr-priya.jpg'
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
            image: 'https://example.com/dr-amit.jpg'
          }
        },
      ],
    },
    // ... (keep other locations similar, add fullDetails to each item for consistency)
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
            image: 'https://example.com/bumrungrad.jpg'
          }
        },
        // Add fullDetails for others...
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
            image: 'https://example.com/dental-implants.jpg'
          }
        },
        // Add fullDetails for others...
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
            image: 'https://example.com/dr-somchai.jpg'
          }
        },
        // Add fullDetails for others...
      ],
    },
    // Similar structure for singapore, turkey, mexico, malaysia...
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
    const { name, fullDetails, tab } = selectedItem;
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
            {tab === 'hospitals' && (
              <div>
                <img src={fullDetails.image || '/placeholder-hospital.jpg'} alt={name} className="w-full h-48 object-cover rounded mb-4" />
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-bold">{fullDetails.rating}</span>
                </div>
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
                </div>
              </div>
            )}
            {tab === 'treatments' && (
              <div>
                <img src={fullDetails.image || '/placeholder-treatment.jpg'} alt={name} className="w-full h-48 object-cover rounded mb-4" />
                <div className="space-y-3">
                  <h3 className="font-semibold">Overview</h3>
                  <p>{fullDetails.overview}</p>
                  <h3 className="font-semibold">Benefits</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {fullDetails.benefits.split('. ').map((benefit, index) => (
                      <li key={index}>{benefit}.</li>
                    ))}
                  </ul>
                  <h3 className="font-semibold">Inclusions</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {fullDetails.inclusions.split('. ').map((inclusion, index) => (
                      <li key={index}>{inclusion}.</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <Badge variant="outline" className="text-lg">Success Rate: {fullDetails.successRate}</Badge>
                    <Button variant="outline" size="sm">Book Now</Button>
                  </div>
                </div>
              </div>
            )}
            {tab === 'doctors' && (
              <div>
                <img src={fullDetails.image || '/placeholder-doctor.jpg'} alt={name} className="w-full h-48 object-cover rounded mb-4" />
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-bold">4.8</span>
                </div>
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
          </div>

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
    </section>
  );
};

export default HeroSection;