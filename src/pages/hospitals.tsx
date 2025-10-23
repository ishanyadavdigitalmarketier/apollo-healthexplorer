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
// pages/Hospitals.tsx
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Hospital, MapPin, Search } from 'lucide-react';
import Header from '@/components/Header';

const Hospitals = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Start of Tawk.to Script
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script'),
        s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/68ecb5587e32cc195255b4eb/1j7ea8pbh';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  const hospitals = [
    {
      name: 'Groote Schuur Hospital',
      location: 'Cape Town, Western Cape',
      specialty: 'Multi-Specialty / Teaching Hospital',
      description:
        'One of the most renowned hospitals in South Africa, known globally for the world’s first human heart transplant. Offers top-class surgical, emergency, and academic facilities.',
      image: '/assets/groote-schuur.jpg',
    },
    {
      name: 'Netcare Christiaan Barnard Memorial Hospital',
      location: 'Cape Town, Western Cape',
      specialty: 'Cardiology & Surgical Excellence',
      description:
        'Located in the heart of Cape Town, this world-class private hospital offers state-of-the-art cardiac, oncology, and robotic surgery services.',
      image: '/assets/christiaan-barnard.jpg',
    },
    {
      name: 'Life Westville Hospital',
      location: 'Durban, KwaZulu-Natal',
      specialty: 'Multi-Specialty / Private Hospital',
      description:
        'A leading private hospital in Durban offering advanced oncology, cardiology, and intensive care units with cutting-edge technology and expert staff.',
      image: '/assets/life-westville.jpg',
    },
    {
      name: 'Netcare St Augustine’s Hospital',
      location: 'Durban, KwaZulu-Natal',
      specialty: 'Private Hospital / Cardiology & Oncology',
      description:
        'Renowned for heart and cancer care, offering a full range of medical and surgical services with excellent patient facilities.',
      image: '/assets/st-augustines.jpg',
    },
    {
      name: 'Milnerton Mediclinic',
      location: 'Cape Town, Western Cape',
      specialty: 'Private Surgical & Eye Hospital',
      description:
        'Located in Cape Town’s Milnerton area, this facility specializes in surgical procedures, ophthalmology, and general medicine with a high standard of patient care.',
      image: '/assets/milnerton-mediclinic.jpg',
    },
    {
      name: 'Netcare Milpark Hospital',
      location: 'Johannesburg, Gauteng',
      specialty: 'Trauma & Multi-Specialty',
      description:
        'One of South Africa’s top trauma and surgical hospitals offering 24-hour emergency care and a dedicated burns unit.',
      image: '/assets/milpark-hospital.jpg',
    },
    {
      name: 'Charlotte Maxeke Johannesburg Academic Hospital',
      location: 'Johannesburg, Gauteng',
      specialty: 'Public / Teaching Hospital',
      description:
        'A large public academic hospital offering specialized services including oncology, pediatrics, and surgical care with a focus on medical research.',
      image: '/assets/charlotte-maxeke.jpg',
    },
    {
      name: 'Red Cross War Memorial Children’s Hospital',
      location: 'Cape Town, Western Cape',
      specialty: 'Pediatrics / Children’s Hospital',
      description:
        'Africa’s leading children’s hospital providing comprehensive medical and surgical care exclusively for children.',
      image: '/assets/red-cross-children.jpg',
    },
    {
      name: 'Inkosi Albert Luthuli Central Hospital',
      location: 'Durban, KwaZulu-Natal',
      specialty: 'Public / Advanced Medical Center',
      description:
        'A large academic hospital providing specialized tertiary services including neurosurgery, oncology, and renal transplants.',
      image: '/assets/inkosi-hospital.jpg',
    },
    {
      name: 'Mediclinic Cape Gate',
      location: 'Cape Town, Western Cape',
      specialty: 'Private / Oncology & Surgery',
      description:
        'A modern facility known for its oncology and general surgery departments, providing high-quality care in the Western Cape region.',
      image: '/assets/mediclinic-cape-gate.jpg',
    },
  ];

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.specialty.toLowerCase().includes(searchTerm.toLowerCase())
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

            {/* Intro Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                Explore Top Hospitals in South Africa
              </h3>
              <p className="text-foreground leading-relaxed">
                Discover the leading hospitals and healthcare centers across Cape Town, Durban, Johannesburg, and more. From advanced oncology care to specialized children’s hospitals, find the right facility near you.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2 mt-6 mb-8 border p-2 rounded-md bg-muted">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search hospitals, specialties, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent outline-none text-sm text-foreground"
              />
            </div>

            {/* Hospitals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHospitals.map((hospital, index) => (
                <div key={index} className="text-center p-5 bg-muted rounded-lg border">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {hospital.specialty}
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-1">
                    {hospital.name}
                  </h4>
                  <h5 className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-1">
                    <MapPin className="h-3 w-3" /> {hospital.location}
                  </h5>
                  <p className="text-sm text-foreground leading-relaxed">{hospital.description}</p>
                </div>
              ))}
            </div>

            {/* Visit Section */}
            <div className="text-center mt-10">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Visit a Hospital Near You
              </h3>
              <p className="text-foreground mb-6">
                Use Google Maps to locate top-rated hospitals in your area and explore healthcare facilities across South Africa.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://www.google.com/maps/search/hospitals+in+South+Africa" target="_blank">
                  Search on Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hospitals;
