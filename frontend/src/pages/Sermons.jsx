import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import HeroImage from "../assets/sermons.webp";
import { ChevronLeft, ChevronRight, Search, Play, Calendar, User, BookOpen, Loader2 } from "lucide-react";

function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [allSermons, setAllSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [latestLink, setLatestLink] = useState("");

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

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/sermon/latest");
        if (!res.ok) throw new Error("no latest");
        const { videoLink } = await res.json();
        setLatestLink(videoLink);
      } catch (err) {
        console.warn("Could not load latest sermon", err);
      }
    })();
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
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      <HomeNavbar />

      {/* Hero Section - Split Layout (Desktop) / Column (Mobile) */}
      <div className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[85vh]">

          {/* Content Side */}
          <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:pl-24 lg:pr-12 py-24 lg:py-0 relative z-10">
            <div className="space-y-8 animate-fade-in-up md:text-left text-center">
              <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-bold tracking-widest text-neutral-400 uppercase">
                Teaching Series
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none">
                SERMONS & <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">MESSAGES</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
                Explore our latest sermons and teaching series. Revisit a message and continue to grow in your faith throughout the week.
              </p>
              <div className="pt-4">
                <a
                  href={latestLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-cyan-200 transition-colors shadow-lg shadow-cyan-900/20"
                >
                  <Play className="w-5 h-5 fill-current" /> Watch Latest
                </a>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 relative h-[50vh] lg:h-auto">
            <div className="absolute inset-0 bg-neutral-900/20 z-10 lg:bg-gradient-to-r lg:from-neutral-900 lg:to-transparent"></div>
            <img
              src={HeroImage}
              alt="Sermons Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sermons Library Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Media Library</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">All Sermons</h3>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search by title, speaker, or scripture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-full shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg"
              />
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400">
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-500" />
              <p className="font-medium animate-pulse">Loading sermons...</p>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredSermons.map((sermon) => (
                  <div
                    key={sermon._id}
                    className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                  >
                    {/* Video Thumbnail / Placeholder */}
                    <div className="aspect-video w-full relative overflow-hidden bg-neutral-100">
                      {sermon.videoLink ? (
                        <iframe
                          className="w-full h-full pointer-events-none" // pointer-events-none ensures hover on parent works
                          src={sermon.videoLink.replace("watch?v=", "embed/") + "?controls=0&showinfo=0&rel=0"}
                          title={sermon.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          tabIndex="-1"
                        ></iframe>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-stone-200 text-stone-400">
                          <Play className="w-12 h-12" />
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <a
                        href={sermon.videoLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
                      >
                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                          <Play className="w-8 h-8 fill-current translate-x-1" />
                        </div>
                      </a>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-1">
                      <h2 className="text-xl font-bold text-gray-900 uppercase mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                        {sermon.title}
                      </h2>

                      <div className="mt-auto space-y-3 text-sm text-gray-500">
                        {sermon.scripture && (
                          <div className="flex items-start gap-3">
                            <BookOpen className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="font-medium text-gray-700">{sermon.scripture}</span>
                          </div>
                        )}
                        {sermon.speaker && (
                          <div className="flex items-center gap-3">
                            <User className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span>{sermon.speaker}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span>
                            {new Date(sermon.date).toLocaleDateString("en-US", {
                              timeZone: "UTC",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredSermons.length === 0 && (
                <div className="text-center py-20 bg-white rounded-[2rem] border border-stone-100">
                  <p className="text-xl text-gray-500 font-medium">No messages found matching your search.</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-4 text-blue-600 font-bold hover:underline"
                  >
                    Clear Search
                  </button>
                </div>
              )}

              {/* Pagination */}
              {!isSearching && (
                <div className="mt-16 flex justify-center items-center gap-6">
                  <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className={`p-4 rounded-full transition-all ${page === 1
                      ? "bg-stone-100 text-stone-300 cursor-not-allowed"
                      : "bg-white text-gray-900 shadow-md hover:bg-stone-50 hover:shadow-lg hover:-translate-x-1"
                      }`}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <span className="text-lg font-bold text-gray-500 bg-white px-6 py-2 rounded-full shadow-sm border border-stone-100">
                    Page <span className="text-gray-900">{page}</span> of {totalPages}
                  </span>

                  <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className={`p-4 rounded-full transition-all ${page === totalPages
                      ? "bg-stone-100 text-stone-300 cursor-not-allowed"
                      : "bg-white text-gray-900 shadow-md hover:bg-stone-50 hover:shadow-lg hover:translate-x-1"
                      }`}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Sermons;
