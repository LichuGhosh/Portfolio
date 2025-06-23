import React from 'react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-dark text-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">Achievements</h2>
        <ul className="space-y-4 text-lg">
          <li>
            🏆 <strong>LeetCode:</strong> Solved 500+ problems | Contest Rating: 1453  
            <a href="https://leetcode.com/u/Soumi_Ghosh2003/" className="text-blue-400 ml-2" target="_blank" rel="noreferrer">Profile</a>
          </li>
          <li>
            🧠 <strong>GeeksforGeeks:</strong> Solved 300+ problems | Streak: 380+  
            <a href="https://www.geeksforgeeks.org/user/ghoshsorqeq/" className="text-blue-400 ml-2" target="_blank" rel="noreferrer">Profile</a>
          </li>
          <li>
            🚀 <strong>Smart India Hackathon 2023:</strong> 1st place (college level) — RoBERTa-based sentiment analyzer
          </li>
          <li>
            ☁️ <strong>IBM Cloud Certificate:</strong> “Journey to Cloud” (Credly)  
            <a href="https://www.credly.com/badges/8b5dbc01-9080-4ead-9bd0-18b0e40e43b2/print" className="text-blue-400 ml-2" target="_blank" rel="noreferrer">Verify</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
