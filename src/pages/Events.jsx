import { useState } from 'react';
import { FiSearch, FiX, FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';

// Import event images from src/assets
import event1 from "../assets/gallery1.jpg";;
import event2 from "../assets/gallery2.jpg";;
import event3 from "../assets/gallery3.jpg";;
import event4 from "../assets/gallery4.jpg";;

import eventHero from '../assets/3.jpg';

const eventsData = [
  { 
    id: 1, 
    src: event1, 
    title: "Annual Knowledge Summit 2023",
    date: "2023-11-15",
    time: "09:00 AM - 05:00 PM",
    location: "Chennai Convention Center",
    description: "Our flagship event bringing together industry leaders and young achievers for a day of inspiration and learning.",
    category: 'conference'
  },
  { 
    id: 2, 
    src: event2, 
    title: "Record-Breakers Workshop",
    date: "2023-12-05",
    time: "10:00 AM - 04:00 PM",
    location: "Knowledge Engineering HQ",
    description: "Specialized training for aspiring record holders with our expert coaches.",
    category: 'workshop'
  },
  { 
    id: 3, 
    src: event3, 
    title: "Youth Achievers Awards",
    date: "2024-01-20",
    time: "06:00 PM - 09:00 PM",
    location: "Taj Coromandel, Chennai",
    description: "Celebrating the extraordinary accomplishments of young talents across India.",
    category: 'awards'
  },
  { 
    id: 4, 
    src: event4, 
    title: "Parent-Talent Conclave",
    date: "2024-02-10",
    time: "02:00 PM - 06:00 PM",
    location: "The Leela Palace",
    description: "Helping parents nurture their children's unique talents with expert guidance.",
    category: 'seminar'
  },
  
];

const eventCategories = [
  { id: 'all', name: 'All Events' },
  { id: 'conference', name: 'Conferences' },
  { id: 'workshop', name: 'Workshops' },
  { id: 'awards', name: 'Award Ceremonies' },
  { id: 'seminar', name: 'Seminars' },
  { id: 'competition', name: 'Competitions' },
];

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  // Sort events by date (upcoming first)
  const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="min-h-screen bg-gray-50 mt-20 md:mt-30">
      {/* Events Hero Banner */}
      <section className="relative mb-20">
        <div className="absolute inset-0 bg-[var(--color-primary)] opacity-90"></div>
        <img 
          src={eventHero}
          alt="Event participants" 
          className="w-full h-[400px] md:h-[500px] object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-[var(--color-secondary)]">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Join us for inspiring gatherings, workshops, and celebrations of achievement
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto mb-12 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FiX className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>

          {/* Event Category Filter */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {eventCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[var(--color-secondary)] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto mb-20 px-4 sm:px-6">
        {sortedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.src}
                    alt={event.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{event.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-gray-600 mb-3">
                    <FiCalendar className="text-[var(--color-secondary)]" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 mb-3">
                    <FiClock className="text-[var(--color-secondary)]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 mb-4">
                    <FiMapPin className="text-[var(--color-secondary)]" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
                  <button
                    onClick={() => openEventDetails(event)}
                    className="w-full bg-[var(--color-secondary)] hover:bg-opacity-90 text-white py-2 rounded-lg font-medium transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found matching your search</p>
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedEvent.src}
                alt={selectedEvent.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={closeEventDetails}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2"
              >
                <FiX />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {selectedEvent.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <FiCalendar className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">
                      {new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiClock className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{selectedEvent.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-[var(--color-secondary)] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{selectedEvent.location}</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Event</h3>
                <p className="text-gray-700">{selectedEvent.description}</p>
              </div>
              <button className="w-full md:w-auto bg-[var(--color-secondary)] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;