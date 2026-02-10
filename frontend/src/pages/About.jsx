import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import ChadHays from '../assets/about/chadhays.webp';
import JeffHays from '../assets/about/jeffhays.webp';
import KevinJones from '../assets/about/kevinjones.webp';
import KaitlinFaggard from '../assets/about/KF.webp';
import LaurenMoore from '../assets/about/LM.webp';
import Church from '../assets/about/hero.webp';
import { Users, BookOpen, Heart, Star, HandHeart, Lightbulb, Shield, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

function About() {
    const [openIndex, setOpenIndex] = useState(null);

    const beliefs = [
        {
            title: 'About God',
            content: 'There is one God: The Father, the Son, and the Holy Spirit; who subsist in unity, and also as three separate distinct Persons.',
        },
        {
            title: 'About Jesus Christ',
            content: 'Jesus Christ is God’s Son. He was born of a virgin as both God and man, lived a sinless life, died to atone for the sins of human beings, was buried, arose from the grave, ascended into heaven and will literally return to earth.',
        },
        {
            title: 'About the Holy Spirit',
            content: 'The Holy Spirit is the divine helper, assistant, counselor and instructor and His work is to reveal Christ, convict of sin, lead to repentance, guide believers, comfort, strengthen, and sanctify the soul.',
        },
        {
            title: 'About the Bible',
            content: 'The Bible is God’s Holy Word, without error, and is the sole authority for life.',
        },
        {
            title: 'About Man',
            content: 'Human beings are the special creations of God, made in His image. They fell through the sin of the first man, Adam, and all human beings are sinners in need of salvation.',
        },
        {
            title: 'About Salvation',
            content: 'Salvation is a gift through repentance toward God and faith in Jesus Christ. Every person who truly is saved is eternally secure in the Lord Jesus Christ and will spend eternity in heaven, while those who die in their sins will spend eternity in hell. Each believer has direct access to God through the Lord Jesus Christ.',
        },
        {
            title: 'About Baptism',
            content: `Baptism is a step of obedience that follows salvation and serves as a public declaration of faith in Jesus Christ. It does not save you—only faith in Jesus and His sacrifice does—but it is commanded in Scripture (Matthew 28:18–20) and modeled by Jesus Himself (Matthew 3:16). The word “baptism” comes from the Greek baptizo, meaning “to immerse,” which is why biblical baptism is full immersion in water. This act symbolizes your identification with Christ, representing His death, burial, and resurrection, as described in Romans 6:4. Through baptism, you testify to leaving your old life behind and committing to live a new life in Christ.`,
        },
    ];

    const values = [
        {
            title: "We Value People",
            icon: <Users className="w-6 h-6 text-orange-500" />,
            content: "People matter to God, and therefore they matter to us. Every person is created in the image of God and has inherent worth and purpose. We strive to love, welcome, and serve others the way Jesus does—with compassion, grace, and dignity—regardless of background or circumstance."
        },
        {
            title: "We Value Application of Scripture",
            icon: <BookOpen className="w-6 h-6 text-blue-500" />,
            content: "We believe the Bible is not just to be studied—it’s meant to be lived. Teaching should lead to transformation, and God's Word provides practical guidance for everyday life. Through Scripture, we gain wisdom for decision-making, encouragement in trials, and direction for walking faithfully with Christ."
        },
        {
            title: "We Value Relationships",
            icon: <Heart className="w-6 h-6 text-red-500" />,
            content: "Life change happens best in the context of meaningful relationships. That’s why we emphasize Connect Groups—where people can be known, supported, and encouraged in their faith journey. We believe in growing larger as a church while also growing smaller through intimate, Christ-centered community."
        },
        {
            title: "We Value Excellence",
            icon: <Star className="w-6 h-6 text-yellow-500" />,
            content: "Excellence honors God and inspires people. While perfection is not our aim, we believe that giving our best in every area—worship, teaching, leadership, service—demonstrates our love for God and commitment to His mission. We serve with intentionality, purpose, and a spirit of excellence in all we do."
        },
        {
            title: "We Value Service",
            icon: <HandHeart className="w-6 h-6 text-green-500" />,
            content: "Every believer is called to serve. God has uniquely gifted each of us for ministry within the church and mission in the world. We believe the church thrives when everyone finds their role and uses their gifts to serve others with humility, generosity, and love—just as Jesus did."
        },
        {
            title: "We Value Creativity and Innovation",
            icon: <Lightbulb className="w-6 h-6 text-purple-500" />,
            content: "The Gospel never changes, but the way we share it can. We embrace creativity and innovation as tools for reaching people in fresh, engaging ways. Whether through worship, technology, or outreach, we are committed to using God-given imagination to communicate His unchanging truth."
        },
        {
            title: "We Value Unity",
            icon: <Shield className="w-6 h-6 text-indigo-500" />,
            content: "In a divided world, we choose unity. We focus on what unites us—our shared faith in Jesus Christ—and refuse to let secondary issues divide us. Unity doesn't mean uniformity, but it does mean choosing grace, humility, and love in how we treat one another as the body of Christ."
        }
    ];

    const staffMembers = [
        { name: 'Chad Hays', title: 'Lead Pastor', email: 'chays@fbrc.org', image: ChadHays },
        { name: 'Jeff Hays', title: 'Executive Pastor', email: 'jhays@fbrc.org', image: JeffHays },
        { name: 'Kevin Jones', title: 'Small Groups', email: 'kjones@fbrc.org', image: KevinJones },
        { name: 'Ryan Bradley', title: 'Youth Pastor', email: 'rbradley@fbrc.org', image: '/staff/ryan.jpg' },
        { name: 'Kaitlin Faggard', title: 'Preschool Director', email: 'kfaggard@fbrc.org', image: KaitlinFaggard },
        { name: 'Lauren Moore', title: "Children's Coordinator", email: 'lauren@fbrc.org', image: LaurenMoore },
        { name: 'Jenna Carruth', title: 'Office Administrator', email: 'info@fbrc.org', image: '/staff/jenna.jpg' },
    ];

    const toggleBelief = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="font-sans antialiased bg-stone-50 text-gray-900">
            {/* Navbar Section */}
            <HomeNavbar />

            {/* Hero Section */}
            <header className="relative w-full h-[60vh] overflow-hidden group">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${Church})`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6 space-y-6 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs md:text-sm font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm">
                        Who We Are
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
                        ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100">US</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                        Learn more about our mission, our values, and the people who serve our community.
                    </p>
                </div>
            </header>

            {/* Our Story Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Our History</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Story</h3>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-12 rounded-full"></div>

                    <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed">
                        <p>
                            Our story began in 1888 as Missionary Baptist Church, and we have had the mission and privilege of serving Royse City for over a century.
                        </p>
                        <p>
                            The current building, established in 2008, stands as a beacon for our community and is a place where people of Royse City can come together to meet and grow in their faith.
                        </p>
                        <p>
                            We are proud of our long history and look forward to continuing our journey as a church dedicated to sharing the love of Jesus Christ with the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Meet Our Staff Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Leadership</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Meet Our Staff</h3>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {staffMembers.map((staff, index) => (
                            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="aspect-[3/4] overflow-hidden relative">
                                    <img
                                        src={staff.image}
                                        alt={`${staff.name}'s profile`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/400x600?text=No+Image'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                    <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-bold text-white mb-1">{staff.name}</h3>
                                        <p className="text-orange-200 font-medium mb-4">{staff.title}</p>
                                    </div>
                                </div>
                                <div className="p-6 border-t border-gray-100">
                                    <a
                                        href={`mailto:${staff.email}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-gray-500 hover:text-orange-600 uppercase transition-colors"
                                    >
                                        Email {staff.name.split(' ')[0]} <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Believe Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Doctrine</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900">What We Believe</h3>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {beliefs.map((belief, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'bg-stone-50 border-orange-200 shadow-md' : 'bg-white border-gray-100 hover:bg-stone-50'}`}
                            >
                                <button
                                    onClick={() => toggleBelief(index)}
                                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                                >
                                    <span className={`text-xl font-bold ${openIndex === index ? 'text-orange-600' : 'text-gray-800'}`}>
                                        {belief.title}
                                    </span>
                                    {openIndex === index ?
                                        <ChevronUp className="w-6 h-6 text-orange-500" /> :
                                        <ChevronDown className="w-6 h-6 text-gray-400" />
                                    }
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out px-8 text-gray-600 leading-relaxed overflow-hidden ${openIndex === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'
                                        }`}
                                >
                                    {belief.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-3">Culture</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">Our Values</h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-3xl border border-stone-700 hover:border-stone-500 transition-colors group">
                                <div className="w-14 h-14 bg-stone-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-stone-700/50">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {value.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
