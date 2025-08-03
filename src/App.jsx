import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      <div className=' my-4 rounded-2xl py-5  px-10 w-[60%]  mx-auto bg-violet-100 min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <Footer />
    </>
  ) 
}

export default App
