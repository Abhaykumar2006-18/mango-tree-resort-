import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/about" },
    
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-transparent text-black border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="text-3xl font-bold tracking-wide text-black font-Grenze"> Mango Tree </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link key={item.name} to={item.path} className="relative text-black font-medium transition duration-300 hover:text-black group">{item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link to='/booking'><button className="px-6 py-2.5 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-black"
          >
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0 "
        }`}
      >
        <div className=" backdrop-blur-lg shadow-lg px-6 py-5 space-y-5 items-center">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-gray-900 hover:text-black transition"
            >
              {item.name}
            </Link>
          ))}
            

          <Link to='/booking'><button className="px-6 py-2.5 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
            </Link>
        
        </div>
      </div>
    </nav>
  );
};

export default Nav;