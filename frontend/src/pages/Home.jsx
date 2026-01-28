import React, { useEffect, useState } from "react";
import HeroImage from "../assets/home/BO5A7112.webp";
import HomeNavbar from "../components/HomeNavbar";
import Service from "../assets/home/IMG_6942.webp";
import ConnectGroups from "../assets/home/lightstock_60246_small_scott_.webp";
import Serve from "../assets/home/serve.webp";
import Online from "../assets/home/family1.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, PlayCircle, Calendar, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

function Home2() {

  const [latestSermon, setLatestSermon] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchLatestSermon = async () => {
      try {
        const response = await fetch("/api/sermon/latest");
        const data = await response.json();
        setLatestSermon(data);
      } catch (error) {
        console.error("Error fetching latest sermon:", error);
      }
    };

    fetchLatestSermon();
  }, []);

  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900">
      {/* Navbar Section */}
      <HomeNavbar />

      {/* Hero Section */}
      <header className="relative w-full h-screen overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: `url(${HeroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm">
              Welcome Home
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
              FELLOWSHIP<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100">CHURCH</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              to="/plan-your-visit"
              className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider overflow-hidden rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">Plan Your Visit <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></span>
              <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </Link>
            <Link
              to="/live"
              className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Watch Live
            </Link>
          </div>
        </div>
      </header>


      {/* Cards Section - Creative Layout */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Get Involved</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Connect With Us</h3>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sunday Services Card */}
            <Link to="/plan-your-visit" className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer">
              <img src={Service} alt="Sunday Service" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Sunday Services</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                  Join us every Sunday at 11AM for worship, teaching, and community.
                </p>
                <span className="text-orange-300 font-bold tracking-wide text-sm uppercase flex items-center gap-2">Learn More <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>

            {/* Connect Groups Card */}
            <Link to="/connect" className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer lg:mt-12">
              <img src={ConnectGroups} alt="Connect Groups" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 text-white">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Connect Groups</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                  Connect with others through connect groups that meet weekly across the city.
                </p>
                <span className="text-blue-300 font-bold tracking-wide text-sm uppercase flex items-center gap-2">Find a Group <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>

            {/* Serve Card */}
            <Link to="/serve" className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer">
              <img src={Serve} alt="Serve" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Serve</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                  Discover opportunities to serve in our church and local community.
                </p>
                <span className="text-green-300 font-bold tracking-wide text-sm uppercase flex items-center gap-2">Get Involved <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Online Church Section - Modern Split */}
      <section className="relative w-full py-0">
        <div className="flex flex-col md:flex-row h-[70vh] md:h-[60vh]">
          <div className="w-full md:w-1/2 relative overflow-hidden">
            <img src={Online} alt="Online Church" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-neutral-900/20"></div>
          </div>
          <div className="w-full md:w-1/2 bg-neutral-900 text-white flex items-center justify-center p-12 lg:p-24 relative overflow-hidden">
            <div className="max-w-xl z-10">
              <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-none">JOIN US<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ONLINE</span></h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Can’t make it in person? No problem. Experience our Sunday services live from anywhere in the world.
              </p>
              <button
                className="group flex items-center gap-4 text-xl font-bold border-b-2 border-white pb-2 hover:text-blue-400 hover:border-blue-400 transition-all"
                onClick={() => window.location.href = "/live"}
              >
                Watch Live Stream <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>

      {/* Events Section - Dark Themed */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-900 z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Happening Soon</h2>
              <p className="text-neutral-400 text-lg">Mark your calendars for these upcoming events.</p>
            </div>
            <div className="flex gap-4 mt-8 md:mt-0">
              <button ref={(el) => (window.prevEl = el)} className="p-4 rounded-full border border-neutral-700 hover:bg-white hover:text-black transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button ref={(el) => (window.nextEl = el)} className="p-4 rounded-full border border-neutral-700 hover:bg-white hover:text-black transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="w-full px-2">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              navigation={{
                prevEl: window.prevEl,
                nextEl: window.nextEl
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = window.prevEl;
                swiper.params.navigation.nextEl = window.nextEl;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3.5 },
              }}
              className="w-full !pb-12"
            >
              {events.map((event, index) => (
                <SwiperSlide key={index}>
                  <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-center mt-8">
            <Link to="/events" className="text-sm font-bold tracking-widest text-neutral-400 hover:text-white uppercase transition-colors border-b border-transparent hover:border-white pb-1">
              View All Calendar Events
            </Link>
          </div>
        </div>
      </section>

      {/* Sermon Section - Minimalist */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-100">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Decorative bg */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full -mr-32 -mt-32 z-0"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div>
                <span className="text-orange-600 font-bold tracking-widest text-xs uppercase bg-orange-100 px-3 py-1 rounded-full">Latest Message</span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                  {latestSermon?.title || "Loading..."}
                </h2>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-600">
                  <span className="font-semibold">{latestSermon?.speaker || ""}</span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <span>{latestSermon?.scripture || ""}</span>
                </div>
              </div>

              <Link
                to="/sermons"
                className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-neutral-800 transition shadow-lg hover:shadow-xl"
              >
                Browse All Messages
              </Link>
            </div>

            <div className="flex-1 w-full relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video relative group">
                {latestSermon?.videoLink ? (
                  <iframe
                    className="w-full h-full"
                    src={latestSermon.videoLink.replace("watch?v=", "embed/")}
                    title="This Week's Message"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Loading video...
                  </div>
                )}
              </div>
              {/* Shadow element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-neutral-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home2;