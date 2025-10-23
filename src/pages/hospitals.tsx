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
      description: 'Renowned worldwide as the site of the first successful human heart transplant in 1967. It is a leading teaching hospital affiliated with the University of Cape Town, offering comprehensive medical services across various specialties including surgery, medicine, and emergency care.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Groote_Schuur_Hospital%2C_Observatory%2C_Cape_Town%2C_Western_Cape._05.JPG'
    },
    {
      name: 'Netcare Christiaan Barnard Memorial Hospital',
      location: 'Foreshore, Cape Town',
      specialty: 'Cardiology & Oncology',
      description: 'Named after the pioneering heart surgeon Christiaan Barnard, this private hospital excels in cardiac care, oncology treatments, and advanced surgical procedures. It features state-of-the-art facilities for chemotherapy, cosmetic surgery, and fertility services.',
      image: 'https://www.netcare.co.za/Portals/0/Images/Content-Images/Christiaan-Barnard-Memorial-Hospital-officially-opening.jpg?ver=IkDePNRMoMDJ27KMhcSPmg%3D%3D'
    },
    {
      name: 'Mediclinic Cape Town',
      location: 'Oranjezicht, Cape Town',
      specialty: 'Multi-Specialty',
      description: 'A premier private hospital providing high-quality care in cardiology, oncology, orthopedics, and more. Known for its modern facilities, dedicated nursing staff, and commitment to patient-centered treatment.',
      image: 'https://mediclinic.scene7.com/is/image/mediclinic/Mediclinic-Cape-Town?_ck=1616255882232'
    },
    {
      name: 'Life Kingsbury Hospital',
      location: 'Claremont, Cape Town',
      specialty: 'General Private',
      description: 'One of the top private hospitals in the Western Cape, offering comprehensive services including maternity, oncology, and rehabilitation. It emphasizes personalized care in a serene suburban setting.',
      image: 'https://www.lifehealthcare.co.za/media/2212/hospitals_westerncape_kingsbury.jpg'
    },
    {
      name: 'Red Cross War Memorial Children’s Hospital',
      location: 'Rondebosch, Cape Town',
      specialty: 'Pediatrics',
      description: 'South Africa\'s only dedicated tertiary children\'s hospital, providing specialized care for infants, children, and adolescents. It features advanced pediatric ICU, neonatal units, and family-centered programs.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Red_Cross_War_Memorial_Children%27s_Hospital.jpg'
    },
    {
      name: 'Tygerberg Hospital',
      location: 'Parow, Cape Town',
      specialty: 'Tertiary Public',
      description: 'The largest hospital in the Western Cape and a key academic center affiliated with Stellenbosch University. It serves a vast population with expertise in trauma, infectious diseases, and surgical services.',
      image: 'https://static.wheretostay.co.za/locations/poi/0/0/006245/3895_xl.jpg'
    },
    {
      name: 'Chris Hani Baragwanath Academic Hospital',
      location: 'Soweto, Johannesburg',
      specialty: 'Multi-Specialty (Largest in Africa)',
      description: 'The third-largest hospital in the world and the biggest in Africa, with over 3,400 beds. As a major teaching hospital, it handles high volumes of emergencies, trauma, and specialized care for underserved communities.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Chris_Hani_Baragwanath_Academic_Hospital_entrance.jpg'
    },
    {
      name: 'Life Entabeni Hospital',
      location: 'Berea, Durban',
      specialty: 'Multi-Specialty Private',
      description: 'A leading private facility in KwaZulu-Natal, renowned for its cardiac center, oncology unit, and 50-bed rehabilitation wing. It provides holistic care with a focus on recovery and wellness.',
      image: 'https://www.lifehealthcare.co.za/media/2214/hospital_kzn_entabeni.jpg'
    },
    {
      name: 'Cape Eye Hospital',
      location: 'Parow, Cape Town',
      specialty: 'Ophthalmology',
      description: 'Specializing in advanced eye care, including cataract surgery, glaucoma treatment, refractive procedures, and retinal surgeries. Equipped with cutting-edge ophthalmic technology for comprehensive vision health.',
      image: 'https://cape-eye.co.za/wp-content/uploads/2024/01/Cape-Eye-Logo.png'
    }
  ];

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
              <Hospital className="h-5 w-5" />
              Hospitals in South Africa
            </h2>
            <div className="hospitals-intro space-y-4">
              <h3 className="text-lg font-semibold text-primary">Explore Top Hospitals Across South Africa</h3>
              <p className="text-foreground leading-relaxed">
                Discover premier healthcare facilities, with a special focus on Cape Town. Search for hospitals by name, location, or specialty to find the best options for your needs, including oncology, pediatrics, eye care, and more. This directory covers public and private hospitals in key cities like Cape Town, Durban, and Johannesburg.
              </p>
              <p className="text-foreground leading-relaxed">
                From world-renowned academic centers to specialized private clinics, these institutions adhere to high standards of care and innovation. Use the search below to find details on the best hospitals in South Africa, biggest facilities, and specialized services.
              </p>
            </div>

            <div className="search-section mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name, location, or specialty (e.g., Cape Town, oncology, children)"
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
                </div>
              ))}
              {filteredHospitals.length === 0 && (
                <p className="col-span-full text-center text-muted-foreground py-8">No hospitals found matching your search. Try a different term!</p>
              )}
            </div>

            <div className="visit-section text-center mt-8">
              <h3 className="text-lg font-semibold text-primary mb-4">Find a Hospital Near You</h3>
              <p className="text-foreground mb-6">
                Looking for the nearest facility? Use this link to search hospitals based on your current location.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://www.google.com/maps/search/hospitals+near+me">Find Hospital Near Me</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hospitals;