import ambassadorPortrait from '../assets/card2.jpg';
import recordCeremony from '../assets/sahana1.png';
import logoChallenge from '../assets/2.jpg';
import guinnessLogo from '../assets/3.jpg';
import indiaRecordLogo from '../assets/4.jpg';

const BrandAmbassador = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-20 md:mt-30">

       <section className="relative">
              <div className="absolute inset-0 bg-[var(--color-primary)] opacity-90"></div>
              <img 
                src={ambassadorPortrait} 
                alt="Students learning" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
                        Ms. SAHANA  <span className="text-[var(--color-secondary)]">BANU</span> 
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200">
                      A CHILD PRODIGY WITH A DIFFERENCE
                  </p>
                </div>
              </div>
            </section>
            
      {/* Hero Banner */}
      {/* <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src={ambassadorPortrait} 
          alt="Ms. Sahana Banu" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Ms. SAHANA BANU
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-secondary)]">
                A CHILD PRODIGY WITH A DIFFERENCE
              </h2>
            </div>
          </div>
        </div>
      </div> */}

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 order-2 md:mt-20">
            <p className="text-lg text-gray-700 mb-6">
              Ms. SAHANA BANU was born with innate capabilities. She has displayed exceptional skills and adult abilities at a very early age. Her extraordinary talent to retain information, unusual for her age can leave any body spellbound. Her knowledge level is much advanced compared to her peers and her giftedness was identified by her parents, at a very tender age. Right nurturing also played a significant role in bringing out her inherent talents.
            </p>
            <p className="text-lg text-gray-700">
              Ms. SAHANA BANU has made her parents extremely proud by starting her journey of achievement from the early age of three. Her exceptional cognitive skills are far more accelerated compared to normal children of the same age. Parents gave her a supportive environment to nurture her intrinsic capabilities.
            </p>
          </div>
          <div className="md:col-span-2 order-1 ">
            <div className="bg-white p-1 rounded-xl shadow-lg">
              <img 
                src={recordCeremony} 
                alt="Record ceremony" 
                className="w-full h-[450px] rounded-lg"
              />
              <div className="p-4 text-center">
                {/* <div className="flex justify-center space-x-6 mb-3">
                  <img src={guinnessLogo} alt="Guinness World Record" className="h-12" />
                  <img src={indiaRecordLogo} alt="India Book of Records" className="h-12" />
                </div> */}
                <h3 className="text-xl font-bold text-gray-900">
                  GUINNESS WORLD RECORD & INDIA BOOK OF RECORD HOLDER
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Records Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Record-Breaking <span className="text-[var(--color-secondary)]">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Presently she has coveted the Guinness World Record Holder, four times and at an age as young as 5 years she has completed a stupendous hat trick of the Guinness World Record Holder and the India Book of Record Holder- a mastery of talent, rarely perceived!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Record 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={logoChallenge} 
                  alt="Vehicle logos challenge" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[var(--color-secondary)] text-white px-3 py-1 rounded text-sm font-bold">
                  1 MINUTE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  VEHICLE LOGOS CHALLENGE
                </h3>
                <p className="text-gray-700">
                  The most vehicle logos identified in one minute is 62
                </p>
              </div>
            </div>

            {/* Record 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={logoChallenge} 
                  alt="Corporate logos challenge" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[var(--color-secondary)] text-white px-3 py-1 rounded text-sm font-bold">
                  1 MINUTE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  COMPANY LOGOS CHALLENGE
                </h3>
                <p className="text-gray-700">
                  The most companies identified in one minute is 64
                </p>
              </div>
            </div>

            {/* Record 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={logoChallenge} 
                  alt="30 second challenge" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[var(--color-secondary)] text-white px-3 py-1 rounded text-sm font-bold">
                  30 SECONDS
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  COMPANY LOGOS CHALLENGE
                </h3>
                <p className="text-gray-700">
                  The most companies identified in 30 seconds is 31
                </p>
                <span className="inline-block mt-2 text-sm font-medium text-[var(--color-secondary)]">
                  (Achieved a hat trick, previously unheard of)
                </span>
              </div>
            </div>
          </div>

          {/* Achievement Badge */}
          <div className="mt-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl p-8 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <div className="text-5xl font-bold mb-2">4x</div>
              <h3 className="text-2xl font-bold mb-4">Guinness World Records</h3>
              <p className="text-lg">
                At just 5 years old, Ms. Sahana Banu has achieved what few can accomplish in a lifetime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Remarkable <span className="text-[var(--color-secondary)]">Milestones</span>
        </h2>
        
        <div className="space-y-8">
          {/* Milestone 1 */}
          <div className="flex items-start">
            <div className="bg-[var(--color-secondary)] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
              <span className="text-xl font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Early Signs of Genius</h3>
              <p className="text-gray-700">
                Displayed exceptional cognitive abilities and began her achievement journey at age 3
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="flex items-start">
            <div className="bg-[var(--color-secondary)] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
              <span className="text-xl font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Record-Breaking Year</h3>
              <p className="text-gray-700">
                Achieved hat trick of Guinness World Records and India Book of Records at age 5
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="flex items-start">
            <div className="bg-[var(--color-secondary)] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
              <span className="text-xl font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Total Guinness Records</h3>
              <p className="text-gray-700">
                Holds four Guinness World Records in logo identification challenges
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandAmbassador;