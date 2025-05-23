import React, { useEffect, useRef } from "react";
import HeroImage from "../assets/home/IMG_6942.jpg";
import Online from "../assets/home/family1.avif";
import HomeNavbar from "../components/HomeNavbar";

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
        <div className="relative z-10 space-y-6 mt-32 md:mt-48 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Plan Your Visit
          </h1>
          <p className="text-base hidden md:block sm:text-lg text-gray-200 max-w-xl">
            We’re excited to welcome you to Fellowship Church. From where to park to what to expect, we want to make your first visit as smooth and enjoyable as possible.
          </p>
          <button
            className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
            onClick={() => document.getElementById("what-to-expect").scrollIntoView({ behavior: "smooth" })}
          >
            What to Expect
          </button>
        </div>
      </div>

      {/* What to Expect Section */}
      <div id="what-to-expect" className="bg-white py-16 px-6 md:px-12 lg:px-24 scroll-mt-[80px]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Sundays Look Like at Fellowship
        </h2>

        <div className="space-y-10 max-w-4xl mx-auto text-lg text-gray-700">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">Worship Service</h3>
            <p>
              Our weekly worship service starts at <strong>11am</strong>. It’s a relaxed atmosphere
              with authentic worship and practical teaching.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">Preschool Place</h3>
            <p>
              While you’re worshiping, our dedicated volunteers and staff will provide a safe and nurturing
              environment for your preschooler.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">Kid’s Place</h3>
            <p>
              Kids in Kindergarten through 5th grade will be invited to Kid’s Place immediately after the worship
              portion of the service. Our Kids Ministry will provide them with a lesson that’s geared specially
              for them.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">Student Ministry</h3>
            <p>
              Students in 6th through 12th grade attend the 11am worship service on Sundays. Some even volunteer
              in the Preschool and Kids ministries during that time.{" "}
              <a href="/students" className="text-blue-600 underline">
                Click here
              </a>{" "}
              to find out more about other opportunities for your student to get connected.
            </p>
          </div>
        </div>
      </div>

      {/* Form Iframe */}
      <iframe
        ref={iframeRef}
        src="https://churchteams.com/m/Register.asp?a=VEpjTTJzUmdyRU09"
        width="100%"
        height="1350"
        style={{ border: "none", overflow: "hidden" }}
        title="Plan Your Visit"
      />

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
    </div>
  );
}

export default PlanYourVisit;
