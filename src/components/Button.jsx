import React from 'react'

const Button = () => {
  return (
    <div>
        <button  onClick={()=>window.location.href="tel:+918958366236"} className='px-6 py-2 text-sm md:text-base font-semibold text-white rounded-xl backdrop-blur-md bg-white/20 border border-white/40 hover:bg-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'>Call Now</button>
    </div>
  )
}

export default Button