import aboutHero from '../assets/gallery1.jpg';

const Skilldevelopment = () => {
  return (
    <div >
      <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden ">
<section className="relative mb-30">
                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-90"></div>
                <img 
                  src={aboutHero} 
                  alt="Students learning" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
                    Skill <span className="text-[var(--color-secondary)]">Development</span>
                    </h1>
                    {/* <p className="text-lg md:text-xl text-gray-200">
                   Stay updated with the latest trends, insights, and success stories from our knowledge Engineering.
                    </p> */}
                  </div>
                </div>
              </section>
     
  {/* Modern background elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-[var(--color-primary)] opacity-5 mix-blend-multiply animate-float"></div>
    <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-[var(--color-secondary)] opacity-5 mix-blend-multiply animate-float-delay"></div>
  </div>

  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
    {/* Modern header with decorative elements */}
    <div className="text-center mb-16 relative">
      <div className="inline-flex items-center justify-center mb-6">
        <span className="w-16 h-1 bg-[var(--color-secondary)] block"></span>
        <span className="px-4 text-sm font-medium text-[var(--color-secondary)] uppercase tracking-wider">Programme</span>
        <span className="w-16 h-1 bg-[var(--color-secondary)] block"></span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Skill <span className="text-[var(--color-secondary)]">Development</span>
      </h2>
      <div className="mx-auto w-24 h-1 bg-[var(--color-primary)] rounded-full"></div>
    </div>

    {/* Modern content grid */}
    <div className="grid md:grid-cols-2 gap-12">
      {/* Left column - Main content with modern cards */}
      <div className="space-y-8">
        {/* Paragraph 1 - Modern card */}
        <div 
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          data-aos="fade-right"
        >
          <div className="flex items-start mb-6">
            {/* <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div> */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strong Foundation</h3>
              <p className="text-gray-600">
                Our Skill Development Programme is designed to lay a strong and lasting foundation for students at the school level. We focus on nurturing essential life skills such as self-esteem, confidence, leadership, and problem-solving abilities, which are critical for personal and academic success.
              </p>
            </div>
          </div>
        </div>

        {/* Paragraph 2 - Gradient card */}
        <div 
          className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-8 rounded-2xl text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="flex items-start">
            {/* <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div> */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Creating Achievers</h3>
              <p className="opacity-90">
                We believe in creating achievers by nurturing innate talents—empowering children and youth through both offline and online platforms. Our approach to Knowledge Engineering emphasizes identifying, cultivating, and celebrating each learner's unique abilities. We recognize effort over mere ability, ensuring motivation stays high and potential is continuously unlocked.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right column - Content with image placeholder */}
      <div className="space-y-8">
        {/* Paragraph 3 - Card with decorative elements */}
        <div 
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          data-aos="fade-left"
        >
          {/* Decorative element */}
          <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[var(--color-secondary)] opacity-5"></div>
          
          <div className="flex items-start">
            {/* <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)] bg-opacity-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div> */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Guidance</h3>
              <p className="text-gray-600">
                By providing personalized guidance, structured support, and tailored resources, we help young minds enhance the quality of their work, stay focused on their goals, and realize measurable success. Our dedicated team of expert trainers brings specialized skills and experience, carefully crafted to identify, inspire, and elevate every student toward holistic growth.
              </p>
            </div>
          </div>
        </div>

        {/* Image placeholder - Would replace with your actual image */}
        <div 
          className="relative rounded-2xl overflow-hidden h-64 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <div className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="text-2xl font-bold mb-3">Transformative Impact</h3>
              <p className="opacity-90">
                With a combination of thoughtful mentoring and real-world application, our program delivers transformative impact—equipping the next generation to shine with confidence, creativity, and character.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats section - Modern design */}
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { number: '100%', title: 'Holistic Approach', icon: '🌱' },
        { number: '24/7', title: 'Support', icon: '🕒' },
        { number: '500+', title: 'Students Trained', icon: '👥' },
        { number: '10+', title: 'Years Experience', icon: '📅' }
      ].map((stat, index) => (
        <div 
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="text-4xl mb-3">{stat.icon}</div>
          <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">{stat.number}</div>
          <div className="text-gray-600 font-medium">{stat.title}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Animation styles */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    .animate-float { animation: float 8s ease-in-out infinite; }
    .animate-float-delay { animation: float 8s ease-in-out 2s infinite; }
  `}</style>
</section>
    </div>
  )
}

export default Skilldevelopment
