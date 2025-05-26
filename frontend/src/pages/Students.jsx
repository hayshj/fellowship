import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import StudentsImage from "../assets/students.jpg"; // Assuming you have an image for the background


function Students() {
  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />
      {/* Hero Section */}
      <div 
        className="relative text-white py-24 flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${StudentsImage})`,
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
            STUDENTS
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
            WHERE 6TH–12TH GRADERS FIND PURPOSE & COMMUNITY
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-neutral-800 space-y-16">
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">MIDWEEK SERVICES</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Every Wednesday night, students gather for high-energy worship, relevant teaching, and small group connections. Doors open at 6:00PM.
          </p>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">CAMPS & RETREATS</h2>
          <p className="max-w-3xl mx-auto text-lg">
            We offer unforgettable camps and retreats each year where students can grow in their faith, build friendships, and have tons of fun.
          </p>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">STAY CONNECTED</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Follow us on social media or click below to get plugged in.
          </p>
          <a
            href="https://linktr.ee/fellowshipstudents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition"
          >
            Connect Now
          </a>
        </section>
      </div>
    </div>
  );
}

export default Students;
