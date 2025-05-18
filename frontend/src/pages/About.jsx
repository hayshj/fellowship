import React from 'react';
import HomeNavbar from '../components/HomeNavbar';

function About() {
    return (
        <>
            {/* Navbar Section */}
            <HomeNavbar />

            {/* Hero Section */}
            <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
                <div className="max-w-5xl text-center">
                    <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight text-transparent stroke-text mb-4">
                        ABOUT US
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold italic">
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
                        { name: 'Chad Hays', title: 'Lead Pastor', email: 'chays@fbrc.org' },
                        { name: 'Jeff Hays', title: 'Executive Pastor', email: 'jhays@fbrc.org' },
                        { name: 'Kevin Jones', title: 'Small Groups and Missions Pastor', email: 'kjones@fbrc.org' },
                        { name: 'Kaitlin Faggard', title: 'Preschool and MDO Director', email: 'kfaggard@fbrc.org' },
                        { name: 'Lauren Moore', title: "Children's Coordinator", email: 'lauren@fbrc.org' },
                        { name: 'Jenna Carruth', title: 'Office Administrator', email: 'info@fbrc.org' },
                    ].map((staff, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2">{staff.name}</h3>
                            <p className="text-lg text-gray-600 mb-2">{staff.title}</p>
                            <a
                                href={`mailto:${staff.email}`}
                                className="text-blue-500 hover:underline"
                            >
                                {staff.email}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default About;
