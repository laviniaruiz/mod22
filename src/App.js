import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Footer from './components/Footer';
import Home from './components/Header';
import Nav from './components/Nav';
import Header from './components/Home';
import Contact from './pages/Contact';
import Comment from './pages/Comment';
import './index.css';


function App() {

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
  
  // <Routes>
  //   <Route path="/" element={Footer />}
  // </Routes>

  );
}

export default App;
