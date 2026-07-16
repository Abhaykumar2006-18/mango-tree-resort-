import React from 'react'
import v1 from '../assets/v1.mp4'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'

const RoomSample = () => {
  return (
    <div className='min-h-[100vh] w-full p-4 md:p-8 flex flex-col gap-8 md:gap-15'>
        <div className='text-center pt-2 md:pt-8 font-Cinzel'>
          <h1 className='text-2xl md:text-4xl font-semibold'>Rooms Designed for Relaxation</h1>
          <p className='text-sm md:text-lg mt-2 [text-align-last:center]'>Every room is thoughtfully designed with modern comforts, air conditioning, and a peaceful ambiance <br/> to ensure a relaxing and memorable stay.</p>
        </div>

        <div className='w-[95%] md:w-[90%] mx-auto min-h-[70vh] flex justify-center items-center'>
            
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

  {/* BIG VIDEO */}
  <div className="lg:col-span-7 relative rounded-[30px] overflow-hidden shadow-xl bg-black h-[450px] md:h-[560px]">
    <video
      src={v1}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
    />

    <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full">
      <p className="text-[#1B1B1B] text-sm font-semibold">
          Experience the Premiumness
      </p>
    </div>
  </div>

  {/* RIGHT SIDE IMAGES */}
  <div className="lg:col-span-5 grid grid-cols-1 gap-6">
    <div className="relative rounded-[30px] overflow-hidden h-[265px]">
      <img
        src={img4}
        alt="Wedding Celebrations"
        className="w-full h-full object-cover"
      />
      <div className="absolute font-Cinzel bottom-4 left-4 bg-white/80 px-4 py-2 rounded-full">
          Full Air conditioning
      </div>
    </div>

    <div className="relative rounded-[30px] overflow-hidden h-[265px]">
      <img
        src={img5}
        alt="Private Party Space"
        className="w-full h-full object-cover"
      />
      <div className="absolute font-Cinzel bottom-4 left-4 bg-white/80 px-4 py-2 rounded-full">
        Private Space
      </div>
    </div>
  </div>

  {/* BOTTOM LEFT */}
 

</div>
        </div>




        

              
        
        
        
    
    
       
    
</div>
  )
}

export default RoomSample