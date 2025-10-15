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
// Header.tsx - Updated for French language only
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X, Languages } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import apolloLogo from '@/assets/apollo-logo.png';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTranslateReady, setIsTranslateReady] = useState(false);
  const translateRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

  const mobileNavLinkClass = (path: string) =>
    `block font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

  useEffect(() => {
    // Define the global init function
    window.googleTranslateElementInit = () => {
      if (translateRef.current && window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,fr',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          translateRef.current
        );
        setIsTranslateReady(true);
      }
    };

    // Load script if not present
    let script = document.getElementById('google-translate-script') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);
    }

    // Poll for Google Translate to be ready
    const pollInterval = setInterval(() => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        clearInterval(pollInterval);
        if (typeof window.googleTranslateElementInit === 'function') {
          window.googleTranslateElementInit();
        }
      }
    }, 100);

    return () => {
      clearInterval(pollInterval);
      if (script) {
        document.head.removeChild(script);
      }
      delete (window as any).googleTranslateElementInit;
    };
  }, []);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    if (lang && isTranslateReady && window.google && window.google.translate) {
      const googleSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (googleSelect) {
        googleSelect.value = lang;
        googleSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
    } else if (lang) {
      // Retry after a short delay if not ready
      setTimeout(() => {
        const googleSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (googleSelect) {
          googleSelect.value = lang;
          googleSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 500);
    }
  };

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
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
                defaultValue="en"
              >
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
                defaultValue="en"
              >
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

      {/* Hidden Google Translate Widget Container */}
      <div ref={translateRef} id="google_translate_element" style={{ display: 'none' }}></div>
    </header>
  );
};

export default Header;