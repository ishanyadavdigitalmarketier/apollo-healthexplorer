// // Update the TestimonialsSection to fix the Button Link
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Star, Quote } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const TestimonialsSection = () => {
//   const testimonial = {
//     text: "The care I received at Apollo Hospitals was exceptional. From the moment I landed in Delhi to my complete recovery, Apollo Partners took care of everything. The doctors were world-class, and I saved over $80,000 compared to US prices. I couldn't be happier with my decision.",
//     name: "Sarah Johnson, 45",
//     country: "🇺🇸 USA",
//     treatment: "Heart Bypass Surgery",
//     hospital: "Apollo Hospitals, Delhi",
//     savings: "$80,000",
//     recovery: "2 weeks",
//     date: "March 2024",
//     avatar: "SJ",
//   };

//   const stats = [
//     { number: '98%', label: 'Patient Satisfaction' },
//     { number: '500K+', label: 'Happy Patients' },
//     { number: '70%', label: 'Average Savings' },
//     { number: '24/7', label: 'Patient Support' },
//   ];

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Patient Success Stories</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Hear from thousands of patients who have transformed their lives through quality medical care abroad with Apollo Partners' expert guidance.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <Card className="bg-muted/30 border-0 shadow-lg mb-12">
//             <CardContent className="p-8">
//               <div className="flex items-start gap-6">
//                 <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-2" />
                
//                 <div className="flex-1">
//                   <p className="text-lg leading-relaxed mb-6 italic">
//                     "{testimonial.text}"
//                   </p>

//                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
//                         {testimonial.avatar}
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-lg">{testimonial.name}</h4>
//                         <p className="text-muted-foreground">{testimonial.country}</p>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//                       <div>
//                         <p className="text-sm text-muted-foreground">Treatment</p>
//                         <p className="font-semibold text-sm">{testimonial.treatment}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-muted-foreground">Hospital</p>
//                         <p className="font-semibold text-sm">{testimonial.hospital}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-muted-foreground">Savings</p>
//                         <p className="font-semibold text-sm text-accent">{testimonial.savings}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-muted-foreground">Recovery</p>
//                         <p className="font-semibold text-sm">{testimonial.recovery}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Additional testimonial card */}
//           <Card className="bg-primary text-primary-foreground border-0 shadow-lg mb-12">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <div className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold text-sm">
//                     {testimonial.avatar}
//                   </div>
//                   <div>
//                     <p className="font-semibold">{testimonial.treatment}</p>
//                     <p className="text-sm opacity-90">{testimonial.hospital}</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm opacity-90">{testimonial.date}</p>
//                   <p className="font-bold">Saved {testimonial.savings}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
//                 <div className="text-muted-foreground">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Button asChild className="bg-accent hover:bg-accent/90">
//               <Link to="/story">Share Your Success Story</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
// TestimonialsSection.tsx - Enhanced responsiveness for all devices
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
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
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Real Patient Success Stories</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from thousands of patients who have transformed their lives through quality medical care abroad with Apollo Partners' expert guidance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted/30 border-0 shadow-lg mb-8 sm:mb-12">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 mt-1 sm:mt-2" />
                
                <div className="flex-1 min-w-0">
                  <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic line-clamp-4 sm:line-clamp-none">
                    "{testimonial.text}"
                  </p>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 w-full">
                    <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-base sm:text-lg line-clamp-1">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.country}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center w-full sm:w-auto">
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Treatment</p>
                        <p className="font-semibold text-xs sm:text-sm line-clamp-1">{testimonial.treatment}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Hospital</p>
                        <p className="font-semibold text-xs sm:text-sm line-clamp-1">{testimonial.hospital}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Savings</p>
                        <p className="font-semibold text-xs sm:text-sm text-accent">{testimonial.savings}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Recovery</p>
                        <p className="font-semibold text-xs sm:text-sm">{testimonial.recovery}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional testimonial card */}
          <Card className="bg-primary text-primary-foreground border-0 shadow-lg mb-8 sm:mb-12">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm sm:text-base line-clamp-1">{testimonial.treatment}</p>
                    <p className="text-xs sm:text-sm opacity-90 line-clamp-1">{testimonial.hospital}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm opacity-90">{testimonial.date}</p>
                  <p className="font-bold text-xs sm:text-sm">Saved {testimonial.savings}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-sm sm:text-base px-6 sm:px-8 py-3">
              <Link to="/story">Share Your Success Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;