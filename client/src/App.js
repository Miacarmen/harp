import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';
// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import UserDash from './pages/UserDash';
import Contact from './pages/Contact';
import ViewEvent from './pages/ViewEvent';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/dashboard' element={<UserDash />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/viewEvent' element={<ViewEvent />} />
          <Route path='*' element={<p>Page Not Found</p>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </>
  );
}

export default App;

