import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import {
  Sprout,
  Newspaper,
  HandCoins,
  Lightbulb,
  Users,
  HeartHandshake,
  Ticket,
  Calendar,
  RefreshCcw,
  MonitorSmartphone,
} from "lucide-react";

function HubCentral() {
  const cards = [
    {
      title: "I'M NEW",
      description:
        "We would love to get to know you and give you more info about Fellowship. Click the link to fill out our digital connection card and we will have a gift waiting for you at the end of the service.",
      buttonText: "I'm New",
      icon: <Sprout size={80} className="text-white" />,
      link: "https://churchteams.com/m/Register.asp?a=OExXKy9ZY3Vqamc9",
    },
    {
      title: "DIGITAL BULLETIN",
      description:
        "Click the button to get signed up for our weekly digital bulletin. Click here for today’s bulletin. (Only works on mobile devices)",
      buttonText: "Get Bulletin",
      icon: <Newspaper size={80} className="text-white" />,
      link: "https://i.bltn.io/fellowship/FjE71l",
    },
    {
      title: "GIVE",
      description:
        "The ministries of Fellowship Church are made possible by the generosity of those that give. Find out how you can set up automatically recurring or one-time contributions.",
      buttonText: "Give Now",
      icon: <HandCoins size={80} className="text-white" />,
      link: "https://churchteams.com/m/Give.asp?oID=13823&aID=YUVxR1c3S2N2SlhoTHM2bmNxUmdqUkpxa1JRdkJyUzU%3D",
    },
    {
      title: "MAKE A DECISION",
      description:
        "If you are making a decision to move your faith forward, we would love to help you. Let us know what decision you are making and we will have one of our pastors follow up with you.",
      buttonText: "Make a Decision",
      icon: <Lightbulb size={80} className="text-white" />,
      link: "https://churchteams.com/m/Register.asp?a=K0gvalZKS2tmbU09",
    },
    {
      title: "CONNECT GROUPS",
      description:
        "Connect Groups are one of the most important things we do at Fellowship Church. Try a few groups and find one that fits your family.",
      buttonText: "Find a Group",
      icon: <Users size={80} className="text-white" />,
      link: "/connect",
    },
    {
      title: "PARTNERSHIP",
      description:
        "Sign up today and learn how you can partner with Fellowship Church and make this your church home.",
      buttonText: "Partnership",
      icon: <HeartHandshake size={80} className="text-white" />,
      link: "https://churchteams.com/m/Register.asp?a=NVNIVnFNWUs5Nlk9",
    },
    {
      title: "EVENTS",
      description:
        "Need to register for an event? Find all the info you need to register for upcoming events at Fellowship.",
      buttonText: "Events",
      icon: <Ticket size={80} className="text-white" />,
      link: "/events",
    },
    {
      title: "MIDWEEK",
      description:
        "We have wonderful midweek ministry opportunities on Wednesday nights. Check out what we have to offer.",
      buttonText: "Midweek",
      icon: <Calendar size={80} className="text-white" />,
      link: "#",
    },
    {
      title: "UPDATE INFO",
      description:
        "Has any of your contact information changed? Do you have a new address, phone number or email? Only works when using a mobile device.",
      buttonText: "Update Info",
      icon: <RefreshCcw size={80} className="text-white" />,
      link: "https://www.t2ll.com/auth/sms-redirect?phoneNumber=9728073070&msg=ME",
    },
    {
      title: "SOCIAL MEDIA",
      description:
        "Connect with us on social media. Click the button to get see all of our available social media platforms.",
      buttonText: "Social Media",
      icon: <MonitorSmartphone size={80} className="text-white" />,
      link: "#",
    },
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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
                <a
                    key={index}
                    href={card.link}
                    className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between items-center text-center space-y-6 hover:shadow-lg transition duration-200 cursor-pointer"
                >
                    {/* Icon + Title Block */}
                    <div className="bg-black text-white w-full aspect-[1/1] rounded-lg flex flex-col items-center justify-center px-3 text-center">
                        <div className="mb-2">
                            {card.icon}
                        </div>
                        <span className="text-xl font-bold leading-tight">{card.title}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {card.description}
                    </p>

                    {/* Button (purely visual now, still inside the link) */}
                    <div className="bg-black text-white px-5 py-3 text-sm font-semibold rounded-md hover:bg-gray-800 transition inline-block">
                        {card.buttonText}
                    </div>
                </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HubCentral;
