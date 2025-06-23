import React from 'react';

export default function Skill() {
  const skills = [
    'Python', 'C++', 'Java', 'SQL',
    'Machine Learning', 'Deep Learning', 'React',
    'Node.js', 'Big Data', 'DBMS',
    'AWS', 'MongoDB', 'Data Mining'
  ];

  return (
    <section id="Skills" className="py-20 px-6 bg-gradient-dark text-white">

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white py-3 rounded font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


