import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-300 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo + Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-white">Fellowship Church</h3>
          <p className="mt-2 text-sm text-gray-400">A place where faith and community grow together.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Plan Your Visit</a>
          <a href="#" className="hover:text-white transition">Watch Online</a>
          <a href="#" className="hover:text-white transition">Give</a>
        </div>

        {/* Social + Contact */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-white mb-2">Connect</h4>
          <div className="flex space-x-4 mb-2">
            <a href="https://www.facebook.com/fellowshiprc/" aria-label="Facebook" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/fellowshipchurchrc/" aria-label="Instagram" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="https://www.youtube.com/@FellowshipRC" aria-label="YouTube" className="hover:text-white">
              <Youtube size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-400">900 Pullen St, Royse City, TX</p>
          <p className="text-sm text-gray-400">info@fbrc.org</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fellowship Church. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
