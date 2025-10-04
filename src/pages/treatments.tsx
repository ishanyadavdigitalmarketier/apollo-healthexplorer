// pages/Treatments.tsx
import { Button } from '@/components/ui/button';
import { Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Treatments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md border">
            <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
              <Pill className="h-5 w-5" />
              Our Treatments
            </h2>
            <div className="treatments-intro space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-primary">Personalized Treatment Plans for Optimal Health</h3>
              <p className="text-foreground leading-relaxed">
                At Apollo Partners, we offer a wide range of evidence-based treatments tailored to your unique needs. 
                Our multidisciplinary approach combines the latest medical advancements with holistic wellness strategies to ensure comprehensive care.
              </p>
              <p className="text-foreground leading-relaxed">
                From preventive screenings to advanced therapies, our treatments are designed to address both immediate concerns and long-term health goals, supported by our expert team and state-of-the-art facilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-5 bg-muted rounded border">
                <img
                  src="https://via.placeholder.com/120x120?text=Heart+Care"
                  alt="Cardiac Treatment"
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <div className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                  Cardiology
                </div>
                <h4 className="font-semibold mb-1 text-primary">Cardiac Rehabilitation</h4>
                <h5 className="text-sm text-muted-foreground mb-2">Post-Surgery Recovery</h5>
                <p className="text-sm text-foreground leading-relaxed">
                  A structured program including exercise therapy, education, and counseling to improve heart function and reduce risk of future cardiac events.
                </p>
              </div>

              <div className="text-center p-5 bg-muted rounded border">
                <img
                  src="https://via.placeholder.com/120x120?text=Brain+Health"
                  alt="Neurology Treatment"
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <div className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                  Neurology
                </div>
                <h4 className="font-semibold mb-1 text-primary">Migraine Management</h4>
                <h5 className="text-sm text-muted-foreground mb-2">Chronic Pain Relief</h5>
                <p className="text-sm text-foreground leading-relaxed">
                  Comprehensive treatment involving medication, lifestyle modifications, and trigger identification to minimize migraine frequency and severity.
                </p>
              </div>

              <div className="text-center p-5 bg-muted rounded border">
                <img
                  src="https://via.placeholder.com/120x120?text=Child+Health"
                  alt="Pediatric Treatment"
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <div className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                  Pediatrics
                </div>
                <h4 className="font-semibold mb-1 text-primary">Vaccination Schedule</h4>
                <h5 className="text-sm text-muted-foreground mb-2">Preventive Care</h5>
                <p className="text-sm text-foreground leading-relaxed">
                  Age-appropriate immunizations and routine check-ups to protect children from infectious diseases and monitor developmental milestones.
                </p>
              </div>

              <div className="text-center p-5 bg-muted rounded border">
                <img
                  src="https://via.placeholder.com/120x120?text=Skin+Care"
                  alt="Dermatology Treatment"
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <div className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                  Dermatology
                </div>
                <h4 className="font-semibold mb-1 text-primary">Skin Cancer Screening</h4>
                <h5 className="text-sm text-muted-foreground mb-2">Early Detection</h5>
                <p className="text-sm text-foreground leading-relaxed">
                  Full-body examinations using dermoscopy to detect suspicious lesions early, combined with patient education on sun protection.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3 text-primary">Explore Treatment Options</h3>
              <p className="text-foreground mb-4">
                Discuss your symptoms and goals with our specialists to create a customized treatment plan. Start your journey to better health today.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Consult a Specialist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Treatments;