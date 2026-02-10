import React, { useEffect, useRef } from "react";
import HeroImage from "../assets/pyv.webp";
import Online from "../assets/home/family1.webp";
import HomeNavbar from "../components/HomeNavbar";
import { Music, Baby, Backpack, ChevronDown } from 'lucide-react';

function PlanYourVisit() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.style.visibility = "hidden";
      iframe.style.position = "absolute";
      iframe.style.top = "-9999px";

      const handleLoad = () => {
        iframe.style.visibility = "visible";
        iframe.style.position = "static";
        iframe.style.top = "auto";
      };

      iframe.addEventListener("load", handleLoad);

      return () => {
        iframe.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900">
      {/* Navbar Section */}
      <HomeNavbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat group overflow-hidden"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

        <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm w-fit mb-6">
            Welcome
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-8 max-w-4xl">
            PLAN YOUR<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100 pr-2">VISIT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed mb-10">
            We’re excited to welcome you to Fellowship Church. We want to make your first visit as smooth and enjoyable as possible.
          </p>
          <button
            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-all transform hover:scale-105 w-fit flex items-center gap-2"
            onClick={() => document.getElementById("what-to-expect").scrollIntoView({ behavior: "smooth" })}
          >
            What to Expect <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* What to Expect Section */}
      <div id="what-to-expect" className="py-24 px-6 md:px-12 lg:px-24 bg-white scroll-mt-[80px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Sundays at Fellowship</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">What to Expect</h3>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Worship */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                <Music className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Worship Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our weekly worship service starts at <strong>11am</strong>. It’s a relaxed atmosphere with authentic worship and practical teaching.
              </p>
            </div>

            {/* Preschool */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <Baby className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Preschool Place</h3>
              <p className="text-gray-600 leading-relaxed">
                While you’re worshiping, our dedicated volunteers and staff will provide a safe and nurturing environment for your preschooler.
              </p>
            </div>

            {/* Kids */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                <Backpack className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kid’s Place</h3>
              <p className="text-gray-600 leading-relaxed">
                Kids in K-5th grade are invited to Kid’s Place after worship for a lesson geared specially for them.
              </p>
            </div>
          </div>

          {/* Students Note */}
          <div className="mt-16 bg-neutral-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Student Ministry (6th - 12th Grade)</h3>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Students attend the 11am worship service on Sundays. Many also volunteer in our ministries.
                We have special mid-week services just for them!
              </p>
              <a href="/students" className="inline-block border-b border-orange-500 text-orange-400 font-bold tracking-wide uppercase hover:text-white hover:border-white transition-colors pb-1">Learn More About Students</a>
            </div>
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </div>

      {/* Form Section - Integrated */}
      <div className="py-24 bg-stone-100 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 md:p-12 bg-white text-center border-b border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900">Pre-Register Check-In</h2>
              <p className="text-gray-500 mt-2">Save time on Sunday by letting us know you're coming!</p>
            </div>
            <div className="relative min-h-[600px] bg-white">
              <iframe
                ref={iframeRef}
                src="https://churchteams.com/m/Register.asp?a=VEpjTTJzUmdyRU09"
                width="100%"
                height="1350"
                style={{ border: "none", overflow: "hidden" }}
                title="Plan Your Visit"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Online Church Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: `url(${Online})` }} // Reusing hero image for consistent vibe, or switch to Online image if needed
      >
        <div className="absolute inset-0 bg-neutral-900/80 z-0"></div>
        <div className="relative z-10 max-w-2xl space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tighter">
            JOIN US RELAXED
          </h2>
          <p className="text-xl text-gray-300">
            Can’t make it in person? No problem.
          </p>
          <button
            className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all"
            onClick={() => window.location.href = "/live"}
          >
            Watch Online
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanYourVisit;
