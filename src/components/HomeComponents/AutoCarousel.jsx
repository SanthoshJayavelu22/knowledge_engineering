import { useState, useEffect, useRef } from 'react';

const AutoCarousel = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideInterval = useRef();

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, interval);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startSlideTimer();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
    startSlideTimer();
  };

  const goToNextSlide = () => {
    setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
    startSlideTimer();
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <div
      className="relative w-full h-[60vh] mt-19 md:mt-30 sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden shadow-xl"
  style={{ overflowX: 'hidden' }}
      onMouseEnter={() => {
        setIsHovered(true);
        stopSlideTimer();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        startSlideTimer();
      }}
    >
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative overflow-hidden">
           <img
  src={slide.image}
  alt={slide.title}
  className={`w-full h-full object-cover 
    md:h-auto md:object-contain 
    transition-transform duration-500 ease-in-out 
    ${isHovered && currentSlide === index ? 'scale-110' : 'scale-100'}`}
/>

            <div className="absolute inset-0 flex items-center justify-center bg-black/70">
              <div className="text-center text-white p-4">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm sm:text-base md:text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-gray-800 p-2 rounded-full shadow-md transition z-10"
      >
        <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-gray-800 p-2 rounded-full shadow-md transition z-10"
      >
        <svg className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-5' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
