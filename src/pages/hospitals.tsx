// // pages/Hospitals.tsx
// import { useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Hospital, MapPin, Star } from 'lucide-react';
// import Header from '@/components/Header';

// const Hospitals = () => {
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

//   const hospitals = [
//     {
//       name: 'Apollo Central Hospital',
//       location: 'New York, NY',
//       specialty: 'Multi-Specialty',
//       description: 'A flagship facility offering comprehensive services including cardiology, oncology, and orthopedics. Known for its advanced robotic surgery program and 24/7 emergency care.',
//       image: '/assets/hospital-icon-izrzLpb1.jpg'
//     },
//     {
//       name: 'Apollo West Hospital',
//       location: 'Los Angeles, CA',
//       specialty: 'Cardiology & Neurology',
//       description: 'Specializing in heart and brain health, this hospital features cutting-edge imaging technology and a dedicated stroke unit for rapid response care.',
//       image: '/assets/Bumrungrad-%20Hospital-DYIyfrDj.jpg'
//     },
//     {
//       name: 'Apollo Pediatric Center',
//       location: 'Chicago, IL',
//       specialty: 'Pediatrics',
//       description: 'Dedicated to children\'s health, offering specialized pediatric ICU, neonatal care, and family-centered treatment programs in a child-friendly environment.',
//       image: '/assets/Mount-Elizabeth-CLNBCgls.jpg'
//     },
//     {
//       name: 'Apollo South Hospital',
//       location: 'Miami, FL',
//       specialty: 'Oncology & Dermatology',
//       description: 'Leading cancer treatment center with innovative therapies and a comprehensive dermatology department focused on skin health and cosmetic procedures.',
//       image: '/assets/acibadem-altunizade-3PPhX4GT.png'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-card p-6 rounded-lg shadow-md border">
//             <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
//               <Hospital className="h-5 w-5" />
//               Our Hospitals
//             </h2>
//             <div className="hospitals-intro space-y-4">
//               <h3 className="text-lg font-semibold text-primary">World-Class Facilities for Comprehensive Care</h3>
//               <p className="text-foreground leading-relaxed">
//                 Apollo Health Explorer partners with a network of state-of-the-art hospitals equipped with the latest medical technology and staffed by highly trained professionals. Our affiliated hospitals prioritize patient safety, comfort, and innovative treatments across various specialties.
//               </p>
//               <p className="text-foreground leading-relaxed">
//                 From emergency services to specialized surgical centers, our facilities are designed to deliver exceptional care in a supportive environment. Each hospital adheres to the highest standards of accreditation and quality assurance.
//               </p>
//             </div>

//             <div className="hospitals-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//               {hospitals.map((hospital, index) => (
//                 <div key={index} className="hospital-card text-center p-5 bg-muted rounded-lg border">
//                   <img
//                     src={hospital.image}
//                     alt={`${hospital.name} logo`}
//                     className="w-30 h-30 mx-auto mb-4 rounded object-cover"
//                   />
//                   <div className="hospital-specialty inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">
//                     {hospital.specialty}
//                   </div>
//                   <h4 className="text-lg font-semibold text-primary mb-1">{hospital.name}</h4>
//                   <h5 className="text-sm text-muted-foreground mb-3 flex items-center justify-center gap-1">
//                     <MapPin className="h-3 w-3" />
//                     {hospital.location}
//                   </h5>
//                   <p className="text-sm text-foreground leading-relaxed">{hospital.description}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="visit-section text-center mt-8">
//               <h3 className="text-lg font-semibold text-primary mb-4">Visit One of Our Facilities</h3>
//               <p className="text-foreground mb-6">
//                 Our hospitals are conveniently located and equipped for all your healthcare needs. Find the nearest location and schedule a visit today.
//               </p>
//               <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
//                 <a href="https://www.google.com/maps/search/?api=1&query=21%2C%20Greams%20Lane%2C%20Off%20Greams%20Road%2C%20Chennai%20%E2%80%93%20600%20006">Find a Location</a>
//               </Button>
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
import { Hospital, MapPin, Star, Search } from 'lucide-react';
import Header from '@/components/Header';

const Hospitals = () => {
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

  const [searchTerm, setSearchTerm] = useState('');

  const hospitals = [
    {
      name: 'Groote Schuur Hospital',
      location: 'Observatory, Cape Town',
      specialty: 'Tertiary Academic',
      description: 'Renowned for the first human heart transplant in 1967, this public teaching hospital affiliated with the University of Cape Town offers comprehensive services in surgery, medicine, oncology, and emergency care. It ranks among the top hospitals in South Africa.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Groote_Schuur_Hospital%2C_Observatory%2C_Cape_Town%2C_Western_Cape._05.JPG'
    },
    {
      name: 'Netcare Christiaan Barnard Memorial Hospital',
      location: 'Foreshore, Cape Town',
      specialty: 'Cardiology & Oncology',
      description: 'Named after the heart transplant pioneer, this private hospital excels in cardiac surgery, cancer treatment, and advanced oncology services. It features state-of-the-art facilities and is one of the best private hospitals in South Africa.',
      image: 'https://www.netcare.co.za/Portals/0/Images/Content-Images/Christiaan-Barnard-Memorial-Hospital-officially-opening.jpg'
    },
    {
      name: 'Mediclinic Cape Town',
      location: 'Oranjezicht, Cape Town',
      specialty: 'Multi-Specialty Private',
      description: 'A leading private facility in the Western Cape providing expert care in cardiology, orthopedics, maternity, and surgical services. Known for high-quality patient care and modern infrastructure.',
      image: 'https://mediclinic.scene7.com/is/image/mediclinic/Mediclinic-Cape-Town?_ck=1616255882232'
    },
    {
      name: 'Life Kingsbury Hospital',
      location: 'Claremont, Cape Town',
      specialty: 'Oncology & General Private',
      description: 'Top-rated private hospital offering oncology, maternity, and rehabilitation services. It is recognized as one of the best oncology hospitals in South Africa with a focus on personalized care.',
      image: 'https://www.lifehealthcare.co.za/media/2212/hospitals_westerncape_kingsbury.jpg'
    },
    {
      name: 'Red Cross War Memorial Children’s Hospital',
      location: 'Rondebosch, Cape Town',
      specialty: 'Pediatrics',
      description: "South Africa's premier children's hospital, providing specialized pediatric care, neonatal units, and family support. It is the only dedicated tertiary children's facility in the Western Cape.",
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Red_Cross_War_Memorial_Children%27s_Hospital.jpg'
    },
    {
      name: 'Tygerberg Hospital',
      location: 'Parow, Cape Town',
      specialty: 'Tertiary Public',
      description: 'The largest hospital in the Western Cape and a major academic center affiliated with Stellenbosch University. Specializes in trauma, infectious diseases, and serves as one of the best public hospitals in South Africa.',
      image: 'https://static.wheretostay.co.za/locations/poi/0/0/006245/3895_xl.jpg'
    },
    {
      name: 'Chris Hani Baragwanath Academic Hospital',
      location: 'Soweto, Johannesburg',
      specialty: 'Multi-Specialty (Largest in Africa)',
      description: 'The biggest hospital in Africa with over 3,400 beds, serving as a key teaching institution for complex cases in trauma, surgery, and medicine. It is the top public hospital in Gauteng.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Chris_Hani_Baragwanath_Academic_Hospital_entrance.jpg'
    },
    {
      name: 'Life Entabeni Hospital',
      location: 'Berea, Durban',
      specialty: 'Multi-Specialty Private',
      description: 'One of the best private hospitals in Durban, featuring advanced cardiac, oncology, and rehabilitation services in a modern facility.',
      image: 'https://www.lifehealthcare.co.za/media/2214/hospital_kzn_entabeni.jpg'
    },
    {
      name: 'Cape Eye Hospital',
      location: 'Parow, Cape Town',
      specialty: 'Ophthalmology',
      description: 'Specialized eye hospital offering cataract surgery, glaucoma treatment, and laser procedures with cutting-edge technology for comprehensive vision care.',
      image: 'https://cape-eye.co.za/wp-content/uploads/2024/01/Cape-Eye-Logo.png'
    },
    {
      name: 'Nelson Mandela Children\'s Hospital',
      location: 'Johannesburg',
      specialty: 'Pediatrics',
      description: 'Dedicated pediatric facility serving children across southern Africa with advanced treatments for complex conditions, including oncology and cardiology.',
      image: 'https://www.nelsonmandelachildrenshospital.org/wp-content/uploads/2023/05/NMCH-Exterior-1-scaled.jpg'
    },
    {
      name: 'Mediclinic Sandton',
      location: 'Johannesburg',
      specialty: 'Multi-Specialty Private',
      description: 'Premier private hospital in Gauteng known for luxury care, international patient services, and specialties in oncology and orthopedics. Ranked among the top 10 in South Africa.',
      image: 'https://www.mediclinic.co.za/content/dam/mc-sa/corporate/hospitals/sandton/images/Mediclinic-Sandton-Exterior.jpg'
    },
    {
      name: 'Lenmed Ethekwini Hospital and Heart Centre',
      location: 'Durban',
      specialty: 'Oncology & Cardiology',
      description: 'Leading facility for heart and cancer care in Durban, offering innovative treatments and recognized as one of the best oncology hospitals in South Africa.',
      image: 'https://lenmed.co.za/wp-content/uploads/2023/05/Ethekwini-Hospital-Exterior.jpg'
    },
    {
      name: 'Life Peninsula Eye Hospital',
      location: 'Strand, Cape Town',
      specialty: 'Ophthalmology',
      description: 'Specialized private eye hospital focusing on surgical eye treatments, including LASIK and cataract removal, in a state-of-the-art environment.',
      image: 'https://www.lifehealthcare.co.za/media/2213/hospitals_westerncape_peninsulaeye.jpg'
    },
    {
      name: 'Melomed Bellville Private Hospital',
      location: 'Bellville, Cape Town',
      specialty: 'General Private',
      description: 'Affordable private hospital in the Northern Suburbs providing maternity, surgical, and emergency services as part of the Melomed network in Western Cape.',
      image: 'https://www.melomed.co.za/wp-content/uploads/2023/03/Melomed-Bellville-Exterior.jpg'
    },
    {
      name: 'Netcare Milpark Hospital',
      location: 'Parktown, Johannesburg',
      specialty: 'Multi-Specialty Private',
      description: 'Historic private hospital renowned for neurology, oncology, and trauma care, consistently ranked in South Africa\'s top hospitals list.',
      image: 'https://www.netcare.co.za/Portals/0/Images/Content-Images/Milpark-Hospital.jpg'
    },
    {
      name: 'Busamed Paardevlei Private Hospital',
      location: 'Somerset West, Cape Town',
      specialty: 'Surgical & General Private',
      description: 'Modern private hospital specializing in day surgeries, orthopedics, and gynecology, serving the Helderberg Basin in Western Cape.',
      image: 'https://busamed.co.za/wp-content/uploads/2023/06/Paardevlei-Exterior.jpg'
    },
    {
      name: 'KwaZulu-Natal Children\'s Hospital',
      location: 'Durban',
      specialty: 'Pediatrics',
      description: 'Regional children\'s hospital providing specialized care for pediatric emergencies, oncology, and chronic conditions in KwaZulu-Natal.',
      image: 'https://www.kznchildrenshospital.org/wp-content/uploads/2023/01/Hospital-Exterior.jpg'
    }
  ];

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
              <Hospital className="h-5 w-5" />
              Hospitals in South Africa
            </h2>
            <div className="hospitals-intro space-y-4">
              <h3 className="text-lg font-semibold text-primary">Explore Top Hospitals: Cape Town, Durban, Johannesburg & More</h3>
              <p className="text-foreground leading-relaxed">
                Discover the best hospitals in South Africa, including top-rated facilities in Cape Town, private hospitals in Durban and Western Cape, oncology centers, children's hospitals, eye clinics, and the biggest public institutions. Search for "hospitals near me," "best oncology hospitals," or specific locations to view details.
              </p>
              <p className="text-foreground leading-relaxed">
                From world-class private care at Netcare and Mediclinic to leading public hospitals like Groote Schuur and Chris Hani Baragwanath, this directory covers surgical hospitals, biggest in Africa, Johannesburg lists, and more for comprehensive healthcare options.
              </p>
            </div>

            <div className="search-section mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search hospitals (e.g., Cape Town, oncology, children, Durban, biggest, eye)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus-visible:ring-ring focus-visible:ring-2"
                />
              </div>
            </div>

            <div className="hospitals-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredHospitals.map((hospital, index) => (
                <div key={index} className="hospital-card text-center p-5 bg-muted rounded-lg border">
                  <img
                    src={hospital.image}
                    alt={`${hospital.name} facility`}
                    className="w-full h-32 mx-auto mb-4 rounded object-cover"
                  />
                  <div className="hospital-specialty inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {hospital.specialty}
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-1">{hospital.name}</h4>
                  <h5 className="text-sm text-muted-foreground mb-3 flex items-center justify-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {hospital.location}
                  </h5>
                  <p className="text-sm text-foreground leading-relaxed">{hospital.description}</p>
                  <div className="flex justify-center items-center gap-1 mt-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-xs text-muted-foreground">Top Rated</span>
                  </div>
                </div>
              ))}
              {filteredHospitals.length === 0 && searchTerm && (
                <p className="col-span-full text-center text-muted-foreground py-8">No hospitals found matching "{searchTerm}". Try broader terms like "Cape Town" or "oncology"!</p>
              )}
              {!searchTerm && (
                <p className="col-span-full text-center text-muted-foreground py-8">Browse all {hospitals.length} hospitals or use the search to filter by location, specialty, or type.</p>
              )}
            </div>

            <div className="visit-section text-center mt-8">
              <h3 className="text-lg font-semibold text-primary mb-4">Find a Hospital Near You</h3>
              <p className="text-foreground mb-6">
                For the nearest facility or more options, search based on your location.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://www.google.com/maps/search/hospitals+near+me">Hospital Near Me</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hospitals;