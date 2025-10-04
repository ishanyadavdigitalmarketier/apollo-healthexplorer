// Header.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import apolloLogo from '@/assets/apollo-logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-background border-b">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91-1066-502-502</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@apollohospitals.com</span>
            </div>
          </div>
          <div className="text-right">
            24/7 Medical Support Available
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={apolloLogo} 
              alt="Apollo Partners Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Apollo Partners</h1>
              <p className="text-xs text-muted-foreground">Healthcare Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`font-medium ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Home</Link>
            <Link to="/treatments" className={`font-medium ${isActive('/treatments') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Treatments</Link>
            <Link to="/hospitals" className={`font-medium ${isActive('/hospitals') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Hospitals</Link>
            <Link to="/doctors" className={`font-medium ${isActive('/doctors') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Doctors</Link>
            <Link to="/about" className={`font-medium ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>About</Link>
            <Link to="/blog" className={`font-medium ${isActive('/blog') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Blog</Link>
            <Link to="/contact" className={`font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Contact</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Get Quote
            </Button>
            <Button className="bg-accent hover:bg-accent/90">
              Book Consultation
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
            <Link to="/" className={`block font-medium ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Home</Link>
            <Link to="/treatments" className={`block font-medium ${isActive('/treatments') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Treatments</Link>
            <Link to="/hospitals" className={`block font-medium ${isActive('/hospitals') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Hospitals</Link>
            <Link to="/doctors" className={`block font-medium ${isActive('/doctors') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Doctors</Link>
            <Link to="/about" className={`block font-medium ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>About</Link>
            <Link to="/blog" className={`block font-medium ${isActive('/blog') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Blog</Link>
            <Link to="/contact" className={`block font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary transition-colors'}`}>Contact</Link>
            <div className="flex gap-3 mt-4">
              <Button variant="outline" size="sm" className="border-primary text-primary">
                Get Quote
              </Button>
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;