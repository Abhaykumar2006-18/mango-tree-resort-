import React, { useState } from "react";


const Form = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918979916129"; // ✅ your number

    const text = `New Booking Request - Tyagi Farms

Name: ${form.name}
Phone: ${form.phone}
Event Type: ${form.event}
Booking Date: ${form.date}
Guests: ${form.guests}

Message:
${form.message}`;

    alert("Redirecting to WhatsApp..."); // UX

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (

    <div className="overflow-hidden">
    
    
    <section className="min-h-screen w-full bg-[#F9F7F2] px-5 md:px-12 py-24 font-Cinzel">
       
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#B08D57] uppercase tracking-[5px] text-sm font-semibold">
            Book Your Event in Mango Tree Resort 
          </p>

          <h1 className="text-4xl md:text-6xl font-Cinzel font-bold text-[#1B1B1B] mt-4 leading-tight">
             GET IN TOUCH WITH OUR EXPERTS
          </h1>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Book Rooms , private parties, family gatherings and
             events with a premium experience.
          </p>

          <div className="mt-8 space-y-3 text-gray-700">
            <p>📍 Herbertpur, Dehradun</p>
            <p>📞 Contact directly on WhatsApp</p>
            <p>✨ Wedding | Party | Celebration | Rooms</p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[30px] shadow-xl p-6 md:p-8 border border-[#E5E0D8]"
        >
          <h2 className="text-3xl font-serif font-bold text-[#1B1B1B] mb-6">
            Booking Enquiry
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#B08D57]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full mb-4 px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#B08D57]"
          />

          <select
            name="event"
            required
            value={form.event}
            onChange={handleChange}
            className="w-full mb-4 px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#B08D57]"
          >
            <option value="">Select Event Type</option>
            <option value="Wedding Booking">Rooms Booking</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Private Party">Private Party</option>
            <option value="Family Gathering">Family Gathering</option>
            <option value="Farmhouse Stay">Weeding Functions</option>
          </select>

          <input
            type="date"
            name="date"
            required
            value={form.date}
            onChange={handleChange}
            className="w-full mb-4 px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#B08D57]"
          />

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            required
            value={form.guests}
            onChange={handleChange}
            className="w-full mb-4 px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#B08D57]"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full mb-5 px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#B08D57] resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#B08D57] hover:bg-[#9a7745] text-white py-3 rounded-xl font-semibold transition"
          >
            Send Booking on WhatsApp 📲
          </button>
        </form>

      </div>
    </section>
    </div>
  );
};

export default Form;