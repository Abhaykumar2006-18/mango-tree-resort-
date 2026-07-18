import React from 'react'
import img1 from '../assets/img1.jpeg'
import img3 from '../assets/img3.jpeg'

const About = () => {
  return (
    <div className='p-5'>

      <div className="mx-auto w-[90%] md:w-[85%] h-[40vh] md:h-[50vh] mt-20 relative" >
        <img className='h-full w-full '  src={img3} alt="" />
           <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10 p-4 font-Cinzel text-center">
                <h1 className="text-white text-lg md:text-3xl font-bold [text-align-last:center]">
                   About Us:- Mango Tree Resorts and Villas (This Property are in superb location in the lap of nature)
                </h1>
           </div>
      </div>

        
        <div className='mt-4 min-h-[80vh] w-[100%]  p-5 md:p-10 gap-10 flex justify-around md:flex-row flex-col text-black items-center ' >
        <div className='h-[35%] bg-blue-500 w-[90%] md:h-[40%] md:w-[30%]'><img className='h-full w-full'  src={img1} alt="" /></div>
        
        <div className='w-[90%] md:w-[50%] flex flex-col gap-4'>
          <h1 className='md:text-[18px] font-Cinzel'>Welcome to Mango Tree Resort, located in the peaceful town of Herbertpur, Dehradun. We are dedicated to providing a comfortable, relaxing, and memorable experience for every guest.</h1>
          <h1 className=' md:text-[18px] font-Cinzel'>We offer clean and spacious rooms with all the basic facilities you need for a pleasant stay. Our team is available 24 hours a day, 7 days a week to help you and make sure you have a comfortable visit.</h1>
          <h1 className=' md:text-[18px] font-Cinzel'> Mango Tree Resort is not only a great place to stay but also the perfect venue for all kinds of celebrations. We host weddings, receptions, birthday parties, anniversaries, family functions, corporate events, and other special occasions. Our spacious venue and friendly staff help make every event smooth and memorable.</h1>
        </div>
    
    
    </div>
        
        
        
        
        
         <div className='min-h-[50vh] w-[100%] flex flex-col justify-center items-center gap-6 md:gap-10 px-5 md:p-15'>
             <h1 className='text-4xl md:text-6xl font-Mea '>Contact us for Enquiry</h1>
             <h1 className='font-Cinzel [text-align-last:center]'>Your perfect celebration deserves the perfect place. Discover Mango Tree Resorts and Villas and create memories that last forever. Book now and celebrate life the way it should be — grand and unforgettable.</h1>
             <a href="tel:+918958366236"> <button  className="bg-gradient-to-r from-red-500 to-red-700 px-6 py-2 rounded-xl   text-white font-semibold shadow-md  hover:from-red-600 hover:to-red-800 hover:scale-105   hover:shadow-[0_0_15px_rgba(239,68,68,0.7)]   active:scale-95 transition duration-300" > Call Now </button> </a>
        </div>
    
    
    
    </div>
  )
}

export default About