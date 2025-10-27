// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Phone, Mail, Users, Award, Building } from 'lucide-react';
// import Header from '@/components/Header';

// const About = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We will get back to you soon.');
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-card p-6 rounded-lg shadow-md border mb-8">
//             <h1 className="flex items-center gap-2 mb-6 text-3xl font-bold text-primary">
//               <Building className="h-6 w-6" />
//               About Apollo Partners
//             </h1>
//             <p className="text-lg text-foreground mb-6 leading-relaxed">
//               Apollo Partners is a leading healthcare facilitation company dedicated to providing world-class medical services to patients from around the globe. 
//               We partner with internationally accredited hospitals known for their excellence in medical care, patient safety, and world-class facilities.
//             </p>
//             <p className="text-muted-foreground mb-6">
//               With a commitment to transparency, affordability, and personalized care, we bridge the gap between patients and top-tier healthcare providers. 
//               Our team of experts ensures seamless coordination, from initial consultation to post-treatment support, making medical travel hassle-free.
//             </p>
//           </div>

//           {/* Mission Section */}
//           <section className="bg-card p-6 rounded-lg shadow-md border mb-8">
//             <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-primary">
//               <Award className="h-5 w-5" />
//               Our Mission
//             </h2>
//             <p className="text-foreground leading-relaxed">
//               To empower patients worldwide by connecting them with the best healthcare solutions, fostering trust, and delivering exceptional outcomes. 
//               We believe every individual deserves access to high-quality, compassionate medical care without boundaries.
//             </p>
//           </section>

//           {/* Services Section */}
//           <section className="bg-card p-6 rounded-lg shadow-md border mb-8">
//             <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-primary">
//               <Users className="h-5 w-5" />
//               Our Services
//             </h2>
//             <ul className="space-y-3 text-foreground">
//               <li className="flex items-start gap-3">
//                 <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
//                 <span>Comprehensive medical treatment coordination with top hospitals</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
//                 <span>Personalized treatment plans and cost estimates</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
//                 <span>Visa assistance, travel arrangements, and accommodation support</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
//                 <span>Post-treatment follow-up and rehabilitation guidance</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
//                 <span>24/7 patient support and emergency assistance</span>
//               </li>
//             </ul>
//           </section>

//           {/* Team Section */}
//           <section className="bg-card p-6 rounded-lg shadow-md border mb-8">
//             <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-primary">
//               <Users className="h-5 w-5" />
//               Our Team
//             </h2>
//             <p className="text-foreground mb-6">
//               Our dedicated team of healthcare professionals, coordinators, and support staff brings years of experience in international patient management. 
//               We pride ourselves on our compassionate approach and unwavering commitment to patient satisfaction.
//             </p>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="text-center p-4 border rounded-lg">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
//                   <Users className="text-primary h-8 w-8" />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-1">Dr. Rajesh Kumar</h3>
//                 <p className="text-sm text-muted-foreground">Chief Medical Officer</p>
//               </div>
//               <div className="text-center p-4 border rounded-lg">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
//                   <Award className="text-primary h-8 w-8" />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-1">Priya Sharma</h3>
//                 <p className="text-sm text-muted-foreground">Patient Coordinator</p>
//               </div>
//               <div className="text-center p-4 border rounded-lg">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
//                   <Building className="text-primary h-8 w-8" />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-1">Amit Patel</h3>
//                 <p className="text-sm text-muted-foreground">Operations Manager</p>
//               </div>
//             </div>
//           </section>

//           {/* Contact Form Section */}
//           <section className="bg-card p-6 rounded-lg shadow-md border">
//             <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
//               <Mail className="h-5 w-5" />
//               Get In Touch
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                   Name *
//                 </label>
//                 <Input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                   Email *
//                 </label>
//                 <Input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                   Message *
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="resize-none"
//                 />
//               </div>
//               <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
//                 Send Message
//               </Button>
//             </form>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default About;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Users, Award, Building } from 'lucide-react';
import Header from '@/components/Header';

const About = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-lg shadow-md border mb-8">
            <h1 className="flex items-center gap-2 mb-6 text-3xl font-bold text-primary">
              <Building className="h-6 w-6" />
              About Apollo Partners
            </h1>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Apollo Partners is a leading healthcare facilitation company dedicated to providing world-class medical services to patients from around the globe. 
              We partner with internationally accredited hospitals known for their excellence in medical care, patient safety, and world-class facilities.
            </p>
            <p className="text-muted-foreground mb-6">
              With a commitment to transparency, affordability, and personalized care, we bridge the gap between patients and top-tier healthcare providers. 
              Our team of experts ensures seamless coordination, from initial consultation to post-treatment support, making medical travel hassle-free.
            </p>
          </div>

          {/* Mission Section */}
          <section className="bg-card p-6 rounded-lg shadow-md border mb-8">
            <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-primary">
              <Award className="h-5 w-5" />
              Our Mission
            </h2>
            <p className="text-foreground leading-relaxed">
              To empower patients worldwide by connecting them with the best healthcare solutions, fostering trust, and delivering exceptional outcomes. 
              We believe every individual deserves access to high-quality, compassionate medical care without boundaries.
            </p>
          </section>

          {/* Services Section */}
          <section className="bg-card p-6 rounded-lg shadow-md border mb-8">
            <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-primary">
              <Users className="h-5 w-5" />
              Our Services
            </h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Comprehensive medical treatment coordination with top hospitals</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Personalized treatment plans and cost estimates</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Visa assistance, travel arrangements, and accommodation support</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Post-treatment follow-up and rehabilitation guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>24/7 patient support and emergency assistance</span>
              </li>
            </ul>
          </section>

          {/* Team Section */}
          <section className="bg-card p-6 rounded-lg shadow-md border mb-8">
            <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-primary">
              <Users className="h-5 w-5" />
              Our Team
            </h2>
            <p className="text-foreground mb-6">
              Our dedicated team of healthcare professionals, coordinators, and support staff brings years of experience in international patient management. 
              We pride ourselves on our compassionate approach and unwavering commitment to patient satisfaction.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Dr. Rajesh Kumar</h3>
                <p className="text-sm text-muted-foreground">Chief Medical Officer</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Award className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Priya Sharma</h3>
                <p className="text-sm text-muted-foreground">Patient Coordinator</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Building className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Amit Patel</h3>
                <p className="text-sm text-muted-foreground">Operations Manager</p>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="bg-card p-6 rounded-lg shadow-md border">
            <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
              <Mail className="h-5 w-5" />
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
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
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;