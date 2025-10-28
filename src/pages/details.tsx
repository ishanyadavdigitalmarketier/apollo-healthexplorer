// TreatmentDetails.tsx - Details page component
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Shield, Users, CheckCircle, ArrowLeft, Phone, Mail, MapPin, Building2, UserCheck } from 'lucide-react';
import treatmentIcon from '@/assets/treatment-icon.jpg';
import robotictotal from '@/assets/robotic-total.png';
import pexelszandatsu from '@/assets/pexels-zandatsu.jpg';
import componentsof from '@/assets/components-of.jpg';
import lasikeye from '@/assets/lasik-eye.jpg';
import invitro from '@/assets/in-vitro.jpg';

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
    price: '$4000',
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
    image: robotictotal,
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
  {
    id: '3',
    category: 'Plastic Surgery',
    savings: 'Up to 60% savings',
    title: 'Cosmetic Surgery',
    description: 'Comprehensive cosmetic procedures by board-certified plastic surgeons. Achieve your desired look with safe and effective treatments.',
    rating: 4.7,
    reviews: 3156,
    price: '$1,400',
    duration: '3-5 days',
    features: ['Board Certified', 'Natural Results', 'Recovery Support', 'Personalized Plans'],
    image: pexelszandatsu,
    hospital: 'Max Super Speciality, India',
    doctor: 'Dr. Amit Patel',
    location: 'India',
    contact: {
      phone: '+91 456 789 0123',
      email: 'info@maxhealth.com',
      address: 'Delhi, India',
    },
    testimonials: [
      {
        name: 'Emily Brown',
        text: 'Transformative experience with amazing results. Staff was supportive.',
        rating: 4.9,
      },
      {
        name: 'David Lee',
        text: 'Professional and discreet. Very satisfied with the outcome.',
        rating: 4.6,
      },
    ],
  },
  {
    id: '4',
    category: 'Dentistry',
    savings: 'Up to 80% savings', 
    title: 'Dental Implants',
    description: 'Premium dental implants with immediate loading and aesthetic excellence. Restore your smile with durable and natural-looking solutions.',
    rating: 4.9,
    reviews: 4521,
    price: '$800',
    duration: '2-3 days',
    features: ['Same Day Implants', 'Digital Planning', 'Lifetime Guarantee', 'Painless Procedure'],
    image: componentsof,
    hospital: 'Bumrungrad International, Thailand',
    doctor: 'Dr. Somchai Lee',
    location: 'Thailand',
    contact: {
      phone: '+66 2 066 8888',
      email: 'info@bumrungrad.com',
      address: 'Bangkok, Thailand',
    },
    testimonials: [
      {
        name: 'Lisa Chen',
        text: 'Perfect smile now! Quick and comfortable procedure.',
        rating: 5,
      },
      {
        name: 'Robert Kim',
        text: 'High quality at a fraction of the cost. Excellent service.',
        rating: 4.9,
      },
    ],
  },
  {
    id: '5',
    category: 'Ophthalmology',
    savings: 'Up to 70% savings',
    title: 'LASIK Eye Surgery',
    description: 'Bladeless LASIK surgery for permanent vision correction with latest technology. Say goodbye to glasses with precise and safe laser treatment.',
    rating: 4.8,
    reviews: 2734,
    price: '$1,200',
    duration: '1 day',
    features: ['Bladeless Technology', 'Quick Recovery', 'Vision Guarantee', 'Custom Mapping'],
    image: lasikeye,
    hospital: 'Mount Elizabeth Hospital, Singapore',
    doctor: 'Dr. Lim Wei',
    location: 'Singapore',
    contact: {
      phone: '+65 6737 2666',
      email: 'info@mounte.com',
      address: 'Singapore',
    },
    testimonials: [
      {
        name: 'Anna Taylor',
        text: '20/20 vision the next day! Life-changing.',
        rating: 5,
      },
      {
        name: 'Tom Harris',
        text: 'Safe and effective. No more contacts for me.',
        rating: 4.8,
      },
    ],
  },
  {
    id: '6',
    category: 'Fertility',
    savings: 'Up to 65% savings',
    title: 'IVF Treatment',
    description: 'Advanced fertility treatments with high success rates and personalized care. Journey to parenthood with expert guidance and modern techniques.',
    rating: 4.7,
    reviews: 1867,
    price: '$1,350',
    duration: '4-6 weeks',
    features: ['High Success Rate', 'Genetic Testing', 'Emotional Support', 'Multiple Cycles Option'],
    image: invitro,
    hospital: 'Acibadem Healthcare, Turkey',
    doctor: 'Dr. Ahmet Oz',
    location: 'Turkey',
    contact: {
      phone: '+90 212 414 44 44',
      email: 'info@acibadem.com',
      address: 'Istanbul, Turkey',
    },
    testimonials: [
      {
        name: 'Maria Gonzalez',
        text: 'Finally pregnant after years of trying. Grateful team.',
        rating: 4.9,
      },
      {
        name: 'Carlos Ruiz',
        text: 'Compassionate care throughout the process.',
        rating: 4.7,
      },
    ],
  },
];

const TreatmentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const treatment = mockTreatments.find(t => t.id === id) || mockTreatments[0];

  if (!treatment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Treatment Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/treatments">Back to Treatments</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Image and Basic Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <img 
            src={treatment.image} 
            alt={treatment.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="space-y-6">
            <div className="flex gap-2">
              <Badge variant="secondary">{treatment.category}</Badge>
              <Badge className="bg-accent text-accent-foreground">{treatment.savings}</Badge>
            </div>
            <p className="text-3xl md:text-4xl font-bold">{treatment.title}</p>
            <p className="text-muted-foreground text-lg leading-relaxed">{treatment.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">{treatment.rating}</span>
                </div>
                <span className="text-muted-foreground">({treatment.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="text-right space-y-1">
                <div className="text-2xl font-bold text-primary">Starting at {treatment.price}</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {treatment.duration}
                </div>
              </div>
            </div>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
              Book Consultation Now
            </Button>
          </div>
        </div>

        {/* Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {treatment.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-md">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hospital and Doctor Info */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Hospital Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-lg">{treatment.hospital}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{treatment.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>JCI Accredited Facility</span>
              </div>
              <Button asChild variant="outline" className="w-full mt-4">
                <Link to={`/hospitals/${treatment.id}`}>View Hospital Details</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-5 h-5" />
                Lead Specialist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-lg">{treatment.doctor}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9 Patient Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>20+ Years of Experience</span>
              </div>
              <Button asChild variant="outline" className="w-full mt-4">
                <Link to={`/doctors/${treatment.id}`}>View Doctor Profile</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-0">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">{treatment.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">{treatment.contact.email}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">{treatment.contact.address}</span>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Patient Testimonials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {treatment.testimonials.map((testimonial, idx) => (
                <div key={idx} className="border-l-4 border-accent pl-4 bg-muted/50 p-4 rounded-md">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{testimonial.rating}</span>
                  </div>
                  <p className="text-muted-foreground mb-3 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-sm">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TreatmentDetails;