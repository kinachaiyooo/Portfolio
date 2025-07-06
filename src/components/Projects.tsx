import React from 'react';
import { ExternalLink, Github, Shield, Bug, Network, Lock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Shield,
      title: 'Network Security Scanner',
      description: 'A comprehensive network vulnerability scanner built with Python that identifies potential security weaknesses in network infrastructure.',
      technologies: ['Python', 'Nmap', 'Socket Programming', 'Threading'],
      features: [
        'Port scanning and service detection',
        'Vulnerability assessment',
        'Detailed reporting system',
        'Multi-threaded scanning for efficiency'
      ],
      github: 'https://github.com/kinachaiyoo/network-scanner',
      demo: 'https://demo.network-scanner.com',
      status: 'Completed'
    },
    {
      icon: Bug,
      title: 'Web Application Penetration Testing Suite',
      description: 'An automated web application security testing framework that identifies common vulnerabilities like SQL injection and XSS.',
      technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Requests'],
      features: [
        'Automated vulnerability scanning',
        'SQL injection detection',
        'XSS vulnerability testing',
        'Comprehensive security reports'
      ],
      github: 'https://github.com/kinachaiyoo/web-pentest-suite',
      demo: null,
      status: 'In Progress'
    },
    {
      icon: Network,
      title: 'Secure Chat Application',
      description: 'End-to-end encrypted messaging application with advanced security features including perfect forward secrecy.',
      technologies: ['Node.js', 'Socket.io', 'AES Encryption', 'React'],
      features: [
        'End-to-end encryption',
        'Perfect forward secrecy',
        'Message integrity verification',
        'User authentication system'
      ],
      github: 'https://github.com/kinachaiyoo/secure-chat',
      demo: 'https://secure-chat-demo.com',
      status: 'Completed'
    },
    {
      icon: Lock,
      title: 'Password Security Analyzer',
      description: 'A tool that analyzes password strength and provides recommendations for creating more secure passwords.',
      technologies: ['Python', 'Tkinter', 'Hashlib', 'Regex'],
      features: [
        'Password strength analysis',
        'Common password detection',
        'Security recommendations',
        'Breach database checking'
      ],
      github: 'https://github.com/kinachaiyoo/password-analyzer',
      demo: null,
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-lg text-gray-300">
            Cybersecurity projects showcasing practical application of security concepts
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <project.icon className="h-8 w-8 text-cyan-400 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-400/20 text-green-400' 
                      : 'bg-yellow-400/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;