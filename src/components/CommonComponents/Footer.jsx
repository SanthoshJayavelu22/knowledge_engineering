import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span className="text-[var(--color-secondary)]">Knowledge</span> Engineering
            </h3>
            <p className="text-gray-300 leading-relaxed">
           We create achievers by nurturing the inherent talents of the children and the youth, both offline and online.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors duration-200">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors duration-200">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors duration-200">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[var(--color-secondary)] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Programs', 'Events', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors duration-200 flex items-center"
                  >
                    
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-[var(--color-secondary)] inline-block">
              Our Programs
            </h3>
            <ul className="space-y-3">
              {['Youth Mentorship', 'Career Guidance', 'Skill Development', 'Leadership Training', 'Workshops', 'Scholarships'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[var(--color-secondary)] transition-colors duration-200 flex items-center"
                  >
                   
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold pb-2 border-b border-[var(--color-secondary)] inline-block">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-[var(--color-secondary)] mb-2">Registered Office</h4>
                <address className="text-gray-300 not-italic flex items-start">
                  <FaMapMarkerAlt className="flex-shrink-0 mt-1 mr-3 text-[var(--color-secondary)]" />
                  <p>No.21/10, No.S2, Second Floor, Pearl Reside Apartments, Khan Street, Choolaimedu, Chennai - 600 094</p>
                </address>
              </div>
              
              <div>
                <h4 className="font-medium text-[var(--color-secondary)] mb-2">Corporate Office</h4>
                <address className="text-gray-300 not-italic">
                  <p className="flex items-start mb-2">
                    <FaMapMarkerAlt className="flex-shrink-0 mt-1 mr-3 text-[var(--color-secondary)]" />
                    Suite No.512, 5th Floor, The Executive Zone, Sakthi Towers-1, No.766, Anna Salai, Chennai - 600 002
                  </p>
                  <p className="flex items-center">
                    <FaEnvelope className="flex-shrink-0 mr-3 text-[var(--color-secondary)]" />
                    ke.knowledge@gmail.com
                  </p>
                  <p className="flex items-center mt-2">
                    <FaPhone className="flex-shrink-0 mr-3 text-[var(--color-secondary)]" />
                    +91 82488 73830,<br/> +91 95662 05036
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Knowledge Engineering. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors text-sm">
                Terms of Service
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;