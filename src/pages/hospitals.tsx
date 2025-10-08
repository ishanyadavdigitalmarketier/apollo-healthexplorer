// pages/Hospitals.tsx
import { Button } from '@/components/ui/button';
import { Hospital, MapPin, Star } from 'lucide-react';
import Header from '@/components/Header';

const Hospitals = () => {
  const hospitals = [
    {
      name: 'Apollo Central Hospital',
      location: 'New York, NY',
      specialty: 'Multi-Specialty',
      description: 'A flagship facility offering comprehensive services including cardiology, oncology, and orthopedics. Known for its advanced robotic surgery program and 24/7 emergency care.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbdcd8aa2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    },
    {
      name: 'Apollo West Hospital',
      location: 'Los Angeles, CA',
      specialty: 'Cardiology & Neurology',
      description: 'Specializing in heart and brain health, this hospital features cutting-edge imaging technology and a dedicated stroke unit for rapid response care.',
      image: 'https://images.unsplash.com/photo-1585435557344-62dc330c3de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    },
    {
      name: 'Apollo Pediatric Center',
      location: 'Chicago, IL',
      specialty: 'Pediatrics',
      description: 'Dedicated to children\'s health, offering specialized pediatric ICU, neonatal care, and family-centered treatment programs in a child-friendly environment.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    },
    {
      name: 'Apollo South Hospital',
      location: 'Miami, FL',
      specialty: 'Oncology & Dermatology',
      description: 'Leading cancer treatment center with innovative therapies and a comprehensive dermatology department focused on skin health and cosmetic procedures.',
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
              <Hospital className="h-5 w-5" />
              Our Hospitals
            </h2>
            <div className="hospitals-intro space-y-4">
              <h3 className="text-lg font-semibold text-primary">World-Class Facilities for Comprehensive Care</h3>
              <p className="text-foreground leading-relaxed">
                Apollo Health Explorer partners with a network of state-of-the-art hospitals equipped with the latest medical technology and staffed by highly trained professionals. Our affiliated hospitals prioritize patient safety, comfort, and innovative treatments across various specialties.
              </p>
              <p className="text-foreground leading-relaxed">
                From emergency services to specialized surgical centers, our facilities are designed to deliver exceptional care in a supportive environment. Each hospital adheres to the highest standards of accreditation and quality assurance.
              </p>
            </div>

            <div className="hospitals-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {hospitals.map((hospital, index) => (
                <div key={index} className="hospital-card text-center p-5 bg-muted rounded-lg border">
                  <img
                    src={hospital.image}
                    alt={`${hospital.name} logo`}
                    className="w-30 h-30 mx-auto mb-4 rounded object-cover"
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
            </div>

            <div className="visit-section text-center mt-8">
              <h3 className="text-lg font-semibold text-primary mb-4">Visit One of Our Facilities</h3>
              <p className="text-foreground mb-6">
                Our hospitals are conveniently located and equipped for all your healthcare needs. Find the nearest location and schedule a visit today.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://www.google.com/maps/search/?api=1&query=21%2C%20Greams%20Lane%2C%20Off%20Greams%20Road%2C%20Chennai%20%E2%80%93%20600%20006">Find a Location</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hospitals;