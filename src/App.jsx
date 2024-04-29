import React from 'react'
import Homepage from './pages/Homepage/Homepage'
import Eventpage from './pages/Eventpage/Eventpage'
import Nav from './components/Nav'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link, 
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className='mobile-wrapper'>
      <BrowserRouter>
      
      
      <Routes>
        
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Eventpage />} />
         
        </Routes>
        
        < Nav/>
      </BrowserRouter>
    </div>
  )
}

export default App
