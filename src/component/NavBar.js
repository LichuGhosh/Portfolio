// import React, { useState, useEffect } from 'react';

// export default function NavBar() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//   }, [darkMode]);

//   const scrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md px-8 py-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Soumi Ghosh</h1>
//       <div className="flex gap-5 items-center">
//         {['home', 'about', 'skills', 'experience', 'projects', 'research', 'achievements', 'contact'].map((id) => (
//           <button key={id} onClick={() => scrollTo(id)} className="text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">
//             {id.charAt(0).toUpperCase() + id.slice(1)}
//           </button>
//         ))}
//         <a href="/Soumi Ghosh_CV(1).pdf" download className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-3 py-1 rounded">
//           Resume
//         </a>
//         <button onClick={() => setDarkMode(!darkMode)} className="border px-2 py-1 rounded text-sm text-gray-700 dark:text-white">
//           {darkMode ? '☀️ Light' : '🌙 Dark'}
//         </button>
//       </div>
//     </nav>
//   );
// }

import React from 'react';

export default function NavBar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-dark text-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-cyan-400">Soumi Ghosh</h1>
      <div className="flex gap-5 items-center">
        {['home', 'about', 'Skills', 'experience', 'projects', 'research', 'achievements', 'contact'].map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-sm hover:text-cyan-400 transition"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}
