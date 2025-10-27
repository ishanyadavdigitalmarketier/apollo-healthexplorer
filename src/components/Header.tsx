// // Header.tsx - Updated with correct import path
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Phone, Mail, Menu, X, Languages } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';
// import apolloLogo from '@/assets/apollo-logo.png';
// import { useLanguage } from '../contexts/LanguageContext'; // Updated import path

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { language, setLanguage, t } = useLanguage();
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   const navLinkClass = (path: string) =>
//     `font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

//   const mobileNavLinkClass = (path: string) =>
//     `block font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

//   const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const lang = event.target.value as 'en' | 'fr';
//     setLanguage(lang);
//   };

//   const languages = [
//     { value: 'en', label: 'English' },
//     { value: 'fr', label: 'Français' },
//   ];

//   return (
//     <header className="w-full bg-background border-b">
//       {/* Top contact bar with language selector */}
//       <div className="bg-primary text-primary-foreground py-2 text-sm">
//         <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2">
//               <Phone size={14} />
//               <span>+91 81307 95394</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail size={14} />
//               <span>Info@apolopartners.com</span>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <div className="hidden sm:block">{t('support')}</div>
//             <div className="flex items-center gap-2">
//               <Languages size={14} />
//               <select
//                 className="bg-transparent border border-primary-foreground/30 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-primary-foreground"
//                 onChange={handleLanguageChange}
//                 value={language}
//               >
//                 {languages.map((lang) => (
//                   <option key={lang.value} value={lang.value}>
//                     {lang.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
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
//               <p className="text-xs text-muted-foreground">{t('healthcareExcellence')}</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link to="/" className={navLinkClass('/')}>{t('home')}</Link>
//             <Link to="/treatments" className={navLinkClass('/treatments')}>{t('treatments')}</Link>
//             <Link to="/hospitals" className={navLinkClass('/hospitals')}>{t('hospitals')}</Link>
//             <Link to="/doctors" className={navLinkClass('/doctors')}>{t('doctors')}</Link>
//             <Link to="/about" className={navLinkClass('/about')}>{t('about')}</Link>
//             <Link to="/blog" className={navLinkClass('/blog')}>{t('blog')}</Link>
//             <Link to="/contact" className={navLinkClass('/contact')}>{t('contact')}</Link>
//           </div>

//           {/* Action Buttons */}
//           <div className="hidden md:flex items-center gap-3">
//             <Button className="bg-accent hover:bg-accent/90" asChild>
//               <Link to="/book">{t('bookConsultation')}</Link>
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
//             <Link to="/" className={mobileNavLinkClass('/')}>{t('home')}</Link>
//             <Link to="/treatments" className={mobileNavLinkClass('/treatments')}>{t('treatments')}</Link>
//             <Link to="/hospitals" className={mobileNavLinkClass('/hospitals')}>{t('hospitals')}</Link>
//             <Link to="/doctors" className={mobileNavLinkClass('/doctors')}>{t('doctors')}</Link>
//             <Link to="/about" className={mobileNavLinkClass('/about')}>{t('about')}</Link>
//             <Link to="/blog" className={mobileNavLinkClass('/blog')}>{t('blog')}</Link>
//             <Link to="/contact" className={mobileNavLinkClass('/contact')}>{t('contact')}</Link>
            
//             {/* Language selector in mobile menu */}
//             <div className="pt-4 border-t">
//               <label className="block text-sm font-medium mb-2">{t('language')}</label>
//               <select
//                 className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm"
//                 onChange={handleLanguageChange}
//                 value={language}
//               >
//                 {languages.map((lang) => (
//                   <option key={lang.value} value={lang.value}>
//                     {lang.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="flex gap-3 mt-4">
//               <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
//                 <Link to="/book">{t('bookConsultation')}</Link>
//               </Button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;
// Header.tsx - Updated with correct import path
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X, Languages } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import apolloLogo from '@/assets/apollo-logo.png';
import { useLanguage } from '../contexts/LanguageContext'; // Updated import path

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

  const mobileNavLinkClass = (path: string) =>
    `block font-medium ${isActive(path) ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`;

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value as 'en' | 'fr';
    setLanguage(lang);
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
              <span>+91 81307 95394</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>Info@apolopartners.com</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">{t('support')}</div>
            <div className="flex items-center gap-2">
              <Languages size={14} />
              <select
                className="bg-transparent border border-primary-foreground/30 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-primary-foreground"
                onChange={handleLanguageChange}
                value={language}
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
              <div className="text-xl font-bold text-primary">Apollo Partners</div>
              <p className="text-xs text-muted-foreground">{t('healthcareExcellence')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={navLinkClass('/')}>{t('home')}</Link>
            <Link to="/treatments" className={navLinkClass('/treatments')}>{t('treatments')}</Link>
            <Link to="/hospitals" className={navLinkClass('/hospitals')}>{t('hospitals')}</Link>
            <Link to="/doctors" className={navLinkClass('/doctors')}>{t('doctors')}</Link>
            <Link to="/about" className={navLinkClass('/about')}>{t('about')}</Link>
            <Link to="/blog" className={navLinkClass('/blog')}>{t('blog')}</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>{t('contact')}</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/book">{t('bookConsultation')}</Link>
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
            <Link to="/" className={mobileNavLinkClass('/')}>{t('home')}</Link>
            <Link to="/treatments" className={mobileNavLinkClass('/treatments')}>{t('treatments')}</Link>
            <Link to="/hospitals" className={mobileNavLinkClass('/hospitals')}>{t('hospitals')}</Link>
            <Link to="/doctors" className={mobileNavLinkClass('/doctors')}>{t('doctors')}</Link>
            <Link to="/about" className={mobileNavLinkClass('/about')}>{t('about')}</Link>
            <Link to="/blog" className={mobileNavLinkClass('/blog')}>{t('blog')}</Link>
            <Link to="/contact" className={mobileNavLinkClass('/contact')}>{t('contact')}</Link>
            
            {/* Language selector in mobile menu */}
            <div className="pt-4 border-t">
              <label className="block text-sm font-medium mb-2">{t('language')}</label>
              <select
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm"
                onChange={handleLanguageChange}
                value={language}
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
                <Link to="/book">{t('bookConsultation')}</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;