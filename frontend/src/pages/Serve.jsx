import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import ServeImage from "../assets/soundboard.webp";
import { GraduationCap, HeartHandshake, Music, Coffee, Sparkles, Globe, MonitorSmartphone, Baby, ArrowRight, HandHeart } from "lucide-react";

export default function Serve() {
  const teams = [
    {
      icon: <Baby className="w-8 h-8 text-pink-500" />,
      title: "Pre-K",
      description:
        "Help nurture and care for our youngest children in a safe and loving environment."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      title: "Kids Ministry",
      description:
        "Lead elementary-aged kids in fun, engaging, and Christ-centered experiences."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-orange-500" />,
      title: "Students",
      description:
        "Build relationships and guide students through their faith journey during weekly gatherings."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-blue-500" />,
      title: "Welcome Team",
      description:
        "Greet guests with a smile, help them find their way, and make them feel at home."
    },
    {
      icon: <Music className="w-8 h-8 text-purple-500" />,
      title: "Worship",
      description:
        "Lead the church in musical worship through vocals and instruments. Audition required."
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-cyan-500" />,
      title: "Tech Team",
      description:
        "Operate cameras, slides, sound, and lighting to support services and events."
    },
    {
      icon: <Coffee className="w-8 h-8 text-amber-700" />,
      title: "Cafe",
      description:
        "Serve coffee and connect with guests to create a welcoming environment."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Missions",
      description:
        "Support local and global outreach efforts through hands-on service and prayer."
    },
  ];

  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      <HomeNavbar />

      {/* Hero Section */}
      <header className="relative w-full h-[60vh] overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: `url(${ServeImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm">
            Join The Team
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
            SERVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-200 pr-2">OTHERS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Use your gifts to make a difference. There's a place for you here.
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-100 rounded-full mb-4">
            <HandHeart className="w-8 h-8 text-stone-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Why Serve?
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            At Fellowship Church, we believe everyone has a role to play. Whether you're great with kids, love technology, or just want to smile and greet people, serving is the best way to get connected and grow in your faith.
          </p>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="pb-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teams.map((team, index) => (
              <div
                key={index}
                className="group bg-stone-50 rounded-[2.5rem] p-8 border border-stone-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {team.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {team.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {team.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-stone-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/30 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-500/30 transition-colors"></div>

              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold">Ready to jump in?</h2>
                <p className="text-stone-300 text-lg">
                  We'd love to help you find your perfect fit. Fill out the form below to get started.
                </p>
                <a
                  href="/serve/form"
                  className="inline-flex items-center gap-3 bg-white text-black font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-green-400 transition-all transform hover:scale-105"
                >
                  Get Connected <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
