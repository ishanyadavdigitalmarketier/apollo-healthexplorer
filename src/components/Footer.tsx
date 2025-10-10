// // Footer.tsx - Enhanced responsiveness for mobile and all devices, with fixed contact links
// import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';
// import apolloLogo from '@/assets/apollo-logo.png';

// const Footer = () => {
//   return (
//     <footer className="w-full bg-background border-t mt-8 sm:mt-12">
//       {/* Main Footer Content */}
//       <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
//           {/* Company Info */}
//           <div className="md:col-span-1 mb-6 sm:mb-0">
//             <Link to="/" className="flex items-center gap-2 sm:gap-3 mb-4">
//               <img 
//                 src={apolloLogo} 
//                 alt="Apollo Partners Logo" 
//                 className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
//               />
//               <div>
//                 <h3 className="text-lg sm:text-xl font-bold text-primary">Apollo Partners</h3>
//                 <p className="text-xs sm:text-sm text-muted-foreground">Healthcare Excellence</p>
//               </div>
//             </Link>
//             <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
//               Committed to providing world-class healthcare services with compassion and innovation.
//             </p>
//             <div className="flex space-x-2 sm:space-x-3">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                 <Facebook size={18} className="sm:size-20 text-primary hover:text-primary/80 transition-colors" />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//                 <Twitter size={18} className="sm:size-20 text-primary hover:text-primary/80 transition-colors" />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                 <Instagram size={18} className="sm:size-20 text-primary hover:text-primary/80 transition-colors" />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                 <Linkedin size={18} className="sm:size-20 text-primary hover:text-primary/80 transition-colors" />
//               </a>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div className="mb-6 sm:mb-0">
//             <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
//               <li><Link to="/" className="hover:text-primary transition-colors block py-1">Home</Link></li>
//               {/* <li><Link to="/treatments" className="hover:text-primary transition-colors block py-1">Treatments</Link></li> */}
//               <li><Link to="/hospitals" className="hover:text-primary transition-colors block py-1">Hospitals</Link></li>
//               {/* <li><Link to="/doctors" className="hover:text-primary transition-colors block py-1">Doctors</Link></li> */}
//               <li><Link to="/about" className="hover:text-primary transition-colors block py-1">About</Link></li>
//               {/* <li><Link to="/blog" className="hover:text-primary transition-colors block py-1">Blog</Link></li> */}
//               <li><Link to="/contact" className="hover:text-primary transition-colors block py-1">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="mb-6 sm:mb-0">
//             <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Contact Us</h4>
//             <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
//               <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
//                 <Phone size={14} className="sm:size-16 flex-shrink-0" />
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
//                   <a href="tel:+911066502502" className="font-medium hover:text-primary transition-colors">Call Now</a>
//                   <span>+91-1066-502-502</span>
//                 </div>
//                 <Button asChild size="sm" className="ml-auto sm:ml-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs w-full sm:w-auto">
//                   <a href="tel:+911066502502">Call</a>
//                 </Button>
//               </li>
//               <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
//                 <Mail size={14} className="sm:size-16 flex-shrink-0" />
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
//                   <a href="mailto:info@apollohospitals.com" className="font-medium hover:text-primary transition-colors">Send Email</a>
//                   <span>info@apollohospitals.com</span>
//                 </div>
//                 <Button asChild size="sm" className="ml-auto sm:ml-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs w-full sm:w-auto">
//                   <a href="mailto:info@apollohospitals.com">Email</a>
//                 </Button>
//               </li>
//               <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-2">
//                 <MapPin size={14} className="sm:size-16 flex-shrink-0 mt-1 sm:mt-0" />
//                 <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 flex-1">
//                   <a href="https://www.google.com/maps/search/?api=1&query=21%2C%20Greams%20Lane%2C%20Off%20Greams%20Road%2C%20Chennai%20%E2%80%93%20600%20006" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">View Map</a>
//                   <span className="leading-relaxed">21, Greams Lane, Off Greams Road, Chennai – 600 006</span>
//                 </div>
//                 <Button asChild size="sm" className="ml-auto sm:ml-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs w-full sm:w-auto" variant="outline">
//                   <a href="https://www.google.com/maps/search/?api=1&query=21%2C%20Greams%20Lane%2C%20Off%20Greams%20Road%2C%20Chennai%20%E2%80%93%20600%20006" target="_blank" rel="noopener noreferrer">Map</a>
//                 </Button>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter Signup */}
//           <div className="mb-6 sm:mb-0">
//             <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Stay Updated</h4>
//             <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
//               Subscribe to our newsletter for the latest healthcare insights.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-xs sm:text-sm"
//               />
//               <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-xs sm:text-sm font-medium w-full sm:w-auto">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t bg-muted/50">
//         <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-muted-foreground">
//           <p>&copy; 2025 Apollo Partners. All rights reserved. | Designed for Healthcare Excellence.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// Footer.tsx - Enhanced responsiveness for mobile and all devices, with fixed contact links
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import apolloLogo from '@/assets/apollo-logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t mt-8 sm:mt-12">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="md:col-span-1 mb-6 sm:mb-0">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 mb-4">
              <img 
                src={apolloLogo} 
                alt="Apollo Partners Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary">Apollo Partners</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Healthcare Excellence</p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
              Committed to providing world-class healthcare services with compassion and innovation.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} className="sm:size-20 text-primary hover:text-primary/80 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={18} className="sm:size-20 text-primary hover:text-primary/80 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} className="sm:size-20 text-primary hover:text-primary/80 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} className="sm:size-20 text-primary hover:text-primary/80 transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors block py-1">Home</Link></li>
              {/* <li><Link to="/treatments" className="hover:text-primary transition-colors block py-1">Treatments</Link></li> */}
              <li><Link to="/hospitals" className="hover:text-primary transition-colors block py-1">Hospitals</Link></li>
              {/* <li><Link to="/doctors" className="hover:text-primary transition-colors block py-1">Doctors</Link></li> */}
              <li><Link to="/about" className="hover:text-primary transition-colors block py-1">About</Link></li>
              {/* <li><Link to="/blog" className="hover:text-primary transition-colors block py-1">Blog</Link></li> */}
              <li><Link to="/contact" className="hover:text-primary transition-colors block py-1">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
                <Phone size={14} className="sm:size-16 flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <a href="tel:+911066502502" className="font-medium hover:text-primary transition-colors">Call Now</a>
                  <span>+91-1066-502-502</span>
                </div>
                <Button asChild size="sm" className="ml-auto sm:ml-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs w-full sm:w-auto">
                  <a href="tel:+911066502502">Call</a>
                </Button>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
                <Mail size={14} className="sm:size-16 flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <a href="mailto:info@apollohospitals.com" className="font-medium hover:text-primary transition-colors">Send Email</a>
                  <span>info@apollohospitals.com</span>
                </div>
                <Button asChild size="sm" className="ml-auto sm:ml-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs w-full sm:w-auto">
                  <a href="mailto:Info@apolopartners.com">Email</a>
                </Button>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-2">
                <MapPin size={14} className="sm:size-16 flex-shrink-0 mt-1 sm:mt-0" />
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 flex-1">
                  <a href="https://www.google.com/maps/search/?api=1&query=21%2C%20Greams%20Lane%2C%20Off%20Greams%20Road%2C%20Chennai%20%E2%80%93%20600%20006" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">View Map</a>
                  <span className="leading-relaxed">21, Greams Lane, Off Greams Road, Chennai – 600 006</span>
                </div>
                <Button asChild size="sm" className="ml-auto sm:ml-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs w-full sm:w-auto" variant="outline">
                  <a href="https://www.google.com/maps/search/?api=1&query=21%2C%20Greams%20Lane%2C%20Off%20Greams%20Road%2C%20Chennai%20%E2%80%93%20600%20006" target="_blank" rel="noopener noreferrer">Map</a>
                </Button>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Stay Updated</h4>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest healthcare insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-xs sm:text-sm"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-xs sm:text-sm font-medium w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2025 Apollo Partners. All rights reserved. | Designed for Healthcare Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;