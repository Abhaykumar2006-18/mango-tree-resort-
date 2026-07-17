import React from "react";
import { Star, Users, Maximize, BedDouble, Snowflake, Sparkles, ArrowUpRight } from "lucide-react";

/**
 * Rooms & Suites — resort booking section
 * Palette: ivory / warm sand / deep emerald / brushed gold
 * Fonts:  "Cormorant Garamond" (display) + "Manrope" (body/UI)
 */

const rooms = [
  {
    id: 1,
    name: "Ocean Horizon Suite",
    tag: "Sea-facing",
    description:
      "Wake up to uninterrupted ocean views from a private balcony, wrapped in soft linen tones and warm oak.",
    price: 420,
    rating: 4.9,
    guests: 2,
    size: "48 m²",
    bed: "King Bed",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
    amenities: ["Full AC", "Private Balcony", "Rain Shower", "Mini Bar"],
  },
  {
    id: 2,
    name: "Emerald Garden Villa",
    tag: "Garden retreat",
    description:
      "A secluded villa framed by tropical gardens, designed for slow mornings and quiet, unhurried evenings.",
    price: 560,
    rating: 5.0,
    guests: 3,
    size: "62 m²",
    bed: "King + Daybed",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    amenities: ["Full AC", "Private Pool", "Garden Terrace", "Butler Service"],
  },
  {
    id: 3,
    name: "The Presidential Penthouse",
    tag: "Signature suite",
    description:
      "Our most refined address — a top-floor penthouse with panoramic views and hand-finished interiors.",
    price: 890,
    rating: 5.0,
    guests: 4,
    size: "95 m²",
    bed: "2 King Beds",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80",
    amenities: ["Full AC", "Jacuzzi", "Private Lounge", "24h Concierge"],
  },
  {
    id: 4,
    name: "Deluxe Beachfront Room",
    tag: "Steps to the shore",
    description:
      "Understated luxury just steps from the sand, with soft neutral tones and effortless indoor-outdoor flow.",
    price: 340,
    rating: 4.8,
    guests: 2,
    size: "40 m²",
    bed: "Queen Bed",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
    amenities: ["Full AC", "Beach Access", "Reading Nook", "Espresso Bar"],
  },
];

function RoomCard({ room }) {
  return (
    <div className="group relative flex flex-col rounded-[28px] bg-white/70 backdrop-blur-xl border border-[#e7ded0] shadow-[0_8px_30px_rgba(11,61,50,0.07)] hover:shadow-[0_20px_50px_rgba(11,61,50,0.18)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
      {/* Image */}
      <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-[28px]">
        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D32]/70 via-[#0B3D32]/0 to-transparent" />

        {/* tag */}
        <span className="absolute top-4 left-4 rounded-full bg-white/25 backdrop-blur-md border border-white/40 px-3 py-1 text-[11px] tracking-wide uppercase text-white font-medium">
          {room.tag}
        </span>

        {/* floating glass rating + price capsule (signature element) */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg px-4 py-2">
          <div className="flex items-center gap-1 text-[#0B3D32]">
            <Star size={14} className="fill-[#B8935A] text-[#B8935A]" />
            <span className="text-sm font-semibold">{room.rating}</span>
          </div>
          <span className="h-4 w-px bg-[#0B3D32]/20" />
          <div className="text-sm font-semibold text-[#0B3D32]">
            ${room.price}
            <span className="text-[#0B3D32]/60 font-normal"> /night</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pt-9 pb-6">
        <h3
          className="text-2xl text-[#0B3D32] leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {room.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#463f33]/80 font-light">
          {room.description}
        </p>

        {/* stats row */}
        <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-[#F6F1E7] border border-[#eae1cd] px-3 py-3">
          <div className="flex flex-col items-center gap-1 text-center">
            <Users size={16} className="text-[#1C7A5E]" />
            <span className="text-[11px] text-[#463f33]/70">{room.guests} Guests</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center border-x border-[#eae1cd]">
            <Maximize size={16} className="text-[#1C7A5E]" />
            <span className="text-[11px] text-[#463f33]/70">{room.size}</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <BedDouble size={16} className="text-[#1C7A5E]" />
            <span className="text-[11px] text-[#463f33]/70">{room.bed}</span>
          </div>
        </div>

        {/* amenities */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#0B3D32]/5 text-[#0B3D32] text-xs font-medium px-3 py-1.5">
            <Snowflake size={12} /> Full AC
          </span>
          {room.amenities
            .filter((a) => a !== "Full AC")
            .map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center gap-1 rounded-full bg-[#0B3D32]/5 text-[#0B3D32] text-xs font-medium px-3 py-1.5"
              >
                <Sparkles size={12} className="text-[#B8935A]" />
                {amenity}
              </span>
            ))}
        </div>

        {/* CTA */}
        <button className="group/btn mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0B3D32] text-[#F6F1E7] py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#B8935A] hover:text-[#0B3D32]">
          Book Now
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
      </div>
    </div>
  );
}

export default function Rooms() {
  return (
    <section className="relative bg-[#FBF8F3] py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@300;400;500;600;700&display=swap');
        section, section * { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* ambient background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#1C7A5E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#B8935A]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-[#B8935A] font-semibold mb-4">
            Accommodation
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl text-[#0B3D32]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Rooms &amp; Suites
          </h2>
          <p className="mt-5 text-[#463f33]/70 text-base sm:text-lg font-light leading-relaxed">
            Each room is a quiet retreat — considered spaces, natural textures,
            and views that change the way you rest.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
