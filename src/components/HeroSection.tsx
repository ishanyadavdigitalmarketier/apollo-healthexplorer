import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Stethoscope, Building2, UserCheck, MapPin, Calendar, DollarSign, User, Heart, Star, Filter } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('treatments');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [favorites, setFavorites] = useState({
    treatments: [],
    hospitals: [],
    doctors: []
  });
  const [sortBy, setSortBy] = useState('name');

  // User form state
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    medicalHistory: '',
    preferences: []
  });

  // Mock data for treatments, hospitals, and doctors per location
  const dataByLocation = {
    india: {
      treatments: [
        { id: 1, name: 'Heart Surgery', cost: '$5,000', duration: '7 days', category: 'cardiac', rating: 4.8 },
        { id: 2, name: 'Orthopedic Surgery', cost: '$3,500', duration: '5 days', category: 'ortho', rating: 4.6 },
        { id: 3, name: 'Cosmetic Surgery', cost: '$2,000', duration: '3 days', category: 'cosmetic', rating: 4.7 },
        { id: 4, name: 'Dental Treatments', cost: '$800', duration: '2 days', category: 'dental', rating: 4.5 },
        { id: 5, name: 'Eye Surgery', cost: '$1,500', duration: '4 days', category: 'ophthalmology', rating: 4.9 },
        { id: 6, name: 'Cancer Treatment', cost: '$10,000', duration: '14 days', category: 'oncology', rating: 4.8 },
        { id: 7, name: 'Knee Replacement', cost: '$4,200', duration: '6 days', category: 'ortho', rating: 4.7 },
        { id: 8, name: 'Hip Replacement', cost: '$4,500', duration: '6 days', category: 'ortho', rating: 4.6 }
      ],
      hospitals: [
        { id: 1, name: 'Apollo Hospitals', rating: 4.8, specialties: ['Cardiology', 'Orthopedics'], beds: 750, established: 1983 },
        { id: 2, name: 'Fortis Healthcare', rating: 4.7, specialties: ['Oncology', 'Neurology'], beds: 600, established: 1996 },
        { id: 3, name: 'Max Super Speciality', rating: 4.9, specialties: ['Cosmetic', 'Dental'], beds: 500, established: 1999 },
        { id: 4, name: 'Manipal Hospitals', rating: 4.6, specialties: ['Cardiology', 'Oncology'], beds: 800, established: 1953 }
      ],
      doctors: [
        { id: 1, name: 'Dr. Rajesh Kumar', specialty: 'Cardiologist', experience: '20 years', rating: 4.9, qualifications: ['MD', 'DM Cardiology'] },
        { id: 2, name: 'Dr. Priya Sharma', specialty: 'Orthopedist', experience: '15 years', rating: 4.8, qualifications: ['MS Ortho'] },
        { id: 3, name: 'Dr. Amit Patel', specialty: 'Oncologist', experience: '18 years', rating: 4.7, qualifications: ['MD', 'DM Oncology'] },
        { id: 4, name: 'Dr. Sunita Reddy', specialty: 'Dermatologist', experience: '12 years', rating: 4.6, qualifications: ['MD Dermatology'] }
      ]
    },
    thailand: {
      treatments: [
        { id: 1, name: 'Heart Surgery', cost: '$4,500', duration: '6 days', category: 'cardiac', rating: 4.7 },
        { id: 2, name: 'Orthopedic Surgery', cost: '$3,000', duration: '4 days', category: 'ortho', rating: 4.8 },
        { id: 3, name: 'Cosmetic Surgery', cost: '$1,800', duration: '2 days', category: 'cosmetic', rating: 4.9 },
        { id: 4, name: 'Dental Treatments', cost: '$700', duration: '1 day', category: 'dental', rating: 4.6 },
        { id: 5, name: 'Eye Surgery', cost: '$1,200', duration: '3 days', category: 'ophthalmology', rating: 4.7 },
        { id: 6, name: 'Cancer Treatment', cost: '$9,000', duration: '12 days', category: 'oncology', rating: 4.8 }
      ],
      hospitals: [
        { id: 1, name: 'Bumrungrad International', rating: 4.9, specialties: ['Cardiology', 'Cosmetic'], beds: 580, established: 1980 },
        { id: 2, name: 'Bangkok Hospital', rating: 4.8, specialties: ['Orthopedics', 'Oncology'], beds: 400, established: 1972 },
        { id: 3, name: 'Samitivej Hospital', rating: 4.7, specialties: ['Dental', 'Eye Care'], beds: 270, established: 1979 }
      ],
      doctors: [
        { id: 1, name: 'Dr. Somchai Lee', specialty: 'Cardiologist', experience: '22 years', rating: 4.9, qualifications: ['MD', 'Board Certified'] },
        { id: 2, name: 'Dr. Naree Wong', specialty: 'Orthopedist', experience: '16 years', rating: 4.8, qualifications: ['MS Ortho'] },
        { id: 3, name: 'Dr. Chaiya Suk', specialty: 'Oncologist', experience: '19 years', rating: 4.7, qualifications: ['MD', 'PhD Oncology'] }
      ]
    },
    singapore: {
      treatments: [
        { id: 1, name: 'Heart Surgery', cost: '$15,000', duration: '8 days', category: 'cardiac', rating: 4.9 },
        { id: 2, name: 'Orthopedic Surgery', cost: '$12,000', duration: '6 days', category: 'ortho', rating: 4.8 },
        { id: 3, name: 'Cosmetic Surgery', cost: '$8,000', duration: '4 days', category: 'cosmetic', rating: 4.7 },
        { id: 4, name: 'Dental Treatments', cost: '$2,000', duration: '3 days', category: 'dental', rating: 4.6 },
        { id: 5, name: 'Eye Surgery', cost: '$6,000', duration: '5 days', category: 'ophthalmology', rating: 4.9 },
        { id: 6, name: 'Cancer Treatment', cost: '$25,000', duration: '15 days', category: 'oncology', rating: 4.8 }
      ],
      hospitals: [
        { id: 1, name: 'Mount Elizabeth Hospital', rating: 4.9, specialties: ['Cardiology', 'Oncology'], beds: 345, established: 1976 },
        { id: 2, name: 'Singapore General Hospital', rating: 4.8, specialties: ['Orthopedics', 'Neurology'], beds: 1785, established: 1821 },
        { id: 3, name: 'Gleneagles Hospital', rating: 4.7, specialties: ['Cosmetic', 'Eye Care'], beds: 221, established: 1957 }
      ],
      doctors: [
        { id: 1, name: 'Dr. Lim Wei', specialty: 'Cardiologist', experience: '25 years', rating: 5.0, qualifications: ['MD', 'FRCP'] },
        { id: 2, name: 'Dr. Tan Mei', specialty: 'Orthopedist', experience: '20 years', rating: 4.9, qualifications: ['MBBS', 'FRCS'] },
        { id: 3, name: 'Dr. Goh Hock', specialty: 'Oncologist', experience: '21 years', rating: 4.8, qualifications: ['MD', 'PhD'] }
      ]
    },
    turkey: {
      treatments: [
        { id: 1, name: 'Heart Surgery', cost: '$6,000', duration: '7 days', category: 'cardiac', rating: 4.7 },
        { id: 2, name: 'Orthopedic Surgery', cost: '$4,500', duration: '5 days', category: 'ortho', rating: 4.6 },
        { id: 3, name: 'Cosmetic Surgery', cost: '$3,000', duration: '3 days', category: 'cosmetic', rating: 4.8 },
        { id: 4, name: 'Dental Treatments', cost: '$900', duration: '2 days', category: 'dental', rating: 4.5 },
        { id: 5, name: 'Eye Surgery', cost: '$2,000', duration: '4 days', category: 'ophthalmology', rating: 4.7 },
        { id: 6, name: 'Cancer Treatment', cost: '$12,000', duration: '14 days', category: 'oncology', rating: 4.6 }
      ],
      hospitals: [
        { id: 1, name: 'Acibadem Healthcare', rating: 4.8, specialties: ['Cardiology', 'Cosmetic'], beds: 600, established: 1991 },
        { id: 2, name: 'Memorial Hospitals', rating: 4.7, specialties: ['Orthopedics', 'Oncology'], beds: 450, established: 2000 },
        { id: 3, name: 'Medipol University Hospital', rating: 4.6, specialties: ['Dental', 'Eye Care'], beds: 470, established: 2009 }
      ],
      doctors: [
        { id: 1, name: 'Dr. Ahmet Oz', specialty: 'Cardiologist', experience: '18 years', rating: 4.8, qualifications: ['MD', 'Cardiology'] },
        { id: 2, name: 'Dr. Elif Kaya', specialty: 'Orthopedist', experience: '14 years', rating: 4.7, qualifications: ['MD', 'Orthopedics'] },
        { id: 3, name: 'Dr. Mehmet Ali', specialty: 'Oncologist', experience: '17 years', rating: 4.6, qualifications: ['MD', 'Oncology'] }
      ]
    },
    mexico: {
      treatments: [
        { id: 1, name: 'Heart Surgery', cost: '$7,000', duration: '7 days', category: 'cardiac', rating: 4.6 },
        { id: 2, name: 'Orthopedic Surgery', cost: '$5,000', duration: '5 days', category: 'ortho', rating: 4.5 },
        { id: 3, name: 'Cosmetic Surgery', cost: '$3,500', duration: '3 days', category: 'cosmetic', rating: 4.7 },
        { id: 4, name: 'Dental Treatments', cost: '$1,200', duration: '2 days', category: 'dental', rating: 4.4 },
        { id: 5, name: 'Eye Surgery', cost: '$2,500', duration: '4 days', category: 'ophthalmology', rating: 4.6 },
        { id: 6, name: 'Cancer Treatment', cost: '$15,000', duration: '14 days', category: 'oncology', rating: 4.5 }
      ],
      hospitals: [
        { id: 1, name: 'Hospital Angeles', rating: 4.7, specialties: ['Cardiology', 'Orthopedics'], beds: 520, established: 1968 },
        { id: 2, name: 'ABC Medical Center', rating: 4.8, specialties: ['Oncology', 'Cosmetic'], beds: 380, established: 1995 },
        { id: 3, name: 'Star Medica', rating: 4.6, specialties: ['Dental', 'Eye Care'], beds: 290, established: 1985 }
      ],
      doctors: [
        { id: 1, name: 'Dr. Carlos Ramirez', specialty: 'Cardiologist', experience: '19 years', rating: 4.7, qualifications: ['MD', 'Cardiology'] },
        { id: 2, name: 'Dr. Maria Lopez', specialty: 'Orthopedist', experience: '15 years', rating: 4.8, qualifications: ['MD', 'Orthopedics'] },
        { id: 3, name: 'Dr. Juan Hernandez', specialty: 'Oncologist', experience: '16 years', rating: 4.6, qualifications: ['MD', 'Oncology'] }
      ]
    },
    malaysia: {
      treatments: [
        { id: 1, name: 'Heart Surgery', cost: '$5,500', duration: '7 days', category: 'cardiac', rating: 4.7 },
        { id: 2, name: 'Orthopedic Surgery', cost: '$4,000', duration: '5 days', category: 'ortho', rating: 4.6 },
        { id: 3, name: 'Cosmetic Surgery', cost: '$2,500', duration: '3 days', category: 'cosmetic', rating: 4.8 },
        { id: 4, name: 'Dental Treatments', cost: '$950', duration: '2 days', category: 'dental', rating: 4.5 },
        { id: 5, name: 'Eye Surgery', cost: '$1,800', duration: '4 days', category: 'ophthalmology', rating: 4.7 },
        { id: 6, name: 'Cancer Treatment', cost: '$11,000', duration: '14 days', category: 'oncology', rating: 4.6 }
      ],
      hospitals: [
        { id: 1, name: 'Gleneagles Kuala Lumpur', rating: 4.8, specialties: ['Cardiology', 'Oncology'], beds: 331, established: 1996 },
        { id: 2, name: 'Pantai Hospital', rating: 4.7, specialties: ['Orthopedics', 'Cosmetic'], beds: 370, established: 1974 },
        { id: 3, name: 'Sunway Medical Centre', rating: 4.9, specialties: ['Dental', 'Eye Care'], beds: 608, established: 1999 }
      ],
      doctors: [
        { id: 1, name: 'Dr. Ahmad Bin', specialty: 'Cardiologist', experience: '21 years', rating: 4.8, qualifications: ['MD', 'Cardiology'] },
        { id: 2, name: 'Dr. Siti Rahman', specialty: 'Orthopedist', experience: '17 years', rating: 4.7, qualifications: ['MD', 'Orthopedics'] },
        { id: 3, name: 'Dr. Kumar Nair', specialty: 'Oncologist', experience: '20 years', rating: 4.9, qualifications: ['MD', 'Oncology'] }
      ]
    }
  };

  // All available locations for search
  const allLocations = [
    { value: 'india', label: 'India' },
    { value: 'thailand', label: 'Thailand' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'turkey', label: 'Turkey' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'malaysia', label: 'Malaysia' }
  ];

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('medicalUser');
    const savedFavorites = localStorage.getItem('medicalFavorites');
    
    if (savedUser) {
      setUserDetails(JSON.parse(savedUser));
      setUserForm(JSON.parse(savedUser));
    }
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save user data to localStorage
  const saveUserData = (userData) => {
    setUserDetails(userData);
    localStorage.setItem('medicalUser', JSON.stringify(userData));
  };

  const saveFavorite = (type, item) => {
    const newFavorites = {
      ...favorites,
      [type]: [...favorites[type], item]
    };
    setFavorites(newFavorites);
    localStorage.setItem('medicalFavorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (type, itemId) => {
    const newFavorites = {
      ...favorites,
      [type]: favorites[type].filter(item => item.id !== itemId)
    };
    setFavorites(newFavorites);
    localStorage.setItem('medicalFavorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (type, itemId) => {
    return favorites[type].some(item => item.id === itemId);
  };

  const handleSearch = () => {
    if (searchQuery.trim() || selectedLocation) {
      setSearchTriggered(true);
    } else {
      alert('Please enter a search query or select a location.');
    }
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    saveUserData(userForm);
    setShowUserForm(false);
    alert('Profile saved successfully!');
  };

  const handleInputChange = (field, value) => {
    setUserForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Enhanced search function that searches across all data
  const performSearch = () => {
    if (!searchQuery.trim() && !selectedLocation) return null;

    const query = searchQuery.toLowerCase().trim();
    const results = {
      treatments: [],
      hospitals: [],
      doctors: []
    };

    // Search across all locations or specific location
    const locationsToSearch = selectedLocation ? [selectedLocation] : Object.keys(dataByLocation);

    locationsToSearch.forEach(location => {
      const locationData = dataByLocation[location];
      if (!locationData) return;

      // Search treatments
      results.treatments.push(...locationData.treatments
        .filter(treatment => 
          treatment.name.toLowerCase().includes(query) ||
          treatment.category.toLowerCase().includes(query) ||
          treatment.cost.toLowerCase().includes(query)
        )
        .map(item => ({ ...item, location }))
      );

      // Search hospitals
      results.hospitals.push(...locationData.hospitals
        .filter(hospital =>
          hospital.name.toLowerCase().includes(query) ||
          hospital.specialties.some(specialty => 
            specialty.toLowerCase().includes(query)
          )
        )
        .map(item => ({ ...item, location }))
      );

      // Search doctors
      results.doctors.push(...locationData.doctors
        .filter(doctor =>
          doctor.name.toLowerCase().includes(query) ||
          doctor.specialty.toLowerCase().includes(query) ||
          (doctor.qualifications && doctor.qualifications.some(qual => 
            qual.toLowerCase().includes(query)
          ))
        )
        .map(item => ({ ...item, location }))
      );
    });

    return results;
  };

  const sortData = (data) => {
    if (!data) return [];
    
    switch (sortBy) {
      case 'cost':
        return [...data].sort((a, b) => {
          const costA = parseInt(a.cost.replace(/[^0-9]/g, ''));
          const costB = parseInt(b.cost.replace(/[^0-9]/g, ''));
          return costA - costB;
        });
      case 'rating':
        return [...data].sort((a, b) => b.rating - a.rating);
      case 'name':
      default:
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  const renderTabContent = () => {
    if (!searchTriggered) {
      return (
        <div className="text-center py-12 text-muted-foreground">
          <Search size={48} className="mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-semibold mb-2">Start Your Medical Journey</h3>
          <p>Enter your search query and select a preferred location to find the best medical options.</p>
        </div>
      );
    }

    const searchResults = performSearch();
    if (!searchResults) return null;

    const currentData = selectedLocation ? dataByLocation[selectedLocation] : null;
    const hasResults = searchResults.treatments.length > 0 || 
                      searchResults.hospitals.length > 0 || 
                      searchResults.doctors.length > 0;

    if (!hasResults) {
      return (
        <div className="text-center py-12 text-muted-foreground">
          <p>No results found for "{searchQuery}"{selectedLocation ? ` in ${selectedLocation}` : ''}.</p>
          <p className="text-sm mt-2">Try different keywords or browse all locations.</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Search Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-xl font-semibold">
            Search Results for "{searchQuery}"
            {selectedLocation && ` in ${selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1)}`}
          </h3>
          
          <div className="flex items-center gap-2">
            <Filter size={16} />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="cost">Cost</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Combined Results or Tab-specific Results */}
        {!selectedLocation ? (
          <Tabs defaultValue="treatments" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="treatments">Treatments ({searchResults.treatments.length})</TabsTrigger>
              <TabsTrigger value="hospitals">Hospitals ({searchResults.hospitals.length})</TabsTrigger>
              <TabsTrigger value="doctors">Doctors ({searchResults.doctors.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="treatments">
              {renderTreatments(sortData(searchResults.treatments))}
            </TabsContent>
            
            <TabsContent value="hospitals">
              {renderHospitals(sortData(searchResults.hospitals))}
            </TabsContent>
            
            <TabsContent value="doctors">
              {renderDoctors(sortData(searchResults.doctors))}
            </TabsContent>
          </Tabs>
        ) : (
          // Location-specific results
          (() => {
            if (!currentData) return null;
            
            switch (activeTab) {
              case 'treatments':
                const filteredTreatments = currentData.treatments.filter(treatment =>
                  treatment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  treatment.category.toLowerCase().includes(searchQuery.toLowerCase())
                );
                return renderTreatments(sortData(filteredTreatments));
              case 'hospitals':
                const filteredHospitals = currentData.hospitals.filter(hospital =>
                  hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  hospital.specialties.some(specialty => 
                    specialty.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                );
                return renderHospitals(sortData(filteredHospitals));
              case 'doctors':
                const filteredDoctors = currentData.doctors.filter(doctor =>
                  doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
                );
                return renderDoctors(sortData(filteredDoctors));
              default:
                return null;
            }
          })()
        )}
      </div>
    );
  };

  const renderTreatments = (treatments) => {
    if (!treatments || treatments.length === 0) {
      return <div className="text-center py-8 text-muted-foreground">No treatments found.</div>;
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {treatments.map((treatment, index) => (
          <Card key={index} className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 z-10"
              onClick={() => isFavorite('treatments', treatment.id) 
                ? removeFavorite('treatments', treatment.id)
                : saveFavorite('treatments', { ...treatment, type: 'treatment' })
              }
            >
              <Heart 
                size={16} 
                className={isFavorite('treatments', treatment.id) ? "fill-red-500 text-red-500" : ""} 
              />
            </Button>
            <CardHeader>
              <CardTitle className="text-lg">{treatment.name}</CardTitle>
              <CardDescription>
                <Badge variant="outline">{treatment.category}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {treatment.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign size={14} />
                    {treatment.cost}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{treatment.rating}</span>
                </div>
                {treatment.location && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin size={12} />
                    {treatment.location}
                  </div>
                )}
              </div>
              <Button className="w-full mt-4">Book Consultation</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderHospitals = (hospitals) => {
    if (!hospitals || hospitals.length === 0) {
      return <div className="text-center py-8 text-muted-foreground">No hospitals found.</div>;
    }

    return (
      <div className="space-y-4">
        {hospitals.map((hospital, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{hospital.name}</CardTitle>
                  <CardDescription>
                    {hospital.specialties.join(', ')}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => isFavorite('hospitals', hospital.id) 
                    ? removeFavorite('hospitals', hospital.id)
                    : saveFavorite('hospitals', { ...hospital, type: 'hospital' })
                  }
                >
                  <Heart 
                    size={16} 
                    className={isFavorite('hospitals', hospital.id) ? "fill-red-500 text-red-500" : ""} 
                  />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Rating:</strong> {hospital.rating} ★
                </div>
                {hospital.beds && (
                  <div>
                    <strong>Beds:</strong> {hospital.beds}
                  </div>
                )}
                {hospital.established && (
                  <div>
                    <strong>Established:</strong> {hospital.established}
                  </div>
                )}
              </div>
              {hospital.location && (
                <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                  <MapPin size={12} />
                  {hospital.location}
                </div>
              )}
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">View Details</Button>
                <Button size="sm">Contact Hospital</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderDoctors = (doctors) => {
    if (!doctors || doctors.length === 0) {
      return <div className="text-center py-8 text-muted-foreground">No doctors found.</div>;
    }

    return (
      <div className="grid md:grid-cols-2 gap-4">
        {doctors.map((doctor, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{doctor.name}</CardTitle>
                  <CardDescription>{doctor.specialty}</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => isFavorite('doctors', doctor.id) 
                    ? removeFavorite('doctors', doctor.id)
                    : saveFavorite('doctors', { ...doctor, type: 'doctor' })
                  }
                >
                  <Heart 
                    size={16} 
                    className={isFavorite('doctors', doctor.id) ? "fill-red-500 text-red-500" : ""} 
                  />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div><strong>Experience:</strong> {doctor.experience}</div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span>{doctor.rating} Rating</span>
                </div>
                {doctor.qualifications && (
                  <div>
                    <strong>Qualifications:</strong> {doctor.qualifications.join(', ')}
                  </div>
                )}
                {doctor.location && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin size={12} />
                    {doctor.location}
                  </div>
                )}
              </div>
              <Button className="w-full mt-4">Book Appointment</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
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
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%)',
          opacity: 0.95
        }}
      ></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header with User Profile */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                World-Class
                <br />
                Healthcare
                <br />
                Within Reach
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                Connect with top hospitals and specialists worldwide. Quality medical care at affordable prices.
              </p>
            </div>

            {/* User Profile */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <User size={20} className="mr-2" />
                  {userDetails ? userDetails.name : 'My Profile'}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Medical Profile</DialogTitle>
                  <DialogDescription>
                    {userDetails ? 'Update your medical profile' : 'Create your medical profile for personalized recommendations'}
                  </DialogDescription>
                </DialogHeader>
                
                {userDetails ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Name</label>
                        <p className="text-lg">{userDetails.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <p className="text-lg">{userDetails.email}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <p className="text-lg">{userDetails.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Country</label>
                      <p className="text-lg">{userDetails.country}</p>
                    </div>
                    <Button onClick={() => setShowUserForm(true)}>Edit Profile</Button>
                  </div>
                ) : (
                  <Button onClick={() => setShowUserForm(true)} className="w-full">
                    Create Medical Profile
                  </Button>
                )}
              </DialogContent>
            </Dialog>
          </div>

          {/* Search Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Find Your Perfect Medical Solution</CardTitle>
              <CardDescription>Search from thousands of treatments, hospitals, and specialists worldwide</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="treatments" className="flex items-center gap-2">
                    <Stethoscope size={16} />
                    Treatments
                  </TabsTrigger>
                  <TabsTrigger value="hospitals" className="flex items-center gap-2">
                    <Building2 size={16} />
                    Hospitals
                  </TabsTrigger>
                  <TabsTrigger value="doctors" className="flex items-center gap-2">
                    <UserCheck size={16} />
                    Doctors
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Search Form */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">What are you looking for?</label>
                  <Input 
                    placeholder={`Search ${activeTab}...`} 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12"
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any Location</SelectItem>
                      {allLocations.map(location => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 h-12 px-8 mb-6"
                onClick={handleSearch}
              >
                <Search size={20} className="mr-2" />
                Search Medical Options
              </Button>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchQuery('cardiac')}>Cardiac Care</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchQuery('orthopedic')}>Orthopedics</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchQuery('cosmetic')}>Cosmetic Surgery</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchQuery('dental')}>Dental</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchQuery('eye')}>Eye Care</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchQuery('cancer')}>Oncology</Badge>
              </div>

              {/* Results */}
              {renderTabContent()}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* User Form Modal */}
      <Dialog open={showUserForm} onOpenChange={setShowUserForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Medical Profile</DialogTitle>
            <DialogDescription>
              Please provide your details for personalized medical recommendations.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUserSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  value={userForm.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  value={userForm.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Phone</label>
                <Input
                  value={userForm.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Country</label>
                <Input
                  value={userForm.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Medical History (Optional)</label>
              <Input
                value={userForm.medicalHistory}
                onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                placeholder="Any existing conditions or concerns"
              />
            </div>
            <div className="flex gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setShowUserForm(false)}>
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Save Profile
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;