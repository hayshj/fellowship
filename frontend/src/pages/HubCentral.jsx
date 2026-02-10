import React from "react";
import { Link } from "react-router-dom";
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
  ArrowRight,
  Link as LinkIcon
} from "lucide-react";

function HubCentral() {
  const cards = [
    {
      title: "I'M NEW",
      description:
        "We would love to get to know you! Fill out our digital connection card and we'll have a gift waiting for you at the end of the service.",
      buttonText: "I'm New",
      icon: <Sprout className="w-8 h-8 text-green-500" />,
      link: "https://churchteams.com/m/Register.asp?a=OExXKy9ZY3Vqamc9",
      bgFrom: "from-green-50",
      bgTo: "to-green-100/50"
    },
    {
      title: "DIGITAL BULLETIN",
      description:
        "Get signed up for our weekly digital bulletin or view today's edition on your mobile device.",
      buttonText: "Get Bulletin",
      icon: <Newspaper className="w-8 h-8 text-blue-500" />,
      link: "https://bl.tn/fellowship",
      bgFrom: "from-blue-50",
      bgTo: "to-blue-100/50",
      secondaryButton: {
        text: "Sign Up",
        link: "https://www.t2ll.com/smsRedirect.aspx/?phoneNumber=8444816740&msg=fellowship",
        mobileOnly: true
      }
    },
    {
      title: "GIVE",
      description:
        "The ministries of Fellowship Church are made possible by your generosity. Set up recurring or one-time contributions.",
      buttonText: "Give Now",
      icon: <HandCoins className="w-8 h-8 text-amber-500" />,
      link: "https://churchteams.com/m/Give.asp?oID=13823&aID=YUVxR1c3S2N2SlhoTHM2bmNxUmdqUkpxa1JRdkJyUzU%3D",
      bgFrom: "from-amber-50",
      bgTo: "to-amber-100/50"
    },
    {
      title: "MAKE A DECISION",
      description:
        "Ready to move your faith forward? Let us know what decision you are making and we'll follow up with you.",
      buttonText: "Make a Decision",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      link: "https://churchteams.com/m/Register.asp?a=K0gvalZKS2tmbU09",
      bgFrom: "from-yellow-50",
      bgTo: "to-yellow-100/50"
    },
    {
      title: "CONNECT GROUPS",
      description:
        "Connect Groups are vital to life at Fellowship. Find a group that fits your schedule and stage of life.",
      buttonText: "Find a Group",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      link: "/connect",
      bgFrom: "from-purple-50",
      bgTo: "to-purple-100/50"
    },
    {
      title: "PARTNERSHIP",
      description:
        "Learn how you can partner with Fellowship Church and make this your church home.",
      buttonText: "Partnership",
      icon: <HeartHandshake className="w-8 h-8 text-red-500" />,
      link: "https://churchteams.com/m/Register.asp?a=NVNIVnFNWUs5Nlk9",
      bgFrom: "from-red-50",
      bgTo: "to-red-100/50"
    },
    {
      title: "EVENTS",
      description:
        "Find all the info you need to register for upcoming events at Fellowship.",
      buttonText: "View Events",
      icon: <Ticket className="w-8 h-8 text-cyan-500" />,
      link: "/events",
      bgFrom: "from-cyan-50",
      bgTo: "to-cyan-100/50"
    },
    {
      title: "MIDWEEK",
      description:
        "We have wonderful midweek ministry opportunities on Wednesday nights for the whole family.",
      buttonText: "Midweek Info",
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      link: "/midweek",
      bgFrom: "from-orange-50",
      bgTo: "to-orange-100/50"
    },
    {
      title: "UPDATE INFO",
      description:
        "Has your contact info changed? Update your address, phone number or email. (Mobile only)",
      buttonText: "Update Info",
      icon: <RefreshCcw className="w-8 h-8 text-indigo-500" />,
      link: "https://www.t2ll.com/auth/sms-redirect?phoneNumber=9728073070&msg=ME",
      bgFrom: "from-indigo-50",
      bgTo: "to-indigo-100/50"
    },
    {
      title: "SOCIAL MEDIA",
      description:
        "Connect with us on social media to see what's happening in the life of our church.",
      buttonText: "Follow Us",
      icon: <MonitorSmartphone className="w-8 h-8 text-pink-500" />,
      link: "/social",
      bgFrom: "from-pink-50",
      bgTo: "to-pink-100/50"
    },
  ];

  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      <HomeNavbar />

      {/* Hero Section - Dark Gradient Background */}
      <header className="bg-neutral-900 py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-5xl z-10 space-y-6 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs md:text-sm font-medium tracking-widest text-neutral-400 uppercase backdrop-blur-sm">
            Next Steps
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter">
            HUB<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-200 pr-2">CENTRAL</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            The one place to get connected.
          </p>
        </div>
      </header>

      {/* Intro
      <div className="bg-white py-12 px-6 text-center border-b border-stone-100">
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to Fellowship Church Hub Central. This is your starting point to find information, get connected, and move your faith forward.
        </p>
      </div>*/}

      {/* Card Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full"
              >
                {/* Subtle Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bgFrom} ${card.bgTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center border border-stone-100 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white group-hover:shadow-sm">
                      {card.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-700 transition-colors">
                    {card.description}
                  </p>

                  <div className="mt-auto space-y-3">
                    {card.link.startsWith('/') ? (
                      <Link
                        to={card.link}
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-neutral-900 rounded-xl hover:bg-orange-500 hover:shadow-lg group-hover:translate-y-0"
                      >
                        {card.buttonText} <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    ) : (
                      <a
                        href={card.link}
                        target={card.link.startsWith('#') ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-neutral-900 rounded-xl hover:bg-orange-500 hover:shadow-lg group-hover:translate-y-0"
                      >
                        {card.buttonText} <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    )}
                    {card.secondaryButton && (
                      <a
                        href={card.secondaryButton.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-neutral-900 transition-all duration-300 bg-white border-2 border-neutral-900 rounded-xl hover:bg-neutral-900 hover:text-white hover:shadow-lg${card.secondaryButton.mobileOnly ? ' md:hidden' : ''}`}
                      >
                        {card.secondaryButton.text} <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HubCentral;
