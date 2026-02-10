import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import ChildrenImage from "../assets/childrensmain.webp";
import { Clock, Calendar, GraduationCap, Heart, DollarSign, Mail, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

function MDO() {
  const ageGroups = [
    { range: "18 - 23 months", status: "Waitlist", color: "text-amber-500", icon: <AlertCircle className="w-5 h-5 text-amber-500" /> },
    { range: "2 year olds", status: "Full", color: "text-red-500", icon: <XCircle className="w-5 h-5 text-red-500" /> },
    { range: "3 year olds", status: "Full", color: "text-red-500", icon: <XCircle className="w-5 h-5 text-red-500" /> },
    { range: "4 year olds", status: "Waitlist", color: "text-amber-500", icon: <AlertCircle className="w-5 h-5 text-amber-500" /> },
  ];

  const tuition = [
    { label: "Registration", amount: "$100", term: "one-time" },
    { label: "Fall Supply Fee", amount: "$75", term: "per semester" },
    { label: "Spring Supply Fee", amount: "$75", term: "per semester" },
    { label: "Monthly Tuition", amount: "$190", term: "per month" },
  ];

  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
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
            Weekday Ministry
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
            MOTHER'S<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-200">DAY OUT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            A loving, Christ-centered program for ages 18 mo – Pre-K.
          </p>
        </div>
      </header>

      {/* Availability Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 rounded-[2rem] border border-stone-100 p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current Availability</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {ageGroups.map((group, index) => (
                <div key={index} className="bg-white p-4 rounded-xl flex items-center justify-between border border-gray-100 shadow-sm">
                  <span className="font-bold text-gray-700">{group.range}</span>
                  <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wide ${group.color}`}>
                    {group.icon}
                    {group.status}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-6 text-sm">
              *Availability subject to change. Please contact us for the most up-to-date information.
            </p>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* About */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Our Program</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">About MDO</h3>
              <div className="w-16 h-1 bg-pink-400 mt-4 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Mother’s Day Out is a ministry of Fellowship Church providing a safe, nurturing environment that promotes the physical, social, emotional, educational, and spiritual development of every child.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-lg text-pink-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Times</h4>
                  <p className="text-gray-600">9:00 AM – 2:00 PM</p>
                  <p className="text-gray-500 text-sm">Tuesdays & Thursdays</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Schedule</h4>
                  <p className="text-gray-600">Follows RCISD Calendar</p>
                  <p className="text-gray-500 text-sm">September – May</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Curriculum</h4>
                  <p className="text-gray-600">Faith & Foundations</p>
                  <p className="text-gray-500 text-sm">Focus on kindergarten readiness</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tuition */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-lg border border-stone-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Tuition & Fees</h3>
              <p className="text-gray-500">2025 – 2026 School Year</p>
            </div>

            <div className="space-y-4">
              {tuition.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0 hover:bg-stone-50 transition-colors rounded-lg">
                  <span className="font-medium text-gray-700">{item.label}</span>
                  <div className="text-right">
                    <span className="block font-bold text-gray-900">{item.amount}</span>
                    <span className="text-xs text-gray-400 uppercase">{item.term}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-10">
            Questions? Email our Director, Ms. Kaitlin, at <a href="mailto:kaitlin@fbrc.org" className="text-pink-500 font-bold hover:underline">kaitlin@fbrc.org</a> or use the form below.
          </p>

          <form className="space-y-6 text-left bg-stone-50 p-8 rounded-[2rem] border border-stone-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-neutral-900 text-white font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-black transition-colors shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default MDO;
