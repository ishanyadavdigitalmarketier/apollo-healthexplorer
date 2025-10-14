// // // Header.tsx
// // import { useState } from 'react';
// // import { Button } from '@/components/ui/button';
// // import { Phone, Mail, Menu, X } from 'lucide-react';
// // import { Link, useLocation } from 'react-router-dom';
// // import apolloLogo from '@/assets/apollo-logo.png';

// // const Header = () => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const location = useLocation();

// //   const isActive = (path: string) => location.pathname === path;

// //   const navLinkClass = (path: string) =>
// //     `font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

// //   const mobileNavLinkClass = (path: string) =>
// //     `block font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

// //   return (
// //     <header className="w-full bg-background border-b">
// //       {/* Top contact bar */}
// //       <div className="bg-primary text-primary-foreground py-2 text-sm">
// //         <div className="container mx-auto px-4 flex justify-between items-center">
// //           <div className="flex items-center gap-6">
// //             <div className="flex items-center gap-2">
// //               <Phone size={14} />
// //               <span>+91-1066-502-502</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <Mail size={14} />
// //               <span>Info@apolopartners.com</span>
// //             </div>
// //           </div>
// //           <div className="text-right">
// //             24/7 Medical Support Available
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main navigation */}
// //       <nav className="container mx-auto px-4 py-4">
// //         <div className="flex items-center justify-between">
// //           {/* Logo */}
// //           <Link to="/" className="flex items-center gap-3">
// //             <img 
// //               src={apolloLogo} 
// //               alt="Apollo Partners Logo" 
// //               className="w-10 h-10 object-contain"
// //             />
// //             <div>
// //               <h1 className="text-xl font-bold text-primary">Apollo Partners</h1>
// //               <p className="text-xs text-muted-foreground">Healthcare Excellence</p>
// //             </div>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex items-center gap-8">
// //             <Link to="/" className={navLinkClass('/')}>Home</Link>
// //             <Link to="/treatments" className={navLinkClass('/treatments')}>Treatments</Link>
// //             <Link to="/hospitals" className={navLinkClass('/hospitals')}>Hospitals</Link>
// //             <Link to="/doctors" className={navLinkClass('/doctors')}>Doctors</Link>
// //             <Link to="/about" className={navLinkClass('/about')}>About</Link>
// //             <Link to="/blog" className={navLinkClass('/blog')}>Blog</Link>
// //             <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
// //           </div>

// //           {/* Action Buttons */}
// //           <div className="hidden md:flex items-center gap-3">
// //             <Button className="bg-accent hover:bg-accent/90" asChild>
// //               <Link to="/book">Book Consultation</Link>
// //             </Button>
// //           </div>

// //           {/* Mobile menu button */}
// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             className="md:hidden"
// //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //           >
// //             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //           </Button>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isMobileMenuOpen && (
// //           <div className="md:hidden mt-4 pb-4 space-y-4">
// //             <Link to="/" className={mobileNavLinkClass('/')}>Home</Link>
// //             <Link to="/treatments" className={mobileNavLinkClass('/treatments')}>Treatments</Link>
// //             <Link to="/hospitals" className={mobileNavLinkClass('/hospitals')}>Hospitals</Link>
// //             <Link to="/doctors" className={mobileNavLinkClass('/doctors')}>Doctors</Link>
// //             <Link to="/about" className={mobileNavLinkClass('/about')}>About</Link>
// //             <Link to="/blog" className={mobileNavLinkClass('/blog')}>Blog</Link>
// //             <Link to="/contact" className={mobileNavLinkClass('/contact')}>Contact</Link>
// //             <div className="flex gap-3 mt-4">
// //               <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
// //                 <Link to="/book">Book Consultation</Link>
// //               </Button>
// //             </div>
// //           </div>
// //         )}
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;
// // Header.tsx - Enhanced responsiveness for all devices
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Phone, Mail, Menu, X } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';
// import apolloLogo from '@/assets/apollo-logo.png';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   const navLinkClass = (path: string) =>
//     `font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

//   const mobileNavLinkClass = (path: string) =>
//     `block font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-muted'}`;

//   return (
//     <header className="w-full bg-background border-b">
//       {/* Top contact bar */}
//       <div className="bg-primary text-primary-foreground py-1.5 sm:py-2 text-xs sm:text-sm">
//         <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
//           <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center sm:justify-start">
//             <div className="flex items-center gap-1.5 sm:gap-2">
//               <Phone size={12} className="sm:size-14" />
//               <span className="truncate">+91-1066-502-502</span>
//             </div>
//             <div className="flex items-center gap-1.5 sm:gap-2">
//               <Mail size={12} className="sm:size-14" />
//               <span className="truncate">Info@apolopartners.com</span>
//             </div>
//           </div>
//           <div className="text-center sm:text-right text-xs sm:text-sm">
//             24/7 Medical Support Available
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <nav className="container mx-auto px-4 py-3 sm:py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 sm:gap-3">
//             <img 
//               src={apolloLogo} 
//               alt="Apollo Partners Logo" 
//               className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
//             />
//             <div className="hidden sm:block">
//               <h1 className="text-lg sm:text-xl font-bold text-primary">Apollo Partners</h1>
//               <p className="text-xs text-muted-foreground">Healthcare Excellence</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6 sm:gap-8">
//             <Link to="/" className={navLinkClass('/')}>Home</Link>
//             <Link to="/treatments" className={navLinkClass('/treatments')}>Treatments</Link>
//             <Link to="/hospitals" className={navLinkClass('/hospitals')}>Hospitals</Link>
//             <Link to="/doctors" className={navLinkClass('/doctors')}>Doctors</Link>
//             <Link to="/about" className={navLinkClass('/about')}>About</Link>
//             <Link to="/blog" className={navLinkClass('/blog')}>Blog</Link>
//             <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
//           </div>

//           {/* Action Buttons */}
//           <div className="hidden md:flex items-center gap-2 sm:gap-3">
//             <Button className="bg-accent hover:bg-accent/90 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3" asChild>
//               <Link to="/book">Book Consultation</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </Button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden mt-4 pb-4 space-y-2 sm:space-y-4 border-t pt-4">
//             <Link to="/" className={mobileNavLinkClass('/')}>Home</Link>
//             <Link to="/treatments" className={mobileNavLinkClass('/treatments')}>Treatments</Link>
//             <Link to="/hospitals" className={mobileNavLinkClass('/hospitals')}>Hospitals</Link>
//             <Link to="/doctors" className={mobileNavLinkClass('/doctors')}>Doctors</Link>
//             <Link to="/about" className={mobileNavLinkClass('/about')}>About</Link>
//             <Link to="/blog" className={mobileNavLinkClass('/blog')}>Blog</Link>
//             <Link to="/contact" className={mobileNavLinkClass('/contact')}>Contact</Link>
//             <div className="flex gap-3 mt-4 pt-2">
//               <Button size="sm" className="bg-accent hover:bg-accent/90 flex-1" asChild>
//                 <Link to="/book">Book Consultation</Link>
//               </Button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;
// Header.tsx - Enhanced responsiveness for all devices
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import apolloLogo from '@/assets/apollo-logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    /*Start of Tawk.to Script*/
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/68ecb5587e32cc195255b4eb/1j7ea8pbh';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
    /*End of Tawk.to Script*/
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

  const mobileNavLinkClass = (path: string) =>
    `block font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-muted'}`;

  return (
    <header className="w-full bg-background border-b">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-1.5 sm:py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Phone size={12} className="sm:size-14" />
              <span className="truncate">+91-1066-502-502</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Mail size={12} className="sm:size-14" />
              <span className="truncate">Info@apolopartners.com</span>
            </div>
          </div>
          <div className="text-center sm:text-right text-xs sm:text-sm">
            24/7 Medical Support Available
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img 
              src={apolloLogo} 
              alt="Apollo Partners Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-primary">Apollo Partners</h1>
              <p className="text-xs text-muted-foreground">Healthcare Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 sm:gap-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/treatments" className={navLinkClass('/treatments')}>Treatments</Link>
            <Link to="/hospitals" className={navLinkClass('/hospitals')}>Hospitals</Link>
            <Link to="/doctors" className={navLinkClass('/doctors')}>Doctors</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            <Link to="/blog" className={navLinkClass('/blog')}>Blog</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>Contacthhh</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            <Button className="bg-accent hover:bg-accent/90 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3" asChild>
              <Link to="/book">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 sm:space-y-4 border-t pt-4">
            <Link to="/" className={mobileNavLinkClass('/')}>Home</Link>
            <Link to="/treatments" className={mobileNavLinkClass('/treatments')}>Treatments</Link>
            <Link to="/hospitals" className={mobileNavLinkClass('/hospitals')}>Hospitals</Link>
            <Link to="/doctors" className={mobileNavLinkClass('/doctors')}>Doctors</Link>
            <Link to="/about" className={mobileNavLinkClass('/about')}>About</Link>
            <Link to="/blog" className={mobileNavLinkClass('/blog')}>Blog</Link>
            <Link to="/contact" className={mobileNavLinkClass('/contact')}>Contactgggg</Link>
            <div className="flex gap-3 mt-4 pt-2">
              <Button size="sm" className="bg-accent hover:bg-accent/90 flex-1" asChild>
                <Link to="/book">Book Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;