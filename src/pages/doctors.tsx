// pages/Doctors.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Heart } from 'lucide-react';
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
      image: 'https://via.placeholder.com/120x120?text=Dr.+Rajesh',
      bio: 'Board-certified cardiologist with 15+ years of experience in interventional cardiology and heart disease prevention.'
    },
    {
      id: '2',
      name: 'Dr. Priya Sharma',
      specialty: 'Neurology',
      image: 'https://via.placeholder.com/120x120?text=Dr.+Priya',
      bio: 'Expert in neurological disorders, specializing in stroke management and neurodegenerative diseases.'
    },
    {
      id: '3',
      name: 'Dr. Amit Patel',
      specialty: 'Orthopedics',
      image: 'https://via.placeholder.com/120x120?text=Dr.+Amit',
      bio: 'Renowned orthopedic surgeon focusing on joint replacements and sports medicine.'
    },
    {
      id: '4',
      name: 'Dr. Sneha Gupta',
      specialty: 'Dermatology',
      image: 'https://via.placeholder.com/120x120?text=Dr.+Sneha',
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
                <a href="/contact">Book Now</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Doctors;