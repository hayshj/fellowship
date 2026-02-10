import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { Link } from "react-router-dom";
import Event from "../assets/event.webp";
import { Calendar, Clock, MapPin, ArrowRight, Loader2 } from 'lucide-react';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();

        // Filter out events where the start date has already passed
        const futureEvents = data.filter(event => {
          const startDate = new Date(event.startDate);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return startDate >= today;
        });

        setEvents(futureEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      <HomeNavbar />

      {/* Hero Section */}
      <header className="relative w-full h-[60vh] overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: `url(${Event})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm">
            Get Involved
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
            UPCOMING<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200 pr-2">EVENTS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Connect, grow, and serve with us. Don’t miss what’s happening at Fellowship.
          </p>
        </div>
      </header>

      {/* Events Grid Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-50 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Save the Date</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">What's Coming Up</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {loading ? (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden h-[450px] animate-pulse">
                  <div className="h-48 bg-stone-200 w-full"></div>
                  <div className="p-8 space-y-4">
                    <div className="h-8 bg-stone-200 rounded w-3/4"></div>
                    <div className="h-4 bg-stone-200 rounded w-1/2"></div>
                    <div className="space-y-2 pt-4">
                      <div className="h-4 bg-stone-200 rounded w-full"></div>
                      <div className="h-4 bg-stone-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[3rem] shadow-sm border border-stone-100">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-stone-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Upcoming Events</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                There are no events scheduled at the moment. Please check back later!
              </p>
              <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
                <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
              </Link>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="group flex flex-col bg-white rounded-[2rem] shadow-sm hover:shadow-xl border border-stone-100 overflow-hidden transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={event.image || "https://via.placeholder.com/800x600?text=Fellowship+Event"}
                      alt={event.name}
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=Fellowship+Event'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                    {/* Date Badge */}
                    {event.startDate && (
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg text-center min-w-[60px]">
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          {new Date(event.startDate).toLocaleString('default', { month: 'short' })}
                        </span>
                        <span className="block text-2xl font-black text-gray-900 leading-none">
                          {new Date(event.startDate).getDate()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {event.name}
                    </h2>

                    <div className="space-y-3 mb-8 flex-1">
                      <div className="flex items-center gap-3 text-gray-600 font-medium">
                        <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">
                          {new Date(event.startDate).toLocaleDateString()}
                          {event.time && event.time !== "Not Applicable" && ` • ${event.time}`}
                        </span>
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-3 text-gray-600">
                          <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-sm line-clamp-1">{event.location}</span>
                        </div>
                      )}
                    </div>

                    {event.registerLink ? (
                      <a
                        href={event.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-neutral-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all group-hover:shadow-lg"
                      >
                        Register Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <button disabled className="w-full py-4 bg-stone-100 text-stone-400 rounded-xl font-bold cursor-not-allowed text-sm uppercase tracking-wide">
                        Details Only
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Events;
