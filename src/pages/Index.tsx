// import Header from '@/components/Header';
// import HeroSection from '@/components/HeroSection';
// import StatsSection from '@/components/StatsSection';
// import TreatmentsSection from '@/components/TreatmentsSection';
// import HospitalsSection from '@/components/HospitalsSection';
// import TestimonialsSection from '@/components/TestimonialsSection';
// import BlogSection from '@/components/BlogSection';
// import CTASection from '@/components/CTASection';
// import Footer  from '@/components/Footer';

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <HeroSection />
//       <StatsSection />
//       <TreatmentsSection />
//       <HospitalsSection />
//       <TestimonialsSection />
//       <BlogSection />
//       <CTASection />
//       <Footer />
//     </div>
//   );
// };

// export default Index;
// Index.tsx - Updated with improved language selector
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import HospitalsSection from '@/components/HospitalsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const Index = () => {
  useEffect(() => {
    // Function to initialize Google Translate
    const initializeGoogleTranslate = () => {
      // Remove existing Google Translate widget if it exists
      const existingWidget = document.querySelector('.goog-te-banner-frame');
      if (existingWidget) {
        existingWidget.remove();
      }

      // Clear existing translate element
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        translateElement.innerHTML = '';
      }

      // Define the initialization function
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,es,fr,de,it,pt,ru,ja,ko,zh-CN,ar,hi,bn,tr,th,vi',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true
            },
            'google_translate_element'
          );

          // Hide the Google branding
          setTimeout(() => {
            const googleBranding = document.querySelector('.goog-logo-link');
            const googleText = document.querySelector('.goog-te-gadget');
            if (googleBranding) googleBranding.remove();
            if (googleText) {
              googleText.innerHTML = googleText.innerHTML.replace(/Powered by GOOGLE/g, '');
            }
          }, 100);
        }
      };

      // Load Google Translate script
      const addGoogleTranslateScript = () => {
        const existingScript = document.getElementById('google-translate-script');
        if (existingScript) {
          existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.head.appendChild(script);
      };

      addGoogleTranslateScript();
    };

    // Initialize on component mount
    initializeGoogleTranslate();

    // Cleanup function
    return () => {
      const script = document.getElementById('google-translate-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    if (lang && window.google && window.google.translate) {
      const translateInstance = window.google.translate.TranslateElement.getInstance();
      if (translateInstance) {
        translateInstance.showBanner(false);
      }
      
      // Change the language
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
      }
    }
  };

  const languages = [
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'es', label: 'Español', flag: '🇪🇸' },
    { value: 'fr', label: 'Français', flag: '🇫🇷' },
    { value: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { value: 'it', label: 'Italiano', flag: '🇮🇹' },
    { value: 'pt', label: 'Português', flag: '🇵🇹' },
    { value: 'ru', label: 'Русский', flag: '🇷🇺' },
    { value: 'ja', label: '日本語', flag: '🇯🇵' },
    { value: 'ko', label: '한국어', flag: '🇰🇷' },
    { value: 'zh-CN', label: '中文', flag: '🇨🇳' },
    { value: 'ar', label: 'العربية', flag: '🇦🇪' },
    { value: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { value: 'bn', label: 'বাংলা', flag: '🇧🇩' },
    { value: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { value: 'th', label: 'ไทย', flag: '🇹🇭' },
    { value: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Language Selector - Improved Styling */}
      <div className="bg-muted/50 py-2 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="text-sm text-muted-foreground">
              Select your preferred language:
            </div>
            <div className="flex items-center gap-2">
              <select
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-w-[200px]"
                onChange={handleLanguageChange}
                defaultValue=""
              >
                <option value="" disabled>Choose Language</option>
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.flag} {lang.label}
                  </option>
                ))}
              </select>
              
              {/* Reset Translation Button */}
              <button
                onClick={() => handleLanguageChange({ target: { value: 'en' } } as any)}
                className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors"
              >
                Reset to English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      {/* Main Content */}
      <HeroSection />
      <StatsSection />
      <TreatmentsSection />
      <HospitalsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;