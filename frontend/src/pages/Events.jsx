import React, { useEffect, useState } from "react";
import WhiteNavbar from "../components/WhiteNavbar";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <WhiteNavbar />
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-black pt-[105px]">
        <h1 className="text-4xl font-bold text-center mb-10">Upcoming Events</h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden pb-6"  // Added padding-bottom here
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
                <p className="text-sm text-neutral-600">{`${event.day}${event.time ? ` @ ${event.time}` : ""}`}</p>
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
      </div>
    </>
  );
}

export default Events;
