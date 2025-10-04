// pages/Contact.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Calendar, Briefcase, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    queryType: '',
    message: '',
    captcha: ''
  });
  const [captchaQuestion, setCaptchaQuestion] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState(0);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`${num1} + ${num2}`);
    setCaptchaAnswer(num1 + num2);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQueryTypeChange = (value: string) => {
    setFormData({
      ...formData,
      queryType: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(formData.captcha) !== captchaAnswer) {
      alert('Incorrect CAPTCHA. Please try again.');
      generateCaptcha();
      return;
    }
    // Here you can add form submission logic, e.g., API call
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      queryType: '',
      message: '',
      captcha: ''
    });
    generateCaptcha();
  };

  // Generate initial CAPTCHA
  useState(() => generateCaptcha(), []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Apollo Hospitals is committed to providing the best medical facilities, constant care, and reliable support. 
            Whether you want to get in touch with our doctors from specific departments, seek information about our services, 
            or ask us a question, please fill up the form given below and we will get back to you.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg shadow-md border mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                <Input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                  className="w-full" 
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                <Input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                  className="w-full" 
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  className="w-full" 
                />
              </div>
            </div>
            <div>
              <label htmlFor="queryType" className="block text-sm font-medium text-foreground mb-2">Type of Query *</label>
              <Select onValueChange={handleQueryTypeChange} value={formData.queryType} required>
                <SelectTrigger id="queryType">
                  <SelectValue placeholder="Select a query type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="appointment">Appointment</SelectItem>
                  <SelectItem value="services">Services Information</SelectItem>
                  <SelectItem value="careers">Careers</SelectItem>
                  <SelectItem value="international">International Patient</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
              <Textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                required 
                className="w-full resize-none"
              />
            </div>
            <div>
              <label htmlFor="captcha" className="block text-sm font-medium text-foreground mb-2">CAPTCHA: Solve {captchaQuestion} *</label>
              <div className="flex gap-2 items-center">
                <Input 
                  type="number" 
                  id="captcha" 
                  name="captcha" 
                  value={formData.captcha}
                  onChange={handleChange}
                  required 
                  className="w-20" 
                />
                <Button type="button" variant="outline" size="sm" onClick={generateCaptcha}>
                  Refresh
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.</p>
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Submit Query
            </Button>
          </form>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <div className="text-center p-4 border rounded-lg">
              <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-3">
                <Phone className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Apollo Lifeline</h3>
              <p className="text-muted-foreground mb-1">1860 500 1066</p>
              <p className="text-xs text-muted-foreground">Dial from anywhere in India</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-3">
                <Phone className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">International Helpline</h3>
              <p className="text-muted-foreground mb-1">+91 40 4344 1066</p>
              <p className="text-xs text-muted-foreground">For global patients</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-3">
                <MapPin className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Hospital Locations</h3>
              <p className="text-xs text-muted-foreground">Find nearest Apollo Hospital</p>
              <Button variant="link" size="sm" className="p-0 h-auto">View Locations</Button>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-3">
                <Calendar className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Book Appointment</h3>
              <p className="text-xs text-muted-foreground">Online booking available</p>
              <Button variant="link" size="sm" className="p-0 h-auto">Book Now</Button>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-3">
                <Briefcase className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Careers</h3>
              <p className="text-xs text-muted-foreground">Explore job opportunities</p>
              <Button variant="link" size="sm" className="p-0 h-auto">View Careers</Button>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Corporate Address
            </h2>
            <p className="text-muted-foreground">
              Apollo Hospitals Enterprise Ltd.<br />
              No. 21, Greams Lane, Off Greams Road,<br />
              Chennai - 600 006, Tamil Nadu, India.<br />
              Phone: +91-44-2829 3333 | Email: info@apollohospitals.com
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;