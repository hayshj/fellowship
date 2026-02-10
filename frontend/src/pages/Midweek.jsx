import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import Mdwk from "../assets/mdwk.webp";
import { Baby, Users, Music, Heart, BookOpen, Clock, CalendarDays, ArrowRight } from 'lucide-react';

function Midweek() {
  const cards = [
    {
      title: "NURSERY",
      icon: <Baby className="w-8 h-8 text-pink-500" />,
      time: "6:30 PM",
      description:
        "We offer a nursery for those kids under 3yr while mom and dad are attending their group or volunteering on Wednesday nights.",
    },
    {
      title: "KIDS",
      icon: <Users className="w-8 h-8 text-green-500" />,
      time: "6:30 PM",
      description:
        "Bring the kids to Wednesday Night Live for a high energy interactive discipleship ministry for kids 3yo thru 5th grade.",
    },
    {
      title: "STUDENTS",
      icon: <Music className="w-8 h-8 text-orange-500" />,
      time: "6:00 PM (Food) / 6:30 PM (Service)",
      description:
        "Students (6th-12th) have MDWK WORSHIP. Starting at 6PM with open gym and free food, then moving to the student room for games, worship, and teaching.",
    },
    {
      title: "WOMEN",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      time: "6:30 PM",
      description:
        "Ladies, our Women’s Ministry meets in rooms 202 & 203. This is a wonderful time to grow closer to God and connect with other women at Fellowship.",
    },
    {
      title: "MEN",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      time: "6:30 PM",
      description:
        "Calling all men! Join Men’s Ministry for a time of fellowship and encouragement with other men as you study God’s Word together.",
    },
    {
      title: "SR. ADULTS",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      time: "6:30 PM",
      description:
        "Our senior adults meet in room 201 for a time of walking through God’s Word and praying for those we love and care for.",
    },
  ];

  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      {/* Navbar */}
      <HomeNavbar />

      {/* Hero Section */}
      <header className="relative w-full h-[60vh] overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: `url(${Mdwk})`,
            backgroundPosition: 'center 40%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm">
            Midweek at Fellowship
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
            WEDNESDAY<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100">NIGHTS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Refuel mid-week with fellowship, food, and faith for the whole family.
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-stone-100 rounded-full px-4 py-2 text-stone-600 font-bold text-sm tracking-wide uppercase">
            <CalendarDays className="w-4 h-4" />
            <span>September - May</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Something for everyone <br className="hidden md:block" /> in the family.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Wednesday nights are a time to recharge. Bring the whole family and grow together!
          </p>
        </div>
      </section>

      {/* Card Grid */}
      <section className="pb-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group bg-stone-50 rounded-[2.5rem] p-8 border border-stone-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-xs font-bold text-stone-500 border border-stone-100 shadow-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {card.time}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {card.description}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <span className="text-stone-400 font-bold text-xs tracking-widest uppercase flex items-center gap-2 group-hover:text-stone-600 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-stone-900 text-white text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">See you this Wednesday!</h2>
          <p className="text-stone-400 text-lg">
            Have questions about where to go? Plan your visit and we'll help you find your way.
          </p>
          <a
            href="/plan-your-visit"
            className="inline-block bg-white text-black font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
          >
            Plan Your Visit
          </a>
        </div>
      </section>
    </div>
  );
}

export default Midweek;
