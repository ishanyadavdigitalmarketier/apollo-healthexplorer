// pages/Contact.tsx
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">We're here to help. Get in touch with us for any inquiries or to book an appointment.</p>

        {/* Contact Form */}
        <form className="space-y-6 bg-card p-6 rounded-lg shadow-md border">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                required 
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                required 
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Send Message
          </Button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
              <Phone className="text-primary" size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+91-1066-502-502</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
              <Mail className="text-primary" size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">info@apollohospitals.com</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
              <MapPin className="text-primary" size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-muted-foreground">Apollo Hospitals, Chennai, India</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;