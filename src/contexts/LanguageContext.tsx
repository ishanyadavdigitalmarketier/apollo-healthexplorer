// contexts/LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translations for all components
const translations = {
  en: {
    // Header
    'support': '24/7 Medical Support Available',
    'language': 'Language',
    'home': 'Home',
    'treatments': 'Treatments',
    'hospitals': 'Hospitals',
    'doctors': 'Doctors',
    'about': 'About',
    'blog': 'Blog',
    'contact': 'Contact',
    'bookConsultation': 'Book Consultation',
    'healthcareExcellence': 'Healthcare Excellence',

    // Hero Section
    'worldClassHealthcare': 'World-Class Healthcare Within Reach',
    'connectWithTopHospitals': 'Connect with top hospitals and specialists worldwide. Quality medical care at affordable prices, with personalized support every step of the way.',
    'findYourPerfectMedicalSolution': 'Find Your Perfect Medical Solution',
    'searchFromThousands': 'Search from thousands of treatments, hospitals, and specialists',
    'hospitalsTab': 'Hospitals',
    'treatmentsTab': 'Treatments',
    'doctorsTab': 'Doctors',
    'whatAreYouLookingFor': 'What are you looking for?',
    'preferredLocation': 'Preferred Location',
    'selectCountry': 'Select country',
    'search': 'Search',
    'popularTreatments': 'Popular Treatments',
    'heartSurgery': 'Heart Surgery',
    'orthopedicSurgery': 'Orthopedic Surgery',
    'cosmeticSurgery': 'Cosmetic Surgery',
    'dentalTreatments': 'Dental Treatments',
    'eyeSurgery': 'Eye Surgery',
    'cancerTreatment': 'Cancer Treatment',

    // Stats Section
    'patientsServed': 'Patients Served',
    'partnerHospitals': 'Partner Hospitals',
    'countries': 'Countries',
    'successRate': 'Success Rate',

    // Treatments Section
    'featuredMedicalTreatments': 'Featured Medical Treatments',
    'treatmentsDescription': 'Discover our most popular treatments performed by world-renowned specialists at internationally accredited hospitals with significant cost savings.',
    'upToSavings': 'Up to {savings} savings',
    'viewAllTreatments': 'View All Treatments',
    'viewDetails': 'View Details',
    'cardiology': 'Cardiology',
    'orthopedics': 'Orthopedics',
    'plasticSurgery': 'Plastic Surgery',
    'dentistry': 'Dentistry',
    'ophthalmology': 'Ophthalmology',
    'fertility': 'Fertility',
    'heartBypassSurgery': 'Heart Bypass Surgery',
    'kneeReplacement': 'Knee Replacement',
    'cosmeticSurgeryFull': 'Cosmetic Surgery',
    'dentalImplants': 'Dental Implants',
    'lasikEyeSurgery': 'LASIK Eye Surgery',
    'ivfTreatment': 'IVF Treatment',

    // Hospitals Section
    'topRatedPartnerHospitals': 'Top-Rated Partner Hospitals',
    'hospitalsDescription': 'We partner with internationally accredited hospitals known for their excellence in medical care, patient safety, and world-class facilities.',
    'viewAllPartnerHospitals': 'View All Partner Hospitals',

    // Testimonials Section
    'realPatientSuccessStories': 'Real Patient Success Stories',
    'testimonialsDescription': 'Hear from thousands of patients who have transformed their lives through quality medical care abroad with Apollo Partners expert guidance.',
    'shareYourSuccessStory': 'Share Your Success Story',
    'patientSatisfaction': 'Patient Satisfaction',
    'happyPatients': 'Happy Patients',
    'averageSavings': 'Average Savings',
    'patientSupport': 'Patient Support',

    // Blog Section
    'healthMedicalTourismInsights': 'Health & Medical Tourism Insights',
    'blogDescription': 'Stay informed with our latest articles, guides, and expert insights on medical tourism, treatments, and healthcare destinations worldwide.',
    'featuredArticle': 'Featured Article',
    'readFullArticle': 'Read Full Article',
    'readMore': 'Read More',

    // CTA Section
    'readyToStartYourMedicalJourney': 'Ready to Start Your Medical Journey?',
    'ctaDescription': 'Get personalized treatment plans, cost estimates, and expert guidance from our medical tourism specialists. Your health transformation starts here.',
    'getFreeQuote': 'Get Free Quote',
    'callUsNow': 'Call Us Now',
    'speakWithOurMedicalExperts': 'Speak with our medical experts',
    'whatsAppChat': 'WhatsApp Chat',
    'quickResponseSupport': 'Quick response & support',
    'emailConsultation': 'Email Consultation',
    'detailedMedicalInquiry': 'Detailed medical inquiry',
    'startChat': 'Start Chat',
    'sendEmail': 'Send Email',
    'emailUs': 'Email Us',
    'support24_7': '24/7 Support',
    'confidentialSecure': 'Confidential & Secure',
    'expertTeam': 'Expert Team',
    'joinThousandsOfSatisfiedPatients': 'Join Thousands of Satisfied Patients',
    'readyToTakeTheNextStep': 'Ready to take the next step? Our medical experts are standing by.',

    // Footer
    'companyDescription': 'Committed to providing world-class healthcare services with compassion and innovation.',
    'quickLinks': 'Quick Links',
    'contactUs': 'Contact Us',
    'stayUpdated': 'Stay Updated',
    'newsletterDescription': 'Subscribe to our newsletter for the latest healthcare insights.',
    'enterYourEmail': 'Enter your email',
    'subscribe': 'Subscribe',
    'callNow': 'Call Now',
    'viewMap': 'View Map',
    'allRightsReserved': 'All rights reserved',
    'designedForHealthcareExcellence': 'Designed for Healthcare Excellence'
  },
  fr: {
    // Header
    'support': 'Support Médical 24h/24 et 7j/7 Disponible',
    'language': 'Langue',
    'home': 'Accueil',
    'treatments': 'Traitements',
    'hospitals': 'Hôpitaux',
    'doctors': 'Médecins',
    'about': 'À Propos',
    'blog': 'Blog',
    'contact': 'Contact',
    'bookConsultation': 'Réserver une Consultation',
    'healthcareExcellence': 'Excellence en Soins de Santé',

    // Hero Section
    'worldClassHealthcare': 'Soins de Santé de Classe Mondiale à Votre Portée',
    'connectWithTopHospitals': 'Connectez-vous avec les meilleurs hôpitaux et spécialistes du monde entier. Des soins médicaux de qualité à des prix abordables, avec un soutien personnalisé à chaque étape.',
    'findYourPerfectMedicalSolution': 'Trouvez Votre Solution Médicale Parfaite',
    'searchFromThousands': 'Recherchez parmi des milliers de traitements, hôpitaux et spécialistes',
    'hospitalsTab': 'Hôpitaux',
    'treatmentsTab': 'Traitements',
    'doctorsTab': 'Médecins',
    'whatAreYouLookingFor': 'Que recherchez-vous ?',
    'preferredLocation': 'Lieu Préféré',
    'selectCountry': 'Sélectionner un pays',
    'search': 'Rechercher',
    'popularTreatments': 'Traitements Populaires',
    'heartSurgery': 'Chirurgie Cardiaque',
    'orthopedicSurgery': 'Chirurgie Orthopédique',
    'cosmeticSurgery': 'Chirurgie Esthétique',
    'dentalTreatments': 'Traitements Dentaires',
    'eyeSurgery': 'Chirurgie Oculaire',
    'cancerTreatment': 'Traitement du Cancer',

    // Stats Section
    'patientsServed': 'Patients Servis',
    'partnerHospitals': 'Hôpitaux Partenaires',
    'countries': 'Pays',
    'successRate': 'Taux de Réussite',

    // Treatments Section
    'featuredMedicalTreatments': 'Traitements Médicaux en Vedette',
    'treatmentsDescription': 'Découvrez nos traitements les plus populaires réalisés par des spécialistes de renommée mondiale dans des hôpitaux accrédités internationalement avec des économies significatives.',
    'upToSavings': 'Jusqu\'à {savings} d\'économies',
    'viewAllTreatments': 'Voir Tous les Traitements',
    'viewDetails': 'Voir les Détails',
    'cardiology': 'Cardiologie',
    'orthopedics': 'Orthopédie',
    'plasticSurgery': 'Chirurgie Plastique',
    'dentistry': 'Dentisterie',
    'ophthalmology': 'Ophtalmologie',
    'fertility': 'Fertilité',
    'heartBypassSurgery': 'Pontage Coronarien',
    'kneeReplacement': 'Remplacement du Genou',
    'cosmeticSurgeryFull': 'Chirurgie Esthétique',
    'dentalImplants': 'Implants Dentaires',
    'lasikEyeSurgery': 'Chirurgie LASIK des Yeux',
    'ivfTreatment': 'Traitement FIV',

    // Hospitals Section
    'topRatedPartnerHospitals': 'Hôpitaux Partenaires les Mieux Notés',
    'hospitalsDescription': 'Nous collaborons avec des hôpitaux accrédités internationalement reconnus pour leur excellence en soins médicaux, sécurité des patients et installations de classe mondiale.',
    'viewAllPartnerHospitals': 'Voir Tous les Hôpitaux Partenaires',

    // Testimonials Section
    'realPatientSuccessStories': 'Histoires de Réussite Réelles de Patients',
    'testimonialsDescription': 'Écoutez des milliers de patients qui ont transformé leur vie grâce à des soins médicaux de qualité à l\'étranger avec l\'expertise d\'Apollo Partners.',
    'shareYourSuccessStory': 'Partagez Votre Histoire de Réussite',
    'patientSatisfaction': 'Satisfaction des Patients',
    'happyPatients': 'Patients Heureux',
    'averageSavings': 'Économies Moyennes',
    'patientSupport': 'Support Patient',

    // Blog Section
    'healthMedicalTourismInsights': 'Aperçus sur la Santé et le Tourisme Médical',
    'blogDescription': 'Restez informé avec nos derniers articles, guides et conseils d\'experts sur le tourisme médical, les traitements et les destinations de soins de santé dans le monde.',
    'featuredArticle': 'Article en Vedette',
    'readFullArticle': 'Lire l\'Article Complet',
    'readMore': 'Lire Plus',

    // CTA Section
    'readyToStartYourMedicalJourney': 'Prêt à Commencer Votre Parcours Médical ?',
    'ctaDescription': 'Obtenez des plans de traitement personnalisés, des estimations de coûts et des conseils d\'experts de nos spécialistes en tourisme médical. Votre transformation santé commence ici.',
    'getFreeQuote': 'Obtenir un Devis Gratuit',
    'callUsNow': 'Appelez-Nous Maintenant',
    'speakWithOurMedicalExperts': 'Parlez avec nos experts médicaux',
    'whatsAppChat': 'Chat WhatsApp',
    'quickResponseSupport': 'Réponse rapide et support',
    'emailConsultation': 'Consultation par Email',
    'detailedMedicalInquiry': 'Demande médicale détaillée',
    'startChat': 'Commencer le Chat',
    'sendEmail': 'Envoyer un Email',
    'emailUs': 'Nous Envoyer un Email',
    'support24_7': 'Support 24/7',
    'confidentialSecure': 'Confidentiel et Sécurisé',
    'expertTeam': 'Équipe d\'Experts',
    'joinThousandsOfSatisfiedPatients': 'Rejoignez des Milliers de Patients Satisfaits',
    'readyToTakeTheNextStep': 'Prêt à passer à l\'étape suivante ? Nos experts médicaux sont à votre disposition.',

    // Footer
    'companyDescription': 'Engagé à fournir des services de santé de classe mondiale avec compassion et innovation.',
    'quickLinks': 'Liens Rapides',
    'contactUs': 'Contactez-Nous',
    'stayUpdated': 'Restez Informé',
    'newsletterDescription': 'Abonnez-vous à notre newsletter pour les derniers aperçus sur la santé.',
    'enterYourEmail': 'Entrez votre email',
    'subscribe': 'S\'abonner',
    'callNow': 'Appeler Maintenant',
    'viewMap': 'Voir la Carte',
    'allRightsReserved': 'Tous droits réservés',
    'designedForHealthcareExcellence': 'Conçu pour l\'Excellence en Soins de Santé'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};