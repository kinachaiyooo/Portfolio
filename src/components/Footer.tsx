import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">Aalok Thakur</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end space-x-1">
              <span>© {currentYear} Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>by Aalok Thakur</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Cybersecurity Student | Coventry University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;