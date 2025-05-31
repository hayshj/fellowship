import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import ChadHays from '../assets/about/chadhays.jpg';
import JeffHays from '../assets/about/jeffhays.jpg';
import KevinJones from '../assets/about/kevinjones.jpg';
import KaitlinFaggard from '../assets/about/KF.jpg';
import LaurenMoore from '../assets/about/LM.jpg';
import Church from '../assets/about/hero.jpg';

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

    const toggleBelief = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* Navbar Section */}
            <HomeNavbar />

            {/* Hero Section */}
            <div 
                className="relative bg-black/20 text-white py-24 flex flex-col items-center justify-center text-center px-4"
                style={{
                backgroundImage: `url(${Church})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/30 z-0"></div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl text-center">
                <h1 className="text-6xl sm:text-6xl lg:text-9xl font-extrabold tracking-tight text-white mb-4">
                    ABOUT US
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
                    Learn more about our mission and values.
                </p>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Our Story
                </h2>
                <div className="max-w-4xl mx-auto text-lg">
                    <p className="mb-8">
                        Our story began in 1888 as Missionary Baptist Church, and we have had the mission and privilege of serving Royse City for over a century. 
                    </p>
                    <p className="mb-8">
                        The current building, established in 2008, stands as a beacon for our community and is a place where people of Royse City can come together to meet and grow in their faith.
                    </p>
                    <p>
                        We are proud of our long history and look forward to continuing our journey as a church dedicated to sharing the love of Jesus Christ with the world.
                    </p>
                </div>
            </div>

            {/* Meet Our Staff Section */}
            <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Meet Our Staff
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: 'Chad Hays', title: 'Lead Pastor', email: 'chays@fbrc.org', image: ChadHays },
                        { name: 'Jeff Hays', title: 'Executive Pastor', email: 'jhays@fbrc.org', image: JeffHays },
                        { name: 'Kevin Jones', title: 'Small Groups and Missions Pastor', email: 'kjones@fbrc.org', image: KevinJones },
                        { name: 'Ryan Bradley', title: 'Youth Pastor', email: 'rbradley@fbrc.org', image: '/staff/ryan.jpg' },
                        { name: 'Kaitlin Faggard', title: 'Preschool and MDO Director', email: 'kfaggard@fbrc.org', image: KaitlinFaggard },
                        { name: 'Lauren Moore', title: "Children's Coordinator", email: 'lauren@fbrc.org', image: LaurenMoore },
                        { name: 'Jenna Carruth', title: 'Office Administrator', email: 'info@fbrc.org', image: '/staff/jenna.jpg' },
                    ].map((staff, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={staff.image}
                                alt={`${staff.name}'s profile`}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{staff.name}</h3>
                                <p className="text-lg text-gray-600 mb-2">{staff.title}</p>
                                <a
                                    href={`mailto:${staff.email}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    {staff.email}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* What We Believe Section */}
            <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    What We Believe
                </h2>
                <div className="max-w-5xl mx-auto">
                    {beliefs.map((belief, index) => (
                        <div key={index} className="border-b border-gray-300 py-4">
                            <button
                                onClick={() => toggleBelief(index)}
                                className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center focus:outline-none"
                            >
                                {belief.title}
                                <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                    openIndex === index ? 'max-h-96 mt-2' : 'max-h-0'
                                }`}
                            >
                                <p className="text-gray-700 mt-2">{belief.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Our Values Section */}
            <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Our Values
                </h2>
                <div className="max-w-5xl mx-auto space-y-8 text-gray-800 text-lg leading-relaxed">
                    <div>
                        <h3 className="font-semibold text-xl mb-1">We Value People</h3>
                        <p>
                            People matter to God, and therefore they matter to us. Every person is created in the image of God and has inherent worth and purpose. We strive to love, welcome, and serve others the way Jesus does—with compassion, grace, and dignity—regardless of background or circumstance.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-1">We Value Application of Scripture</h3>
                        <p>
                            We believe the Bible is not just to be studied—it’s meant to be lived. Teaching should lead to transformation, and God's Word provides practical guidance for everyday life. Through Scripture, we gain wisdom for decision-making, encouragement in trials, and direction for walking faithfully with Christ.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-1">We Value Relationships</h3>
                        <p>
                            Life change happens best in the context of meaningful relationships. That’s why we emphasize Connect Groups—where people can be known, supported, and encouraged in their faith journey. We believe in growing larger as a church while also growing smaller through intimate, Christ-centered community.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-1">We Value Excellence</h3>
                        <p>
                            Excellence honors God and inspires people. While perfection is not our aim, we believe that giving our best in every area—worship, teaching, leadership, service—demonstrates our love for God and commitment to His mission. We serve with intentionality, purpose, and a spirit of excellence in all we do.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-1">We Value Service</h3>
                        <p>
                            Every believer is called to serve. God has uniquely gifted each of us for ministry within the church and mission in the world. We believe the church thrives when everyone finds their role and uses their gifts to serve others with humility, generosity, and love—just as Jesus did.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-1">We Value Creativity and Innovation</h3>
                        <p>
                            The Gospel never changes, but the way we share it can. We embrace creativity and innovation as tools for reaching people in fresh, engaging ways. Whether through worship, technology, or outreach, we are committed to using God-given imagination to communicate His unchanging truth.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-1">We Value Unity</h3>
                        <p>
                            In a divided world, we choose unity. We focus on what unites us—our shared faith in Jesus Christ—and refuse to let secondary issues divide us. Unity doesn't mean uniformity, but it does mean choosing grace, humility, and love in how we treat one another as the body of Christ.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
