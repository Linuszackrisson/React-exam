import React from 'react'
import Homepage from './pages/Homepage/Homepage'
import Eventpage from './pages/Eventpage/Eventpage'
import Nav from './components/Nav'
import EventDetails from './components/EventDetails'
import Cartpage from './pages/Cartpage/Cartpage'



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
      <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/events/:eventId" element={<EventDetails />} /> 
          <Route path="/cartpage" element={<Cartpage />} />

         </Routes>
        < Nav/>
      </div>
  )
}

export default App
