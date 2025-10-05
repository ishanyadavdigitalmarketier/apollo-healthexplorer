// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Badge } from '@/components/ui/badge';
// import { Search, Stethoscope, Building2, UserCheck } from 'lucide-react';
// import heroImage from '@/assets/hero-medical.jpg';

// const HeroSection = () => {
//   const [activeTab, setActiveTab] = useState('treatments');

//   const popularTreatments = [
//     'Heart Surgery',
//     'Orthopedic Surgery', 
//     'Cosmetic Surgery',
//     'Dental Treatments',
//     'Eye Surgery',
//     'Cancer Treatment'
//   ];

//   return (
//     <section 
//       className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat"
//       style={{ 
//         backgroundImage: `url(${heroImage})`,
//       }}
//     >
//       {/* Gradient overlay */}
//       <div 
//         className="absolute inset-0"
//         style={{ 
//           background: 'var(--hero-gradient)',
//           opacity: 0.9
//         }}
//       ></div>
      
//       {/* Content */}
//       <div className="relative container mx-auto px-4 py-20">
//         <div className="max-w-4xl">
//           {/* Hero Text */}
//           <div className="text-white mb-12">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               World-Class
//               <br />
//               Healthcare
//               <br />
//               Within Reach
//             </h1>
//             <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
//               Connect with top hospitals and specialists worldwide. Quality medical care at affordable prices, with personalized support every step of the way.
//             </p>
//           </div>

//           {/* Search Card */}
//           <div className="bg-white rounded-2xl p-8 shadow-2xl">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-foreground mb-2">Find Your Perfect Medical Solution</h2>
//               <p className="text-muted-foreground">Search from thousands of treatments, hospitals, and specialists</p>
//             </div>

//             {/* Tabs */}
//             <div className="flex gap-2 mb-6">
//               <Button
//                 variant={activeTab === 'treatments' ? 'default' : 'outline'}
//                 onClick={() => setActiveTab('treatments')}
//                 className="flex items-center gap-2"
//               >
//                 <Stethoscope size={16} />
//                 Treatments
//               </Button>
//               <Button
//                 variant={activeTab === 'hospitals' ? 'default' : 'outline'}
//                 onClick={() => setActiveTab('hospitals')}
//                 className="flex items-center gap-2"
//               >
//                 <Building2 size={16} />
//                 Hospitals
//               </Button>
//               <Button
//                 variant={activeTab === 'doctors' ? 'default' : 'outline'}
//                 onClick={() => setActiveTab('doctors')}
//                 className="flex items-center gap-2"
//               >
//                 <UserCheck size={16} />
//                 Doctors
//               </Button>
//             </div>

//             {/* Search Form */}
//             <div className="grid md:grid-cols-3 gap-4 mb-6">
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium mb-2">What are you looking for?</label>
//                 <Input 
//                   placeholder="Search treatments..." 
//                   className="h-12"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Preferred Location</label>
//                 <Select>
//                   <SelectTrigger className="h-12">
//                     <SelectValue placeholder="Select country" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="india">India</SelectItem>
//                     <SelectItem value="thailand">Thailand</SelectItem>
//                     <SelectItem value="singapore">Singapore</SelectItem>
//                     <SelectItem value="turkey">Turkey</SelectItem>
//                     <SelectItem value="mexico">Mexico</SelectItem>
//                     <SelectItem value="malaysia">Malaysia</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             <Button size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 h-12 px-8">
//               <Search size={20} className="mr-2" />
//               Search
//             </Button>

//             {/* Popular Treatments */}
//             <div className="mt-6">
//               <p className="text-sm text-muted-foreground mb-3">Popular Treatments:</p>
//               <div className="flex flex-wrap gap-2">
//                 {popularTreatments.map((treatment, index) => (
//                   <Badge 
//                     key={index} 
//                     variant="secondary" 
//                     className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
//                   >
//                     {treatment}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Stethoscope, Building2, UserCheck } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('treatments');
  const [selectedCountry, setSelectedCountry] = useState('');

  const popularTreatments = [
    'Heart Surgery',
    'Orthopedic Surgery', 
    'Cosmetic Surgery',
    'Dental Treatments',
    'Eye Surgery',
    'Cancer Treatment'
  ];

  const popularHospitals = [
    'Apollo Hospitals',
    'Fortis Healthcare', 
    'Max Healthcare',
    'Medanta - The Medicity',
    'AIIMS',
    'Manipal Hospitals'
  ];

  const popularDoctors = [
    'Dr. Naresh Trehan (Cardiologist)',
    'Dr. Ashok Rajgopal (Orthopedist)', 
    'Dr. Prathap C. Reddy (General Physician)',
    'Dr. Devi Shetty (Cardiothoracic Surgeon)',
    'Dr. B.N. Srikar Reddy (Gastroenterologist)',
    'Dr. Deepak Chopra (Neurologist)'
  ];

  const getPlaceholder = () => {
    switch (activeTab) {
      case 'treatments':
        return 'Search treatments...';
      case 'hospitals':
        return 'Search hospitals...';
      case 'doctors':
        return 'Search doctors...';
      default:
        return 'Search...';
    }
  };

  const renderTabContent = () => {
    let title = '';
    let items = [];
    let icon = null;

    switch (activeTab) {
      case 'treatments':
        title = 'Popular Treatments';
        items = popularTreatments;
        icon = <Stethoscope size={14} className="mr-2" />;
        break;
      case 'hospitals':
        title = 'Popular Hospitals';
        items = popularHospitals;
        icon = <Building2 size={14} className="mr-2" />;
        break;
      case 'doctors':
        title = 'Popular Doctors';
        items = popularDoctors;
        icon = <UserCheck size={14} className="mr-2" />;
        break;
      default:
        title = 'Popular Items';
        items = [];
    }

    const locationText = selectedCountry ? ` in ${selectedCountry}` : '';

    return (
      <div className="mt-6">
        <p className="text-sm text-muted-foreground mb-3">
          {icon}
          {title}{locationText}:
        </p>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {item}
            </Badge>
          ))}
        </div>
        {selectedCountry && (
          <p className="text-xs text-muted-foreground mt-2">
            Showing results for {selectedCountry}. Select a location above to filter.
          </p>
        )}
      </div>
    );
  };

  return (
    <section 
      className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'var(--hero-gradient)',
          opacity: 0.9
        }}
      ></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Hero Text */}
          <div className="text-white mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              World-Class
              <br />
              Healthcare
              <br />
              Within Reach
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
              Connect with top hospitals and specialists worldwide. Quality medical care at affordable prices, with personalized support every step of the way.
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Find Your Perfect Medical Solution</h2>
              <p className="text-muted-foreground">Search from thousands of treatments, hospitals, and specialists</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <Button
                variant={activeTab === 'treatments' ? 'default' : 'outline'}
                onClick={() => setActiveTab('treatments')}
                className="flex items-center gap-2"
              >
                <Stethoscope size={16} />
                Treatments
              </Button>
              <Button
                variant={activeTab === 'hospitals' ? 'default' : 'outline'}
                onClick={() => setActiveTab('hospitals')}
                className="flex items-center gap-2"
              >
                <Building2 size={16} />
                Hospitals
              </Button>
              <Button
                variant={activeTab === 'doctors' ? 'default' : 'outline'}
                onClick={() => setActiveTab('doctors')}
                className="flex items-center gap-2"
              >
                <UserCheck size={16} />
                Doctors
              </Button>
            </div>

            {/* Search Form */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">What are you looking for?</label>
                <Input 
                  placeholder={getPlaceholder()} 
                  className="h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Location</label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="thailand">Thailand</SelectItem>
                    <SelectItem value="singapore">Singapore</SelectItem>
                    <SelectItem value="turkey">Turkey</SelectItem>
                    <SelectItem value="mexico">Mexico</SelectItem>
                    <SelectItem value="malaysia">Malaysia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 h-12 px-8">
              <Search size={20} className="mr-2" />
              Search
            </Button>

            {/* Tab-specific Content */}
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;