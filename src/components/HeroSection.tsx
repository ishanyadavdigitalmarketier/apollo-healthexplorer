// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Badge } from '@/components/ui/badge';
// import { Search, Stethoscope, Building2, UserCheck } from 'lucide-react';
// import heroImage from '@/assets/hero-medical.jpg';

// const HeroSection = () => {
//   const [activeTab, setActiveTab] = useState('treatments');

//   const popularTreatments = [
//     'Heart Surgery',
//     'Orthopedic Surgery', 
//     'Cosmetic Surgery',
//     'Dental Treatments',
//     'Eye Surgery',
//     'Cancer Treatment'
//   ];

//   return (
//     <section 
//       className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat"
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
//       <div className="relative container mx-auto px-4 py-20">
//         <div className="max-w-4xl">
//           {/* Hero Text */}
//           <div className="text-white mb-12">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               World-Class
//               <br />
//               Healthcare
//               <br />
//               Within Reach
//             </h1>
//             <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
//               Connect with top hospitals and specialists worldwide. Quality medical care at affordable prices, with personalized support every step of the way.
//             </p>
//           </div>

//           {/* Search Card */}
//           <div className="bg-white rounded-2xl p-8 shadow-2xl">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-foreground mb-2">Find Your Perfect Medical Solution</h2>
//               <p className="text-muted-foreground">Search from thousands of treatments, hospitals, and specialists</p>
//             </div>

//             {/* Tabs */}
//             <div className="flex gap-2 mb-6">
//               <Button
//                 variant={activeTab === 'treatments' ? 'default' : 'outline'}
//                 onClick={() => setActiveTab('treatments')}
//                 className="flex items-center gap-2"
//               >
//                 <Stethoscope size={16} />
//                 Treatments
//               </Button>
//               <Button
//                 variant={activeTab === 'hospitals' ? 'default' : 'outline'}
//                 onClick={() => setActiveTab('hospitals')}
//                 className="flex items-center gap-2"
//               >
//                 <Building2 size={16} />
//                 Hospitals
//               </Button>
//               <Button
//                 variant={activeTab === 'doctors' ? 'default' : 'outline'}
//                 onClick={() => setActiveTab('doctors')}
//                 className="flex items-center gap-2"
//               >
//                 <UserCheck size={16} />
//                 Doctors
//               </Button>
//             </div>

//             {/* Search Form */}
//             <div className="grid md:grid-cols-3 gap-4 mb-6">
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium mb-2">What are you looking for?</label>
//                 <Input 
//                   placeholder="Search treatments..." 
//                   className="h-12"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Preferred Location</label>
//                 <Select>
//                   <SelectTrigger className="h-12">
//                     <SelectValue placeholder="Select country" />
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

//             <Button size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 h-12 px-8">
//               <Search size={20} className="mr-2" />
//               Search
//             </Button>

//             {/* Popular Treatments */}
//             <div className="mt-6">
//               <p className="text-sm text-muted-foreground mb-3">Popular Treatments:</p>
//               <div className="flex flex-wrap gap-2">
//                 {popularTreatments.map((treatment, index) => (
//                   <Badge 
//                     key={index} 
//                     variant="secondary" 
//                     className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
//                   >
//                     {treatment}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Stethoscope, Building2, UserCheck, MapPin, Calendar, DollarSign } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('treatments');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Mock data for treatments, hospitals, and doctors per location
  const dataByLocation = {
    india: {
      treatments: [
        { name: 'Heart Surgery', cost: '$5,000', duration: '7 days' },
        { name: 'Orthopedic Surgery', cost: '$3,500', duration: '5 days' },
        { name: 'Cosmetic Surgery', cost: '$2,000', duration: '3 days' },
        { name: 'Dental Treatments', cost: '$800', duration: '2 days' },
        { name: 'Eye Surgery', cost: '$1,500', duration: '4 days' },
        { name: 'Cancer Treatment', cost: '$10,000', duration: '14 days' }
      ],
      hospitals: [
        { name: 'Apollo Hospitals', rating: 4.8, specialties: ['Cardiology', 'Orthopedics'] },
        { name: 'Fortis Healthcare', rating: 4.7, specialties: ['Oncology', 'Neurology'] },
        { name: 'Max Super Speciality', rating: 4.9, specialties: ['Cosmetic', 'Dental'] }
      ],
      doctors: [
        { name: 'Dr. Rajesh Kumar', specialty: 'Cardiologist', experience: '20 years', rating: 4.9 },
        { name: 'Dr. Priya Sharma', specialty: 'Orthopedist', experience: '15 years', rating: 4.8 },
        { name: 'Dr. Amit Patel', specialty: 'Oncologist', experience: '18 years', rating: 4.7 }
      ]
    },
    thailand: {
      treatments: [
        { name: 'Heart Surgery', cost: '$4,500', duration: '6 days' },
        { name: 'Orthopedic Surgery', cost: '$3,000', duration: '4 days' },
        { name: 'Cosmetic Surgery', cost: '$1,800', duration: '2 days' },
        { name: 'Dental Treatments', cost: '$700', duration: '1 day' },
        { name: 'Eye Surgery', cost: '$1,200', duration: '3 days' },
        { name: 'Cancer Treatment', cost: '$9,000', duration: '12 days' }
      ],
      hospitals: [
        { name: 'Bumrungrad International', rating: 4.9, specialties: ['Cardiology', 'Cosmetic'] },
        { name: 'Bangkok Hospital', rating: 4.8, specialties: ['Orthopedics', 'Oncology'] },
        { name: 'Samitivej Hospital', rating: 4.7, specialties: ['Dental', 'Eye Care'] }
      ],
      doctors: [
        { name: 'Dr. Somchai Lee', specialty: 'Cardiologist', experience: '22 years', rating: 4.9 },
        { name: 'Dr. Naree Wong', specialty: 'Orthopedist', experience: '16 years', rating: 4.8 },
        { name: 'Dr. Chaiya Suk', specialty: 'Oncologist', experience: '19 years', rating: 4.7 }
      ]
    },
    singapore: {
      treatments: [
        { name: 'Heart Surgery', cost: '$15,000', duration: '8 days' },
        { name: 'Orthopedic Surgery', cost: '$8,000', duration: '6 days' },
        { name: 'Cosmetic Surgery', cost: '$5,000', duration: '4 days' },
        { name: 'Dental Treatments', cost: '$1,500', duration: '3 days' },
        { name: 'Eye Surgery', cost: '$3,000', duration: '5 days' },
        { name: 'Cancer Treatment', cost: '$20,000', duration: '15 days' }
      ],
      hospitals: [
        { name: 'Mount Elizabeth Hospital', rating: 4.9, specialties: ['Cardiology', 'Oncology'] },
        { name: 'Singapore General Hospital', rating: 4.8, specialties: ['Orthopedics', 'Neurology'] },
        { name: 'Gleneagles Hospital', rating: 4.7, specialties: ['Cosmetic', 'Eye Care'] }
      ],
      doctors: [
        { name: 'Dr. Lim Wei', specialty: 'Cardiologist', experience: '25 years', rating: 5.0 },
        { name: 'Dr. Tan Mei', specialty: 'Orthopedist', experience: '20 years', rating: 4.9 },
        { name: 'Dr. Goh Hock', specialty: 'Oncologist', experience: '21 years', rating: 4.8 }
      ]
    },
    turkey: {
      treatments: [
        { name: 'Heart Surgery', cost: '$6,000', duration: '7 days' },
        { name: 'Orthopedic Surgery', cost: '$4,000', duration: '5 days' },
        { name: 'Cosmetic Surgery', cost: '$2,500', duration: '3 days' },
        { name: 'Dental Treatments', cost: '$900', duration: '2 days' },
        { name: 'Eye Surgery', cost: '$1,800', duration: '4 days' },
        { name: 'Cancer Treatment', cost: '$12,000', duration: '14 days' }
      ],
      hospitals: [
        { name: 'Acibadem Healthcare', rating: 4.8, specialties: ['Cardiology', 'Cosmetic'] },
        { name: 'Memorial Hospitals', rating: 4.7, specialties: ['Orthopedics', 'Oncology'] },
        { name: 'Medipol University Hospital', rating: 4.6, specialties: ['Dental', 'Eye Care'] }
      ],
      doctors: [
        { name: 'Dr. Ahmet Oz', specialty: 'Cardiologist', experience: '18 years', rating: 4.8 },
        { name: 'Dr. Elif Kaya', specialty: 'Orthopedist', experience: '14 years', rating: 4.7 },
        { name: 'Dr. Mehmet Ali', specialty: 'Oncologist', experience: '17 years', rating: 4.6 }
      ]
    },
    mexico: {
      treatments: [
        { name: 'Heart Surgery', cost: '$7,000', duration: '7 days' },
        { name: 'Orthopedic Surgery', cost: '$4,500', duration: '5 days' },
        { name: 'Cosmetic Surgery', cost: '$3,000', duration: '3 days' },
        { name: 'Dental Treatments', cost: '$1,000', duration: '2 days' },
        { name: 'Eye Surgery', cost: '$2,000', duration: '4 days' },
        { name: 'Cancer Treatment', cost: '$15,000', duration: '14 days' }
      ],
      hospitals: [
        { name: 'Hospital Angeles', rating: 4.7, specialties: ['Cardiology', 'Orthopedics'] },
        { name: 'ABC Medical Center', rating: 4.8, specialties: ['Oncology', 'Cosmetic'] },
        { name: 'Star Medica', rating: 4.6, specialties: ['Dental', 'Eye Care'] }
      ],
      doctors: [
        { name: 'Dr. Carlos Ramirez', specialty: 'Cardiologist', experience: '19 years', rating: 4.7 },
        { name: 'Dr. Maria Lopez', specialty: 'Orthopedist', experience: '15 years', rating: 4.8 },
        { name: 'Dr. Juan Hernandez', specialty: 'Oncologist', experience: '16 years', rating: 4.6 }
      ]
    },
    malaysia: {
      treatments: [
        { name: 'Heart Surgery', cost: '$5,500', duration: '7 days' },
        { name: 'Orthopedic Surgery', cost: '$3,800', duration: '5 days' },
        { name: 'Cosmetic Surgery', cost: '$2,200', duration: '3 days' },
        { name: 'Dental Treatments', cost: '$850', duration: '2 days' },
        { name: 'Eye Surgery', cost: '$1,600', duration: '4 days' },
        { name: 'Cancer Treatment', cost: '$11,000', duration: '14 days' }
      ],
      hospitals: [
        { name: 'Gleneagles Kuala Lumpur', rating: 4.8, specialties: ['Cardiology', 'Oncology'] },
        { name: 'Pantai Hospital', rating: 4.7, specialties: ['Orthopedics', 'Cosmetic'] },
        { name: 'Sunway Medical Centre', rating: 4.9, specialties: ['Dental', 'Eye Care'] }
      ],
      doctors: [
        { name: 'Dr. Ahmad Bin', specialty: 'Cardiologist', experience: '21 years', rating: 4.8 },
        { name: 'Dr. Siti Rahman', specialty: 'Orthopedist', experience: '17 years', rating: 4.7 },
        { name: 'Dr. Kumar Nair', specialty: 'Oncologist', experience: '20 years', rating: 4.9 }
      ]
    }
  };

  const currentData = selectedLocation ? dataByLocation[selectedLocation] : null;

  const renderTabContent = () => {
    if (!selectedLocation) {
      return (
        <div className="text-center py-8 text-muted-foreground">
          Please select a location to view details.
        </div>
      );
    }

    switch (activeTab) {
      case 'treatments':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MapPin size={20} />
              Treatments in {selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1)}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentData.treatments.map((treatment, index) => (
                <div key={index} className="border rounded-lg p-4 bg-card">
                  <h4 className="font-medium">{treatment.name}</h4>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {treatment.duration}</span>
                    <span className="flex items-center gap-1"><DollarSign size={14} /> {treatment.cost}</span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3 w-full">Book Now</Button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'hospitals':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Building2 size={20} />
              Hospitals in {selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1)}
            </h3>
            <div className="space-y-3">
              {currentData.hospitals.map((hospital, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg bg-card">
                  <div className="flex-1">
                    <h4 className="font-medium">{hospital.name}</h4>
                    <p className="text-sm text-muted-foreground">Specialties: {hospital.specialties.join(', ')}</p>
                  </div>
                  <Badge variant="secondary">{hospital.rating} ★</Badge>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'doctors':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <UserCheck size={20} />
              Doctors in {selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1)}
            </h3>
            <div className="space-y-3">
              {currentData.doctors.map((doctor, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg bg-card">
                  <div className="flex-1">
                    <h4 className="font-medium">{doctor.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {doctor.specialty} • {doctor.experience} experience
                    </p>
                  </div>
                  <Badge variant="secondary">{doctor.rating} ★</Badge>
                  <Button variant="outline" size="sm">Book Appointment</Button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat"
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
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Hero Text */}
          <div className="text-white mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              World-Class
              <br />
              Healthcare
              <br />
              Within Reach
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
              Connect with top hospitals and specialists worldwide. Quality medical care at affordable prices, with personalized support every step of the way.
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Find Your Perfect Medical Solution</h2>
              <p className="text-muted-foreground">Search from thousands of treatments, hospitals, and specialists</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <Button
                variant={activeTab === 'treatments' ? 'default' : 'outline'}
                onClick={() => setActiveTab('treatments')}
                className="flex items-center gap-2"
              >
                <Stethoscope size={16} />
                Treatments
              </Button>
              <Button
                variant={activeTab === 'hospitals' ? 'default' : 'outline'}
                onClick={() => setActiveTab('hospitals')}
                className="flex items-center gap-2"
              >
                <Building2 size={16} />
                Hospitals
              </Button>
              <Button
                variant={activeTab === 'doctors' ? 'default' : 'outline'}
                onClick={() => setActiveTab('doctors')}
                className="flex items-center gap-2"
              >
                <UserCheck size={16} />
                Doctors
              </Button>
            </div>

            {/* Search Form */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">What are you looking for?</label>
                <Input 
                  placeholder={`Search ${activeTab}...`} 
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Location</label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select country" />
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

            <Button size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 h-12 px-8 mb-6">
              <Search size={20} className="mr-2" />
              Search
            </Button>

            {/* Tab Content */}
            {renderTabContent()}

            {/* Fallback Popular Treatments (only if no location selected and treatments tab) */}
            {activeTab === 'treatments' && !selectedLocation && (
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">Popular Treatments:</p>
                <div className="flex flex-wrap gap-2">
                  {['Heart Surgery', 'Orthopedic Surgery', 'Cosmetic Surgery', 'Dental Treatments', 'Eye Surgery', 'Cancer Treatment'].map((treatment, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
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