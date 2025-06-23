// import React from 'react';

// export default function Project() {
//   const projects = [
//     {
//       title: 'Diabetes Predictor',
//       link: 'https://github.com/LichuGhosh/Diabetes_Prediction_Website',
//       description: 'A Decision Tree based ML web app to predict diabetes risk. Achieved 92% accuracy.'
//     },
//     {
//       title: 'Breast Cancer Detection',
//       link: 'https://github.com/LichuGhosh/Breast_Cancer_Detection',
//       description: 'Used RandomForest, XGBoost & SVM to classify breast cancer with 99.12% accuracy.'
//     },
//     {
//       title: 'EV Market Segment Analysis',
//       link: 'https://github.com/LichuGhosh/EV_Market_Segment_Analysis',
//       description: 'Analyzed state-wise EV adoption and charging station distribution in India.'
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900" data-aos="fade-up">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-indigo-600 mb-8">Projects</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {projects.map((proj, idx) => (
//             <a key={idx} href={proj.link} target="_blank" rel="noopener noreferrer" className="block bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-xl transition">
//               <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">{proj.title}</h3>
//               <p className="text-gray-700 dark:text-gray-200">{proj.description}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React from 'react';

export default function Project() {
  const projects = [
    {
      title: 'Diabetes Predictor',
      link: 'https://github.com/LichuGhosh/Diabetes_Prediction_Website',
      description: 'A Decision Tree based ML web app to predict diabetes risk. Achieved 92% accuracy.'
    },
    {
      title: 'Breast Cancer Detection',
      link: 'https://github.com/LichuGhosh/Breast_Cancer_Detection',
      description: 'Used RandomForest, XGBoost & SVM to classify breast cancer with 99.12% accuracy.'
    },
    {
      title: 'EV Market Segment Analysis',
      link: 'https://github.com/LichuGhosh/EV_Market_Segment_Analysis',
      description: 'Analyzed state-wise EV adoption and charging station distribution in India.'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-dark text-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <a key={idx} href={proj.link} target="_blank" rel="noopener noreferrer" className="block bg-gray-800 p-6 rounded-lg shadow hover:shadow-cyan-500 transition">
              <h3 className="text-xl font-bold mb-2 text-cyan-300">{proj.title}</h3>
              <p>{proj.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

