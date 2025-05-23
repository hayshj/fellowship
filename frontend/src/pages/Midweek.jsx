import React from "react";
import HomeNavbar from "../components/HomeNavbar";

function Midweek() {
  const cards = [
    {
      title: "NURSERY",
      description:
        "We offer a nursery for those kids under 3yr while mom and dad are attending their group or volunteering on Wednesday nights.",
    },
    {
      title: "KIDS",
      description:
        "Bring the kids to Wednesday Night Live for a high energy interactive discipleship ministry for kids 3yo thru 5th grade. Wednesdays @ 6:30.",
    },
    {
      title: "STUDENTS",
      description:
        "Students in 6th thru 12th grade have MDWK WORSHIP on Wednesdays. Starting at 6PM they have open gym and free food. At 6:30PM they move to the student room for interactive games, worship and teaching.",
    },
    {
      title: "WOMEN",
      description:
        "Ladies, our Women’s Ministry meets on Wednesdays at 6:30 in rooms 202 & 203. This is a wonderful time to grow closer to God and connect with other women at Fellowship.",
    },
    {
      title: "MEN",
      description:
        "Calling all men! Join Men’s Ministry at Fellowship on Wednesdays at 6:30PM for a time of fellowship and encouragement with other men as you study God’s Word together.",
    },
    {
      title: "SR. ADULTS",
      description:
        "Our senior adults meet on Wednesdays at 6:30PM in room 201 for a time of walking through God’s Word and praying for those we love and care for.",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />

      {/* Hero Section */}
      <div className="bg-black text-white py-24 flex flex-col items-center justify-center text-center px-4 relative">
        <div className="max-w-5xl text-center">
          <h1 className="text-6xl sm:text-6xl lg:text-9xl font-extrabold tracking-tight text-transparent stroke-text mb-4">
            MIDWEEK
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
            AT FELLOWSHIP
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-neutral-700">
        <h2 className="text-lg md:text-2xl mb-12 text-center">
          We have something for everyone in the family on Wednesday nights from September thru May. Bring the whole family and grow together!
        </h2>

        {/* Card Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between items-center text-center space-y-6"
            >
              <div className="bg-black text-white w-full aspect-[1/1] rounded-lg flex items-center justify-center text-4xl font-bold tracking-wide px-3 text-center">
                {card.title}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Midweek;
