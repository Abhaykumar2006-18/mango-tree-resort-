import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const linkStyle =
    "relative w-fit text-gray-300 transition duration-300 hover:text-yellow-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full";

  const socialStyle =
    "w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer";

  return (
    <footer className="bg-[#1a120b] text-white pt-12 pb-6 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/20 pb-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-yellow-300 uppercase font-mono">
             Mango Tree Resort
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            A premium destination for weddings, parties, celebrations, and
            memorable experiences. Where luxury meets comfort in the heart of
            nature.
          </p>
        </div>

        {/* Quick Links (NO LI) */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col space-y-3 text-sm">
            <Link to="/" className={linkStyle}>Home</Link>
            <Link to="/aboutUs" className={linkStyle}>About Us</Link>
            <Link to="/services" className={linkStyle}>Rooms</Link>
            <Link to="/gallery" className={linkStyle}>Services</Link>
            <Link to="/contact" className={linkStyle}>Contact</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">
            Our Services
          </h3>

          <div className="flex flex-col space-y-3 text-sm">
            <span className={linkStyle}>Luxuary Rooms</span>
            <span className={linkStyle}>Private Parties</span>
            <span className={linkStyle}>Corporate Events</span>
            <span className={linkStyle}>Wedding Events</span>
            <span className={linkStyle}>Luxury Gatherings</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-yellow-300" />
              Herbertpur, Dehradun, Uttarakhand
            </p>

            <a href="tel:+918958366236" className={`flex items-center gap-3 ${linkStyle}`}>
              <FaPhoneAlt className="text-yellow-300" />
              +91 9358248503
            </a>

            <a href="mailto:theukgaming425@gmail.com" className={`flex items-center gap-3 ${linkStyle}`}>
              <FaEnvelope className="text-yellow-300" />
              mangotreeresortandvilla@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a className={socialStyle}><FaFacebookF /></a>
            <a href="" className={socialStyle}>
              <FaInstagram />
            </a>
            <a className={socialStyle}><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mango Tree Resort . All Righta Reserved
      </div>
    </footer>
  );
};

export default Footer;