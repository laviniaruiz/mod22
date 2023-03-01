import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Footer from './components/Footer';
import Home from './components/Header';
import Nav from './components/Nav';
import Header from './components/Home';
import Contact from './pages/Contact';
import Comment from './pages/Comment';

function App() {

    // const apiKey = '7747d3f7f3c84c3715d69cbed5db6965'

  return (
    <div className="App">

      <Nav />      
      <Home />
      <Header />
      <Footer />
      <About />
      <Contact />
      <Comment />

    </div>
  
  );
}

export default App;
