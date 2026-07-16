import React from 'react'
import Home from './pages/Home'
import { Route , Routes } from 'react-router-dom'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Events from './pages/Events'
import Nav from './components/Nav'
import Footer from './components/Footer'


const App = () => {
  return (

    <div className='min-h-[100vh] w-[100%]'>
      <Nav/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<Rooms/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/about' element={<About/>} />
       </Routes>

       <Footer/>
       
    </div>

  )
}

export default App