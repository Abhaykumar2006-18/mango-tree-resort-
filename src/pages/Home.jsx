import React from 'react'
import Nav from '../components/Nav'
import Map from '../components/Map'
import  Form from '../components/Form'
import RoomSample from '../components/RoomSample'
import Hero from '../components/Hero'




const Home = () => {
   
  return (
    <>
        <div className="min-h-[100vh] w-[100%] bg-cover bg-no-repeat bg-center bg-[url('./img2.jpeg')]  md:bg-[image:linear-gradient(to_right,rgba(0,0,0,0.5),rgba(0,0,0,0.5),transparent),url('/img3.jpeg')]">
             

            <Hero/>
        </div>
        <RoomSample/>
        <Form/>
        <Map/>


    </>
  )
}

export default Home