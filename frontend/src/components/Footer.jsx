import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 px-6 md:px-12 lg:px-24 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-black text-white tracking-tighter">FELLOWSHIP<br /><span className="text-neutral-500">CHURCH</span></h3>
          <p className="text-sm leading-relaxed max-w-xs">
            A community of believers dedicated to spreading the love and message of Jesus Christ. Join us this Sunday.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/fellowshiprc/" aria-label="Facebook" className="p-2 bg-neutral-900 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/fellowshipchurchrc/" aria-label="Instagram" className="p-2 bg-neutral-900 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/@FellowshipRC" aria-label="YouTube" className="p-2 bg-neutral-900 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/plan-your-visit" className="hover:text-white transition-colors">Plan Your Visit</a></li>
            <li><a href="/sermons" className="hover:text-white transition-colors">Watch Online</a></li>
            <li><a href="/give" className="hover:text-white transition-colors">Give</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Visit Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex flex-col">
              <span className="font-semibold text-white">Royse City Campus</span>
              <span>900 Pullen St</span>
              <span>Royse City, TX 75189</span>
            </li>
            <li className="flex flex-col">
              <span className="font-semibold text-white">Contact</span>
              <a href="mailto:info@fbrc.org" className="hover:text-white transition-colors">info@fbrc.org</a>
              <a href="tel:9726363221" className="hover:text-white transition-colors">(972) 636-3221</a>
            </li>
          </ul>
        </div>


      </div>

      <div className="border-t border-neutral-900 pt-8 text-xs text-neutral-600 text-center">
        <p>© {new Date().getFullYear()} Fellowship Church. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
