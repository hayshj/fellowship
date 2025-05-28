import React from "react";
import { useEffect, useRef } from "react";
import HomeNavbar from "../components/HomeNavbar";
import StudentsImage from "../assets/students/students.jpg";
import StudentWorship from "../assets/students/studentworship.jpg";
import InstagramImage from "../assets/students/instagram.jpg";
import ProfilePic from "../assets/students/profile.jpg";
import Gallery1 from "../assets/students/gallery1.jpg";
import Gallery2 from "../assets/students/gallery2.jpg";
import Gallery3 from "../assets/students/gallery3.jpg";
import Gallery4 from "../assets/students/gallery4.jpg";
import Gallery5 from "../assets/students/gallery5.jpg";
import Gallery6 from "../assets/students/gallery6.jpg";
import Gallery7 from "../assets/students/gallery7.jpg";
import Gallery8 from "../assets/students/gallery8.jpg";

import { Ellipsis, Heart, MessageCircle, Instagram } from "lucide-react";

const galleryImages = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
];

function Students() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    let frame;

    const step = () => {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />

      {/* Hero Section */}
      <div
        className="relative text-white py-24 flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${StudentsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>
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
        {/* Midweek Services */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-center text-center lg:text-left gap-8">
          <img
            src={StudentWorship}
            alt="Students Worshipping"
            className="object-contain h-auto max-h-[70vh]"
          />
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-4 px-4">
            <h2 className="text-4xl font-extrabold tracking-tight">
              MIDWEEK SERVICES
            </h2>
            <p className="text-lg max-w-xl">
              Every Wednesday night, students gather for an unforgettable
              experience filled with energy, connection, and purpose. Doors open
              at 6:00 PM for open gym, games, and hangout time with friends.
              This is a great chance to build relationships and have fun in a
              relaxed environment. At 7:00 PM, we shift into a powerful time of
              worship and a relevant, engaging message designed specifically for
              students. Whether you're new or a regular, Midweek is the place to
              be!
            </p>
            <a
              href=""
              className="inline-flex items-center gap-3 bg-gradient-to-br from-black to-neutral-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform"
            >
              Let Us Know You'll Be There!
            </a>
          </div>
        </section>
      </div>

      {/* Infinite-scroll carousel: now we attach the ref here */}
      <section
        ref={carouselRef}
        className="relative left-1/2 right-1/2 w-full -translate-x-1/2 overflow-hidden"
      >
        <div className="flex whitespace-nowrap">
          {[...galleryImages, ...galleryImages].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx+1}`}
              className="h-40 md:h-[22rem] w-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
      </section>



      {/* Instagram Promo */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-neutral-800">
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <div className="space-y-6 px-4 lg:px-0">
            <h2 className="text-4xl font-extrabold tracking-tight">
              FOLLOW US ON INSTAGRAM
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl">
              Here’s a peek into what life looks like in our student community.
              Don’t miss out on behind-the-scenes content, event recaps, and
              powerful moments!
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

          {/* Fake Instagram Post */}
          <div className="mx-auto">
            <div className="bg-white border border-neutral-200 overflow-hidden w-full max-w-md">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <img
                    src={ProfilePic}
                    alt="Fellowship Students"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-semibold text-sm">
                    @fellowshipstudentsrc
                  </span>
                </div>
                <Ellipsis className="text-neutral-500 w-5 h-5" />
              </div>
              <img
                src={InstagramImage}
                alt="Student Worship Moment"
                className="w-full object-cover"
              />
              <div className="flex items-center gap-4 px-4 py-2 text-neutral-700">
                <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer transition" />
                <MessageCircle className="w-5 h-5 hover:text-blue-500 cursor-pointer transition" />
              </div>
              <div className="px-4 pb-4 text-left text-sm text-neutral-800">
                <p>
                  <span className="font-semibold">@fellowshipstudentsrc</span>{" "}
                  Midweek was powerful tonight. Can’t wait for next week!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Students;
