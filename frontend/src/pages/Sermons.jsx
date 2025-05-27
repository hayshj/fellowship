import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import HeroImage from "../assets/home/IMG_6971-2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [allSermons, setAllSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch paginated sermons for normal display
  useEffect(() => {
    const fetchSermons = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/sermon?page=${page}&limit=6`);
        const data = await response.json();
        setSermons(data.sermons);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Failed to fetch sermons:", error);
        setSermons([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSermons();
  }, [page]);

  // Fetch all sermons for search
  useEffect(() => {
    const fetchAllSermons = async () => {
      try {
        const response = await fetch("/api/sermon/all");
        const data = await response.json();
        if (Array.isArray(data)) {
          setAllSermons(data);
        }
      } catch (error) {
        console.error("Failed to fetch all sermons:", error);
      }
    };

    fetchAllSermons();
  }, []);

  const isSearching = searchQuery.trim().length > 0;

  const filteredSermons = isSearching
    ? allSermons.filter((sermon) =>
        [sermon.title, sermon.speaker, sermon.scripture]
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : sermons;

  return (
    <div>
      <HomeNavbar />

      {/* Hero Section */}
      <div className="h-screen bg-[#121212] relative text-white">
        <div className="h-full flex items-center justify-start px-6 md:px-12 lg:pl-16 lg:pr-[35%]">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Sermons & Messages
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto md:mx-0">
              Explore our latest sermons and teaching series. Whether you missed a Sunday or want to revisit a message, everything is here to help you grow in faith and understanding.
            </p>
            <button className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              Watch the Latest Sermon
            </button>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 h-full max-w-[30%]">
          <img src={HeroImage} alt="Web Hero" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Sermons Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
        <h1 className="text-4xl font-bold text-center mb-10">All Sermons</h1>

        {/* Search Bar */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search by title, speaker, or scripture..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading sermons...</p>
        ) : (
          <>
            <div className="grid gap-10 px-6 md:px-12 lg:px-24 md:grid-cols-2 lg:grid-cols-3">
              {filteredSermons.map((sermon) => (
                <div
                  key={sermon._id}
                  className="flex flex-col bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  {sermon.videoLink ? (
                    <div className="aspect-video w-full">
                      <iframe
                        className="w-full h-full"
                        src={sermon.videoLink.replace("watch?v=", "embed/")}
                        title={sermon.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="aspect-video bg-gray-300 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-12 h-12 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6l4 2M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="p-5 text-center">
                    <h2 className="text-xl font-bold text-black uppercase mb-2">{sermon.title}</h2>
                    <p className="text-sm text-neutral-800 mb-1 font-medium">{sermon.scripture}</p>
                    <p className="text-sm text-neutral-600">{sermon.speaker}</p>
                    <p className="text-sm text-neutral-600">
                      {new Date(sermon.date).toLocaleDateString("en-US", {
                        timeZone: "UTC",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {filteredSermons.length === 0 && (
                <p className="col-span-full text-center text-gray-500">
                  No sermons match your search.
                </p>
              )}
            </div>

            {/* Pagination */}
            {!isSearching && totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-4">
                {page > 1 && (
                  <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="p-2 rounded bg-gray-200 hover:bg-gray-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                <span className="text-lg font-medium">
                  Page {page} of {totalPages}
                </span>

                {page < totalPages && (
                  <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    className="p-2 rounded bg-gray-200 hover:bg-gray-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Sermons;
