import React from 'react';
import { Shield, Code, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Cybersecurity Focus',
      description: 'Specializing in network security, ethical hacking, and threat analysis'
    },
    {
      icon: Code,
      title: 'Technical Skills',
      description: 'Proficient in Python, JavaScript, and various security tools'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach to solving complex security challenges'
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Strong academic performance at Coventry University'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a dedicated cybersecurity student at Coventry University with a passion for 
            protecting digital assets and understanding the evolving landscape of cyber threats. 
            My journey in cybersecurity began with a curiosity about how systems work and 
            how to make them more secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <highlight.icon className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {highlight.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900/50 p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">My Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            As an aspiring cybersecurity professional, I aim to contribute to creating a safer 
            digital world. I'm particularly interested in ethical hacking, penetration testing, 
            and developing innovative security solutions. My goal is to combine technical expertise 
            with strategic thinking to help organizations protect their most valuable digital assets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;