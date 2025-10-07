// pages/Story.tsx
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Story = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    treatment: '',
    hospital: '',
    savings: '',
    recovery: '',
    story: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Success Story Submitted:', formData);
    alert('Thank you for sharing your success story! We will review it and feature it soon.');
    setFormData({
      name: '',
      email: '',
      country: '',
      treatment: '',
      hospital: '',
      savings: '',
      recovery: '',
      story: '',
    });
  };

  const testimonial = {
    text: "The care I received at Apollo Hospitals was exceptional. From the moment I landed in Delhi to my complete recovery, Apollo Partners took care of everything. The doctors were world-class, and I saved over $80,000 compared to US prices. I couldn't be happier with my decision.",
    name: "Sarah Johnson, 45",
    country: "🇺🇸 USA",
    treatment: "Heart Bypass Surgery",
    hospital: "Apollo Hospitals, Delhi",
    savings: "$80,000",
    recovery: "2 weeks",
    date: "March 2024",
    avatar: "SJ",
  };

  const stats = [
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '500K+', label: 'Happy Patients' },
    { number: '70%', label: 'Average Savings' },
    { number: '24/7', label: 'Patient Support' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Patient Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from thousands of patients who have transformed their lives through quality medical care abroad with Apollo Partners' expert guidance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-muted/30 border-0 shadow-lg mb-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-2" />
                  
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.country}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Treatment</p>
                          <p className="font-semibold text-sm">{testimonial.treatment}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Hospital</p>
                          <p className="font-semibold text-sm">{testimonial.hospital}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Savings</p>
                          <p className="font-semibold text-sm text-accent">{testimonial.savings}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Recovery</p>
                          <p className="font-semibold text-sm">{testimonial.recovery}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional testimonial card */}
            <Card className="bg-primary text-primary-foreground border-0 shadow-lg mb-12">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.treatment}</p>
                      <p className="text-sm opacity-90">{testimonial.hospital}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-90">{testimonial.date}</p>
                    <p className="font-bold">Saved {testimonial.savings}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Share Your Success Story Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Share Your Hospital & Doctors Experience</h3>
              <p className="text-muted-foreground">Tell us about your journey with Apollo Partners. Your story could inspire others!</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="treatment">Treatment *</Label>
                      <Input
                        id="treatment"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="hospital">Hospital *</Label>
                      <Input
                        id="hospital"
                        name="hospital"
                        value={formData.hospital}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="savings">Savings (e.g., $10,000)</Label>
                      <Input
                        id="savings"
                        name="savings"
                        value={formData.savings}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="recovery">Recovery Time (e.g., 2 weeks)</Label>
                      <Input
                        id="recovery"
                        name="recovery"
                        value={formData.recovery}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="story">Your Story *</Label>
                    <Textarea
                      id="story"
                      name="story"
                      rows={5}
                      value={formData.story}
                      onChange={handleInputChange}
                      placeholder="Share your experience with the doctors and hospital care..."
                      required
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90">
                      Submit Your Story
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;