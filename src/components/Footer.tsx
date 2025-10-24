// Footer.tsx - Enhanced responsiveness for mobile and all devices
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import apolloLogo from "@/assets/apollo-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t mt-6 sm:mt-8 lg:mt-12">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 mb-6 sm:mb-0">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 mb-4">
              <img
                src={apolloLogo}
                alt="Apollo Partners Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain flex-shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary truncate">
                  Apollo Partners
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Healthcare Excellence
                </p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
              Committed to providing world-class healthcare services with
              compassion and innovation.
            </p>
            <div className="flex space-x-2 sm:space-x-3 flex-wrap gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 hover:bg-muted rounded-md transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-primary hover:text-primary/80 flex-shrink-0" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 hover:bg-muted rounded-md transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-primary hover:text-primary/80 flex-shrink-0" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 hover:bg-muted rounded-md transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary hover:text-primary/80 flex-shrink-0" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 hover:bg-muted rounded-md transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary hover:text-primary/80 flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors block py-1"
                >
                  Home
                </Link>
              </li>
              {/* <li><Link to="/treatments" className="hover:text-primary transition-colors block py-1">Treatments</Link></li> */}
              <li>
                <Link
                  to="/hospitals"
                  className="hover:text-primary transition-colors block py-1"
                >
                  Hospitals
                </Link>
              </li>
              {/* <li><Link to="/doctors" className="hover:text-primary transition-colors block py-1">Doctors</Link></li> */}
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors block py-1"
                >
                  About
                </Link>
              </li>
              {/* <li><Link to="/blog" className="hover:text-primary transition-colors block py-1">Blog</Link></li> */}
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors block py-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1 mb-6 sm:mb-0">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
              {/* <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-primary" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 flex-1 min-w-0">
                  <a href="tel:+91 81307 95394" className="font-medium hover:text-primary transition-colors text-xs sm:text-sm truncate">Call Now</a>
                  <span className="text-xs sm:text-sm">+91 81307 95394</span>
                </div>
                <Button 
                  asChild 
                  size="sm" 
                  className="mt-2 sm:mt-0 bg-primary hover:bg-primary/90 text-primary-foreground text-xs w-full sm:w-auto whitespace-nowrap"
                >
                  <a href="tel:+91 81307 95394">Call</a>
                </Button>
              </li> */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                {/* <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-primary" /> */}
                <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600 flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 flex-1 min-w-0">
                  <a
                    href="tel:+91 81307 95394"
                    className="font-medium hover:text-primary transition-colors text-xs sm:text-sm truncate"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/918130795394"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium hover:text-primary transition-colors text-xs sm:text-sm truncate"
                  >
                    <span>+91 81307 95394</span>
                    {/* <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600 flex-shrink-0" /> */}
                  </a>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="mt-2 sm:mt-0 bg-primary hover:bg-primary/90 text-primary-foreground text-xs w-full sm:w-auto whitespace-nowrap"
                >
                  <a href="tel:+91 81307 95394">Call</a>
                </Button>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-primary" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 flex-1 min-w-0">
                  <a
                    href="mailto:Info@apolopartners.com"
                    className="font-medium hover:text-primary transition-colors text-xs sm:text-sm truncate"
                  >
                    Send Email
                  </a>
                  <span className="text-xs sm:text-sm break-all">
                    Info@apolopartners.com
                  </span>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="mt-2 sm:mt-0 bg-primary hover:bg-primary/90 text-primary-foreground text-xs w-full sm:w-auto whitespace-nowrap"
                >
                  <a href="mailto:Info@apolopartners.com">Email</a>
                </Button>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0 text-primary" />
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 flex-1 min-w-0">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=21%2C%20Greams%20Lane%2C%20Off%20Greams%20Road%2C%20Chennai%20%E2%80%93%20600%20006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    View Map
                  </a>
                  <span className="leading-relaxed text-xs sm:text-sm break-words">
                    21, Greams Lane, Off Greams Road, Chennai – 600 006
                  </span>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="mt-2 sm:mt-0 bg-primary hover:bg-primary/90 text-primary-foreground text-xs w-full sm:w-auto whitespace-nowrap"
                  variant="outline"
                >
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=21%2C%20Greams%20Lane%2C%20Off%20Greams%20Road%2C%20Chennai%20%E2%80%93%20600%20006"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Map
                  </a>
                </Button>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="sm:col-span-2 lg:col-span-1 mb-6 sm:mb-0">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">
              Stay Updated
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest healthcare insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2.5 border border-input rounded-md bg-background text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-xs sm:text-sm min-h-[44px] w-full"
              />
              <Button
                size="sm"
                className="px-4 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-xs sm:text-sm font-medium w-full sm:w-auto min-h-[44px]"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 lg:py-4 text-center text-xs sm:text-sm text-muted-foreground">
          <p className="leading-relaxed">
            &copy; 2025 Apollo Partners. All rights reserved. | Designed for
            Healthcare Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
