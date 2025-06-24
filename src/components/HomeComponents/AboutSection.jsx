import React from 'react';
import cer1 from '../../assets/certificate1.webp';
import cer2 from '../../assets/certificate2.png';
import cer3 from '../../assets/certificate3.png';
import cer4 from '../../assets/certificate4.png';

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Certificates Grid */}
     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  gap-6 md:gap-8 mb-12 md:mb-20">
  {[cer1, cer2, cer3, cer4].map((src, idx) => (
    <div
      key={idx}
      className="w-full transform transition-all hover:scale-105 hover:shadow-lg"
      data-aos={
        idx === 0 ? 'fade-right' :
        idx === 1 ? 'fade-up' :
        idx === 2 ? 'fade-down' : 'fade-left'
      }
    >
      <img 
        src={src} 
        alt={`Certificate ${idx + 1}`} 
        className="w-full h-auto rounded-xl"
      />
    </div>
  ))}
</div>


        {/* About Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Title Section */}
          <div className="lg:w-2/5" data-aos="fade-right">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6 ">
                About <br className="hidden md:block"/> 
                <span className="text-[var(--color-secondary)]">Knowledge</span> Engineering
              </h2>
              <div className="h-2 w-36 bg-[var(--color-secondary)] rounded-full mb-8 shadow-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[var(--color-secondary)] opacity-10 -z-10 "></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5" data-aos="fade-left">
            <div className="relative">
           
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                 {/* <span className="float-left mr-5 text-white text-6xl font-bold bg-[var(--color-secondary)] w-36 h-16 flex items-center justify-center rounded-lg shadow-xl">
              
              </span> */}
              
               Our focus is on partnering with you to deliver exceptional yet cost-effective solutions to showcase your talents to the world and establish you as an achiever to have a lasting impact on your surroundings.
              </p>
         <div className="mt-8 flex flex-wrap gap-4">
  <a 
    href="/mission" 
    className="px-4 py-2 bg-[var(--color-secondary)] bg-opacity-10 text-white rounded-full text-md font-bold shadow-xl transition hover:bg-opacity-20"
  >
    Mission & Vision
  </a>
  <a 
    href="/founder-message" 
    className="px-4 py-2 bg-[var(--color-secondary)] bg-opacity-10 text-white rounded-full text-md font-bold shadow-xl transition hover:bg-opacity-20"
  >
    Founder Message
  </a>
  <a 
    href="/brand-ambassador" 
    className="px-4 py-2 bg-[var(--color-secondary)] bg-opacity-10 text-white rounded-full text-md font-bold shadow-xl transition hover:bg-opacity-20"
  >
    Brand Ambassador
  </a>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;