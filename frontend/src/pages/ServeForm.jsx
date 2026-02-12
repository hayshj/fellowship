import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { HandHeart, CheckCircle } from "lucide-react";

export default function ServeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    team: "",
  });

  const teams = [
    "Welcome Team",
    "Hospitality Team",
    "Worship Team",
    "Security Team",
    "Kids Ministry",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/serveForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      <HomeNavbar />

      {/* Hero Section */}
      <header className="bg-neutral-900 pt-[80px] pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in-up mt-8">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm">
            Get Involved
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
            SERVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-200 pr-2">INTEREST FORM</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Fill out the form below to let us know you're interested in joining one of our serve teams. We'll follow up with you soon!
          </p>
        </div>
      </header>

      {/* Form Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <div className="bg-stone-50 rounded-[2.5rem] p-8 md:p-12 border border-stone-100 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <HandHeart className="w-7 h-7 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Your Information</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-stone-200 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full border border-stone-200 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full border border-stone-200 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500 transition-all"
                  >
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-stone-200 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-stone-200 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Team of Interest</label>
                  <select
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    required
                    className="w-full border border-stone-200 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500 transition-all"
                  >
                    <option value="" disabled>Select a team</option>
                    {teams.map((team, index) => (
                      <option key={index} value={team}>{team}</option>
                    ))}
                  </select>
                </div>
                {error && (
                  <p className="text-red-600 font-semibold text-sm">{error}</p>
                )}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-stone-900 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-green-600 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-stone-50 rounded-[2.5rem] p-12 md:p-16 border border-stone-100 shadow-lg text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mx-auto">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Thank You!</h2>
              <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
                We'll be in touch soon about serving opportunities.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
