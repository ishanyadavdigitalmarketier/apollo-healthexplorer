// const StatsSection = () => {
//   const stats = [
//     {
//       number: '500K+',
//       label: 'Patients Served',
//     },
//     {
//       number: '2000+',
//       label: 'Partner Hospitals',
//     },
//     {
//       number: '50+',
//       label: 'Countries',
//     },
//     {
//       number: '98%',
//       label: 'Success Rate',
//     },
//   ];

//   return (
//     <section className="py-16 bg-primary text-primary-foreground">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
//               <div className="text-lg opacity-90">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

// StatsSection.tsx - Enhanced responsiveness for mobile and all devices
const StatsSection = () => {
  const stats = [
    {
      number: '500K+',
      label: 'Patients Served',
    },
    {
      number: '2000+',
      label: 'Partner Hospitals',
    },
    {
      number: '50+',
      label: 'Countries',
    },
    {
      number: '98%',
      label: 'Success Rate',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-base sm:text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;