import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home1 from './screens/home1'
import Registration from './screens/registration'
import MainChat from './screens/mainChat'



import Call from './screens/call'
import Camera from './screens/camera'
import Profile from './screens/profile'
import Chat from './screens/Chat'
import Confidentiality from './screens/confidentiality'
import Privacy from './screens/privacy'



import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Current from './screens/сurrent'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/mainChat' element={<MainChat />} />
          <Route path='/current' element={<Current />} />
          
          <Route path='/call' element={<Call />} />
          <Route path='/Camera' element={<Camera />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/confidentiality' element={<Confidentiality />} />
          <Route path='/privacy' element={<Privacy />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
