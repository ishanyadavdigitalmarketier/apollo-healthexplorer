// // pages/Hospitals.tsx
// import { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Hospital, MapPin, Star, Search, Image as ImageIcon } from 'lucide-react';
// import Header from '@/components/Header';

// const Hospitals = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredHospitals, setFilteredHospitals] = useState([]);
//   const [imageErrors, setImageErrors] = useState({});

//   useEffect(() => {
//     // Start of Tawk.to Script
//     var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
//     (function() {
//       var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//       s1.async = true;
//       s1.src = 'https://embed.tawk.to/68ecb5587e32cc195255b4eb/1j7ea8pbh';
//       s1.charset = 'UTF-8';
//       s1.setAttribute('crossorigin', '*');
//       s0.parentNode.insertBefore(s1, s0);
//     })();
//     // End of Tawk.to Script
//   }, []);

//   const handleImageError = (hospitalName) => {
//     setImageErrors(prev => ({
//       ...prev,
//       [hospitalName]: true
//     }));
//   };

//   const hospitals = [
//     {
//       name: 'Groote Schuur Hospital',
//       location: 'Cape Town, Western Cape',
//       specialty: 'Public Teaching Hospital',
//       description: 'One of South Africa\'s largest public hospitals, famous for performing the world\'s first heart transplant. Offers comprehensive medical services and serves as a major teaching hospital.',
//       image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=300&fit=crop&auto=format',
//       type: 'public',
//       rating: 4.2,
//       features: ['Emergency', 'Surgery', 'Cardiology', 'Oncology']
//     },
//     {
//       name: 'Netcare Christiaan Barnard Memorial Hospital',
//       location: 'Cape Town, Western Cape',
//       specialty: 'Private Multi-Specialty',
//       description: 'Leading private hospital in Cape Town offering world-class healthcare with state-of-the-art facilities and specialized medical professionals.',
//       image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=300&fit=crop&auto=format',
//       type: 'private',
//       rating: 4.5,
//       features: ['Cardiac Surgery', 'Neurosurgery', 'Oncology', 'Emergency']
//     },
//     {
//       name: 'Tygerberg Hospital',
//       location: 'Cape Town, Western Cape',
//       specialty: 'Public Academic Hospital',
//       description: 'Second largest hospital in South Africa and major teaching hospital serving the Western Cape region with comprehensive medical services.',
//       image: 'https://images.unsplash.com/photo-1516549655669-dfbf54c5a709?w=300&h=300&fit=crop&auto=format',
//       type: 'public',
//       rating: 4.0,
//       features: ['Trauma Center', 'Teaching Hospital', 'Multiple Specialties']
//     },
//     {
//       name: 'Life Kingsbury Hospital',
//       location: 'Cape Town, Western Cape',
//       specialty: 'Private Comprehensive Care',
//       description: 'Premier private healthcare facility offering advanced medical technology and specialized treatment across various medical disciplines.',
//       image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=300&fit=crop&auto=format',
//       type: 'private',
//       rating: 4.4,
//       features: ['Surgical', 'Maternity', 'ICU', 'Oncology']
//     },
//     {
//       name: 'Netcare Parklands Hospital',
//       location: 'Durban, KwaZulu-Natal',
//       specialty: 'Private Multi-Specialty',
//       description: 'Modern private hospital in Durban providing comprehensive healthcare services with advanced medical technology and specialist care.',
//       image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=300&fit=crop&auto=format',
//       type: 'private',
//       rating: 4.3,
//       features: ['Surgery', 'Cardiology', 'Maternity', 'Emergency']
//     },
//     {
//       name: 'Addington Hospital',
//       location: 'Durban, KwaZulu-Natal',
//       specialty: 'Public Coastal Hospital',
//       description: 'Major public hospital serving Durban and surrounding areas with comprehensive emergency and specialized medical services.',
//       image: 'https://images.unsplash.com/photo-1516549655669-dfbf54c5a709?w=300&h=300&fit=crop&auto=format',
//       type: 'public',
//       rating: 3.9,
//       features: ['Emergency', 'Trauma', 'Surgical', 'Medical']
//     },
//     {
//       name: 'Johannesburg General Hospital',
//       location: 'Johannesburg, Gauteng',
//       specialty: 'Public Academic Hospital',
//       description: 'One of the largest public hospitals in South Africa, serving as a major referral center and teaching hospital for the region.',
//       image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=300&fit=crop&auto=format',
//       type: 'public',
//       rating: 4.1,
//       features: ['Teaching Hospital', 'Multiple Specialties', 'Emergency']
//     },
//     {
//       name: 'Mediclinic Vergelegen',
//       location: 'Somerset West, Western Cape',
//       specialty: 'Private Surgical Hospital',
//       description: 'Modern private surgical hospital offering advanced medical procedures and comprehensive patient care in the Western Cape.',
//       image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=300&fit=crop&auto=format',
//       type: 'private',
//       rating: 4.4,
//       features: ['Surgical', 'Oncology', 'Cardiology', 'Orthopedics']
//     },
//     {
//       name: 'Red Cross War Memorial Children\'s Hospital',
//       location: 'Cape Town, Western Cape',
//       specialty: 'Pediatric Specialist',
//       description: 'Largest dedicated children\'s hospital in Africa, providing specialized pediatric care and serving as a referral center for complex childhood conditions.',
//       image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=300&fit=crop&auto=format',
//       type: 'public',
//       rating: 4.3,
//       features: ['Pediatric Surgery', 'Oncology', 'ICU', 'Specialized Care']
//     },
//     {
//       name: 'St. Augustine\'s Hospital',
//       location: 'Durban, KwaZulu-Natal',
//       specialty: 'Private Multi-Specialty',
//       description: 'Leading private hospital in Durban offering comprehensive medical services with advanced technology and specialist expertise.',
//       image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=300&fit=crop&auto=format',
//       type: 'private',
//       rating: 4.4,
//       features: ['Cardiac', 'Neuroscience', 'Oncology', 'Surgical']
//     },
//     {
//       name: 'Cape Town Eye Hospital',
//       location: 'Cape Town, Western Cape',
//       specialty: 'Ophthalmology Specialist',
//       description: 'Specialized eye hospital providing comprehensive ophthalmology services including advanced surgical procedures and vision care.',
//       image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=300&fit=crop&auto=format',
//       type: 'private',
//       rating: 4.5,
//       features: ['Cataract Surgery', 'Retinal Care', 'Laser Treatment']
//     },
//     {
//       name: 'Steve Biko Academic Hospital',
//       location: 'Pretoria, Gauteng',
//       specialty: 'Public Academic Hospital',
//       description: 'Major academic hospital and referral center providing tertiary healthcare services and medical education in Pretoria.',
//       image: 'https://images.unsplash.com/photo-1516549655669-dfbf54c5a709?w=300&h=300&fit=crop&auto=format',
//       type: 'public',
//       rating: 4.0,
//       features: ['Teaching Hospital', 'Tertiary Care', 'Multiple Specialties']
//     }
//   ];

//   useEffect(() => {
//     const filtered = hospitals.filter(hospital => 
//       hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       hospital.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       hospital.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       hospital.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       hospital.features.some(feature => 
//         feature.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//     setFilteredHospitals(filtered);
//   }, [searchQuery]);

//   const popularSearches = [
//     'hospitals in cape town',
//     'hospital near me', 
//     'best hospital in south africa',
//     'private hospitals in durban',
//     'best oncology hospitals',
//     'children hospital',
//     'surgical hospital',
//     'eye hospital'
//   ];

//   // Fallback background colors for when images fail to load
//   const getFallbackBackground = (hospitalName) => {
//     const colors = [
//       'bg-blue-100', 'bg-green-100', 'bg-purple-100', 
//       'bg-orange-100', 'bg-pink-100', 'bg-indigo-100'
//     ];
//     const index = hospitalName.length % colors.length;
//     return colors[index];
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="container mx-auto px-4 py-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="bg-card p-6 rounded-lg shadow-md border">
//             <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
//               <Hospital className="h-5 w-5" />
//               South African Hospitals
//             </h2>
            
//             {/* Search Section */}
//             <div className="search-section mb-8">
//               <div className="relative">
//                 <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   type="text"
//                   placeholder="Search hospitals by name, location, specialty, or features..."
//                   className="pl-10 pr-4 py-2 w-full"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
              
//               {/* Popular Searches */}
//               <div className="mt-4">
//                 <p className="text-sm text-muted-foreground mb-2">Popular searches:</p>
//                 <div className="flex flex-wrap gap-2">
//                   {popularSearches.map((search, index) => (
//                     <Button
//                       key={index}
//                       variant="outline"
//                       size="sm"
//                       onClick={() => setSearchQuery(search)}
//                       className="text-xs"
//                     >
//                       {search}
//                     </Button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="hospitals-intro space-y-4 mb-8">
//               <h3 className="text-lg font-semibold text-primary">World-Class Healthcare Facilities Across South Africa</h3>
//               <p className="text-foreground leading-relaxed">
//                 Discover comprehensive healthcare services at leading hospitals throughout South Africa. From public academic institutions to private specialty centers, our network includes facilities renowned for medical excellence, advanced technology, and patient-centered care.
//               </p>
//               <p className="text-foreground leading-relaxed">
//                 Whether you need emergency care, specialized treatment, or routine medical services, South Africa's hospitals offer diverse options to meet your healthcare needs with internationally trained specialists and state-of-the-art facilities.
//               </p>
//             </div>

//             {/* Statistics */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//               <div className="bg-muted p-4 rounded-lg text-center">
//                 <div className="text-2xl font-bold text-primary">400+</div>
//                 <div className="text-sm text-muted-foreground">Hospitals Nationwide</div>
//               </div>
//               <div className="bg-muted p-4 rounded-lg text-center">
//                 <div className="text-2xl font-bold text-primary">85%</div>
//                 <div className="text-sm text-muted-foreground">Private Facilities</div>
//               </div>
//               <div className="bg-muted p-4 rounded-lg text-center">
//                 <div className="text-2xl font-bold text-primary">24/7</div>
//                 <div className="text-sm text-muted-foreground">Emergency Services</div>
//               </div>
//               <div className="bg-muted p-4 rounded-lg text-center">
//                 <div className="text-2xl font-bold text-primary">150+</div>
//                 <div className="text-sm text-muted-foreground">Specialties Covered</div>
//               </div>
//             </div>

//             <div className="hospitals-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//               {filteredHospitals.map((hospital, index) => (
//                 <div key={index} className="hospital-card p-5 bg-muted rounded-lg border hover:shadow-lg transition-shadow">
//                   <div className="flex justify-between items-start mb-3">
//                     <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
//                       hospital.type === 'private' 
//                         ? 'bg-green-100 text-green-800' 
//                         : 'bg-blue-100 text-blue-800'
//                     }`}>
//                       {hospital.type.toUpperCase()}
//                     </span>
//                     <div className="flex items-center gap-1">
//                       <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                       <span className="text-xs font-semibold">{hospital.rating}</span>
//                     </div>
//                   </div>
                  
//                   {/* Image with fallback */}
//                   <div className="relative w-20 h-20 mx-auto mb-4">
//                     {!imageErrors[hospital.name] ? (
//                       <img
//                         src={hospital.image}
//                         alt={`${hospital.name} facility`}
//                         className="w-full h-full rounded-full object-cover border-4 border-white shadow-sm"
//                         onError={() => handleImageError(hospital.name)}
//                         loading="lazy"
//                       />
//                     ) : (
//                       <div className={`w-full h-full rounded-full border-4 border-white shadow-sm flex items-center justify-center ${getFallbackBackground(hospital.name)}`}>
//                         <ImageIcon className="h-8 w-8 text-gray-400" />
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="hospital-specialty inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">
//                     {hospital.specialty}
//                   </div>
                  
//                   <h4 className="text-lg font-semibold text-primary mb-1">{hospital.name}</h4>
//                   <h5 className="text-sm text-muted-foreground mb-3 flex items-center justify-center gap-1">
//                     <MapPin className="h-3 w-3" />
//                     {hospital.location}
//                   </h5>
                  
//                   <p className="text-sm text-foreground leading-relaxed mb-4">{hospital.description}</p>
                  
//                   <div className="features flex flex-wrap gap-1 justify-center">
//                     {hospital.features.map((feature, idx) => (
//                       <span key={idx} className="bg-background px-2 py-1 rounded text-xs text-muted-foreground">
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {filteredHospitals.length === 0 && (
//               <div className="text-center py-12">
//                 <Hospital className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//                 <h3 className="text-lg font-semibold text-muted-foreground mb-2">
//                   No hospitals found
//                 </h3>
//                 <p className="text-muted-foreground">
//                   Try adjusting your search terms or browse the popular searches above.
//                 </p>
//               </div>
//             )}

//             <div className="visit-section text-center mt-12 p-6 bg-primary/5 rounded-lg">
//               <h3 className="text-lg font-semibold text-primary mb-4">Find Healthcare Near You</h3>
//               <p className="text-foreground mb-6">
//                 Our comprehensive network of hospitals across South Africa ensures you have access to quality healthcare when you need it most.
//               </p>
//               <div className="flex flex-wrap gap-4 justify-center">
//                 <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
//                   <a href="https://www.google.com/maps/search/hospitals+in+south+africa">
//                     Find Hospitals Near Me
//                   </a>
//                 </Button>
//                 <Button asChild variant="outline">
//                   <a href="https://www.google.com/maps/search/emergency+hospitals+near+me">
//                     Emergency Facilities
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Hospitals;
// pages/Hospitals.tsx
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Hospital, MapPin, Star, Search, Image as ImageIcon } from 'lucide-react';
import Header from '@/components/Header';

const Hospitals = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    // Start of Tawk.to Script
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/68ecb5587e32cc195255b4eb/1j7ea8pbh';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
    // End of Tawk.to Script
  }, []);

  const handleImageError = (hospitalName) => {
    setImageErrors(prev => ({
      ...prev,
      [hospitalName]: true
    }));
  };

  const hospitals = [
    {
      name: 'Groote Schuur Hospital',
      location: 'Cape Town, Western Cape',
      specialty: 'Public Teaching Hospital',
      description: 'One of South Africa\'s largest public hospitals, famous for performing the world\'s first heart transplant. Offers comprehensive medical services and serves as a major teaching hospital.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=300&fit=crop&auto=format',
      type: 'public',
      rating: 4.2,
      features: ['Emergency', 'Surgery', 'Cardiology', 'Oncology']
    },
    {
      name: 'Netcare Christiaan Barnard Memorial Hospital',
      location: 'Cape Town, Western Cape',
      specialty: 'Private Multi-Specialty',
      description: 'Leading private hospital in Cape Town offering world-class healthcare with state-of-the-art facilities and specialized medical professionals.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=300&fit=crop&auto=format',
      type: 'private',
      rating: 4.5,
      features: ['Cardiac Surgery', 'Neurosurgery', 'Oncology', 'Emergency']
    },
    {
      name: 'Tygerberg Hospital',
      location: 'Cape Town, Western Cape',
      specialty: 'Public Academic Hospital',
      description: 'Second largest hospital in South Africa and major teaching hospital serving the Western Cape region with comprehensive medical services.',
      image: 'https://images.unsplash.com/photo-1516549655669-dfbf54c5a709?w=300&h=300&fit=crop&auto=format',
      type: 'public',
      rating: 4.0,
      features: ['Trauma Center', 'Teaching Hospital', 'Multiple Specialties']
    },
    {
      name: 'Life Kingsbury Hospital',
      location: 'Cape Town, Western Cape',
      specialty: 'Private Comprehensive Care',
      description: 'Premier private healthcare facility offering advanced medical technology and specialized treatment across various medical disciplines.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=300&fit=crop&auto=format',
      type: 'private',
      rating: 4.4,
      features: ['Surgical', 'Maternity', 'ICU', 'Oncology']
    },
    {
      name: 'Netcare Parklands Hospital',
      location: 'Durban, KwaZulu-Natal',
      specialty: 'Private Multi-Specialty',
      description: 'Modern private hospital in Durban providing comprehensive healthcare services with advanced medical technology and specialist care.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=300&fit=crop&auto=format',
      type: 'private',
      rating: 4.3,
      features: ['Surgery', 'Cardiology', 'Maternity', 'Emergency']
    },
    {
      name: 'Addington Hospital',
      location: 'Durban, KwaZulu-Natal',
      specialty: 'Public Coastal Hospital',
      description: 'Major public hospital serving Durban and surrounding areas with comprehensive emergency and specialized medical services.',
      image: 'https://images.unsplash.com/photo-1516549655669-dfbf54c5a709?w=300&h=300&fit=crop&auto=format',
      type: 'public',
      rating: 3.9,
      features: ['Emergency', 'Trauma', 'Surgical', 'Medical']
    },
    {
      name: 'Johannesburg General Hospital',
      location: 'Johannesburg, Gauteng',
      specialty: 'Public Academic Hospital',
      description: 'One of the largest public hospitals in South Africa, serving as a major referral center and teaching hospital for the region.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=300&fit=crop&auto=format',
      type: 'public',
      rating: 4.1,
      features: ['Teaching Hospital', 'Multiple Specialties', 'Emergency']
    },
    {
      name: 'Mediclinic Vergelegen',
      location: 'Somerset West, Western Cape',
      specialty: 'Private Surgical Hospital',
      description: 'Modern private surgical hospital offering advanced medical procedures and comprehensive patient care in the Western Cape.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=300&fit=crop&auto=format',
      type: 'private',
      rating: 4.4,
      features: ['Surgical', 'Oncology', 'Cardiology', 'Orthopedics']
    },
    {
      name: 'Red Cross War Memorial Children\'s Hospital',
      location: 'Cape Town, Western Cape',
      specialty: 'Pediatric Specialist',
      description: 'Largest dedicated children\'s hospital in Africa, providing specialized pediatric care and serving as a referral center for complex childhood conditions.',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=300&fit=crop&auto=format',
      type: 'public',
      rating: 4.3,
      features: ['Pediatric Surgery', 'Oncology', 'ICU', 'Specialized Care']
    },
    {
      name: 'St. Augustine\'s Hospital',
      location: 'Durban, KwaZulu-Natal',
      specialty: 'Private Multi-Specialty',
      description: 'Leading private hospital in Durban offering comprehensive medical services with advanced technology and specialist expertise.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=300&fit=crop&auto=format',
      type: 'private',
      rating: 4.4,
      features: ['Cardiac', 'Neuroscience', 'Oncology', 'Surgical']
    },
    {
      name: 'Cape Town Eye Hospital',
      location: 'Cape Town, Western Cape',
      specialty: 'Ophthalmology Specialist',
      description: 'Specialized eye hospital providing comprehensive ophthalmology services including advanced surgical procedures and vision care.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=300&fit=crop&auto=format',
      type: 'private',
      rating: 4.5,
      features: ['Cataract Surgery', 'Retinal Care', 'Laser Treatment']
    },
    {
      name: 'Steve Biko Academic Hospital',
      location: 'Pretoria, Gauteng',
      specialty: 'Public Academic Hospital',
      description: 'Major academic hospital and referral center providing tertiary healthcare services and medical education in Pretoria.',
      image: 'https://images.unsplash.com/photo-1516549655669-dfbf54c5a709?w=300&h=300&fit=crop&auto=format',
      type: 'public',
      rating: 4.0,
      features: ['Teaching Hospital', 'Tertiary Care', 'Multiple Specialties']
    }
  ];

  useEffect(() => {
    const filtered = hospitals.filter(hospital => 
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.features.some(feature => 
        feature.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredHospitals(filtered);
  }, [searchQuery]);

  const popularSearches = [
    'hospitals in cape town',
    'hospital near me', 
    'best hospital in south africa',
    'private hospitals in durban',
    'best oncology hospitals',
    'children hospital',
    'surgical hospital',
    'eye hospital'
  ];

  // Fallback background colors for when images fail to load
  const getFallbackBackground = (hospitalName) => {
    const colors = [
      'bg-blue-100', 'bg-green-100', 'bg-purple-100', 
      'bg-orange-100', 'bg-pink-100', 'bg-indigo-100'
    ];
    const index = hospitalName.length % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h1 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
              <Hospital className="h-5 w-5" />
              South African Hospitals
            </h1>
            
            {/* Search Section */}
            <div className="search-section mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search hospitals by name, location, specialty, or features..."
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Popular Searches */}
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setSearchQuery(search)}
                      className="text-xs"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="hospitals-intro space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-primary">World-Class Healthcare Facilities Across South Africa</h3>
              <p className="text-foreground leading-relaxed">
                Discover comprehensive healthcare services at leading hospitals throughout South Africa. From public academic institutions to private specialty centers, our network includes facilities renowned for medical excellence, advanced technology, and patient-centered care.
              </p>
              <p className="text-foreground leading-relaxed">
                Whether you need emergency care, specialized treatment, or routine medical services, South Africa's hospitals offer diverse options to meet your healthcare needs with internationally trained specialists and state-of-the-art facilities.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">400+</div>
                <div className="text-sm text-muted-foreground">Hospitals Nationwide</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Private Facilities</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Services</div>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Specialties Covered</div>
              </div>
            </div>

            <div className="hospitals-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredHospitals.map((hospital, index) => (
                <div key={index} className="hospital-card p-5 bg-muted rounded-lg border hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      hospital.type === 'private' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {hospital.type.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold">{hospital.rating}</span>
                    </div>
                  </div>
                  
                  {/* Image with fallback */}
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    {!imageErrors[hospital.name] ? (
                      <img
                        src={hospital.image}
                        alt={`${hospital.name} facility`}
                        className="w-full h-full rounded-full object-cover border-4 border-white shadow-sm"
                        onError={() => handleImageError(hospital.name)}
                        loading="lazy"
                      />
                    ) : (
                      <div className={`w-full h-full rounded-full border-4 border-white shadow-sm flex items-center justify-center ${getFallbackBackground(hospital.name)}`}>
                        <ImageIcon className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  
                  <div className="hospital-specialty inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {hospital.specialty}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-primary mb-1">{hospital.name}</h4>
                  <h5 className="text-sm text-muted-foreground mb-3 flex items-center justify-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {hospital.location}
                  </h5>
                  
                  <p className="text-sm text-foreground leading-relaxed mb-4">{hospital.description}</p>
                  
                  <div className="features flex flex-wrap gap-1 justify-center">
                    {hospital.features.map((feature, idx) => (
                      <span key={idx} className="bg-background px-2 py-1 rounded text-xs text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredHospitals.length === 0 && (
              <div className="text-center py-12">
                <Hospital className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  No hospitals found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse the popular searches above.
                </p>
              </div>
            )}

            <div className="visit-section text-center mt-12 p-6 bg-primary/5 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Find Healthcare Near You</h3>
              <p className="text-foreground mb-6">
                Our comprehensive network of hospitals across South Africa ensures you have access to quality healthcare when you need it most.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="https://www.google.com/maps/search/hospitals+in+south+africa">
                    Find Hospitals Near Me
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://www.google.com/maps/search/emergency+hospitals+near+me">
                    Emergency Facilities
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hospitals;