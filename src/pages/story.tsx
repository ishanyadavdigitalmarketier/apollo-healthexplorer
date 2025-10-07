// Story.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';

const Story = () => {
  const story = {
    text: "The care I received at Apollo Hospitals was exceptional. From the moment I arrived in Delhi to my complete recovery, Apollo Partners took care of everything. The doctors were world-class, and I saved over ₹50,00,000 compared to treatment costs in my home country. I couldn't be happier with my decision.",
    name: "Rajesh Kumar, 52",
    country: "🇮🇳 India",
    treatment: "Knee Replacement Surgery",
    hospital: "Apollo Hospitals, Delhi",
    savings: "₹50,00,000",
    recovery: "3 weeks",
    date: "July 2025",
    avatar: "RK",
  };

  const stats = [
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '1M+', label: 'Happy Patients' },
    { number: '60%', label: 'Average Savings' },
    { number: '24/7', label: 'Patient Support' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Patient Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from thousands of patients who have transformed their lives through quality medical care at Apollo Hospitals with Apollo Partners' expert guidance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted/30 border-0 shadow-lg mb-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-2" />
                
                <div className="flex-1">
                  <p className="text-lg leading-relaxed mb-6 italic">
                    "{story.text}"
                  </p>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {story.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{story.name}</h4>
                        <p className="text-muted-foreground">{story.country}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Treatment</p>
                        <p className="font-semibold text-sm">{story.treatment}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Hospital</p>
                        <p className="font-semibold text-sm">{story.hospital}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Savings</p>
                        <p className="font-semibold text-sm text-accent">{story.savings}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Recovery</p>
                        <p className="font-semibold text-sm">{story.recovery}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional story card */}
          <Card className="bg-primary text-primary-foreground border-0 shadow-lg mb-12">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold text-sm">
                    {story.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{story.treatment}</p>
                    <p className="text-sm opacity-90">{story.hospital}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-90">{story.date}</p>
                  <p className="font-bold">Saved {story.savings}</p>
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

          <div className="text-center">
            <Button className="bg-accent hover:bg-accent/90">
              Share Your Success Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;