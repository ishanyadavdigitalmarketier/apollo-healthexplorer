// // Header.tsx
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
//     `block font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

//   return (
//     <header className="w-full bg-background border-b">
//       {/* Top contact bar */}
//       <div className="bg-primary text-primary-foreground py-2 text-sm">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Phone size={14} />
//               <span>+91-1066-502-502</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail size={14} />
//               <span>Info@apolopartners.com</span>
//             </div>
//           </div>
//           <div className="text-right">
//             24/7 Medical Support Available
//           </div>
//         </div>
//       </div>

//       {/* Main navigation */}
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img 
//               src={apolloLogo} 
//               alt="Apollo Partners Logo" 
//               className="w-10 h-10 object-contain"
//             />
//             <div>
//               <h1 className="text-xl font-bold text-primary">Apollo Partners</h1>
//               <p className="text-xs text-muted-foreground">Healthcare Excellence</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link to="/" className={navLinkClass('/')}>Home</Link>
//             <Link to="/treatments" className={navLinkClass('/treatments')}>Treatments</Link>
//             <Link to="/hospitals" className={navLinkClass('/hospitals')}>Hospitals</Link>
//             <Link to="/doctors" className={navLinkClass('/doctors')}>Doctors</Link>
//             <Link to="/about" className={navLinkClass('/about')}>About</Link>
//             <Link to="/blog" className={navLinkClass('/blog')}>Blog</Link>
//             <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
//           </div>

//           {/* Action Buttons */}
//           <div className="hidden md:flex items-center gap-3">
//             <Button className="bg-accent hover:bg-accent/90" asChild>
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
//           <div className="md:hidden mt-4 pb-4 space-y-4">
//             <Link to="/" className={mobileNavLinkClass('/')}>Home</Link>
//             <Link to="/treatments" className={mobileNavLinkClass('/treatments')}>Treatments</Link>
//             <Link to="/hospitals" className={mobileNavLinkClass('/hospitals')}>Hospitals</Link>
//             <Link to="/doctors" className={mobileNavLinkClass('/doctors')}>Doctors</Link>
//             <Link to="/about" className={mobileNavLinkClass('/about')}>About</Link>
//             <Link to="/blog" className={mobileNavLinkClass('/blog')}>Blog</Link>
//             <Link to="/contact" className={mobileNavLinkClass('/contact')}>Contact</Link>
//             <div className="flex gap-3 mt-4">
//               <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
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
// Updated Header.tsx with integrated language selector
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X, Languages } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import apolloLogo from '@/assets/apollo-logo.png';

// Add the same window interface declaration
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

  const mobileNavLinkClass = (path: string) =>
    `block font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

  // Language selector functions
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    if (lang && window.google && window.google.translate) {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
      }
    }
  };

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'it', label: 'Italian' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ru', label: 'Russian' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'zh-CN', label: 'Chinese' },
    { value: 'ar', label: 'Arabic' },
    { value: 'hi', label: 'Hindi' },
  ];

  return (
    <header className="w-full bg-background border-b">
      {/* Top contact bar with language selector */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91-1066-502-502</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>Info@apolopartners.com</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">24/7 Medical Support Available</div>
            <div className="flex items-center gap-2">
              <Languages size={14} />
              <select
                className="bg-transparent border border-primary-foreground/30 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-primary-foreground"
                onChange={handleLanguageChange}
                defaultValue=""
              >
                <option value="" disabled>Language</option>
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={apolloLogo} 
              alt="Apollo Partners Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Apollo Partners</h1>
              <p className="text-xs text-muted-foreground">Healthcare Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/treatments" className={navLinkClass('/treatments')}>Treatments</Link>
            <Link to="/hospitals" className={navLinkClass('/hospitals')}>Hospitals</Link>
            <Link to="/doctors" className={navLinkClass('/doctors')}>Doctors</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            <Link to="/blog" className={navLinkClass('/blog')}>Blog</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-accent hover:bg-accent/90" asChild>
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
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className={mobileNavLinkClass('/')}>Home</Link>
            <Link to="/treatments" className={mobileNavLinkClass('/treatments')}>Treatments</Link>
            <Link to="/hospitals" className={mobileNavLinkClass('/hospitals')}>Hospitals</Link>
            <Link to="/doctors" className={mobileNavLinkClass('/doctors')}>Doctors</Link>
            <Link to="/about" className={mobileNavLinkClass('/about')}>About</Link>
            <Link to="/blog" className={mobileNavLinkClass('/blog')}>Blog</Link>
            <Link to="/contact" className={mobileNavLinkClass('/contact')}>Contact</Link>
            
            {/* Language selector in mobile menu */}
            <div className="pt-4 border-t">
              <label className="block text-sm font-medium mb-2">Language</label>
              <select
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm"
                onChange={handleLanguageChange}
                defaultValue=""
              >
                <option value="" disabled>Choose Language</option>
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex gap-3 mt-4">
              <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
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