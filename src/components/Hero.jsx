import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="font-Cinzel max-w-3xl  " style={{textShadow: "4px 4px 12px rgba(0,0,0,0.8)"}}>
          {/* Tag */}
          <span className="mt-12 inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm tracking-widest uppercase text-white" >
            Luxury Resort & Hotel
          </span>

          {/* Heading */}
          <h1 className="mt-6  text-white font-bold leading-tight text-3xl sm:text-5xl lg:text-6xl" style={{textShadow: "4px 4px 12px rgba(0,0,0,0.8)"}}>
            Escape Ordinary.
            <br />
            <span className="text-yellow-400">
              Live Extraordinary.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6  text-gray-200 text-base sm:text-lg lg:text-xl leading-8 max-w-2xl" style={{textShadow: "4px 6px 12px rgba(0,0,0,0.8)"}}>
            Experience unmatched luxury, breathtaking views, elegant rooms,
            exceptional hospitality, and unforgettable moments in the heart of
            nature.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+911234567890"
              className="px-8 py-4 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition duration-300 text-center"
            >
              📞 Call Now
            </a>

           <Link to="/rooms"> <button className="px-8 py-4 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition duration-300">
              Explore Rooms
            </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-8 text-white">
            <div>
              <h2 className="text-3xl font-bold">15+</h2>
              <p className="text-gray-300">Years Experience</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">40+</h2>
              <p className="text-gray-300">Luxury Rooms</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">25k+</h2>
              <p className="text-gray-300">Happy Guests</p>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default Hero;