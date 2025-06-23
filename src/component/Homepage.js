import React from 'react';
import { ReactTyped } from 'react-typed';
import Particles from 'react-tsparticles';

export default function Homepage() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-black text-white overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        options={{
          background: { color: "#000" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#00ffff" },
            links: {
              color: "#00ffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: true },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Main Content */}
      <div className="z-10 text-center max-w-2xl">
        <img
          src="/soumi.jpg"
          alt="Soumi Ghosh"
          className="w-36 h-36 mx-auto rounded-full border-4 border-cyan-400 shadow-lg mb-6 object-cover"
        />

        <h1 className="text-4xl md:text-5xl font-bold">
          Hello! It's Me <span className="text-cyan-400">Soumi Ghosh</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mt-3 text-cyan-300">
          And I'm a{" "}
          <ReactTyped
            strings={[
              "Data Science Enthusiast",
              "ML & AI Developer",
              "Full-Stack Developer",
              "Researcher",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          I am a passionate developer. I build ML-powered tools, full-stack apps, and conduct AI research — completed B.Tech from Techno Main Salt Lake.
        </p>

        <div className="mt-6 text-lg">
          <p className="text-gray-300 font-medium">Email :</p>
          <p className="text-cyan-300 italic">ghoshsoumi562@gmail.com</p>
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="/Soumi Ghosh_CV(1).pdf"
            download
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-cyan-500 transition-all duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-2 rounded-lg shadow-lg hover:shadow-cyan-400 font-semibold transition-all duration-300"
          >
            Let's Talk :)
          </a>
        </div>
      </div>
    </section>
  );
}
