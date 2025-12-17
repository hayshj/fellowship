import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import { GraduationCap, HeartHandshake, Music, Coffee, Sparkles, Globe, MonitorSmartphone, Baby } from "lucide-react";
import Serve from "../assets/soundboard.webp";

export default function ServeTeams() {
  const teams = [
    {
      icon: <Baby size={40} className="text-black" />,
      title: "Pre-K",
      description:
        "Help nurture and care for our youngest children in a safe and loving environment."
    },
    {
      icon: <Sparkles size={40} className="text-black" />,
      title: "Kids Ministry",
      description:
        "Lead elementary-aged kids in fun, engaging, and Christ-centered experiences."
    },
    {
      icon: <GraduationCap size={40} className="text-black" />,
      title: "Students",
      description:
        "Build relationships and guide students through their faith journey during weekly gatherings."
    },
    {
      icon: <HeartHandshake size={40} className="text-black" />,
      title: "Welcome Team",
      description:
        "Greet guests with a smile, help them find their way, and make them feel at home."
    },
    {
      icon: <Music size={40} className="text-black" />,
      title: "Worship",
      description:
        "Lead the church in musical worship through vocals and instruments. Audition required."
    },
    {
      icon: <MonitorSmartphone size={40} className="text-black" />,
      title: "Tech Team",
      description:
        "Operate cameras, slides, sound, and lighting to support services and events."
    },
    {
      icon: <Coffee size={40} className="text-black" />,
      title: "Cafe",
      description:
        "Serve coffee and connect with guests to create a welcoming environment."
    },
    {
      icon: <Globe size={40} className="text-black" />,
      title: "Missions",
      description:
        "Support local and global outreach efforts through hands-on service and prayer."
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen pb-12">
      <HomeNavbar />

      {/* Hero Section */}
      <div 
        className="relative bg-black/20 text-white py-24 flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${Serve})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl text-center">
          <h1 className="text-6xl sm:text-6xl lg:text-9xl font-extrabold tracking-tight text-white mb-4">
            SERVE
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
            JOIN OUR TEAM OF VOLUNTEERS
          </p>
        </div>
      </div>
      
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-700 mb-12">
          At Fellowship Church, we believe everyone has a role to play. Whether you're great with kids, love technology, or just want to smile and greet people, there's a place for you to serve.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md text-center flex flex-col items-center">
              {team.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{team.title}</h3>
              <p>{team.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg font-medium mb-4">Interested in joining a team?</p>
          <a
            href="/serve/form"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-900 transition"
          >
            Get Connected
          </a>
        </div>
      </div>
    </div>
  );
}
