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
    { label: "Monthly Tuition", amount: "$200", term: "per month" },
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-200 pr-2">DAY OUT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            A loving, Christ-centered program for ages 18 mo – Pre-K.
          </p>
        </div>
      </header>

      {/* Registration Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 rounded-[2rem] border border-stone-100 p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">Register for Mother's Day Out: 2026–2027</h3>
            <div className="w-16 h-1 bg-pink-400 mx-auto mt-4 mb-8 rounded-full"></div>

            <div className="space-y-5 text-gray-600 leading-relaxed text-center">
              <p>
                Thank you for your interest in joining us at Fellowship MDO! We look forward to welcoming your family to our program.
              </p>
              <p>
                Registration will be open to the public on <span className="font-bold text-gray-900">Tuesday, March 3rd at 10 AM</span>. Please register your child using the link that corresponds with your child's age as of September 1st, 2026.
              </p>
              <p>
                You will need a <span className="font-bold text-gray-900">Brightwheel account</span> to register. If you don't already have one, you will need to create one. We suggest doing this before registration opens.{' '}
                <a href="https://mybrightwheel.com/signup" target="_blank" rel="noopener noreferrer" className="text-pink-500 font-bold hover:underline">
                  Click here to set up an account.
                </a>
              </p>
              <p>
                If you have any questions, please contact our Director, Ms. Kaitlin, at{' '}
                <a href="mailto:kaitlin@fbrc.org" className="text-pink-500 font-bold hover:underline">kaitlin@fbrc.org</a>.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mt-10">
              <a href="https://schools.mybrightwheel.com/sign-in?redirect_path=forms/d306d232-5144-423b-aee7-91db3394b821/self-service" target="_blank" rel="noopener noreferrer" className="bg-white p-5 rounded-xl flex items-center justify-between border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <span className="font-bold text-gray-700">18 – 23 Months</span>
                <span className="text-sm font-bold text-pink-500 uppercase tracking-wide group-hover:translate-x-1 transition-transform">Register →</span>
              </a>
              <a href="https://schools.mybrightwheel.com/sign-in?redirect_path=forms/05c1b307-59e9-471e-9bb2-bac3a863a2c3/self-service" target="_blank" rel="noopener noreferrer" className="bg-white p-5 rounded-xl flex items-center justify-between border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <span className="font-bold text-gray-700">2 Year Old</span>
                <span className="text-sm font-bold text-pink-500 uppercase tracking-wide group-hover:translate-x-1 transition-transform">Register →</span>
              </a>
              <a href="https://schools.mybrightwheel.com/sign-in?redirect_path=forms/ef83dcc9-292a-454c-894e-11ffa1a254b6/self-service" target="_blank" rel="noopener noreferrer" className="bg-white p-5 rounded-xl flex items-center justify-between border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <span className="font-bold text-gray-700">3 Year Old</span>
                <span className="text-sm font-bold text-pink-500 uppercase tracking-wide group-hover:translate-x-1 transition-transform">Register →</span>
              </a>
              <a href="https://schools.mybrightwheel.com/sign-in?redirect_path=forms/d259fb87-b7bf-45b4-a127-183ac703dee6/self-service" target="_blank" rel="noopener noreferrer" className="bg-white p-5 rounded-xl flex items-center justify-between border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <span className="font-bold text-gray-700">4 Year Old</span>
                <span className="text-sm font-bold text-pink-500 uppercase tracking-wide group-hover:translate-x-1 transition-transform">Register →</span>
              </a>
            </div>
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
        </div>
      </section>
    </div>
  );
}

export default MDO;
