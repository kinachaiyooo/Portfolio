import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Aalok Thakur
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            aka <span className="text-cyan-400 font-semibold">kinachaiyoo</span>
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Cybersecurity Student at Coventry University passionate about digital security, 
            ethical hacking, and protecting digital infrastructure
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/kinachaiyoo"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
            >
              <Github className="h-6 w-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/aalokthakur"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
            >
              <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="mailto:aalok.thakur@example.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group"
            >
              <Mail className="h-6 w-6 text-gray-300 group-hover:text-white" />
            </a>
          </div>

          <button
            onClick={scrollToNext}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
          >
            Explore My Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;