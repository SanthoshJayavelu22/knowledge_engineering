import React from 'react';
import achieversImage from '../assets/about_2.png';
import recordsImage from '../assets/certificate1.webp';
import partnersImage from '../assets/card2.jpg';

const ShowcasingAchievers = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">


   

        {/* Holistic Development */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-20" data-aos="fade-up">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Beyond Skills: <span className="text-[var(--color-secondary)]">Holistic Development</span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  We go beyond training in specific topics to encourage holistic knowledge and essential life skills:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    'Efficient time management',
                    'Shouldering responsibilities',
                    'Facing life challenges',
                    'Learning from failures',
                    'Continuous talent refinement',
                    'Building resilience'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start">
                      <span className="bg-[var(--color-secondary)] text-white rounded-full p-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center p-8">
              <div className="text-white text-center">
                <div className="text-5xl font-bold mb-2">250+</div>
                <div className="text-xl font-medium">Achievers Created</div>
              </div>
            </div>
          </div>
        </div>

    

        {/* Institutional Partners */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl overflow-hidden" data-aos="fade-up">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Our <span className="text-white">Knowledge Partners</span>
              </h3>
              <p className="mb-6 text-gray-200">
                We collaborate with leading institutions and organizations to create more achievers:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Dr MGR University',
                  'ACS Medical College',
                  'Hindustan Engineering',
                  'Sairam Engineering',
                  'Rotary Club',
                  'Lions Club'
                ].map((partner, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    <span>{partner}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-white text-[var(--color-primary)] px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition">
                Become a Partner
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src={partnersImage} 
                alt="Institutional partners" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcasingAchievers;