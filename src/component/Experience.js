// import React from 'react';

// export default function Experience() {
//   return (
//     <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800" data-aos="fade-up">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-4xl font-bold text-indigo-600 mb-8">Work Experience</h2>
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-2xl font-semibold">Machine Learning Intern – Feynn Labs India</h3>
//             <ul className="list-disc ml-5 text-lg mt-2">
//               <li>Built a diabetes prediction system with 92% accuracy using Decision Trees</li>
//               <li>Reduced false positives by 30%, presented insights to stakeholders</li>
//               <li>Developed a web app with advanced ML models and visualizations</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold">Data Science Intern – CipherByte Technologies</h3>
//             <ul className="list-disc ml-5 text-lg mt-2">
//               <li>Implemented data models analyzing customer behavior</li>
//               <li>Boosted marketing effectiveness by 40%</li>
//               <li>Deployed ML algorithms across multiple live projects</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import React from 'react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-dark text-white"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">Work Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">Machine Learning Intern – Feynn Labs</h3>
            <ul className="list-disc ml-5 text-lg mt-2">
              <li>Built a diabetes prediction system with 92% accuracy using Decision Trees</li>
              <li>Reduced false positives by 30%, presented insights to stakeholders</li>
              <li>Developed a web app with advanced ML models and visualizations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Data Science Intern – CipherByte Technologies</h3>
            <ul className="list-disc ml-5 text-lg mt-2">
              <li>Implemented data models analyzing customer behavior</li>
              <li>Boosted marketing effectiveness by 40%</li>
              <li>Deployed ML algorithms across multiple live projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
