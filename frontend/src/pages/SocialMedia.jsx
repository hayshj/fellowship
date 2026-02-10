import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import {
    Facebook,
    Instagram,
    Youtube,
    ArrowRight
} from "lucide-react";

function SocialMedia() {
    const cards = [
        {
            title: "FACEBOOK",
            description: "Keep up with the latest news, events, and community stories on our official Facebook page.",
            buttonText: "Follow Us",
            icon: <Facebook className="w-8 h-8 text-blue-600" />,
            link: "https://www.facebook.com/fellowshiprc/",
            bgFrom: "from-blue-50",
            bgTo: "to-blue-100/50"
        },
        {
            title: "INSTAGRAM",
            description: "See what's happening at Fellowship through photos and stories on Instagram.",
            buttonText: "Follow Us",
            icon: <Instagram className="w-8 h-8 text-pink-500" />,
            link: "https://www.instagram.com/fellowshipchurchrc/",
            bgFrom: "from-pink-50",
            bgTo: "to-pink-100/50"
        },
        {
            title: "YOUTUBE",
            description: "Watch our latest sermons, worship services, and video content on YouTube.",
            buttonText: "Subscribe",
            icon: <Youtube className="w-8 h-8 text-red-600" />,
            link: "https://www.youtube.com/@FellowshipRC",
            bgFrom: "from-red-50",
            bgTo: "to-red-100/50"
        },
        {
            title: "STUDENTS FACEBOOK",
            description: "Connect with Fellowship Students and stay updated on youth events and gatherings.",
            buttonText: "Join Group",
            icon: <Facebook className="w-8 h-8 text-blue-500" />,
            link: "https://www.facebook.com/fellowshipstudentsrc",
            bgFrom: "from-blue-50",
            bgTo: "to-indigo-100/50"
        },
        {
            title: "STUDENTS INSTAGRAM",
            description: "Follow Fellowship Students for updates, photos, and encouragement for 6th-12th graders.",
            buttonText: "Follow Us",
            icon: <Instagram className="w-8 h-8 text-purple-500" />,
            link: "https://instagram.com/fellowshipstudentsrc",
            bgFrom: "from-purple-50",
            bgTo: "to-purple-100/50"
        },
        {
            title: "KIDS FACEBOOK",
            description: "A resource for parents to stay connected with what's happening in Fellowship Kids.",
            buttonText: "Join Group",
            icon: <Facebook className="w-8 h-8 text-cyan-600" />,
            link: "https://www.facebook.com/kidsatfellowship",
            bgFrom: "from-cyan-50",
            bgTo: "to-cyan-100/50"
        }
    ];

    return (
        <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
            <HomeNavbar />

            {/* Hero Section - Social Themed Gradient */}
            <header className="bg-neutral-900 py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-5xl z-10 space-y-6 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs md:text-sm font-medium tracking-widest text-neutral-400 uppercase backdrop-blur-sm">
                        Stay Connected
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter">
                        SOCIAL<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 pr-2">MEDIA</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Follow us online to stay up to date with everything happening at Fellowship.
                    </p>
                </div>
            </header>

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

                                    <div className="mt-auto">
                                        <a
                                            href={card.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-neutral-900 rounded-xl hover:bg-orange-500 hover:shadow-lg group-hover:translate-y-0"
                                        >
                                            {card.buttonText} <ArrowRight className="w-4 h-4 ml-2" />
                                        </a>
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

export default SocialMedia;
