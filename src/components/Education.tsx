import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Cybersecurity',
      institution: 'Coventry University',
      location: 'Coventry, UK',
      period: '2022 - Present',
      status: 'In Progress',
      description: 'Comprehensive cybersecurity program covering network security, ethical hacking, digital forensics, and risk management.',
      coursework: [
        'Network Security & Cryptography',
        'Ethical Hacking & Penetration Testing',
        'Digital Forensics',
        'Cyber Law & Ethics',
        'Risk Management & Compliance',
        'Secure Software Development'
      ],
      achievements: [
        'Dean\'s List - Academic Excellence',
        'Cybersecurity Club Vice President',
        'Participant in National Cyber Security Competition'
      ]
    }
  ];

  const certifications = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      status: 'In Progress',
      date: 'Expected 2024'
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      status: 'Planned',
      date: 'Target 2024'
    },
    {
      name: 'CISSP',
      issuer: 'ISC2',
      status: 'Long-term Goal',
      date: 'Target 2026'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-gray-300">
            Academic background and professional development journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2" />
              Academic Background
            </h3>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-400 text-sm mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      edu.status === 'In Progress' 
                        ? 'bg-blue-400/20 text-blue-400' 
                        : 'bg-green-400/20 text-green-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">
                  {edu.description}
                </p>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-cyan-400 mb-2">
                    Key Coursework:
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <div key={courseIndex} className="text-sm text-gray-400">
                        • {course}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-cyan-400 mb-2">
                    Achievements:
                  </h5>
                  <div className="space-y-1">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-sm text-gray-400">
                        <Award className="h-4 w-4 text-yellow-400 mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center">
              <BookOpen className="h-6 w-6 mr-2" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {cert.name}
                      </h4>
                      <p className="text-cyan-400 text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm mb-1">
                        {cert.date}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        cert.status === 'In Progress' 
                          ? 'bg-blue-400/20 text-blue-400' 
                          : cert.status === 'Planned'
                          ? 'bg-yellow-400/20 text-yellow-400'
                          : 'bg-purple-400/20 text-purple-400'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">
                Continuous Learning
              </h4>
              <p className="text-gray-300 text-sm">
                Committed to staying current with the latest cybersecurity trends and technologies 
                through ongoing education, industry certifications, and hands-on practice in 
                capture-the-flag competitions and security research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;