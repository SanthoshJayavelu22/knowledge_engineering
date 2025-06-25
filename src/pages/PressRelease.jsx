import { useState } from 'react';
import { FiSearch, FiX, FiCalendar, FiDownload } from 'react-icons/fi';

// Import press release images/documents
import pressHero from '../assets/2.jpg';
import press1 from '../assets/gallery1.jpg';
import press2 from '../assets/gallery2.jpg';
import press3 from '../assets/gallery3.jpg';
import press4 from '../assets/gallery4.jpg';

const pressReleases = [
  { 
    id: 1, 
    image: press1,
    title: "Knowledge Engineering Launches National Talent Program",
    date: "2023-11-15",
    summary: "New initiative to identify and nurture exceptional young talents across India with record-breaking potential.",
    category: 'announcement',
    pdf: '/press-releases/program-launch.pdf'
  },
  { 
    id: 2, 
    image: press2,
    title: "Young Achiever Sets New Guinness World Record",
    date: "2023-10-28",
    summary: "5-year-old prodigy trained by Knowledge Engineering breaks record in logo identification challenge.",
    category: 'achievement',
    pdf: '/press-releases/guinness-record.pdf'
  },
  { 
    id: 3, 
    image: press3,
    title: "Partnership with National Education Foundation",
    date: "2023-09-10",
    summary: "Collaboration announced to integrate talent development programs in schools nationwide.",
    category: 'partnership',
    pdf: '/press-releases/partnership-announcement.pdf'
  },
  { 
    id: 4, 
    image: press4,
    title: "Annual Knowledge Summit 2023 Results",
    date: "2023-08-22",
    summary: "Over 500 young talents participated in the national competition with 12 new records established.",
    category: 'event',
    pdf: '/press-releases/summit-results.pdf'
  },
];

const categories = [
  { id: 'all', name: 'All Releases' },
  { id: 'announcement', name: 'Announcements' },
  { id: 'achievement', name: 'Achievements' },
  { id: 'partnership', name: 'Partnerships' },
  { id: 'event', name: 'Event Coverage' },
];

const PressReleasePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRelease, setSelectedRelease] = useState(null);

  const filteredReleases = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         release.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || release.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openDetails = (release) => {
    setSelectedRelease(release);
  };

  const closeDetails = () => {
    setSelectedRelease(null);
  };

  // Sort by date (newest first)
  const sortedReleases = [...filteredReleases].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-gray-50 mt-20 md:mt-30">
      {/* Press Release Hero */}
      <section className="relative mb-20">
        <div className="absolute inset-0 bg-[var(--color-primary)] opacity-90"></div>
        <img 
          src={pressHero}
          alt="Media coverage" 
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
              Press <span className="text-[var(--color-secondary)]">Releases</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Official announcements and media coverage of our initiatives and achievements
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
              placeholder="Search press releases..."
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

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map(category => (
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

      {/* Press Releases Grid */}
      <div className="max-w-7xl mx-auto mb-20 px-4 sm:px-6">
        {sortedReleases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedReleases.map((release) => (
              <div
                key={release.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <FiCalendar className="text-[var(--color-secondary)]" />
                    <span>
                      {new Date(release.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {release.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {release.summary}
                  </p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => openDetails(release)}
                      className="text-[var(--color-secondary)] hover:underline font-medium"
                    >
                      Read More
                    </button>
                    <a 
                      href={release.pdf} 
                      download
                      className="flex items-center gap-1 text-gray-600 hover:text-[var(--color-secondary)]"
                    >
                      <FiDownload />
                      <span className="text-sm">PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No press releases found matching your search</p>
          </div>
        )}
      </div>

      {/* Press Release Details Modal */}
      {selectedRelease && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedRelease.image}
                alt={selectedRelease.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={closeDetails}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2"
              >
                <FiX />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 text-gray-600 mb-4">
                <FiCalendar className="text-[var(--color-secondary)]" />
                <span>
                  {new Date(selectedRelease.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {selectedRelease.title}
              </h2>
              <div className="prose max-w-none text-gray-700 mb-8">
                <p className="text-lg mb-4">{selectedRelease.summary}</p>
                {/* Full press release content would go here */}
                <p className="mb-4">
                  Knowledge Engineering is proud to announce this significant milestone in our 
                  ongoing mission to identify and nurture exceptional young talents across India. 
                  This initiative represents our commitment to creating platforms where young 
                  achievers can showcase their unique abilities.
                </p>
                <p className="mb-4">
                  "We believe every child has unique talents waiting to be discovered," said 
                  our founder. "This program provides the structure and support needed to 
                  transform potential into extraordinary achievement."
                </p>
                <p>
                  The program will launch in January 2024 across 10 cities, with plans to 
                  expand nationwide by the end of the year. Interested participants can 
                  register through our website starting December 1st.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={selectedRelease.pdf} 
                  download
                  className="flex items-center gap-2 bg-[var(--color-secondary)] hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium"
                >
                  <FiDownload />
                  Download Full Press Release
                </a>
                <button 
                  onClick={closeDetails}
                  className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PressReleasePage;