import { FaMedal, FaUsers, FaBullhorn, FaCalendarAlt, FaBus, FaUserTie } from 'react-icons/fa';

// Online Image URLs (replace these with better ones if needed)
const serviceHero = 'https://images.unsplash.com/photo-1557804506-669a67965ba0'; // Training/education-themed
const activity1 = 'https://plus.unsplash.com/premium_photo-1705267936187-aceda1a6c1a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Training/records
const activity2 = 'https://images.unsplash.com/photo-1675716921224-e087a0cca69a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Social event
const activity3 = 'https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Branding
const activity4 = 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620'; // Mass events
const activity5 = 'https://images.unsplash.com/photo-1573164713988-8665fc963095'; // Road show
const activity6 = 'https://plus.unsplash.com/premium_photo-1728313181613-8b4f3f3803ca?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Self promotion

const ServicesPage = () => {
  const activities = [
    {
      icon: <FaMedal className="text-3xl text-[var(--color-secondary)]" />,
      title: "Record-Breaking Training",
      description: "We offer specialized training to budding achievers, guiding them to create records like Asia Book of Records, Guinness Book of Records, India Book of Records, and World Records Union. Our experts will support and mentor them in their journey towards achieving remarkable milestones.",
      image: activity1
    },
    {
      icon: <FaUsers className="text-3xl text-[var(--color-secondary)]" />,
      title: "Social Events Organization",
      description: "Knowledge Engineering excels in organizing social events that leave a lasting impact. Whether it's for a cause, community, or celebration, we ensure seamless execution and a memorable experience for all participants.",
      image: activity2
    },
    {
      icon: <FaBullhorn className="text-3xl text-[var(--color-secondary)]" />,
      title: "Brand Building",
      description: "With our expertise, we help businesses build a strong and recognizable brand identity. Our strategies and campaigns are tailored to suit your unique needs, enhancing your brand's presence in the market.",
      image: activity3
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-[var(--color-secondary)]" />,
      title: "Mass Event Planning",
      description: "From conceptualization to execution, we specialize in organizing and conducting mass events. Whether it's a conference, exhibition, or festival, we ensure every detail is meticulously taken care of to create a successful and impactful event.",
      image: activity4
    },
    {
      icon: <FaBus className="text-3xl text-[var(--color-secondary)]" />,
      title: "Road Shows",
      description: "Knowledge Engineering's road shows are designed to engage and captivate audiences, taking your message directly to the target market. Our road show planning and execution guarantee maximum reach and impact.",
      image: activity5
    },
    {
      icon: <FaUserTie className="text-3xl text-[var(--color-secondary)]" />,
      title: "Consultation for Self-Promotion",
      description: "Provide guidance and assistance for effectively promoting an individual's inborn talents, achieving through a self-promotion consultation. The focus is on crafting the individual's expertise, success stories, and testimonials of the Individual.",
      image: activity6
    }
  ];

  return (
    <div className="bg-gray-50 md:mt-30">

             <section className="relative">
                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-90"></div>
                <img 
                  src={serviceHero} 
                  alt="Students learning" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
                     Empowering Through <span className="text-[var(--color-secondary)]">Knowledge</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                    Comprehensive programs to develop skills and  success
                    </p>
                  </div>
                </div>
              </section>
    

      {/* Core Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skill Development Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2">
            <div className="bg-[var(--color-secondary)] p-6 text-white">
              <h2 className="text-2xl font-bold">SKILL DEVELOPMENT</h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg">
                Our skill development programme helps to build a strong foundation for students at the school level. It helps to build self-esteem, confidence, and leadership skills & problem-solving skills.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {['Self-Esteem', 'Confidence', 'Leadership', 'Problem-Solving'].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Knowledge Engineering Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2">
            <div className="bg-[var(--color-primary)] p-6 text-white">
              <h2 className="text-2xl font-bold">KNOWLEDGE ENGINEERING</h2>
            </div>
            <div className="p-8">
              <p className="text-gray-700 text-lg">
                Experience in the field of knowledge and expertise. We take pride in our vast knowledge and are dedicated to providing top-notch services to our clients.
              </p>
              <div className="mt-6 bg-gray-100 p-4 rounded-lg border-l-4 border-[var(--color-secondary)]">
                <p className="text-gray-700 italic">
                  "Fostering growth and excellence in every venture we undertake"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-[var(--color-secondary)]">Main Activities</span>
            </h2>
            <div className="w-20 h-1 bg-[var(--color-secondary)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg h-96"
              >
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <div className="mb-4">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-300">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-primary)] mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Potential into Achievement?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
           At Knowledge Engineering, we are passionate about knowledge and believe in fostering growth and excellence in every venture we undertake. Join us on this journey of discovery and success. Contact us today to explore how we can work together to achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
              Contact Us Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[var(--color-primary)] transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;