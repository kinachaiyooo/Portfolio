import React from 'react';
import { Shield, Code, Database, Network, Lock, Search } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'Security Fundamentals',
      skills: [
        { name: 'Network Security', level: 85 },
        { name: 'Cryptography', level: 80 },
        { name: 'Risk Assessment', level: 75 },
        { name: 'Incident Response', level: 70 }
      ]
    },
    {
      icon: Code,
      title: 'Programming',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Bash/Shell', level: 80 },
        { name: 'PowerShell', level: 75 }
      ]
    },
    {
      icon: Network,
      title: 'Networking',
      skills: [
        { name: 'TCP/IP', level: 85 },
        { name: 'Wireshark', level: 80 },
        { name: 'Firewalls', level: 75 },
        { name: 'VPN Configuration', level: 70 }
      ]
    },
    {
      icon: Search,
      title: 'Penetration Testing',
      skills: [
        { name: 'Kali Linux', level: 85 },
        { name: 'Metasploit', level: 80 },
        { name: 'Nmap', level: 85 },
        { name: 'Burp Suite', level: 75 }
      ]
    },
    {
      icon: Database,
      title: 'Databases & Systems',
      skills: [
        { name: 'SQL Injection Testing', level: 80 },
        { name: 'Linux Administration', level: 85 },
        { name: 'Windows Security', level: 75 },
        { name: 'Cloud Security', level: 70 }
      ]
    },
    {
      icon: Lock,
      title: 'Security Tools',
      skills: [
        { name: 'Nessus', level: 75 },
        { name: 'OpenVAS', level: 70 },
        { name: 'John the Ripper', level: 80 },
        { name: 'Hashcat', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300">
            A comprehensive overview of my cybersecurity and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-8 w-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;