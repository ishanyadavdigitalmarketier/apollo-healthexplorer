// pages/Doctors.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Heart, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

const Doctors = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      bio: 'Board-certified cardiologist with 15+ years of experience in interventional cardiology and heart disease prevention.'
    },
    {
      id: '2',
      name: 'Dr. Priya Sharma',
      specialty: 'Neurology',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      bio: 'Expert in neurological disorders, specializing in stroke management and neurodegenerative diseases.'
    },
    {
      id: '3',
      name: 'Dr. Amit Patel',
      specialty: 'Orthopedics',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      bio: 'Renowned orthopedic surgeon focusing on joint replacements and sports medicine.'
    },
    {
      id: '4',
      name: 'Dr. Sneha Gupta',
      specialty: 'Dermatology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      bio: 'Dermatologist with expertise in cosmetic procedures and skin cancer treatment.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md border mb-8">
            <h1 className="flex items-center gap-2 mb-6 text-3xl font-bold text-primary">
              <Users className="h-6 w-6" />
              Our Doctors
            </h1>
            <div className="doctors-intro space-y-4">
              <h3 className="text-xl font-semibold text-primary">Expert Care from Top Professionals</h3>
              <p className="text-foreground leading-relaxed">
                At Apollo Health Explorer, our team of board-certified doctors and specialists brings decades of experience to provide you with personalized, evidence-based healthcare. 
                From general practitioners to niche experts, we're here to guide your health journey every step of the way.
              </p>
              <p className="text-foreground leading-relaxed">
                Each doctor is carefully selected for their expertise, compassion, and commitment to patient-centered care. 
                We believe in treating the whole person, not just symptoms.
              </p>
            </div>

            <div className="appointment-section text-center mt-8 p-6 bg-muted rounded-lg">
              <h3 className="flex items-center justify-center gap-2 mb-4 text-primary font-semibold">
                <Calendar className="h-5 w-5" />
                Ready to Schedule an Appointment?
              </h3>
              <p className="text-foreground mb-4">
                Our doctors are accepting new patients. Book a consultation today and start your path to better health.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/book">Book Now</Link>
              </Button>
            </div>
          </div>

          {/* Doctor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-card p-6 rounded-lg shadow-md border text-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-primary mb-2">{doctor.name}</h3>
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                  {doctor.specialty}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{doctor.bio}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/doctors/${doctor.id}`}>View Profile</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Doctors;