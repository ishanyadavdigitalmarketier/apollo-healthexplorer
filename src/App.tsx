// // App.tsx - Updated to include /read/:id route
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import Contact from "./pages/Contact";
// import Blog from "./pages/blog";
// import About from "./pages/about";
// import Doctors from "./pages/doctors";
// import Hospitals from "./pages/hospitals";
// import Treatments from "./pages/treatments";
// import Book from "./pages/book";
// import Details from "./pages/details";
// import Article from "./pages/article";
// import Read from "./pages/read";
// import Story from "./pages/story";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/doctors" element={<Doctors />} />
//           <Route path="/hospitals" element={<Hospitals />} />
//           <Route path="/treatments" element={<Treatments />} />
//           <Route path="/book" element={<Book />} />
//           <Route path="/details/:id" element={<Details />} />
//           <Route path="/article" element={<Article />} />
//           <Route path="/read/:id" element={<Read />} />
//           <Route path="/story" element={<Story />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
// App.tsx - Updated to include /read/:id route and Google Translate setup
import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Blog from "./pages/blog";
import About from "./pages/about";
import Doctors from "./pages/doctors";
import Hospitals from "./pages/hospitals";
import Treatments from "./pages/treatments";
import Book from "./pages/book";
import Details from "./pages/details";
import Article from "./pages/article";
import Read from "./pages/read";
import Story from "./pages/story";

declare global {
  interface Window {
    google: any;
  }
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const existingScript = document.getElementById('google-translate-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.head.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,fr,ar,ru,bn,hi,ro,es,pt',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();

    return () => {
      const script = document.getElementById('google-translate-script');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/book" element={<Book />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/article" element={<Article />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/story" element={<Story />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;