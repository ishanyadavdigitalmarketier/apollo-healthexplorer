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
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);

  // Data for Apollo Hospitals locations in India
  const dataByLocation = {
    chennai: {
      treatments: [
        { name: 'Cardiac Surgery', cost: '₹4,00,000', duration: '7 days' },
        { name: 'Orthopedic Surgery', cost: '₹2,50,000', duration: '5 days' },
        { name: 'Oncology Treatment', cost: '₹8,00,000', duration: '14 days' },
        { name: 'Neurology Procedures', cost: '₹3,00,000', duration: '4 days' },
        { name: 'Gastroenterology', cost: '₹1,50,000', duration: '3 days' },
        { name: 'Cosmetic Surgery', cost: '₹1,00,000', duration: '2 days' }
      ],
      hospitals: [
        { name: 'Apollo Hospitals Greams Road, Chennai', rating: 4.9, specialties: ['Cardiology', 'Oncology'] },
        { name: 'Apollo Speciality Hospitals, Chennai', rating: 4.8, specialties: ['Orthopedics', 'Neurology'] },
        { name: 'Apollo Children\'s Hospital, Chennai', rating: 4.7, specialties: ['Pediatrics', 'Cancer Care'] }
      ],
      doctors: [
        { name: 'Dr. S. S. Badrinath', specialty: 'Ophthalmologist', experience: '50+ years', rating: 5.0 },
        { name: 'Dr. Prathap C. Reddy', specialty: 'Founder Cardiologist', experience: '40+ years', rating: 4.9 },
        { name: 'Dr. N. Rajendra Prasad', specialty: 'Cardiothoracic Surgeon', experience: '25 years', rating: 4.8 }
      ]
    },
    delhi: {
      treatments: [
        { name: 'Cardiac Surgery', cost: '₹4,50,000', duration: '7 days' },
        { name: 'Orthopedic Surgery', cost: '₹2,80,000', duration: '5 days' },
        { name: 'Oncology Treatment', cost: '₹9,00,000', duration: '14 days' },
        { name: 'Neurology Procedures', cost: '₹3,20,000', duration: '4 days' },
        { name: 'Gastroenterology', cost: '₹1,70,000', duration: '3 days' },
        { name: 'Cosmetic Surgery', cost: '₹1,20,000', duration: '2 days' }
      ],
      hospitals: [
        { name: 'Indraprastha Apollo Hospital, Delhi', rating: 4.9, specialties: ['Cardiology', 'Oncology'] },
        { name: 'Apollo Spectra Hospitals, Delhi', rating: 4.8, specialties: ['Orthopedics', 'Gastroenterology'] }
      ],
      doctors: [
        { name: 'Dr. Naresh Trehan', specialty: 'Cardiologist', experience: '45 years', rating: 4.9 },
        { name: 'Dr. Rajesh Sharma', specialty: 'Pediatric Cardiac Surgeon', experience: '30 years', rating: 4.8 },
        { name: 'Dr. S. K. Sogani', specialty: 'Neurosurgeon', experience: '35 years', rating: 4.7 }
      ]
    },
    bangalore: {
      treatments: [
        { name: 'Cardiac Surgery', cost: '₹4,20,000', duration: '7 days' },
        { name: 'Orthopedic Surgery', cost: '₹2,60,000', duration: '5 days' },
        { name: 'Oncology Treatment', cost: '₹8,50,000', duration: '14 days' },
        { name: 'Neurology Procedures', cost: '₹3,10,000', duration: '4 days' },
        { name: 'Gastroenterology', cost: '₹1,60,000', duration: '3 days' },
        { name: 'Cosmetic Surgery', cost: '₹1,10,000', duration: '2 days' }
      ],
      hospitals: [
        { name: 'Apollo Hospitals Bannerghatta, Bangalore', rating: 4.8, specialties: ['Cardiology', 'Orthopedics'] },
        { name: 'Apollo Cancer Centre, Bangalore', rating: 4.9, specialties: ['Oncology', 'Neurology'] }
      ],
      doctors: [
        { name: 'Dr. B. S. Ramesh', specialty: 'Cardiologist', experience: '25 years', rating: 4.8 },
        { name: 'Dr. Ravi B. A', specialty: 'Orthopedic Surgeon', experience: '20 years', rating: 4.7 },
        { name: 'Dr. Shalini Rajneesh', specialty: 'Oncologist', experience: '18 years', rating: 4.6 }
      ]
    },
    hyderabad: {
      treatments: [
        { name: 'Cardiac Surgery', cost: '₹3,80,000', duration: '7 days' },
        { name: 'Orthopedic Surgery', cost: '₹2,30,000', duration: '5 days' },
        { name: 'Oncology Treatment', cost: '₹7,50,000', duration: '14 days' },
        { name: 'Neurology Procedures', cost: '₹2,80,000', duration: '4 days' },
        { name: 'Gastroenterology', cost: '₹1,40,000', duration: '3 days' },
        { name: 'Cosmetic Surgery', cost: '₹90,000', duration: '2 days' }
      ],
      hospitals: [
        { name: 'Apollo Hospitals Jubilee Hills, Hyderabad', rating: 4.8, specialties: ['Cardiology', 'Oncology'] },
        { name: 'Apollo Health City, Hyderabad', rating: 4.9, specialties: ['Orthopedics', 'Neurology'] }
      ],
      doctors: [
        { name: 'Dr. G. Sengottuvelu', specialty: 'Interventional Cardiologist', experience: '25 years', rating: 4.9 },
        { name: 'Dr. P. Pavan', specialty: 'Orthopedic Surgeon', experience: '20 years', rating: 4.8 },
        { name: 'Dr. T. P. S. Bhandari', specialty: 'Oncologist', experience: '22 years', rating: 4.7 }
      ]
    },
    kolkata: {
      treatments: [
        { name: 'Cardiac Surgery', cost: '₹4,00,000', duration: '7 days' },
        { name: 'Orthopedic Surgery', cost: '₹2,50,000', duration: '5 days' },
        { name: 'Oncology Treatment', cost: '₹8,00,000', duration: '14 days' },
        { name: 'Neurology Procedures', cost: '₹3,00,000', duration: '4 days' },
        { name: 'Gastroenterology', cost: '₹1,50,000', duration: '3 days' },
        { name: 'Cosmetic Surgery', cost: '₹1,00,000', duration: '2 days' }
      ],
      hospitals: [
        { name: 'Apollo Gleneagles Hospital, Kolkata', rating: 4.7, specialties: ['Cardiology', 'Orthopedics'] },
        { name: 'Apollo Multispeciality Hospitals, Kolkata', rating: 4.8, specialties: ['Oncology', 'Gastroenterology'] }
      ],
      doctors: [
        { name: 'Dr. K. M. Mandana', specialty: 'Cardiothoracic Surgeon', experience: '28 years', rating: 4.8 },
        { name: 'Dr. Chhanda Das', specialty: 'Orthopedic Surgeon', experience: '20 years', rating: 4.7 },
        { name: 'Dr. Soumitra Chatterjee', specialty: 'Oncologist', experience: '18 years', rating: 4.6 }
      ]
    }
  };

  const currentData = selectedLocation ? dataByLocation[selectedLocation] : null;

  const handleSearch = () => {
    if (selectedLocation) {
      setSearchTriggered(true);
    } else {
      alert('Please select a preferred city before searching.');
    }
  };

  const renderTabContent = () => {
    if (!selectedLocation || !searchTriggered) {
      return (
        <div className="text-center py-8 text-muted-foreground">
          Please select a city and click Search to view Apollo Hospitals details.
        </div>
      );
    }

    const locationName = selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1);
    const query = searchQuery.toLowerCase();

    switch (activeTab) {
      case 'treatments':
        const filteredTreatments = currentData.treatments.filter(treatment =>
          treatment.name.toLowerCase().includes(query)
        );
        if (filteredTreatments.length === 0 && query) {
          return (
            <div className="text-center py-8 text-muted-foreground">
              No treatments found for "{searchQuery}" at Apollo Hospitals in {locationName}.
            </div>
          );
        }
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MapPin size={20} />
              {query ? `Treatments matching "${searchQuery}"` : 'Treatments'} at Apollo Hospitals in {locationName}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {(query ? filteredTreatments : currentData.treatments).map((treatment, index) => (
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
        const filteredHospitals = currentData.hospitals.filter(hospital =>
          hospital.name.toLowerCase().includes(query) ||
          hospital.specialties.some(specialty => specialty.toLowerCase().includes(query))
        );
        if (filteredHospitals.length === 0 && query) {
          return (
            <div className="text-center py-8 text-muted-foreground">
              No hospitals found for "{searchQuery}" in {locationName}.
            </div>
          );
        }
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Building2 size={20} />
              {query ? `Hospitals matching "${searchQuery}"` : 'Hospitals'} in {locationName}
            </h3>
            <div className="space-y-3">
              {(query ? filteredHospitals : currentData.hospitals).map((hospital, index) => (
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
        const filteredDoctors = currentData.doctors.filter(doctor =>
          doctor.name.toLowerCase().includes(query) ||
          doctor.specialty.toLowerCase().includes(query)
        );
        if (filteredDoctors.length === 0 && query) {
          return (
            <div className="text-center py-8 text-muted-foreground">
              No doctors found for "{searchQuery}" at Apollo Hospitals in {locationName}.
            </div>
          );
        }
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <UserCheck size={20} />
              {query ? `Doctors matching "${searchQuery}"` : 'Doctors'} at Apollo Hospitals in {locationName}
            </h3>
            <div className="space-y-3">
              {(query ? filteredDoctors : currentData.doctors).map((doctor, index) => (
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
              World-Class Healthcare
              <br />
              at Apollo Hospitals
              <br />
              Excellence Within Reach
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
              Connect with Apollo Partners for top hospitals and specialists in India. Quality medical care at affordable prices, with personalized support every step of the way.
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Find Your Perfect Medical Solution at Apollo</h2>
              <p className="text-muted-foreground">Search treatments, hospitals, and specialists across Apollo network</p>
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred City</label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="kolkata">Kolkata</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full md:w-auto bg-accent hover:bg-accent/90 h-12 px-8 mb-6"
              onClick={handleSearch}
            >
              <Search size={20} className="mr-2" />
              Search Apollo Network
            </Button>

            {/* Tab Content */}
            {renderTabContent()}

            {/* Fallback Popular Treatments (only if no location selected and treatments tab) */}
            {activeTab === 'treatments' && !selectedLocation && (
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">Popular Treatments at Apollo Hospitals:</p>
                <div className="flex flex-wrap gap-2">
                  {['Cardiac Surgery', 'Orthopedic Surgery', 'Oncology Treatment', 'Neurology Procedures', 'Gastroenterology', 'Cosmetic Surgery'].map((treatment, index) => (
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