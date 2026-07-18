import React from 'react'
import { Link } from 'react-router-dom'

const Last = () => {
  

  return (
    <div className="bg-[#EDEADE] font-Cinzel h-[100vh] flex justify-center items-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        
        <div className="relative z-10 text-center">
          <span className="text-[#C9A227] font-semibold text-sm md:text-base tracking-wider uppercase">
            Start Planning Today
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-3 mb-6">
            Ready to Celebrate with Us?
          </h2>
          <p className="text-black text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Whether it's your dream wedding, a milestone birthday, a joyful anniversary, a memorable reception, 
            or a productive corporate event — Mango Tree Resort is here to make it extraordinary. 
            Let's create memories that last a lifetime.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link to='/booking'> <button className="px-8 py-4 bg-[#C9A227] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-[#b38f1d] hover:shadow-2xl hover:-translate-y-1 active:scale-95"> Book Now </button></Link>
            
            
          <a  href="tel:+911234567890">  <button  className=" px-8 py-4 bg-sky-600 text-white rounded-full font-semibold transition-all duration-300 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-500/30 hover:scale-105"> 
              📞 Call Now </button></a>
          
          
          </div>
          
          {/* Contact info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 text-black">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <span>Herbertpur, Dehradun, Uttarakhand</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <span>Contact for Bookings</span>
            </div>
          </div>
        </div>
      

      </div>
)
}

export default Last