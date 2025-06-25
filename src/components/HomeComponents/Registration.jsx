import React from "react";

const RegistrationForm = () => {
  return (
   <div className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="lg:w-1/2" data-aos="fade-up">
            <div className="max-w-lg">
              {/* <div className="text-xs md:text-sm text-white inline-block bg-[var(--color-secondary)] px-3 py-1 rounded-full mb-4 font-medium shadow-sm">
                Knowledge Engineering
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Watch Our  <span className="text-[var(--color-secondary)]">Video</span>
              </h2>
              <p className="text-base text-gray-600 mb-6">
               A 6-year-old boy from Chennai enters the Asia Book of Records for fastest recalling the capitals, currencies and languages ​​of all countries by their flags
              </p>
              <div className="w-16 h-1 bg-[var(--color-secondary)] mb-8"></div>
              
              <div className="mt-8 flex items-start gap-4">
                <a target="_blank"
                  href="https://www.youtube.com/watch?v=Ap7clp8pgpE"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--color-secondary)" className="w-5 h-5">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </a>
                <p className="text-gray-600 flex-1">
                 He was trained by Knowledge Engineering to achieve this feat. According to Ms. Sharifa, Founder of Knowledge Engineering, individuals are evaluated and trained in various fields of interest according to their interest and desire to express their talents and make them an achiever to the world.
                </p>
              </div>
              
              <div className="mt-10 hidden lg:block">
                <div className="relative">
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[var(--color-secondary)] opacity-10"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[var(--color-secondary)] opacity-10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-2/3" data-aos="fade-up">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">Application Form</h4>
              <p className="text-gray-500 text-sm mb-6">Fill in your details to get started</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input
                      type="text"
                      placeholder="DD-MM-YYYY"
                      className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                    />
                  </div>
                </div>

                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Standard</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                    />
                  </div>
                </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Parent Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                 <input
                    type="text"
                    className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                  />
                </div></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent Contact</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                    />
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                    />
                  </div>
                </div>
                
             
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                  />
                </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City/Village</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                    />
                  </div>
             
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Referred By</label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Timing</label>
                      <input
                      type="text"
                      className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition"
                    />
                  </div>
                </div>
                
   
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[var(--color-secondary)] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    <h6>Apply Now</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
           
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;