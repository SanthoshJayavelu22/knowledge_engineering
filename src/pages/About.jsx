import React from 'react';
import aboutHero from '../assets/gallery1.jpg';
import mentorImg from '../assets/profile.jpg';
// import soarImg from '../assets/logo.png';
import achieversImg from '../assets/1.jpg';
import partnersImage from '../assets/card2.jpg';

import achieversShowcase from '../assets/2.jpg';
import recordCertificates from '../assets/gallery1.jpg';
import trainingSession from '../assets/gallery2.jpg';
import partnerLogos from '../assets/gallery3.jpg';
import teamPhoto from '../assets/gallery4.jpg';

const AboutUs = () => {
  return (
    <div className="bg-white md:mt-30">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[var(--color-primary)] opacity-90"></div>
        <img 
          src={aboutHero} 
          alt="Students learning" 
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
              Creating <span className="text-[var(--color-secondary)]">Achievers</span> Through Knowledge Engineering
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Nurturing inherent talents to help youth reach their full potential
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2" data-aos="fade-right">
            <img 
              src={mentorImg} 
              alt="Mentor with student" 
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[var(--color-secondary)]">Mission</span>
            </h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
              We create achievers by nurturing the inherent talents of the children and the youth, both offline and online. We undertake knowledge engineering by developing the skills and talents of the young minds, by observing and identifying their talent and make sure that their efforts are praised and not their ability, keep them motivated and provide resources to cultivate their interests. It means enabling them to enhance the quality of their work and to achieve their goals and targets that equal success. 
              </p>
              <p>
             All this is possible with a tremendous impact because we have a battery of especially skilled trainers who have honed their skills to identify and polish the minds towards a holistic growth to make them sparkle.
              </p>
              <blockquote className="border-l-4 border-[var(--color-secondary)] pl-6 py-2 italic text-gray-800">
                "Every child is a fresh bloom and an integral part of the gardens of the world."
              </blockquote>
              <p>
               Parents are at the closest proximity to help their children discover and develop talent in any domain. Naturally, most parents are eager to help their children traverse a talent path but often are at crossroads how to help them, until we came up with our knowledge engineering!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Make Achievers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             How Do We Achieve to Make 
 <span className="text-[var(--color-secondary)]"> Achievers?</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--color-secondary)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-[var(--color-secondary)] text-white rounded-full flex items-center justify-center mr-3">1</span>
                Our Methodology
              </h3>
              <p className="text-gray-700">
                We offer insights and step-by-step plans to help children reach their potential. We have exclusive step by step plans for parents to
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'Maximize early experiences',
                  'Organize mentors',
                  'Expedite practice',
                  'Boost motivation',
                  'Construct centers of excellence',
                  'Administer talent development'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[var(--color-secondary)] mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-[var(--color-secondary)] text-white rounded-full flex items-center justify-center mr-3">2</span>
                The SOAR System
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">
                    Our academic talent promotion methodology:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Selection',
                      'Organization',
                      'Association',
                      'Regulation'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-xl font-bold text-[var(--color-secondary)] mr-2">»</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex-1">
                  <img src={soarImg} alt="SOAR system diagram" className="w-full" />
                </div> */}
              </div>
            </div>
          </div>

          {/* <div className="bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-up">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src={achieversImg} alt="Our achievers" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Showcasing <span className="text-[var(--color-secondary)]">Exceptional Talent</span>
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                   As we create these achievers we also showcase these exceptional talents to the world to motivate and inspire others. As we assess their subjective skills on the basis of their personal interest and exhibit their passion to the nation and the world. Going forward as they receive recognition from various quarters, they get galvanized to better their own merits to the point of excellence and even beyond. Knowledge engineering provides them with a platform to display their credentials.
                  </p>
                  <p>
                    Knowledge engineering provides a platform to display credentials. Felicitations educate society about 
                    these champions and how they've made differences in various domains.
                  </p>
                  <p>
                    We encourage holistic knowledge and life skills like time management, responsibility, and learning 
                    from failures to refine talents further.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </section>

      {/* Achievements */}
      {/* <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[var(--color-secondary)]">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--color-secondary)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating success stories that inspire generations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: '250+', label: 'Achievers Created' },
            { number: 'Guinness', label: 'Book of Records' },
            { number: 'World', label: 'Records Union' },
            { number: 'Limca', label: 'Book of Records' }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl font-bold text-[var(--color-secondary)] mb-3">{item.number}</div>
              <div className="text-gray-700 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Partnering with Leading Institutions
          </h3>
          <p className="mb-6 text-gray-200">
            We collaborate with educational institutes, government bodies, and corporations as knowledge partners. 
            Our partners include Dr MGR University, ACS Medical College, Hindustan Engineering College, Sairam 
            Engineering College, and organizations like Rotary and Lions Club.
          </p>
          <button className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition">
            Become a Partner
          </button>
        </div>
      </section> */}


        <div className="max-w-7xl mx-auto px-4">
             {/* Holistic Development */}
             {/* <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-20" data-aos="fade-up">
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
             </div> */}
     
         
     
             {/* Institutional Partners */}
             {/* <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl overflow-hidden" data-aos="fade-up">
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
             </div> */}
          </div>

       <section className="relative py-12 md:py-20 bg-white overflow-hidden">
  {/* Background elements - more subtle and modern */}
  <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[var(--color-secondary)] opacity-5 mix-blend-multiply animate-float"></div>
  <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[var(--color-primary)] opacity-5 mix-blend-multiply animate-float-delay"></div>
  
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
    {/* Hero Header - Modern card style with overlay */}
    <div className="relative mb-12 md:mb-16 rounded-2xl overflow-hidden h-72 md:h-80 shadow-xl">
      <img 
        src={achieversShowcase} 
        alt="Showcasing our achievers" 
        className="w-full h-[500px] object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/90 via-[var(--color-primary)]/70 to-transparent flex items-center px-6 md:px-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Creating and <span className="text-[var(--color-secondary)]">Showcasing Achievers</span>
          </h2>
          <div className="w-24 h-1.5 bg-[var(--color-secondary)] rounded-full"></div>
        </div>
      </div>
    </div>

    {/* Content Grid - Updated with modern card styles */}
    <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
      {/* Left Column - Modern card stack */}
      <div className="space-y-6 md:space-y-8">
        {/* Card 1 - Image + Text */}
        <div 
          className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          data-aos="fade-up"
        >
          <div className="md:flex h-full">
            <div className="md:w-2/5 h-48 md:h-auto">
              <img 
                src={trainingSession} 
                alt="Training session" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-3/5 p-6 md:p-8 flex items-center">
              <p className="text-gray-700 leading-relaxed">
                As we create these achievers we also showcase these exceptional talents to the world to motivate and inspire others. As we assess their subjective skills on the basis of their personal interest and exhibit their passion to the nation and the world. Going forward as they receive recognition from various quarters, they get galvanized to better their own merits to the point of excellence and even beyond. Knowledge engineering provides them with a platform to display their credentials.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - Gradient */}
        <div 
          className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-6 md:p-8 rounded-2xl text-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="mb-0 text-lg leading-relaxed">
            Felicitations help in educating the society about these champions of causes and their work, how they have made a difference in different domains.
          </p>
        </div>

        {/* Card 3 - Clean */}
        <div 
          className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-gray-700 leading-relaxed">
            We not only train them on specific topics but encourage them to acquire holistic knowledge on that specific subject and the life skills like efficient time management, shouldering more responsibilities and able to face challenges in all walks of life and learn from their failures to fine tune their talents a little more.
          </p>
        </div>
      </div>

      {/* Right Column - Modern stats and cards */}
      <div className="space-y-6 md:space-y-8">
        {/* Stats Card - Modern overlay */}
        <div 
          className="relative overflow-hidden rounded-2xl h-60 shadow-lg"
          data-aos="fade-left"
        >
          <img 
            src={recordCertificates} 
            alt="Record certificates" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6 text-white">
            <div className="text-5xl md:text-6xl font-bold mb-1 animate-count">250+</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Achievers Created</h3>
            <p className="text-sm md:text-base opacity-90">
              Recognized by Guinness, World Records Union, Limca Book, and Asia/India Book of Records
            </p>
          </div>
        </div>

        {/* Records Card - Modern list */}
        <div 
          className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-50"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-5 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-secondary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Recognized By:
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Guinness', logo: '1' },
              { name: 'World Records Union', logo: '2' },
              { name: 'Limca Book', logo: '3' },
              { name: 'India Book', logo: '4' }
            ].map((record, index) => (
              <div 
                key={index} 
                className="flex items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-xl transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-[var(--color-secondary)] bg-opacity-10 text-white font-bold rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  {record.logo}
                </div>
                <span className="text-gray-700 font-medium text-sm md:text-base">{record.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Card - Modern layout */}
        <div 
          className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-50"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-5">Our Knowledge Partners</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-5 leading-relaxed">
                Knowledge engineering also indulges to support several educational institutes, Government, Movies, Celebrities and corporate to act as their record/knowledge partner.
              </p>
             
            </div>
            <div className="md:w-1/2 flex items-center">
             <ul className="space-y-3">
                {['Dr MGR University', 'ACS Medical College', 'Hindustan Engineering', 'Sairam Engineering'].map((partner, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-3"></div>
                    <span className="text-gray-700">{partner}</span>
                  </li>
                ))}
              </ul>
              {/* <img 
                src={partnerLogos} 
                alt="Partner logos" 
                className="w-full h-auto rounded-lg object-cover shadow-sm"
                loading="lazy"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Team Card - Modern flip effect */}
    <div 
      className="mt-12 md:mt-16 bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
      data-aos="fade-up"
    >
      <div className="md:flex h-full">
        <div className="md:w-2/5 h-64 md:h-auto">
          <img 
            src={teamPhoto} 
            alt="Our dedicated team" 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="md:w-3/5 p-6 md:p-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white flex items-center">
          <p className="text-lg md:text-xl leading-relaxed">
            The remarkable world of the victorious from various domains of life is the outcome of the dedicated and wonderful team of trainers who step up their efforts to achieve the impossible. Their mentor ship and 24/7 guidance aids the process.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Add these to your global CSS for animations */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-float-delay { animation: float 6s ease-in-out 1s infinite; }
    .animate-count { 
      transition: font-size 0.3s ease;
    }
    @media (min-width: 768px) {
      .animate-count:hover { font-size: 4.5rem; }
    }
  `}</style>
</section>
    </div>
  );
};

export default AboutUs;