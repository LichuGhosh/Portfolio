import React from 'react';

export default function ResearchPaper() {
  return (
    <section id="research" className="py-20 px-6 bg-gradient-dark text-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Research Paper</h2>
        <p className="text-lg leading-7">
          📄 <strong>Towards Classifying Bird Sounds Using a Deep Transfer Learning Model</strong> — under publication (ICDMAI'2025).
          Developed a CNN based on VGG-16 with 97.31% accuracy, contributing to biodiversity conservation through intelligent sound classification.
        </p>
      </div>
    </section>
  );
}
