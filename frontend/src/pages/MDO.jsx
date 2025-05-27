import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import ChildrenImage from "../assets/childrensmain.jpg"; // Assuming you have an image for the background

function MDO() {
  return (
    <div>
      <HomeNavbar />

      {/* Hero Section */}
      <div 
        className="relative bg-black/20 text-white py-24 flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${ChildrenImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl text-center">
          <h1 className="text-6xl sm:text-6xl lg:text-9xl font-extrabold tracking-tight text-white mb-4">
            MOTHER'S DAY OUT
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
            A LOVING, CHRIST-CENTERED PROGRAM FOR AGES 18 MO – PRE-K
          </p>
        </div>
      </div>

      {/* Age Group Info */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-neutral-800 space-y-12">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold">Availability by Age Group</h3>
          <ul className="space-y-2 text-lg">
            <li><strong>18 - 23 months:</strong> Full — accepting waitlist registrations.</li>
            <li><strong>2 year olds:</strong> Full — waitlist closed.</li>
            <li><strong>3 year olds:</strong> Full — waitlist closed.</li>
            <li><strong>4 year olds:</strong> Full — accepting waitlist registrations.</li>
          </ul>
        </div>

        {/* About MDO */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">About MDO</h2>
          <p className="text-lg max-w-4xl mx-auto text-center">
            Mother’s Day Out is a ministry of Fellowship Church and a Christian program for children ages 18 months through Pre-K. We provide a safe, nurturing environment that promotes the physical, social, emotional, educational, and spiritual development of every child.
          </p>
          <ul className="max-w-3xl mx-auto list-disc list-inside text-lg space-y-2">
            <li>9 AM – 2 PM on Tuesdays and Thursdays</li>
            <li>Follows the RCISD school calendar</li>
            <li>Focus on faith, foundational academics, and kindergarten readiness</li>
            <li>Support and encouragement for parents and families</li>
          </ul>
        </div>

        {/* Tuition and Fees */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Tuition & Fees (2025–2026)</h2>
          <ul className="text-lg space-y-1">
            <li><strong>Registration:</strong> $100</li>
            <li><strong>Fall Supply Fee:</strong> $75</li>
            <li><strong>Spring Supply Fee:</strong> $75</li>
            <li><strong>Monthly Tuition:</strong> $190</li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-6">Questions? Email our Director, Ms. Kaitlin, at <a className="text-blue-600 underline" href="mailto:kaitlin@fbrc.org">kaitlin@fbrc.org</a>.</p>
        <form className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-md border border-gray-300"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-gray-300"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MDO;
