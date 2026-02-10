import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/FC-Logo-Resized-300x76.png';

function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const menuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    setScrolled(menuOpen || window.scrollY > 10);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const isWide = window.innerWidth >= 768;
      setIsDesktop(isWide);
      if (isWide) setMenuOpen(false);
    };
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setDropdown(null);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const scrollToTop = () => window.scrollTo(0, 0);

  const baseLinks = [
    { name: 'Home', path: '/' },
    { name: 'Plan Your Visit', path: '/plan-your-visit' },
    { name: 'About', path: '/about' },
    { name: 'Hub Central', path: '/hub' },
    { name: 'Español', path: '/espanol' }
  ];

  const connectItems = [
    { name: 'Connect Groups', path: '/connect' },
    { name: 'Midweek', path: '/midweek' },
    { name: 'Students', path: '/students' },
    { name: 'Children', path: '/children' },
    { name: 'Mother’s Day Out', path: '/children/mdo' },
    { name: 'Events', path: '/events' },
    { name: 'Serve', path: '/serve' }
  ];

  const watchItems = [
    { name: 'Live', path: '/live' },
    { name: 'Sermons', path: '/sermons' }
  ];

  const renderDropdown = (label, items) => {
    const handleEnter = () => {
      if (!isDesktop) return;
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      setDropdown(label);
    };

    const handleLeave = () => {
      if (!isDesktop) return;
      dropdownTimeoutRef.current = setTimeout(() => {
        setDropdown(null);
      }, 150);
    };

    const handleClick = () => {
      if (isDesktop) return;
      setDropdown(dropdown === label ? null : label);
    };

    return (
      <div
        className="relative"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <button
          onClick={handleClick}
          className="relative group flex items-center gap-1 text-lg font-normal focus:outline-none"
        >
          {label}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 transform ${dropdown === label ? 'rotate-180' : ''
              }`}
          />
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
        </button>

        <div
          className={`absolute top-full left-0 mt-2 bg-neutral-900 border border-neutral-800 text-white shadow-xl rounded-xl overflow-hidden z-50 min-w-[220px] transform transition-all duration-200 ${dropdown === label
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
        >
          <div className="py-2">
            {items.map(({ name, path }, i) => (
              <Link
                key={i}
                to={path}
                onClick={() => {
                  scrollToTop();
                  setDropdown(null);
                }}
                className="block px-6 py-3 text-base text-gray-300 hover:text-white hover:bg-white/10 transition whitespace-nowrap"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-8 transition-all duration-500 ${scrolled
          ? 'bg-neutral-900/80 backdrop-blur-md shadow-2xl text-white py-2'
          : 'bg-transparent text-white py-4'
          }`}
      >
        <Link to="/" onClick={scrollToTop}>
          <img
            src={Logo}
            alt="Logo"
            className="h-10 md:h-12 transition-all duration-300 brightness-0 invert"
          />
        </Link>

        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          {baseLinks
            .filter(link => link.name !== 'Hub Central')
            .map(({ name, path }) => (
              <Link key={name} to={path} onClick={scrollToTop} className="relative text-lg font-medium group text-white/90 hover:text-white transition-colors">
                {name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          {renderDropdown('Connect', connectItems)}
          {renderDropdown('Watch', watchItems)}
          <Link to="/hub" onClick={scrollToTop} className="relative text-lg font-medium group text-white/90 hover:text-white transition-colors">
            Hub Central
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>


        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white z-50 relative">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        ref={menuRef}
        className={`fixed inset-0 w-full h-full bg-neutral-900 text-white z-40 transition-all duration-300 ease-out overflow-y-auto ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col p-8 pt-[120px] gap-6 min-h-full">
          {[...baseLinks, { name: 'Connect', children: connectItems }, { name: 'Watch', children: watchItems }].map(
            (item, i) =>
              item.children ? (
                <div key={i} className="flex flex-col">
                  <button
                    onClick={() => setDropdown(dropdown === item.name ? null : item.name)}
                    className="text-left text-xl font-medium flex justify-between items-center text-gray-200 hover:text-white transition-colors"
                  >
                    {item.name} <ChevronDown size={18} className={`transition-transform duration-200 ${dropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out border-l-2 border-white/10 ml-1 mt-2 ${dropdown === item.name ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-3 pl-6 py-2">
                        {item.children.map(({ name, path }, j) => (
                          <Link
                            key={j}
                            to={path}
                            onClick={() => {
                              scrollToTop();
                              setMenuOpen(false);
                              setDropdown(null);
                            }}
                            className="text-base text-gray-400 hover:text-white transition-colors"
                          >
                            {name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => {
                    scrollToTop();
                    setMenuOpen(false);
                  }}
                  className="text-xl font-medium text-gray-200 hover:text-white transition-colors border-b border-transparent hover:border-white/10 pb-2"
                >
                  {item.name}
                </Link>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default HomeNavbar;
