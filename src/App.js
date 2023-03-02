import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Comment from './pages/Comment';
import './App.css';
import { getActiveElement } from '@testing-library/user-event/dist/utils';


function App() {

  function getWeather() {

  }

  return (
    <div className="App">

      <Nav />
      <Routes>
        <Route path="/" element={<Home getWeather={getWeather} />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} />
      </Routes>
      
      <Footer />
      
    </div>
  

  );
}

export default App;
