import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Todoapp from './components/Todoapp'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
   <Navbar/>
  
   <div className=' my-4 rounded-2xl py-5  px-10 w-[60%]  mx-auto bg-violet-100 min-h-[80vh]'>
   <Todoapp/>
   </div>
   <Footer/>
  </>
  )
}

export default App
