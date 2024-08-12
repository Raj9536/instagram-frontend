import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/pages/Signup';
import Login from './components/pages/login';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile'
import EditProfile from './components/EditProfile';
import CreatePopup from './components/CreatePopup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
        <Route path='/createPopup' element={<CreatePopup/>}/>

      </Routes>
    </Router>
  )
}

export default App