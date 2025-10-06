// TreatmentsSection.tsx - Updated to include IDs and dynamic links
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Shield, Users, CheckCircle } from 'lucide-react';
import treatmentIcon from '@/assets/treatment-icon.jpg';

const TreatmentsSection = () => {
  const treatments = [
    {
      id: '1',
      category: 'Cardiology',
      savings: 'Up to 70% savings',
      title: 'Heart Bypass Surgery',
      description: 'Advanced cardiac surgery with world-class specialists and cutting-edge technology.',
      rating: 4.9,
      reviews: 2847,
      price: '$1,200',
      duration: '7-10 days',
      features: ['JCI Accredited Hospitals', 'English Speaking Doctors', 'Post-Op Care'],
      image: treatmentIcon,
    },
    {
      id: '2',
      category: 'Orthopedics', 
      savings: 'Up to 75% savings',
      title: 'Knee Replacement',
      description: 'Complete knee replacement surgery with advanced prosthetics and rehabilitation.',
      rating: 4.8,
      reviews: 1923,
      price: '$950',
      duration: '5-7 days',
      features: ['Robotic Surgery', 'Fast Recovery', 'Lifetime Warranty'],
      image: treatmentIcon,
    },
    {
      id: '3',
      category: 'Plastic Surgery',
      savings: 'Up to 60% savings',
      title: 'Cosmetic Surgery',
      description: 'Comprehensive cosmetic procedures by board-certified plastic surgeons.',
      rating: 4.7,
      reviews: 3156,
      price: '$1,400',
      duration: '3-5 days',
      features: ['Board Certified', 'Natural Results', 'Recovery Support'],
      image: treatmentIcon,
    },
    {
      id: '4',
      category: 'Dentistry',
      savings: 'Up to 80% savings', 
      title: 'Dental Implants',
      description: 'Premium dental implants with immediate loading and aesthetic excellence.',
      rating: 4.9,
      reviews: 4521,
      price: '$800',
      duration: '2-3 days',
      features: ['Same Day Implants', 'Digital Planning', 'Lifetime Guarantee'],
      image: treatmentIcon,
    },
    {
      id: '5',
      category: 'Ophthalmology',
      savings: 'Up to 70% savings',
      title: 'LASIK Eye Surgery',
      description: 'Bladeless LASIK surgery for permanent vision correction with latest technology.',
      rating: 4.8,
      reviews: 2734,
      price: '$1,200',
      duration: '1 day',
      features: ['Bladeless Technology', 'Quick Recovery', 'Vision Guarantee'],
      image: treatmentIcon,
    },
    {
      id: '6',
      category: 'Fertility',
      savings: 'Up to 65% savings',
      title: 'IVF Treatment',
      description: 'Advanced fertility treatments with high success rates and personalized care.',
      rating: 4.7,
      reviews: 1867,
      price: '$1,350',
      duration: '4-6 weeks',
      features: ['High Success Rate', 'Genetic Testing', 'Emotional Support'],
      image: treatmentIcon,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Medical Treatments</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular treatments performed by world-renowned specialists at internationally accredited hospitals with significant cost savings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {treatments.map((treatment) => (
            <Card key={treatment.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={treatment.image} 
                  alt={treatment.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {treatment.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {treatment.savings}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <h3 className="text-xl font-bold mb-2">{treatment.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {treatment.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Rating and Price */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{treatment.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({treatment.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">Starting at {treatment.price}</div>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{treatment.duration}</span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {treatment.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full mt-4" variant="outline">
                  {/* <Link to={`/details/${treatment.id}`}>View Details</Link> */}
                                <Link to="/details">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            {/* View All Treatments */}
            <Link to="/treatments">View All Treatments</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;