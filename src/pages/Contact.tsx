// pages/Contact.tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Search } from 'lucide-react';
import Header from '@/components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add form submission logic, e.g., API call
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      inquiry: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h1 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
              <Mail className="h-5 w-5" />
              Contact Us
            </h1>
            <div className="faq-section space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Have questions about our services?</h3>
                <p className="text-sm text-muted-foreground">
                  Apolo Partners provides expert financial advisory and investment solutions. Reach out to us for personalized support.
                </p>
              </div>
              <div>
                <h2 className="border-b-2 border-primary pb-2 mb-4 text-xl font-semibold">Frequently Asked Questions</h2>
                <p className="mb-2 text-sm">・Click here to schedule a consultation</p>
                <p className="mb-2 text-sm">・Click here to request information about our services</p>
                <p className="text-sm">・Click here to update your account details</p>
              </div>
              <div>
                <h2 className="border-b-2 border-primary pb-2 mb-4 text-xl font-semibold">Search FAQs by Category</h2>
                <p className="mb-4 text-sm">Enter keywords to search for related FAQs.</p>
                <div className="relative mb-6 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 pointer-events-none" />
                  <Input
                    id="searchForm"
                    type="search"
                    placeholder="For example, 'investment,' 'consultation,' 'portfolio,' etc."
                    className="pl-10"
                    autoComplete="off"
                  />
                </div>
                <div className="faq-topics flex justify-between gap-6">
                  <ul className="flex-1 space-y-1">
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Opening an Account
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Investment Options
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Portfolio Management
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Financial Planning
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Risk Assessment
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Retirement Planning
                      </a>
                    </li>
                  </ul>
                  <ul className="flex-1 space-y-1">
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Tax Advisory
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Wealth Management
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Market Insights
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Client Onboarding
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Fees and Charges
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block p-2 rounded hover:bg-accent text-primary transition-colors">
                        Contact Support
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="contact-options flex justify-between gap-6 mt-8">
                  <div className="flex-1 p-4 bg-muted rounded border">
                    <h4 className="flex items-center gap-2 mb-4 text-primary font-semibold">
                      <Phone className="h-4 w-4" />
                      Telephone Inquiries
                    </h4>
                    <p className="mb-4 text-sm">
                      For inquiries, please call{' '}
                      <a href="tel:+1234567890" className="text-primary underline hover:no-underline">
                        +1 (234) 567-890
                      </a>
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Support hours: 9:00 AM - 5:00 PM, Monday to Friday.</li>
                      <li>Calls may be recorded for quality assurance.</li>
                      <li>English and Spanish support available.</li>
                    </ul>
                  </div>
                  <div className="flex-1 p-4 bg-muted rounded border">
                    <h4 className="flex items-center gap-2 mb-4 text-primary font-semibold">
                      <Mail className="h-4 w-4" />
                      Contact Form
                    </h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Please submit your inquiry below. Our team will respond within 1-2 business days.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                          Full Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
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
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                          Email
                        </label>
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
                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Submit
                      </Button>
                    </form>
                    <p className="mt-4 text-sm">
                      <a href="#" className="text-primary underline hover:no-underline">
                        Schedule a consultation with our advisors
                      </a>
                    </p>
                    <h4 className="mt-6 mb-2 text-primary font-semibold text-sm">Other Inquiries</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>Support hours: 9:00 AM - 5:00 PM, Monday to Friday.</li>
                      <li>English inquiries only via the form.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;