import React from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import WorshipImg from "../assets/easter/worship.webp";
import MessageImg from "../assets/easter/message.webp";
import HuntImg from "../assets/easter/hunt.webp";

function Easter() {
  return (
    <div className="font-sans antialiased bg-[#151719] text-white">
      <HomeNavbar />

      {/* Hero Section */}
      <header className="relative bg-[#151719] py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(45,180,140,0.12)_0%,_transparent_60%)] blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[radial-gradient(circle_at_center,_rgba(45,130,180,0.1)_0%,_transparent_60%)] blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl space-y-6 animate-fade-in-up">
          <span className="font-serif italic text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight drop-shadow-lg block" style={{ color: '#E3C16F' }}>
            FELLOWSHIP
          </span>
          <h1 className="font-black text-6xl sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem] text-white tracking-tighter leading-[0.85] mt-[-10px] md:mt-[-20px] drop-shadow-2xl uppercase">
            Easter.
          </h1>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] md:text-xs font-black tracking-widest uppercase" style={{ color: '#E3C16F' }}>April 5th</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mt-2">Easter Services</h2>
            <div className="w-16 h-[2px] mx-auto mt-6" style={{ backgroundColor: '#E3C16F' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 9 AM Service */}
            <div className="border border-gray-200 p-8 md:p-12 bg-white hover:shadow-lg transition-all duration-300">
              <span className="text-[10px] font-black tracking-widest uppercase block mb-3" style={{ color: '#E3C16F' }}>First Service</span>
              <p className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">9:00 AM</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our first Easter morning service. Come early and celebrate the resurrection with music, worship, and a message of hope.
              </p>
            </div>

            {/* 11 AM Service */}
            <div className="border border-gray-200 p-8 md:p-12 bg-white hover:shadow-lg transition-all duration-300">
              <span className="text-[10px] font-black tracking-widest uppercase block mb-3" style={{ color: '#E3C16F' }}>Second Service</span>
              <p className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4">11:00 AM</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our second Easter morning service. Same great worship experience for those who prefer a later start to the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-100">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {/* Header */}
          <div className="text-center">
            <span className="text-[10px] md:text-xs font-black tracking-widest uppercase" style={{ color: '#E3C16F' }}>Experience Easter</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mt-2">What to Expect</h2>
            <div className="w-16 h-[2px] mx-auto mt-6" style={{ backgroundColor: '#E3C16F' }}></div>
          </div>

          {/* Worship */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="overflow-hidden relative order-1 lg:order-1">
              <img src={WorshipImg} alt="Worship at Fellowship" className="w-full h-auto aspect-[4/3] object-cover" />
            </div>
            <div className="order-2 lg:order-2 lg:pl-8">
              <span className="text-[10px] font-black tracking-widest uppercase block mb-3" style={{ color: '#E3C16F' }}>01. Worship</span>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-4">Engaging Worship</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Join us for a time of authentic and passionate worship as we celebrate the resurrection. Our services are designed to help you connect with God through uplifting music in a welcoming atmosphere.
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 lg:pr-8">
              <span className="text-[10px] font-black tracking-widest uppercase block mb-3" style={{ color: '#E3C16F' }}>02. Message</span>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-4">Inspiring Message</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Hear a powerful, hope-filled message about the meaning of Easter and how the resurrection changes everything. Whether you are exploring faith or have been a believer for years, this message is for you.
              </p>
            </div>
            <div className="overflow-hidden relative order-1 lg:order-2">
              <img src={MessageImg} alt="Easter Message" className="w-full h-auto aspect-[4/3] object-cover" />
            </div>
          </div>

          {/* Egg Hunt */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="overflow-hidden relative order-1 lg:order-1">
              <img src={HuntImg} alt="Easter Egg Hunt" className="w-full h-auto aspect-[4/3] object-cover" />
            </div>
            <div className="order-2 lg:order-2 lg:pl-8">
              <span className="text-[10px] font-black tracking-widest uppercase block mb-3" style={{ color: '#E3C16F' }}>03. For the Kids</span>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-4">Easter Egg Hunt</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                In between our two Easter services, we're hosting a fun-filled Easter egg hunt for kids at 10:15 AM. It's a great opportunity for families to connect and make memories together. Kids of all ages are welcome to participate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Section 
      <section className="py-24 px-6 text-center bg-[#151719]">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-4xl font-serif italic leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            "He is not here; he has risen, just as he said."
          </blockquote>
          <cite className="font-black tracking-widest uppercase not-italic text-sm" style={{ color: '#E3C16F' }}>
            Matthew 28:6
          </cite>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#151719] text-center relative overflow-hidden">
        <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,_rgba(227,193,111,0.06)_0%,_transparent_60%)] blur-[80px] pointer-events-none"></div>
        <div className="max-w-2xl mx-auto relative z-10 space-y-6">
          <span className="text-[10px] font-black tracking-widest uppercase block" style={{ color: '#E3C16F' }}>We'd love to see you</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Join Us<br />This Easter.</h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed">
            Whether it's your first time or you've been coming for years, Easter at Fellowship is a morning you won't forget.
          </p>
          <Link
            to="/plan-your-visit"
            className="inline-block px-10 py-4 font-black uppercase tracking-widest text-sm md:text-base text-[#151719] hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#E3C16F' }}
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Easter;
