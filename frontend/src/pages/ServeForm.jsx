import React, { useState } from "react";
import WhiteNavbar from "../components/WhiteNavbar";

export default function ServeForm() {
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd send the formData to your backend or service
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-black min-h-screen pb-12">
      <WhiteNavbar />

      <div className="pt-32 px-6 md:px-12 lg:px-48">
        <h1 className="text-4xl font-bold text-center mb-6">Serve Interest Form</h1>
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-700 mb-12">
          Fill out the form below to let us know you're interested in joining one of our serve teams. We'll follow up with you soon!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit}   className="space-y-6 max-w-2xl w-full mx-auto">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Gender</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2"
                >
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Team of Interest</label>
              <select
                name="team"
                value={formData.team}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="" disabled>Select a team</option>
                {teams.map((team, index) => (
                  <option key={index} value={team}>{team}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-900 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center text-xl text-green-600 font-semibold">Thank you! We’ll be in touch soon about serving opportunities.</div>
        )}
      </div>
    </div>
  );
}
