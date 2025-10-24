// FloatingCTA.tsx - Floating action buttons for mobile scroll visibility
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingCTA = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50 p-2 flex gap-2 shadow-lg">
      <Button 
        asChild 
        className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-2 h-auto"
      >
        <Link to="/book">{t('getFreeQuote')}</Link>
      </Button>
      <Button 
        asChild 
        className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-2 h-auto flex items-center justify-center gap-1"
      >
        <a 
          href="https://wa.me/918130795394" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            loading="lazy" 
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-white-icon.png" 
            alt="Chat with Us" 
            className="w-3 h-3 flex-shrink-0" 
            title="Chat with Us"
          />
          <span>{t('Chat')}</span>
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;