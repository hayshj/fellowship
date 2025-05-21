import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/FC-Logo-Resized-300x76.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-8 bg-white text-black shadow-md">
        <div className="flex items-center gap-4">
          <Link to="/" onClick={scrollToTop}>
            <img src={Logo} alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-12">
          {['/', '/plan-your-visit', '/sermons', '/hub'].map((link, i) => (
            <Link
              key={i}
              to={link}
              onClick={scrollToTop}
              className="relative text-lg group"
            >
              {['Home', 'Plan Your Visit', 'Sermons', 'Hub Central'][i]}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
        </button>
      </nav>

      {/* Dark blurred background overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 bg-opacity-50 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Slide-In Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full max-w-1/3 min-w-[250px] bg-white text-black z-40 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start p-6 gap-6 pt-[100px]">
          {['/', '/plan-your-visit', '/sermons', '/hub'].map((link, i) => (
            <Link
              key={i}
              to={link}
              onClick={() => {
                scrollToTop();
                setMenuOpen(false);
              }}
              className="relative text-lg group text-left"
            >
              {['Home', 'Plan Your Visit', 'Sermons', 'Hub Central'][i]}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
