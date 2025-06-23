// import React, { useEffect } from 'react';
// import './index.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import NavBar from './component/NavBar';
// import Homepage from './component/Homepage';
// import About from './component/About';
// import Skill from './component/Skill';
// import Experience from './component/Experience';
// import Project from './component/Project';
// import Research_Paper from './component/Research_Paper';
// import Achievements from './component/Achievements';
// import Contact from './component/Contact';

// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="dark:bg-gray-900 dark:text-white">
//       <NavBar />
//       <Homepage />
//       <About />
//       <Skill />
//       <Experience />
//       <Project />
//       <Research_Paper />
//       <Achievements />
//       <Contact />
//     </div>
//   );
// }

// export default App;



import React, { useEffect } from 'react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavBar from './component/NavBar';
import Homepage from './component/Homepage';
import About from './component/About';
import Skill from './component/Skill';
import Experience from './component/Experience';
import Project from './component/Project';
import ResearchPaper from './component/ResearchPaper';
import Achievements from './component/Achievements';
import Contact from './component/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-white">
      <NavBar />
      <Homepage />
      <About />
      <Skill />
      <Experience />
      <Project />
      <ResearchPaper />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;


