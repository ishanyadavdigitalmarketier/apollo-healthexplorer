// pages/Contact.tsx  (or app/contact/page.tsx if using App Router)
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Search } from 'lucide-react';
import Header from '@/components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiry: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        alert('Thank you! We will contact you soon.');
        setFormData({ name: '', phone: '', email: '', inquiry: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      setStatus('error');
      alert('Something went wrong. Please try again.');
    }
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

            {/* Rest of your FAQ section unchanged... */}
            {/* ... (keep all the FAQ and search parts you already have) ... */}

            <div className="contact-options flex justify-between gap-6 mt-8">
              {/* Telephone section unchanged */}
              <div className="flex-1 p-4 bg-muted rounded border">
                <h4 className="flex items-center gap-2 mb-4 text-primary font-semibold">
                  <Phone className="h-4 w-4" />
                  Telephone Inquiries
                </h4>
                <p className="mb-4 text-sm">
                  Call us at{' '}
                  <a href="tel:+1234567890" className="text-primary underline">
                    +1 (234) 567-890
                  </a>
                </p>
                {/* ... rest unchanged */}
              </div>

              {/* Contact Form (NOW SAVES TO DATABASE) */}
              <div className="flex-1 p-4 bg-muted rounded border">
                <h4 className="flex items-center gap-2 mb-4 text-primary font-semibold">
                  <Mail className="h-4 w-4" />
                  Contact Form
                </h4>
                <p className="mb-4 text-sm text-muted-foreground">
                  We usually reply within 1-2 business days.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-primary mb-1">
                      Your Inquiry (optional)
                    </label>
                    <Textarea
                      id="inquiry"
                      name="inquiry"
                      rows={4}
                      value={formData.inquiry}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
                  </Button>
                </form>

                {status === 'success' && (
                  <p className="mt-4 text-green-600 text-sm">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-red-600 text-sm">Failed to send. Try again.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;