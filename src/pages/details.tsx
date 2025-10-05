import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Shield, Users, CheckCircle, ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import treatmentIcon from '@/assets/treatment-icon.jpg';

interface Treatment {
  id: string;
  category: string;
  savings: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  price: string;
  duration: string;
  features: string[];
  image: string;
  hospital: string;
  doctor: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
}

const mockTreatments: Treatment[] = [
  {
    id: '1',
    category: 'Cardiology',
    savings: 'Up to 70% savings',
    title: 'Heart Bypass Surgery',
    description: 'Advanced cardiac surgery with world-class specialists and cutting-edge technology. This procedure involves creating a new pathway for blood flow around blocked arteries in the heart.',
    rating: 4.9,
    reviews: 2847,
    price: '$1,200',
    duration: '7-10 days',
    features: ['JCI Accredited Hospitals', 'English Speaking Doctors', 'Post-Op Care', '24/7 Monitoring'],
    image: treatmentIcon,
    hospital: 'Apollo Hospitals, India',
    doctor: 'Dr. Rajesh Kumar',
    location: 'India',
    contact: {
      phone: '+91 123 456 7890',
      email: 'info@apollohospitals.com',
      address: 'Chennai, Tamil Nadu, India',
    },
    testimonials: [
      {
        name: 'John Doe',
        text: 'The surgery was life-changing. The team was professional and caring throughout.',
        rating: 5,
      },
      {
        name: 'Jane Smith',
        text: 'Excellent care and quick recovery. Highly recommend!',
        rating: 4.8,
      },
    ],
  },
  // Add more mock treatments as needed
  {
    id: '2',
    category: 'Orthopedics', 
    savings: 'Up to 75% savings',
    title: 'Knee Replacement',
    description: 'Complete knee replacement surgery with advanced prosthetics and rehabilitation. Restore mobility and reduce pain with state-of-the-art implants.',
    rating: 4.8,
    reviews: 1923,
    price: '$950',
    duration: '5-7 days',
    features: ['Robotic Surgery', 'Fast Recovery', 'Lifetime Warranty', 'Physiotherapy Included'],
    image: treatmentIcon,
    hospital: 'Fortis Healthcare, India',
    doctor: 'Dr. Priya Sharma',
    location: 'India',
    contact: {
      phone: '+91 987 654 3210',
      email: 'contact@fortishealth.com',
      address: 'Mumbai, Maharashtra, India',
    },
    testimonials: [
      {
        name: 'Mike Johnson',
        text: 'Back to walking without pain in no time. Great value!',
        rating: 4.9,
      },
      {
        name: 'Sarah Wilson',
        text: 'The robotic surgery made all the difference.',
        rating: 4.7,
      },
    ],
  },
  // ... (other treatments can be added similarly)
];

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const treatment = mockTreatments.find(t => t.id === id) || mockTreatments[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-8 flex items-center gap-2">
          <ArrowLeft size={20} />
          Back to Treatments
        </Button>

        {/* Hero Image and Basic Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <img 
            src={treatment.image} 
            alt={treatment.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="space-y-4">
            <Badge variant="secondary">{treatment.category}</Badge>
            <Badge className="bg-accent text-accent-foreground ml-2">{treatment.savings}</Badge>
            <h1 className="text-3xl font-bold">{treatment.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{treatment.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">{treatment.rating}</span>
                </div>
                <span className="text-muted-foreground">({treatment.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">Starting at {treatment.price}</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {treatment.duration}
                </div>
              </div>
            </div>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
              Book Consultation
            </Button>
          </div>
        </div>

        {/* Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {treatment.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hospital and Doctor Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Hospital</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">{treatment.hospital}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{treatment.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>JCI Accredited</span>
              </div>
              <Button variant="outline" className="w-full mt-4">View Hospital</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lead Doctor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">{treatment.doctor}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>20+ Years Experience</span>
              </div>
              <Button variant="outline" className="w-full mt-4">View Doctor Profile</Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>{treatment.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>{treatment.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{treatment.contact.address}</span>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card>
          <CardHeader>
            <CardTitle>What Our Patients Say</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {treatment.testimonials.map((testimonial, idx) => (
                <div key={idx} className="border-l-4 border-accent pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Details;