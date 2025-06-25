import { useState } from 'react';
import { Menu, X , Phone , MapPin} from 'lucide-react'; 
import logo from '../../assets/logo.png'
import { useLocation } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
const location = useLocation();
const currentPath = location.pathname;

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      children: [
        { name: 'Mission & Vision', href: '/mission' },
        { name: 'Founder Message', href: '/founder-message' },
        { name: 'Brand Ambassador', href: '/brand-ambassador' },
      ],
    }, { name: 'Skill development', href: '/skill-development' },
    { name: 'Activities', href: '/activities' },
     
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Press Release', href: '/press-release' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
   <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-primary)] shadow-md ">

      <div className='p-2 w-full bg-[var(--color-secondary)] hidden md:block'>
<span className='text-white text-sm flex gap-1 items-center justify-center '>  <MapPin size={24}/> Suite No.512, 5th Floor, The Executive Zone, Sakthi Towers-1, No.766, Anna Salai, Chennai - 600 002</span>
      </div>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-tan relative">
        {navLinks.map((link, index) => {
  const isParentActive = link.children?.some(child => currentPath === child.href);

  return (
    <div key={link.name} className="relative group">
      {!link.children ? (
        <a
          href={link.href}
          className={`${currentPath === link.href ? 'text-[var(--color-secondary)]' : 'text-white'} hover:text-[var(--color-secondary)] transition duration-200`}
        >
          <h6>{link.name}</h6>
        </a>
      ) : (
        <>
          <button
            className={`${isParentActive ? 'text-[var(--color-secondary)] font-semibold' : 'text-white'} hover:text-[var(--color-secondary)] transition duration-200 flex items-center`}
            onMouseEnter={() => setOpenSubmenu(index)}
          >
            <h6>{link.name}</h6>
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`absolute top-full left-0 mt-2 ${openSubmenu === index ? 'block' : 'hidden'} group-hover:block bg-white shadow-lg rounded-md z-10 min-w-[200px] transition-all duration-200`}
            onMouseLeave={() => setOpenSubmenu(null)}
          >
            {link.children.map(child => (
              <a
                key={child.name}
                href={child.href}
                className={`block px-4 py-2 text-gray-800 hover:bg-[var(--color-secondary)] hover:text-white whitespace-nowrap transition duration-150 ${currentPath === child.href ? 'bg-[var(--color-secondary)] text-white font-semibold' : ''}`}
              >
                <h6>{child.name}</h6>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
})}

        </nav>

        <div className="hidden md:block">
          <a href="tel:+918248873830">
            <h3 className="text-white text-lg hover:text-[var(--color-secondary)] transition duration-200 flex gap-1"><Phone size={24} /> +91 82488 73830</h3>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-[var(--color-secondary)] transition duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navLinks.map((link, index) => (
            <div key={link.name}>
              {!link.children ? (
                <a 
                  href={link.href} 
                  className="block text-white hover:text-[var(--color-secondary)] py-2 transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <div className="mb-2">
                  <button 
                    className="flex items-center justify-between w-full text-white hover:text-[var(--color-secondary)] py-2 transition duration-200"
                    onClick={() => toggleSubmenu(index)}
                  >
                    <span>{link.name}</span>
                    <svg 
                      className={`ml-2 w-4 h-4 transform transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSubmenu === index && (
                    <div className="ml-4 space-y-2 mt-2">
                      {link.children.map(child => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block text-gray-200 hover:text-[var(--color-secondary)] py-1.5 transition duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;