// // pages/Contact.tsx
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Phone, Mail, MapPin, Calendar, Briefcase, AlertCircle } from 'lucide-react';
// import Header from '@/components/Header';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     queryType: '',
//     message: '',
//     captcha: ''
//   });
//   const [captchaQuestion, setCaptchaQuestion] = useState('');
//   const [captchaAnswer, setCaptchaAnswer] = useState(0);

//   const generateCaptcha = () => {
//     const num1 = Math.floor(Math.random() * 10) + 1;
//     const num2 = Math.floor(Math.random() * 10) + 1;
//     setCaptchaQuestion(`${num1} + ${num2}`);
//     setCaptchaAnswer(num1 + num2);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleQueryTypeChange = (value: string) => {
//     setFormData({
//       ...formData,
//       queryType: value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (parseInt(formData.captcha) !== captchaAnswer) {
//       alert('Incorrect CAPTCHA. Please try again.');
//       generateCaptcha();
//       return;
//     }
//     // Here you can add form submission logic, e.g., API call
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We will get back to you soon.');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       queryType: '',
//       message: '',
//       captcha: ''
//     });
//     generateCaptcha();
//   };

//   // Generate initial CAPTCHA
//   useState(() => generateCaptcha(), []);

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold text-primary mb-4">Contact Us</h1>
//           <p className="text-lg text-muted-foreground mb-8">
//             Apollo Hospitals is committed to providing the best medical facilities, constant care, and reliable support. 
//             Whether you want to get in touch with our doctors from specific departments, seek information about our services, 
//             or ask us a question, please fill up the form given below and we will get back to you.
//           </p>

//           {/* Contact Form */}
//           <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg shadow-md border mb-12">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">First Name *</label>
//                 <Input 
//                   type="text" 
//                   id="firstName" 
//                   name="firstName" 
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required 
//                   className="w-full" 
//                 />
//               </div>
//               <div>
//                 <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
//                 <Input 
//                   type="text" 
//                   id="lastName" 
//                   name="lastName" 
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required 
//                   className="w-full" 
//                 />
//               </div>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
//                 <Input 
//                   type="email" 
//                   id="email" 
//                   name="email" 
//                   value={formData.email}
//                   onChange={handleChange}
//                   required 
//                   className="w-full" 
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone *</label>
//                 <Input 
//                   type="tel" 
//                   id="phone" 
//                   name="phone" 
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required 
//                   className="w-full" 
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="queryType" className="block text-sm font-medium text-foreground mb-2">Type of Query *</label>
//               <Select onValueChange={handleQueryTypeChange} value={formData.queryType} required>
//                 <SelectTrigger id="queryType">
//                   <SelectValue placeholder="Select a query type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="general">General Inquiry</SelectItem>
//                   <SelectItem value="appointment">Appointment</SelectItem>
//                   <SelectItem value="services">Services Information</SelectItem>
//                   <SelectItem value="careers">Careers</SelectItem>
//                   <SelectItem value="international">International Patient</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
//               <Textarea 
//                 id="message" 
//                 name="message" 
//                 rows={5} 
//                 value={formData.message}
//                 onChange={handleChange}
//                 required 
//                 className="w-full resize-none"
//               />
//             </div>
//             <div>
//               <label htmlFor="captcha" className="block text-sm font-medium text-foreground mb-2">CAPTCHA: Solve {captchaQuestion} *</label>
//               <div className="flex gap-2 items-center">
//                 <Input 
//                   type="number" 
//                   id="captcha" 
//                   name="captcha" 
//                   value={formData.captcha}
//                   onChange={handleChange}
//                   required 
//                   className="w-20" 
//                 />
//                 <Button type="button" variant="outline" size="sm" onClick={generateCaptcha}>
//                   Refresh
//                 </Button>
//               </div>
//               <p className="text-xs text-muted-foreground mt-1">This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.</p>
//             </div>
//             <Button type="submit" className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors">
//               Submit Query
//             </Button>
//           </form>

//           {/* Contact Info Cards */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
//             <div className="text-center p-4 border rounded-lg">
//               <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-3">
//                 <Phone className="text-primary h-6 w-6" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Apollo Lifeline</h3>
//               <p className="text-muted-foreground mb-1">1860 500 1066</p>
//               <p className="text-xs text-muted-foreground">Dial from anywhere in India</p>
//             </div>
//             <div className="text-center p-4 border rounded-lg">
//               <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-3">
//                 <Phone className="text-primary h-6 w-6" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">International Helpline</h3>
//               <p className="text-muted-foreground mb-1">+91 40 4344 1066</p>
//               <p className="text-xs text-muted-foreground">For global patients</p>
//             </div>
//             <div className="text-center p-4 border rounded-lg">
//               <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-3">
//                 <MapPin className="text-primary h-6 w-6" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Hospital Locations</h3>
//               <p className="text-xs text-muted-foreground">Find nearest Apollo Hospital</p>
//               <Button variant="link" size="sm" className="p-0 h-auto">View Locations</Button>
//             </div>
//             <div className="text-center p-4 border rounded-lg">
//               <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-3">
//                 <Calendar className="text-primary h-6 w-6" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Book Appointment</h3>
//               <p className="text-xs text-muted-foreground">Online booking available</p>
//               <Button variant="link" size="sm" className="p-0 h-auto">Book Now</Button>
//             </div>
//             <div className="text-center p-4 border rounded-lg">
//               <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto flex items-center justify-center mb-3">
//                 <Briefcase className="text-primary h-6 w-6" />
//               </div>
//               <h3 className="text-lg font-semibold mb-2">Careers</h3>
//               <p className="text-xs text-muted-foreground">Explore job opportunities</p>
//               <Button variant="link" size="sm" className="p-0 h-auto">View Careers</Button>
//             </div>
//           </div>

//           {/* Address Section */}
//           <div className="bg-card p-6 rounded-lg shadow-md border">
//             <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//               <MapPin className="h-5 w-5" />
//               Corporate Address
//             </h2>
//             <p className="text-muted-foreground">
//               Apollo Hospitals Enterprise Ltd.<br />
//               No. 21, Greams Lane, Off Greams Road,<br />
//               Chennai - 600 006, Tamil Nadu, India.<br />
//               Phone: +91-44-2829 3333 | Email: info@apollohospitals.com
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Contact;
// pages/Contact.tsx
import { useState } from 'react';
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
            <h2 className="flex items-center gap-2 mb-6 text-2xl font-bold text-primary">
              <Mail className="h-5 w-5" />
              Contact Us
            </h2>
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
                          Name
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
                      <div>
                        <label htmlFor="inquiry" className="block text-sm font-medium text-primary mb-2">
                          Inquiry
                        </label>
                        <Textarea
                          id="inquiry"
                          name="inquiry"
                          rows={5}
                          value={formData.inquiry}
                          onChange={handleChange}
                          required
                          className="w-full resize-none"
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