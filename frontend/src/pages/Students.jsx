import React, { useEffect, useRef } from "react";
import HomeNavbar from "../components/HomeNavbar";
import StudentsImage from "../assets/students/hero.webp";
import StudentWorship from "../assets/students/studentworship.webp";
import InstagramImage from "../assets/students/instagram.webp";
import ProfilePic from "../assets/students/profile.webp";
import Gallery1 from "../assets/students/gallery1.webp";
import Gallery2 from "../assets/students/gallery2.webp";
import Gallery3 from "../assets/students/gallery3.webp";
import Gallery4 from "../assets/students/gallery4.webp";
import Gallery5 from "../assets/students/gallery5.webp";
import Gallery6 from "../assets/students/gallery6.webp";
import Gallery7 from "../assets/students/gallery7.webp";
import Gallery8 from "../assets/students/gallery8.webp";

import { Ellipsis, Heart, MessageCircle, Instagram, ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

const galleryImages = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
];

function Students() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    let frame;

    const step = () => {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      {/* Navbar */}
      <HomeNavbar />

      {/* Hero Section */}
      <header className="relative w-full h-[60vh] overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: `url(${StudentsImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm">
            Next Generation
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
            FELLOWSHIP<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">STUDENTS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Where 6th–12th graders find purpose, community, and a place to belong.
          </p>
        </div>
      </header>

      {/* Midweek Services Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
        {/* Decorative Blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <img
                src={StudentWorship}
                alt="Students Worshipping"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Background Accent */}
            <div className="absolute inset-0 bg-stone-200 rounded-[2.5rem] -rotate-2 -z-10 group-hover:rotate-0 transition-transform duration-500"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Wednesday Nights</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Midweek Services
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-6 rounded-full"></div>
            </div>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Every Wednesday night, students gather for an unforgettable experience filled with energy, connection, and purpose.
              </p>
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span className="font-bold text-gray-900">6:00 PM</span>
                  <span className="text-gray-500">- Open Gym, Games, & Hangout</span>
                </div>
                <div className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-purple-600" />
                  <span className="font-bold text-gray-900">7:00 PM</span>
                  <span className="text-gray-500">- Worship & Message</span>
                </div>
              </div>
            </div>

            <button
              className="group inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-black hover:shadow-xl transition-all"
            >
              Plan Your Visit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="text-center mb-16 relative z-10 px-6">
          <h2 className="text-4xl font-bold text-white mb-4">Life at Fellowship Students</h2>
          <p className="text-stone-400">Making memories and building friendships that last.</p>
        </div>

        {/* Infinite Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-hidden w-full relative z-10 cursor-grab active:cursor-grabbing"
        >
          <div className="flex gap-4 px-4 sticky-carousel">
            {[...galleryImages, ...galleryImages].map((img, idx) => (
              <div key={idx} className="relative w-64 md:w-80 lg:w-96 aspect-[4/5] flex-shrink-0 rounded-2xl overflow-hidden group">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Promo */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Social Media</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Follow Us On Instagram
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Here’s a peek into what life looks like in our student community. Don’t miss out on behind-the-scenes content, event recaps, and powerful moments!
            </p>
            <a
              href="https://instagram.com/fellowshipstudentsrc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Instagram className="w-5 h-5" />
              @fellowshipstudentsrc
            </a>
          </div>

          {/* Fake Instagram Post */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-stone-100 overflow-hidden max-w-sm w-full transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="p-4 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <img
                      src={ProfilePic}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <span className="font-bold text-sm">fellowshipstudentsrc</span>
                </div>
                <Ellipsis className="text-gray-400" />
              </div>
              <div className="aspect-square bg-stone-100">
                <img
                  src={InstagramImage}
                  alt="Student Worship Moment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-4 text-gray-800">
                  <Heart className="w-6 h-6 hover:text-red-500 hover:fill-red-500 transition-colors cursor-pointer" />
                  <MessageCircle className="w-6 h-6 hover:text-blue-500 transition-colors cursor-pointer" />
                </div>
                <div className="text-sm">
                  <p className="font-bold mb-1">245 likes</p>
                  <p>
                    <span className="font-bold mr-2">fellowshipstudentsrc</span>
                    Midweek was powerful tonight. Can’t wait for next week! 🔥🙌 #fellowshipstudents
                  </p>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">2 DAYS AGO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for icon
function Music({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

export default Students;
