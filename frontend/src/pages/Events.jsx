import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        
        // Filter out events where the start date has already passed
        const futureEvents = data.filter(event => {
          const startDate = new Date(event.startDate);  // Parse the start date
          const today = new Date();
          // Set time to 00:00:00 to avoid time comparisons
          today.setHours(0, 0, 0, 0);
          return startDate >= today;  // Only keep events with future start dates
        });

        setEvents(futureEvents);  // Update the state with future events
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <HomeNavbar />
      {/* Hero Section */}
      <div className="bg-black text-white py-24 flex flex-col items-center justify-center text-center px-4 relative">
        <div className="max-w-5xl text-center">
          <h1 className="text-6xl sm:text-6xl lg:text-9xl font-extrabold tracking-tight text-transparent stroke-text mb-4">
            EVENTS
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
            DON’T MISS WHAT’S HAPPENING AT FELLOWSHIP
          </p>
        </div>
      </div>
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-black pt-[105px] min-h-screen">
      

        {/* Skeleton loader */}
        {loading ? (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex flex-col bg-gray-200 rounded-2xl shadow animate-pulse">
                <div className="aspect-video w-full bg-gray-300"></div>
                <div className="p-5 text-center flex-1">
                  <div className="bg-gray-300 h-6 w-3/4 mb-2"></div>
                  <div className="bg-gray-300 h-4 w-1/2 mb-2"></div>
                  <div className="bg-gray-300 h-4 w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : events.length === 0 ? (
          // Show a message if there are no events
          <div className="text-center text-xl font-semibold text-gray-600">
            No upcoming events at the moment. Please check back later!<br />
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">Back to Home</Link>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl shadow overflow-hidden pb-6"
              >
                <div className="aspect-video w-full">
                  <img
                    className="w-full h-full object-cover aspect-[16/9]"
                    src={event.image || "https://via.placeholder.com/500"}
                    alt={event.name}
                  />
                </div>

                <div className="p-5 text-center flex-1">
                  <h2 className="text-xl font-bold text-black uppercase mb-2">{event.name}</h2>
                  <p className="text-sm text-neutral-800 mb-1 font-medium">{event.location}</p>
                  <p className="text-sm text-neutral-600">
                    {event.startDate}
                    {event.time && event.time !== "Not Applicable" ? ` @ ${event.time}` : ""}
                  </p>  {/* Conditionally add @ time only if time is not "Not Applicable" */}
                </div>

                {event.registerLink && (
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white w-11/12 mx-auto py-3 px-6 text-center text-sm font-semibold rounded-md hover:bg-neutral-900 transition"
                  >
                    Register
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Events;
