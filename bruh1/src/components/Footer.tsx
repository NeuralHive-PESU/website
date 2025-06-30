import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-card/20 to-transparent"></div>
      <div className="absolute inset-0 texture-overlay"></div>
      
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-accent/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Enhanced Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary-accent/20 to-primary-magenta/20 border border-primary-accent/30">
                <Brain className="h-8 w-8 text-primary-accent" />
              </div>
              <span className="text-2xl font-poppins font-bold gradient-text">
                Neural Hive
              </span>
            </div>
            <p className="text-primary-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              The AI & Machine Learning club of PES University, Electronic City Campus. 
              Democratizing AI literacy through project-driven learning and innovation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:neuralhive.ecc@pes.edu" 
                className="p-3 text-primary-gray-400 hover:text-primary-accent transition-all duration-300 rounded-lg hover:bg-primary-accent/10 group"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com/neuralhive" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 text-primary-gray-400 hover:text-primary-accent transition-all duration-300 rounded-lg hover:bg-primary-accent/10 group"
              >
                <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/company/neural-hive-pesu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 text-primary-gray-400 hover:text-primary-accent transition-all duration-300 rounded-lg hover:bg-primary-accent/10 group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://github.com/NeuralHive-PESU" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 text-primary-gray-400 hover:text-primary-accent transition-all duration-300 rounded-lg hover:bg-primary-accent/10 group"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-semibold gradient-text mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Team', 'Legacy', 'Projects', 'Events'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-primary-gray-400 hover:text-primary-accent transition-all duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-primary-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Resources */}
          <div>
            <h3 className="text-xl font-poppins font-semibold gradient-text mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/blog" 
                  className="text-primary-gray-400 hover:text-primary-accent transition-all duration-300 flex items-center group"
                >
                  <div className="w-1 h-1 bg-primary-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="text-primary-gray-400 hover:text-primary-accent transition-all duration-300 flex items-center group"
                >
                  <div className="w-1 h-1 bg-primary-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/join" 
                  className="text-primary-gray-400 hover:text-primary-accent transition-all duration-300 flex items-center group"
                >
                  <div className="w-1 h-1 bg-primary-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Join Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-gray-400 hover:text-primary-accent transition-all duration-300 flex items-center group"
                >
                  <div className="w-1 h-1 bg-primary-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-primary-accent/20 mt-16 pt-8 text-center">
          <div className="holographic-card p-6 inline-block">
            <p className="text-primary-gray-400 font-inter">
              © 2025 Neural Hive Club, PES University EC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;