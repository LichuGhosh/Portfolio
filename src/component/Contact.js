import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-dark text-white" data-aos="fade-up">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Contact Me</h2>
        <p className="text-lg mb-4">I'm open to internships, research, and collaboration opportunities.</p>
        <p className="text-lg mb-2">📧 <a href="mailto:ghoshsoumi562@gmail.com" className="text-blue-400">ghoshsoumi562@gmail.com</a></p>
        <p className="text-lg mb-2">📞 <a href="tel:+919800300908" className="text-blue-400">+91 9800300908</a></p>
        <div className="mt-6 space-x-4 text-blue-400">
          <a href="https://linkedin.com/in/soumi-ghosh-51011b256" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/LichuGhosh" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://leetcode.com/u/Soumi_Ghosh2003/" target="_blank" rel="noreferrer">LeetCode</a>
          <a href="https://www.geeksforgeeks.org/user/ghoshsorqeq/" target="_blank" rel="noreferrer">GFG</a>
        </div>
      </div>
    </section>
  );
}
