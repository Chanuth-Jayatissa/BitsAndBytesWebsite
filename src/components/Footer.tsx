import React from 'react';
import { Code2, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-teal-500 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary-400 to-teal-400 bg-clip-text text-transparent">
                Bits & Bytes
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering middle school girls through coding, creativity, and community. 
              Building the next generation of women in technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  About the Camp
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Meet the Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* University Information */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-teal-400">Eastern Michigan University</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.emich.edu/computerscience/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center"
                >
                  Computer Science Department
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.emich.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center"
                >
                  EMU Main Website
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
              <li>
                <span className="text-gray-300">Ypsilanti, Michigan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Eastern Michigan University Computer Science Department. All rights reserved.
            </div>

            {/* Made with Love */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-pink-500 mx-1" />
              <span>for future female tech leaders</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;