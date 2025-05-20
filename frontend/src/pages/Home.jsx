import React, { useEffect, useState } from "react";
import HeroImage from "../assets/home/IMG_6780.jpg";
import HomeNavbar from "../components/HomeNavbar";
import Service from "../assets/home/IMG_6942.jpg";
import ConnectGroups from "../assets/home/lightstock_60246_small_scott_.jpg";
import Serve from "../assets/home/serve.jpg";
import Online from "../assets/home/family1.avif";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Catm from "../assets/home/events/catm.jpg";
import Ce from "../assets/home/events/ce.jpg";
import Easter from "../assets/home/events/easter.jpg";
import Mao from "../assets/home/events/mao.jpg";
import Now from "../assets/home/events/now.jpg";

function Home() {

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
    <div>
      {/* Navbar Section */}
      <HomeNavbar />

      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center px-6 md:justify-start md:text-left min-h-[500px]"
        style={{ 
          backgroundImage: `url(${HeroImage})`, 
          height: "100svh"
        }}
      >
        {/* Hero Text */}
        <div className="relative z-10 space-y-6 mt-32 md:mt-48 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Welcome to Fellowship Church
          </h1>
          <p className="text-base hidden md:block sm:text-lg text-gray-200 max-w-xl">
            A place where faith grows, community thrives, and lives are changed.
            Join us this Sunday and experience authentic worship and teaching.
          </p>
          <button 
            className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
            onClick={() => window.location.href = "/plan-your-visit"}
          >
            Plan Your Visit
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Connect With Us
        </h2>

        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col transition hover:-translate-y-1 hover:shadow-xl group flex-1">
            <div className="aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg">
              <img src={Service} alt="Sunday Service" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Sunday Services</h3>
            <p className="text-gray-700">
              Join us every Sunday at 9AM and 11AM for worship, teaching, and community.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col transition hover:-translate-y-1 hover:shadow-xl group flex-1">
            <div className="aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg bg-gray-300">
              <img src={ConnectGroups} alt="Connect Groups" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Connect Groups</h3>
            <p className="text-gray-700">
              Connect with others through connect groups that meet weekly across the city.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col transition hover:-translate-y-1 hover:shadow-xl group flex-1">
            <div className="aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg">
              <img src={Serve} alt="Serve" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Serve</h3>
            <p className="text-gray-700">
              Discover opportunities to serve in our church and local community.
            </p>
          </div>
        </div>
      </div>

      {/* Online Church Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: `url(${Online})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0"></div>
        <div className="relative z-10 max-w-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Join Us Online
          </h2>
          <p className="text-base sm:text-lg text-gray-200">
            Can’t make it in person? Experience our Sunday services live from anywhere.
          </p>
          <button
            className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
            onClick={() => window.location.href = "/live"}
          >
            Watch Online
          </button>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-neutral-800 text-white overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          What's Happening at Fellowship Church
        </h2>

        <div className="relative w-full">
          {/* Chevron Left */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button
              ref={(el) => (window.prevEl = el)}
              className="text-white text-3xl md:text-4xl p-2 sm:p-3 md:p-4 transition-transform"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </button>
          </div>

          {/* Chevron Right */}
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button
              ref={(el) => (window.nextEl = el)}
              className="text-white text-3xl md:text-4xl p-2 sm:p-3 md:p-4 transition-transform"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </button>
          </div>

          {/* Swiper Carousel */}
          <div className="w-full pl-12 pr-12 sm:pl-16 sm:pr-16">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
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
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
              className="w-full"
            >
              {events.map((event, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-xl aspect-[16/9] overflow-hidden shadow-lg transition-transform duration-300 ease-in-out">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* More Events Button */}
        <div className="flex justify-center mt-10">
          <button 
            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
            onClick={() => window.location.href = "/events"}
          >
            More Events
          </button>
        </div>
      </div>

      {/* Sermon Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-neutral-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-neutral-500 text-lg mb-2">This Week's Message</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {latestSermon?.title || "Loading..."}
            </h2>
            <p className="text-lg text-neutral-500 font-semibold mb-1">
              {latestSermon?.scripture || ""}
            </p>
            <p className="text-lg text-neutral-500 font-semibold mb-6">
              {latestSermon?.speaker || ""}
            </p>
            <button 
              onClick={() => window.location.href = "/sermons"}
              className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition font-semibold"
            >
              ALL MESSAGES
            </button>
          </div>

          {/* Right YouTube Embed */}
          <div className="flex-1 w-full aspect-video max-w-2xl rounded-xl overflow-hidden shadow-lg">
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
        </div>
      </section>
    </div>
  );
}

export default Home;
