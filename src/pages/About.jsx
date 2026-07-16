import React from 'react'

const About = () => {
  return (
    <div>
        <section className="bg-[#faf8f4] py-32">
  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[5px] text-amber-700 font-semibold">
      About Mango Tree Resort
    </p>

    <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight text-gray-900">
      Crafted For
      <br />
      Memorable Experiences
    </h1>

    <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-600">
      Located in the peaceful surroundings of Herbertpur, Dehradun,
      Mango Tree Resort combines luxury accommodation, warm hospitality,
      and natural beauty to create unforgettable stays for families,
      couples, business travelers, and event celebrations.
    </p>

    <div className="flex gap-5 mt-12">
      <button className="px-8 py-4 bg-black text-white rounded-full">
        Book Your Stay
      </button>

      <button className="px-8 py-4 border rounded-full">
        Contact Us
      </button>
    </div>

  </div>
</section>
    </div>
  )
}

export default About