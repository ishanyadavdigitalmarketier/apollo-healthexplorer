// pages/Book.tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Calendar, User, MapPin, Globe } from 'lucide-react';
import Header from '@/components/Header';

const Book = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    country: '',
    city: '',
    phone: '',
    age: '',
    dob: '',
    inquiry: ''
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

  const handleCountryChange = (value: string) => {
    setFormData({
      ...formData,
      country: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.clientName || !formData.inquiry) {
      alert('Please fill all required fields.');
      return;
    }

    // Here you can add form submission logic, e.g., API call
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('/api/save-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        alert('Thank you! Your consultation request has been submitted. We\'ll contact you soon.');
        setFormData({
          clientName: '',
          country: '',
          city: '',
          phone: '',
          age: '',
          dob: '',
          inquiry: ''
        });
      } else {
        alert('Error submitting. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h2 className="flex items-center justify-center gap-2 mb-6 text-2xl font-bold text-primary">
              <Phone className="h-5 w-5" />
              Book Your Consultation
            </h2>
            <p className="text-center text-sm text-muted-foreground mb-6">
              Schedule a personalized consultation with our financial advisors. Provide your details below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="clientName" className="block text-sm font-medium text-primary mb-2 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Client Name
                </label>
                <Input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-primary mb-2 flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Country
                </label>
                <Select value={formData.country} onValueChange={handleCountryChange} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USA">USA</SelectItem>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-primary mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  City
                </label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-primary mb-2 flex items-center gap-2">
                  Age
                </label>
                <Input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full"
                  min="0"
                  max="120"
                  placeholder="Enter your age"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-primary mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Date of Birth
                </label>
                <Input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-primary mb-2">
                  Describe Your Financial Inquiry
                </label>
                <Textarea
                  id="inquiry"
                  name="inquiry"
                  rows={4}
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                  className="w-full resize-none"
                  placeholder="e.g., Seeking advice on investment portfolio for retirement..."
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us Now
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;