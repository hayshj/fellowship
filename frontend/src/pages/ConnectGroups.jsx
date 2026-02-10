import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { Link } from "react-router-dom";
import Connect from "../assets/connect.webp";
import { Calendar, Clock, MapPin, Users, ArrowRight, Loader } from 'lucide-react';

function ConnectGroups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch("/api/connectGroups");
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error("Error fetching connect groups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      <HomeNavbar />

      {/* Hero Section */}
      <header className="relative w-full h-[60vh] overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: `url(${Connect})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm">
            Community
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
            CONNECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-100">GROUPS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Find your people, grow together, and experience life-changing community.
          </p>
        </div>
      </header>

      {/* Groups Grid Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Get Connected</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Find a Group</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {loading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-[2rem] shadow-sm border border-stone-100 p-8 h-[400px] animate-pulse flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-stone-200 rounded-full"></div>
                    <div className="h-8 bg-stone-200 rounded w-3/4"></div>
                    <div className="h-4 bg-stone-200 rounded w-1/2"></div>
                    <div className="space-y-2 pt-4">
                      <div className="h-4 bg-stone-200 rounded w-full"></div>
                      <div className="h-4 bg-stone-200 rounded w-full"></div>
                      <div className="h-4 bg-stone-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="h-12 bg-stone-200 rounded-xl w-full"></div>
                </div>
              ))}
            </div>
          ) : groups.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[3rem] shadow-sm border border-stone-100">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-stone-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Groups Found</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Seems like there are no active connect groups at the moment. Please check back later or contact us for more info.
              </p>
              <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
                <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {groups.map((group, index) => (
                <div
                  key={index}
                  className="group flex flex-col bg-white rounded-[2rem] shadow-sm hover:shadow-xl border border-stone-100 p-8 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Users className="w-6 h-6" />
                      </div>
                      {group.topic && (
                        <span className="bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          {group.topic}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{group.name}</h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-stone-600 text-sm">
                        <MapPin className="w-4 h-4 text-stone-400" />
                        <span>{group.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-stone-600 text-sm">
                        <Clock className="w-4 h-4 text-stone-400" />
                        <span>
                          {group.day}
                          {group.time && group.time !== "Not Applicable" && ` • ${group.time}`}
                        </span>
                      </div>
                    </div>

                    <p className="text-stone-500 text-sm leading-relaxed mb-8 line-clamp-3">
                      {group.description}
                    </p>
                  </div>

                  {group.registerLink ? (
                    <a
                      href={group.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors group-hover:shadow-lg"
                    >
                      <span className="tracking-wide">Register Now</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <button disabled className="w-full py-4 bg-stone-100 text-stone-400 rounded-xl font-bold cursor-not-allowed">
                      Registration Closed
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ConnectGroups;
