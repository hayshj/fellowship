import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import ChildrenImage from "../assets/children.webp";
import { ShieldCheck, Calendar, Baby } from 'lucide-react';

function Children() {
  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      {/* Navbar */}
      <HomeNavbar />

      {/* Hero Section */}
      <header className="relative w-full h-[60vh] overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: `url(${ChildrenImage})`,
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300 pr-2">KIDS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Nursery through 5th Grade — Safe, Fun, Jesus-Centered.
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Weekend Services */}
            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-yellow-500 shadow-sm group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Weekend Services</h3>
              <p className="text-gray-600 leading-relaxed">
                During every service, our kids environments are full of fun activities, worship, and biblical teaching tailored to each age group—from infants to 5th grade.
              </p>
            </div>

            {/* Check-In & Security */}
            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-500 shadow-sm group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Check-In & Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your child's safety is our top priority. All volunteers are background-checked, and our secure check-in system makes sure your child is in the right room and cared for.
              </p>
            </div>

            {/* Infants */}
            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-green-500 shadow-sm group-hover:scale-110 transition-transform">
                <Baby className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nursery</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide a nurturing environment for your little ones, ensuring they feel safe and loved while you attend service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Children;
