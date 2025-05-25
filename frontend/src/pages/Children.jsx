import React from "react";
import HomeNavbar from "../components/HomeNavbar";

function Children() {
  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />

      {/* Hero Section */}
      <div className="bg-black text-white py-24 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-5xl text-center">
          <h1 className="text-6xl sm:text-6xl lg:text-9xl font-extrabold tracking-tight text-transparent stroke-text mb-4">
            KIDS
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
            NURSERY THROUGH 5TH GRADE — SAFE, FUN, JESUS-CENTERED
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-neutral-800 space-y-16">
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">WEEKEND SERVICES</h2>
          <p className="max-w-3xl mx-auto text-lg">
            During every service, our kids environments are full of fun activities, worship, and biblical teaching tailored to each age group—from infants to 5th grade.
          </p>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">CHECK-IN & SECURITY</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Your child's safety is our top priority. All volunteers are background-checked, and our secure check-in system makes sure your child is in the right room and cared for every step of the way.
          </p>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">PARTNER WITH US</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Whether you're a parent wanting to learn more, or someone interested in serving, we’d love to connect with you!
          </p>
          <a
            href="https://churchteams.com/m/Register.asp?a=CHILDREN_SIGNUP_FORM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition"
          >
            Get Connected
          </a>
        </section>
      </div>
    </div>
  );
}

export default Children;
