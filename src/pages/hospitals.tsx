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
      specialty: 'Tertiary Academic Public',
      description: 'Established in 1938, this renowned public teaching hospital affiliated with the University of Cape Town is famous for the world\'s first human heart transplant in 1967. It offers comprehensive services in surgery, oncology, cardiology, emergency care, and research, serving as one of South Africa\'s top public hospitals and ranking in the top 10 overall.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Groote_Schuur_Hospital%2C_Observatory%2C_Cape_Town%2C_Western_Cape._05.JPG'
    },
    {
      name: 'Netcare Christiaan Barnard Memorial Hospital',
      location: 'Foreshore, Cape Town',
      specialty: 'Cardiology & Oncology Private',
      description: 'Named after heart transplant pioneer Christiaan Barnard, this top private hospital in Cape Town specializes in cardiac surgery, oncology treatments, chemotherapy, fertility services, and cosmetic procedures. It features advanced facilities and is consistently ranked among South Africa\'s top 10 hospitals for specialized care.',
      image: 'https://www.netcare.co.za/Portals/0/Images/Content-Images/Christiaan-Barnard-Memorial-Hospital-officially-opening.jpg?ver=IkDePNRMoMDJ27KMhcSPmg%3D%3D'
    },
    {
      name: 'Mediclinic Cape Town',
      location: 'Oranjezicht, Cape Town',
      specialty: 'Multi-Specialty Private',
      description: 'A leading private hospital in the Western Cape providing high-quality care in cardiology, orthopedics, maternity, neurology, and surgical services. Part of the Mediclinic network, it emphasizes patient-centered treatment with modern infrastructure and is one of the best private hospitals in Cape Town.',
      image: 'https://mediclinic.scene7.com/is/image/mediclinic/Mediclinic-Cape-Town?_ck=1616255882232'
    },
    {
      name: 'Life Kingsbury Hospital',
      location: 'Claremont, Cape Town',
      specialty: 'Oncology & General Private',
      description: 'Recognized as one of the best oncology hospitals in South Africa, this private facility offers comprehensive cancer care, maternity, rehabilitation, and general services in a serene suburban setting. It adheres to high standards and is part of the Life Healthcare network in the Western Cape.',
      image: 'https://www.lifehealthcare.co.za/media/2212/hospitals_westerncape_kingsbury.jpg'
    },
    {
      name: 'Red Cross War Memorial Children’s Hospital',
      location: 'Rondebosch, Cape Town',
      specialty: 'Pediatrics Public',
      description: "South Africa's only dedicated tertiary children's hospital and the largest in Sub-Saharan Africa, providing specialized pediatric ICU, neonatal care, oncology, and family-centered programs for infants, children, and adolescents. Affiliated with the University of Cape Town.",
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Red_Cross_War_Memorial_Children%27s_Hospital.jpg'
    },
    {
      name: 'Tygerberg Hospital',
      location: 'Parow, Cape Town',
      specialty: 'Tertiary Public',
      description: 'The largest hospital in the Western Cape with over 1,000 beds, this academic center affiliated with Stellenbosch University excels in trauma, infectious diseases, surgery, and emergency services. It is a top public hospital in South Africa serving a vast population.',
      image: 'https://static.wheretostay.co.za/locations/poi/0/0/006245/3895_xl.jpg'
    },
    {
      name: 'Chris Hani Baragwanath Academic Hospital',
      location: 'Soweto, Johannesburg',
      specialty: 'Multi-Specialty Public (Largest in Africa)',
      description: 'The third-largest hospital in the world and the biggest in Africa with 3,400 beds, this major teaching hospital handles high volumes of emergencies, trauma, surgery, and medicine. It serves underserved communities and ranks as the top public and biggest hospital in South Africa.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Chris_Hani_Baragwanath_Academic_Hospital_entrance.jpg'
    },
    {
      name: 'Life Entabeni Hospital',
      location: 'Berea, Durban',
      specialty: 'Multi-Specialty Private',
      description: 'One of the best private hospitals in Durban, featuring advanced cardiac centers, oncology units, and a 50-bed rehabilitation wing. It provides holistic care with a focus on recovery and is part of the Life Healthcare network in KwaZulu-Natal.',
      image: 'https://www.lifehealthcare.co.za/media/2214/hospital_kzn_entabeni.jpg'
    },
    {
      name: 'Cape Eye Hospital',
      location: 'Parow, Cape Town',
      specialty: 'Ophthalmology Private',
      description: 'A specialized eye hospital offering advanced treatments like cataract surgery, glaucoma management, refractive procedures, and retinal surgeries using cutting-edge ophthalmic technology. It is one of the top eye hospitals in Cape Town.',
      image: 'https://cape-eye.co.za/wp-content/uploads/2024/01/Cape-Eye-Logo.png'
    },
    {
      name: 'Nelson Mandela Children\'s Hospital',
      location: 'Johannesburg',
      specialty: 'Pediatrics Private',
      description: 'A dedicated pediatric facility serving children across southern Africa with advanced treatments for complex conditions including oncology, cardiology, and critical care. It is one of the best children\'s hospitals in South Africa.',
      image: 'https://www.nelsonmandelachildrenshospital.org/wp-content/uploads/2023/05/NMCH-Exterior-1-scaled.jpg'
    },
    {
      name: 'Mediclinic Sandton',
      location: 'Johannesburg',
      specialty: 'Multi-Specialty Private',
      description: 'Premier private hospital in Gauteng known for luxury care, international patient services, and specialties in oncology, orthopedics, and cardiology. Ranked among the top 10 hospitals in South Africa and a key facility in Johannesburg.',
      image: 'https://www.mediclinic.co.za/content/dam/mc-sa/corporate/hospitals/sandton/images/Mediclinic-Sandton-Exterior.jpg'
    },
    {
      name: 'Lenmed Ethekwini Hospital and Heart Centre',
      location: 'Durban',
      specialty: 'Oncology & Cardiology Private',
      description: 'Leading facility for heart and cancer care in Durban, offering innovative therapies, chemotherapy, and cardiac interventions. Recognized as one of the best oncology and private hospitals in the region.',
      image: 'https://lenmed.co.za/wp-content/uploads/2023/05/Ethekwini-Hospital-Exterior.jpg'
    },
    {
      name: 'Life Peninsula Eye Hospital',
      location: 'Strand, Cape Town',
      specialty: 'Ophthalmology Private',
      description: 'Specialized private eye hospital focusing on surgical treatments like LASIK, cataract removal, and glaucoma procedures in a state-of-the-art environment. A top choice for eye care in the Western Cape.',
      image: 'https://www.lifehealthcare.co.za/media/2213/hospitals_westerncape_peninsulaeye.jpg'
    },
    {
      name: 'Melomed Bellville Private Hospital',
      location: 'Bellville, Cape Town',
      specialty: 'General Private',
      description: 'Affordable private hospital in the Northern Suburbs providing maternity, surgical, emergency, and general services as part of the Melomed network, one of the key private hospitals in the Western Cape.',
      image: 'https://www.melomed.co.za/wp-content/uploads/2023/03/Melomed-Bellville-Exterior.jpg'
    },
    {
      name: 'Netcare Milpark Hospital',
      location: 'Parktown, Johannesburg',
      specialty: 'Multi-Specialty Private',
      description: 'Historic private hospital renowned for neurology, oncology, trauma care, and advanced surgeries. Consistently ranked in South Africa\'s top 10 hospitals and a leading facility in Johannesburg.',
      image: 'https://www.netcare.co.za/Portals/0/Images/Content-Images/Milpark-Hospital.jpg'
    },
    {
      name: 'Busamed Paardevlei Private Hospital',
      location: 'Somerset West, Cape Town',
      specialty: 'Surgical & General Private',
      description: 'Modern private hospital specializing in day surgeries, orthopedics, gynecology, and emergency care, serving the Helderberg Basin in the Western Cape with innovative technology.',
      image: 'https://busamed.co.za/wp-content/uploads/2023/06/Paardevlei-Exterior.jpg'
    },
    {
      name: 'St. Augustine\'s Hospital',
      location: 'Durban',
      specialty: 'General Private',
      description: 'One of the leading private hospitals in Durban offering a wide range of services from emergency care to specialized treatments in oncology and cardiology, part of the Netcare group.',
      image: 'https://www.netcare.co.za/Portals/0/StAugustines/External.jpg'
    },
    {
      name: 'Ahmed Al-Kadi Private Hospital',
      location: 'Durban',
      specialty: 'Multi-Specialty Private',
      description: 'State-of-the-art private hospital with excellent facilities for general, surgical, and specialized care, recognized for high nursing standards and clinical excellence in KwaZulu-Natal.',
      image: 'https://ahmedalkadi.com/wp-content/uploads/2023/01/Ahmed-Al-Kadi-Exterior.jpg'
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
                Discover the best hospitals in South Africa, including hospitals in Cape Town, private hospitals in Durban and Western Cape, oncology centers, children\'s hospitals, eye clinics, surgical facilities, and the biggest public institutions like Chris Hani Baragwanath, the largest in Africa. Search for "hospital near me," "best oncology hospitals," "top 10 hospitals in South Africa," or specific locations to view full details.
              </p>
              <p className="text-foreground leading-relaxed">
                From world-class private care at Netcare, Mediclinic, and Life Healthcare to leading public hospitals like Groote Schuur and Tygerberg, this directory covers Johannesburg hospitals, best public and private options, and more for comprehensive healthcare in South Africa.
              </p>
            </div>

            <div className="search-section mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search (e.g., Cape Town, oncology, children, Durban, biggest, eye, Johannesburg)"
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
                <p className="col-span-full text-center text-muted-foreground py-8">Browse all {hospitals.length} hospitals or use the search to filter by location, specialty, or type (e.g., biggest hospital, children\'s hospital).</p>
              )}
            </div>

            <div className="visit-section text-center mt-8">
              <h3 className="text-lg font-semibold text-primary mb-4">Find a Hospital Near You</h3>
              <p className="text-foreground mb-6">
                For the nearest facility, top options in your area, or more details on South Africa hospitals, search based on your location.
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