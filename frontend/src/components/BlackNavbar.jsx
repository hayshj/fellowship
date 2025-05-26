import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/FC-Logo-Resized-300x76.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const menuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
    setDropdown(null);
  };

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const wide = window.innerWidth >= 768;
      setIsDesktop(wide);
      if (wide) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setDropdown(null);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const renderDropdown = (label, items) => {
    const handleEnter = () => {
      if (!isDesktop) return;
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      setDropdown(label);
    };

    const handleLeave = () => {
      if (!isDesktop) return;
      dropdownTimeoutRef.current = setTimeout(() => setDropdown(null), 150);
    };

    const handleClick = () => {
      if (isDesktop) return;
      setDropdown(dropdown === label ? null : label);
    };

    return (
      <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        <button
          onClick={handleClick}
          className="relative group flex items-center gap-1 text-lg font-normal"
        >
          {label}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${dropdown === label ? 'rotate-180' : ''}`}
          />
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </button>
        <div
          className={`absolute top-full left-0 mt-2 bg-black text-white shadow-lg z-50 min-w-[200px] border border-white/20 transition-all duration-200 ${
            dropdown === label
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="pt-1">
            {items.map(({ name, path }, i) => (
              <Link
                key={i}
                to={path}
                onClick={scrollToTop}
                className="block px-6 py-3 text-base hover:bg-white/10 whitespace-nowrap"
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
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-8 bg-black text-white shadow-md">
        <Link to="/" onClick={scrollToTop}>
          <img src={Logo} alt="Logo" className="h-12 filter invert" />
        </Link>

        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          {baseLinks
            .filter(link => link.name !== 'Hub Central')
            .map(({ name, path }) => (
              <Link key={name} to={path} onClick={scrollToTop} className="relative text-lg group">
                {name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          
          {renderDropdown('Connect', connectItems)}
          {renderDropdown('Watch', watchItems)}

          {/* Hub Central moved here */}
          <Link to="/hub" onClick={scrollToTop} className="relative text-lg group">
            Hub Central
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>


        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full max-w-xs w-full bg-black text-white z-40 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 pt-[100px] gap-4">
          {[...baseLinks, { name: 'Connect', children: connectItems }, { name: 'Watch', children: watchItems }].map(
            (item, i) =>
              item.children ? (
                <div key={i} className="flex flex-col">
                  <button
                    onClick={() => setDropdown(dropdown === item.name ? null : item.name)}
                    className="text-left text-lg font-normal flex justify-between items-center"
                  >
                    {item.name}
                    <ChevronDown size={16} className={dropdown === item.name ? 'rotate-180' : ''} />
                  </button>
                  {dropdown === item.name && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.children.map(({ name, path }, j) => (
                        <Link
                          key={j}
                          to={path}
                          onClick={() => {
                            scrollToTop();
                            setMenuOpen(false);
                            setDropdown(null);
                          }}
                          className="text-sm"
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => {
                    scrollToTop();
                    setMenuOpen(false);
                  }}
                  className="text-lg"
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

export default Navbar;
