import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaAward,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaGlobeAmericas,
  FaChartLine
} from "react-icons/fa";

const stats = [
  {
    icon: <FaAward />,
    count: 100,
    suffix: "+",
    label: "Awards Won",
    description: "Recognized excellence in education and innovation"
  },
  {
    icon: <FaUserGraduate />,
    count: 1500,
    suffix: "+",
    label: "Students Records",
    description: "Transformed lives through quality education"
  },
  {
    icon: <FaChalkboardTeacher />,
    count: 500,
    suffix: "+",
    label: "Events",
    description: "Engaging workshops and learning sessions"
  },
  {
    icon: <FaGlobeAmericas />,
    count: 350,
    suffix: "+",
    label: "Activities",
    description: "Countries where our students are making an impact"
  }
];

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[var(--color-secondary)]"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              transform: `scale(${Math.random() + 0.5})`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[var(--color-secondary)]">Impact</span> in Numbers
          </h2>
          <div className="w-20 h-1 bg-[var(--color-secondary)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quantifying our commitment to excellence and student success
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 h-full 
                ${hoveredIndex === index ? 'shadow-lg transform -translate-y-2' : ''}`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon with animated border */}
                  <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-6 transition-all duration-300
                    ${hoveredIndex === index 
                      ? 'bg-white text-[var(--color-secondary)]' 
                      : 'bg-[var(--color-secondary)] bg-opacity-10 text-white'}`}
                  >
                    {React.cloneElement(stat.icon, { 
                      className: `text-3xl transition-all duration-300 ${hoveredIndex === index ? 'scale-110' : ''}` 
                    })}
                  </div>
                  
                  {/* Counter */}
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    {inView && (
                      <CountUp 
                        end={stat.count} 
                        suffix={stat.suffix} 
                        duration={2.5}
                        separator=","
                      />
                    )}
                  </h3>
                  
                  {/* Label */}
                  <p className="text-lg font-semibold text-gray-700 mb-3">
                    {stat.label}
                  </p>
                  
                  {/* Hidden description that appears on hover */}
                  <div className={`transition-all duration-300 overflow-hidden 
                    ${hoveredIndex === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-500 text-sm">
                      {stat.description}
                    </p>
                  </div>
                  
                  {/* Animated progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-4 overflow-hidden">
                    <div 
                      className="bg-[var(--color-secondary)] h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: hoveredIndex === index ? '100%' : '0%',
                        transitionDelay: hoveredIndex === index ? '0ms' : `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-[var(--color-secondary)]/50 group-hover:opacity-10 
                transition-opacity duration-300 -z-10`}
              />
            </div>
          ))}
        </div>
        
        {/* Animated progress indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2">
            {stats.map((_, index) => (
              <button
                key={index}
                onClick={() => setHoveredIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300
                  ${hoveredIndex === index 
                    ? 'bg-[var(--color-secondary)] w-6' 
                    : 'bg-gray-300'}`}
                aria-label={`View ${stats[index].label} details`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;