import React from 'react'
import Nav from '../components/Nav'
import Map from '../components/Map'
import  Form from '../components/Form'
import RoomSample from '../components/RoomSample'
import Hero from '../components/Hero'
import Last from '../components/Last'
import { useState } from 'react'
import { useEffect } from 'react'




const Home = () => {
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
   
  return (
    <>
        <div style={{ backgroundImage: isMobile ? "url('/img2.jpeg')"  : "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5), transparent), url('/img3.jpeg')", backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className="min-h-[100vh] w-[100%] bg-cover bg-no-repeat bg-center bg-[url('/img2.jpeg')]  md:bg-[image:linear-gradient(to_right,rgba(0,0,0,0.5),rgba(0,0,0,0.5),transparent),url('/img3.jpeg')]">
             

            <Hero/>
        </div>
        <RoomSample/>
        <Last/>
        <Form/>
        <Map/>


    </>
  )
}

export default Home