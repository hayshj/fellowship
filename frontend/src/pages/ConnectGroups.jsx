import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { Link } from "react-router-dom";
import Connect from "../assets/connect.jpg";

function ConnectGroups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch("/api/connectGroups");
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error("Error fetching connect groups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  return (
    <>
      <HomeNavbar />
      {/* Hero Section */}
      <div 
        className="relative bg-black/20 text-white py-24 flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${Connect})`,
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
            CONNECT
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
            FIND YOUR PEOPLE, GROW TOGETHER
          </p>
        </div>
      </div>
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-black pt-[105px] min-h-screen">

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
        ) : groups.length === 0 ? (
          <div className="text-center text-xl font-semibold text-gray-600">
            No connect groups available right now. Please check back later!<br />
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">Back to Home</Link>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl shadow overflow-hidden pb-6"
              >
                <div className="aspect-video w-full">
                  <img
                    className="w-full h-full object-cover aspect-[16/9]"
                    src={group.image || "https://via.placeholder.com/500"}
                    alt={group.name}
                  />
                </div>

                <div className="p-5 text-center flex-1">
                  <h2 className="text-xl font-bold text-black uppercase mb-2">{group.name}</h2>
                  <p className="text-sm text-neutral-800 mb-1 font-medium">{group.location}</p>
                  <p className="text-sm text-neutral-600">
                    {group.day} {group.time && group.time !== "Not Applicable" ? `@ ${group.time}` : ""}
                  </p>
                  <p className="text-sm text-neutral-600 mt-1">{group.startDate}</p>
                  <p className="text-sm text-neutral-600 mt-2">{group.description}</p>
                </div>

                {group.registerLink && (
                  <a
                    href={group.registerLink}
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

export default ConnectGroups;
