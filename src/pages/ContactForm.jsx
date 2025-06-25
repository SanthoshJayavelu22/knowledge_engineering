import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import contactImage from '../assets/contact.avif';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-white mt-20 md:mt-30">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img 
          src={contactImage} 
          alt="Contact us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/80 to-transparent flex items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Get In <span className="text-[var(--color-secondary)]">Touch</span>
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact <span className="text-[var(--color-secondary)]">Information</span>
              </h2>
              <div className="w-20 h-1 bg-[var(--color-secondary)] mb-8"></div>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-[var(--color-secondary)] text-white p-3 rounded-full mr-4">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 82488 73830</p>
                  <p className="text-gray-600">+91 95662 05036</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-[var(--color-secondary)] text-white p-3 rounded-full mr-4">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">ke.knowledge@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="bg-[var(--color-secondary)] text-white p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Corporate Office</h3>
                  <p className="text-gray-600">
                    Suite No.512, 5th Floor, The Executive Zone,<br />
                    Sakthi Towers-1, No.766, Anna Salai,<br />
                    Chennai - 600 002
                  </p>
                </div>
              </div>

              {/* Registered Office */}
              <div className="flex items-start">
                <div className="bg-[var(--color-secondary)] text-white p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Registered Office</h3>
                  <p className="text-gray-600">
                    No.21/10, No.S2, Second Floor,<br />
                    Pearl Reside Apartments, Khan Street,<br />
                    Choolaimedu, Chennai - 600 094
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a <span className="text-[var(--color-secondary)]">Message</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[var(--color-secondary)] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0088888888886!2d80.24000000000001!3d13.060000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzM2LjAiTiA4MMKwMTQnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Corporate Office Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;