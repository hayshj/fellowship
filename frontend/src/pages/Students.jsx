import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import StudentsImage from "../assets/students/students.jpg"; // Assuming you have an image for the background
import StudentWorship from "../assets/students/studentworship.jpg"; // Example image for worship section
import InstagramImage from "../assets/students/instagram.jpg"; // Example image for Instagram section
import ProfilePic from "../assets/students/profile.jpg"; // Example profile picture for Instagram post
import { Ellipsis, Heart, MessageCircle } from "lucide-react";
import { Facebook, Instagram, Youtube } from 'lucide-react';


function Students() {
  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />
      {/* Hero Section */}
      <div 
        className="relative text-white py-24 flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${StudentsImage})`,
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
            STUDENTS
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
            WHERE 6TH–12TH GRADERS FIND PURPOSE & COMMUNITY
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-neutral-800 space-y-16">
        <section className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-8">
          {/* Image */}
          <img
            src={StudentWorship}
            alt="Students Worshipping"
            className="rounded-lg shadow-lg object-contain h-auto max-h-[70vh]"
          />

          {/* Text */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-4 px-4">
            <h2 className="text-3xl font-bold">MIDWEEK SERVICES</h2>
            <p className="text-lg max-w-xl">
              Every Wednesday night, students gather for an unforgettable experience filled with energy, connection, and purpose. Doors open at 6:00 PM for open gym, games, and hangout time with friends. This is a great chance to build relationships and have fun in a relaxed environment. At 7:00 PM, we shift into a powerful time of worship and a relevant, engaging message designed specifically for students. Whether you're new or a regular, Midweek is the place to be!
            </p>
          </div>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">CAMPS & RETREATS</h2>
          <p className="max-w-3xl mx-auto text-lg">
            We offer unforgettable camps and retreats each year where students can grow in their faith, build friendships, and have tons of fun.
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* Instagram-Style Post */}
          <div className="mx-auto">
            <div className="bg-white rounded-lg border border-neutral-200 shadow-md overflow-hidden w-full max-w-md">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <img
                    src={ProfilePic}
                    alt="Fellowship Students"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-semibold text-sm">@fellowshipstudentsrc</span>
                </div>
                <Ellipsis className="text-neutral-500 w-5 h-5" />
              </div>

              {/* Image */}
              <img
                src={InstagramImage}
                alt="Student Worship Moment"
                className="w-full object-cover"
              />

              {/* Action Icons */}
              <div className="flex items-center gap-4 px-4 py-2 text-neutral-700">
                <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer transition" />
                <MessageCircle className="w-5 h-5 hover:text-blue-500 cursor-pointer transition" />
              </div>

              {/* Caption */}
              <div className="px-4 pb-4 text-left text-sm text-neutral-800">
                <p>
                  <span className="font-semibold">@fellowshipstudentsrc</span> Midweek was powerful tonight. Can’t wait for next week!
                </p>
                <p className="text-xs text-neutral-500 mt-1">View all 14 comments</p>
                <p className="text-[10px] text-neutral-400 uppercase mt-2 tracking-wide">2 hours ago</p>
              </div>
            </div>
          </div>

          {/* Text + CTA */}
          <div className="space-y-6 px-4 lg:px-0">
            <h2 className="text-4xl font-extrabold tracking-tight">FOLLOW US ON INSTAGRAM</h2>
            <p className="text-lg text-neutral-600 max-w-xl">
              Here’s a peek into what life looks like in our student community. Don’t miss out on behind-the-scenes content, event recaps, and powerful moments!
            </p>
            <a
              href="https://instagram.com/fellowshipstudentsrc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-br from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform"
            >
              <Instagram className="text-2xl" />
              Follow Us on Instagram
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Students;
