import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import { Sprout, Newspaper, HandCoins, Lightbulb, Users, HeartHandshake, Ticket, Calendar, RefreshCcw, MonitorSmartphone } from 'lucide-react';

function HubCentral() {
  const cards = [
    { title: "I'M NEW", icon: <Sprout size={40} className="text-white" />, link: "https://churchteams.com/m/Register.asp?a=OExXKy9ZY3Vqamc9" },
    { title: "DIGITAL BULLETIN", icon: <Newspaper size={40} className="text-white" />, link: "https://i.bltn.io/fellowship/FjE71l" },
    { title: "GIVE", icon: <HandCoins size={40} className="text-white" />, link: "https://churchteams.com/m/Give.asp?oID=13823&aID=YUVxR1c3S2N2SlhoTHM2bmNxUmdqUkpxa1JRdkJyUzU%3D" },
    { title: "MAKE A DECISION", icon: <Lightbulb size={40} className="text-white" />, link: "https://churchteams.com/m/Register.asp?a=K0gvalZKS2tmbU09" },
    { title: "CONNECT GROUPS", icon: <Users size={40} className="text-white" />, link: "/connect" },
    { title: "PARTNERSHIP", icon: <HeartHandshake size={40} className="text-white" />, link: "https://churchteams.com/m/Register.asp?a=NVNIVnFNWUs5Nlk9" },
    { title: "EVENTS", icon: <Ticket size={40} className="text-white" />, link: "/events" },
    { title: "MIDWEEK", icon: <Calendar size={40} className="text-white" />, link: "#" },
    { title: "UPDATE INFO", icon: <RefreshCcw size={40} className="text-white" />, link: "https://www.t2ll.com/auth/sms-redirect?phoneNumber=9728073070&msg=ME" },
    { title: "SOCIAL MEDIA", icon: <MonitorSmartphone size={40} className="text-white" />, link: "#" }
  ];

  return (
    <div>
      {/* Navbar Section */}
      <HomeNavbar />

      {/* Hero Section */}
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <div className="max-w-5xl text-center">
          <h1 className="text-6xl sm:text-6xl lg:text-9xl font-extrabold tracking-tight text-transparent stroke-text mb-4">
            HUB CENTRAL
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
            THE ONE PLACE TO GET CONNECTED
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-neutral-700">
        <h2 className="text-lg md:text-2xl mb-12 text-center">
          Welcome to Fellowship Church Hub Central. This is the place to get all
          the information you need to get connected and start moving your faith
          forward with Fellowship Church.
        </h2>

        {/* Card Grid */}
        <div className="grid gap-10 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
          {cards.map((card, index) => (
            <a
              href={card.link}
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Square Icon */}
              <div
                className="bg-black text-white flex items-center justify-center rounded-lg text-4xl font-bold w-full max-w-[80px] aspect-square"
              >
                {card.icon}
              </div>

              {/* Title */}
              <p className="mt-3 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                {card.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HubCentral;
