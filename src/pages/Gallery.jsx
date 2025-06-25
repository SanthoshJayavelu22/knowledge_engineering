import { useState } from 'react';
import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import images from src/assets
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/2.jpg";
import aboutHero from '../assets/gallery1.jpg';

const galleryImages = [
  { id: 1, src: img1, category: 'events', alt: 'Event photo 1' },
  { id: 2, src: img2, category: 'training', alt: 'Training session' },
  { id: 3, src: img3, category: 'achievers', alt: 'Record holder' },
  { id: 4, src: img4, category: 'events', alt: 'Event photo 2' },
  { id: 5, src: img5, category: 'workshops', alt: 'Workshop activity' },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'events', name: 'Events' },
  { id: 'training', name: 'Training' },
  { id: 'workshops', name: 'Workshops' },
  { id: 'achievers', name: 'Achievers' },
];

const GalleryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.alt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentIndex + 1) % filteredImages.length;
    }
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50  mt-20 md:mt-30">
      {/* Gallery Header */}
      <section className="relative mb-20">
        <div className="absolute inset-0 bg-[var(--color-primary)] opacity-90"></div>
        <img 
          src={aboutHero}
          alt="Students learning" 
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-[var(--color-secondary)]">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Explore moments from our events, training sessions, and success stories
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search photos..."
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

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto mb-20">
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found matching your search</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl p-2 hover:text-[var(--color-secondary)]"
          >
            <FiX />
          </button>

          <button
            onClick={() => navigate('prev')}
            className="absolute left-4 text-white text-2xl p-2 hover:text-[var(--color-secondary)] md:left-8"
          >
            <FiChevronLeft size={32} />
          </button>

          <div className="max-w-4xl mx-auto">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[80vh] max-w-full object-contain"
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>

          <button
            onClick={() => navigate('next')}
            className="absolute right-4 text-white text-2xl p-2 hover:text-[var(--color-secondary)] md:right-8"
          >
            <FiChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
