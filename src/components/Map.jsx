import React from 'react'

const Map = () => {
  return (
    <>
     <div className="h-[70vh] w-[100%] bg-white flex justify-center items-center">
        <div className="w-[90%] h-[90%]  m-auto rounded-2xl overflow-hidden shadow-lg border border-white/10">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.0194738027462!2d77.74325107536077!3d30.435549874728896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2fbca0c7db3f%3A0x93d6bbf8b5fdf0dd!2sMango%20tree%20resort%20and%20villas!5e0!3m2!1sen!2sin!4v1783918643910!5m2!1sen!2sin" width="100%" height="100%"
                loading="lazy"  referrerPolicy="strict-origin-when-cross-origin"  title="Google Map"
/>
        </div>
                  
      </div>
    </>
  )
}

export default Map