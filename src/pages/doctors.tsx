// pages/Doctors.tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Heart, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Doctors = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Start of Tawk.to Script
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/68ecb5587e32cc195255b4eb/1j7ea8pbh';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
    // End of Tawk.to Script
  }, []);

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
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Our Doctors"
              className="w-full h-84 object-cover rounded-lg mb-6"
            />
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
        </div>
      </main>
    </div>
  );
};

export default Doctors;