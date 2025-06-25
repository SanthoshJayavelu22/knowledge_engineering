import img1 from "../../assets/gallery1.jpg";
import img2 from "../../assets/gallery2.jpg";
import img3 from "../../assets/gallery3.jpg";
import img4 from "../../assets/gallery4.jpg";
import img5 from "../../assets/2.jpg";

const GalleryArea = () => {
  return (
   <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
  <div className="container mx-auto max-w-7xl px-4 overflow-x-hidden">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Our <span className="text-[var(--color-secondary)]">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our visual journey through these captivating moments
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Left Content - Featured Image */}
          <div className="lg:w-2/5" data-aos="fade-right">
            <div className="relative group overflow-hidden rounded-xl shadow-lg h-full">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                src={img1}
                alt="Featured gallery image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Featured Moment</h3>
                <p className="text-gray-200 mb-4 hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis nostrum, hic mollitia autem velit obcaecati ipsum beatae sequi aperiam saepe optio minus sint veniam dolor corrupti provident tempore! Id!
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all w-fit"
                >
                  Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Gallery Grid */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[img2, img3, img4, img5].map((img, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-xl shadow-md"
                  data-aos={index % 2 === 0 ? "fade-up" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  <img
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-[var(--color-secondary)]/0 group-hover:bg-[var(--color-secondary)]/20 transition-all duration-300 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="white" 
                      className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-125"
                    >
                      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Content */}
   
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryArea;