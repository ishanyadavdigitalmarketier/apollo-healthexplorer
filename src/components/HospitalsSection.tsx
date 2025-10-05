import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Users, Clock, Shield, CheckCircle } from 'lucide-react';
import hospitalIcon from '@/assets/hospital-icon.jpg';

const HospitalsSection = () => {
  const countries = [
    { flag: '🇮🇳', name: 'India', hospitals: '450 hospitals' },
    { flag: '🇹🇭', name: 'Thailand', hospitals: '180 hospitals' },
    { flag: '🇸🇬', name: 'Singapore', hospitals: '85 hospitals' },
    { flag: '🇹🇷', name: 'Turkey', hospitals: '220 hospitals' },
    { flag: '🇲🇽', name: 'Mexico', hospitals: '160 hospitals' },
    { flag: '🇲🇾', name: 'Malaysia', hospitals: '95 hospitals' },
  ];

  const hospitals = [
    {
      name: 'Apollo Hospitals',
      accreditation: 'JCI Accredited',
      location: 'New Delhi, India',
      rating: 4.9,
      reviews: 5847,
      specialties: ['Cardiology', 'Oncology', 'Neurology'],
      patients: '50,000+',
      experience: '25+ years',
      features: ['English Speaking Staff', 'International Patient Care', '24/7 Emergency'],
      image: hospitalIcon,
    },
    {
      name: 'Bumrungrad Hospital',
      accreditation: 'JCI Accredited',
      location: 'Bangkok, Thailand',
      rating: 4.8,
      reviews: 4293,
      specialties: ['Orthopedics', 'Cosmetic Surgery', 'Fertility'],
      patients: '35,000+',
      experience: '30+ years',
      features: ['Medical Tourism Hub', 'Luxury Facilities', 'Interpreter Services'],
      image: hospitalIcon,
    },
    {
      name: 'Mount Elizabeth Hospital',
      accreditation: 'JCI Accredited',
      location: 'Singapore',
      rating: 4.9,
      reviews: 3156,
      specialties: ['Heart Surgery', 'Cancer Treatment', 'Transplants'],
      patients: '25,000+',
      experience: '40+ years',
      features: ['Cutting-Edge Technology', 'World-Class Specialists', 'Personalized Care'],
      image: hospitalIcon,
    },
    {
      name: 'Acibadem Healthcare',
      accreditation: 'JCI Accredited',
      location: 'Istanbul, Turkey',
      rating: 4.7,
      reviews: 2847,
      specialties: ['Hair Transplant', 'Dental Care', 'Eye Surgery'],
      patients: '40,000+',
      experience: '20+ years',
      features: ['Medical Tourism Package', 'Airport Transfer', 'Hotel Partnership'],
      image: hospitalIcon,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top-Rated Partner Hospitals</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with internationally accredited hospitals known for their excellence in medical care, patient safety, and world-class facilities.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {countries.map((country, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border">
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="font-semibold text-lg mb-1">{country.name}</h3>
                <p className="text-sm text-muted-foreground">{country.hospitals}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hospitals Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {hospitals.map((hospital, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
              <div className="flex">
                <div className="w-32 h-32 flex-shrink-0">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{hospital.name}</h3>
                      <Badge variant="secondary" className="mb-2">
                        {hospital.accreditation}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{hospital.location}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{hospital.rating}</span>
                      <span className="text-sm text-muted-foreground">({hospital.reviews.toLocaleString()} reviews)</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="font-semibold text-primary">{hospital.patients}</div>
                      <div className="text-muted-foreground">Patients Treated</div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{hospital.experience}</div>
                      <div className="text-muted-foreground">Experience</div>
                    </div>
                  </div>

                  <div className="space-y-1 mb-4">
                    {hospital.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {/* <Button size="sm" variant="outline" className="flex-1">
                      View Details
                    </Button> */}
                    <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Partner Hospitals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HospitalsSection;