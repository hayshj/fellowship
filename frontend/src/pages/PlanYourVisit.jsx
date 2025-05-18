import React from "react";
import HeroImage from "../assets/home/IMG_6942.jpg";
import HomeNavbar from "../components/HomeNavbar";

function PlanYourVisit() {
  return (
    <div>
      {/* Navbar Section */}
      <HomeNavbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-no-repeat flex items-center justify-center text-white text-center px-6 md:justify-start md:text-left min-h-[500px]"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: "top center",
        }}
      >
        {/* Hero Text */}
        <div className="relative z-10 space-y-6 mt-32 md:mt-48 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Plan Your Visit
          </h1>
          <p className="text-base hidden md:block sm:text-lg text-gray-200 max-w-xl">
            We’re excited to welcome you to Fellowship Church. From where to park to what to expect, we want to make your first visit as smooth and enjoyable as possible.
          </p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
            What to Expect
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What Sundays Look Like
        </h2>
        {/* You can add card components here later */}
      </div>
    </div>
  );
}

export default PlanYourVisit;
