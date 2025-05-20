import React from "react";
import WhiteNavbar from "../components/WhiteNavbar";

function Events() {
  const events = [
    {
      id: 1,
      title: "Community BBQ",
      date: "2025-06-01T12:00:00Z",
      location: "Park Pavilion",
      image: "https://via.placeholder.com/500",
    },
    {
      id: 2,
      title: "Worship Night",
      date: "2025-06-10T18:30:00Z",
      location: "Church Auditorium",
      image: "https://via.placeholder.com/500",
    },
    {
      id: 3,
      title: "Volunteer Training",
      date: "2025-06-15T09:00:00Z",
      location: "Community Center",
      image: "https://via.placeholder.com/500",
    },
  ];

  return (
    <>
        <WhiteNavbar />
        <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-black pt-[105px]">
            <h1 className="text-4xl font-bold text-center mb-10">Upcoming Events</h1>

            <div className="grid gap-10 px-6 md:px-12 lg:px-24 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="flex flex-col bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                    >
                        <div className="aspect-video w-full">
                            <img
                                className="w-full h-full object-cover"
                                src={event.image}
                                alt={event.title}
                            />
                        </div>

                        <div className="p-5 text-center">
                            <h2 className="text-xl font-bold text-black uppercase mb-2">{event.title}</h2>
                            <p className="text-sm text-neutral-800 mb-1 font-medium">{event.location}</p>
                            <p className="text-sm text-neutral-600">
                                {new Date(event.date).toLocaleDateString("en-US", {
                                    timeZone: "UTC",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                            <p className="text-sm text-neutral-600">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  );
}

export default Events;
