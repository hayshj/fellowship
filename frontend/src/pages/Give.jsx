import HomeNavbar from "../components/HomeNavbar";
import HeroImage from "../assets/home/BO5A7112.webp";
import { Globe, MapPin, Mail, Heart, ArrowRight } from "lucide-react";

const GIVE_URL = "https://churchteams.com/m/Give.asp?oID=13823&aID=YUVxR1c3S2N2SlhoTHM2bmNxUmdqUkpxa1JRdkJyUzU%3D";

const ways = [
  {
    id: "online",
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    title: "Give Online",
    description: "Give securely online anytime through our giving portal.",
    button: { label: "Give Now", href: GIVE_URL },
  },
  {
    id: "in-person",
    icon: <MapPin className="w-8 h-8 text-green-500" />,
    title: "In Person",
    description:
      "Giving stations are located throughout our building. Simply stop by any station to give with cash or check.",
  },
  {
    id: "mail",
    icon: <Mail className="w-8 h-8 text-purple-500" />,
    title: "By Mail",
    description:
      "You can mail a check made out to Fellowship Church to our address below.",
    address: [
      "Fellowship Church",
      "900 Pullen St",
      "Royse City, TX 75189",
    ],
  },
];

export default function Give() {
  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      <HomeNavbar />

      {/* Hero */}
      <header className="relative w-full h-[60vh] overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm">
            Generosity
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
            GIVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-200 pr-2">
              GENEROUSLY
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Your generosity makes a difference. Thank you for partnering with us.
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-100 rounded-full mb-4">
            <Heart className="w-8 h-8 text-stone-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Ways to Give
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            We believe in making generosity simple. Choose whichever method works best for you.
          </p>
        </div>
      </section>

      {/* Ways to Give Cards */}
      <section className="pb-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          {ways.map((way) => (
            <div
              key={way.id}
              className="bg-stone-50 rounded-[2.5rem] p-8 border border-stone-100 shadow-lg flex flex-col"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {way.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{way.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                {way.description}
              </p>
              {way.address && (
                <address className="mt-4 not-italic text-sm text-gray-700 font-medium space-y-1">
                  {way.address.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </address>
              )}
              {way.button && (
                <a
                  href={way.button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 bg-stone-900 text-white font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-amber-500 transition-all"
                >
                  {way.button.label} <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
