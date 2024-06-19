import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';
import Carousel from './components/carousel'; 
import Contact from './components/Contact';    
import Feedback from './components/Feedback';
import Footer from './components/footer';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Home/>
      <Carousel/>
      <Contact/>
      <Feedback/>
      <Footer/>
     
    </React.Fragment>
    
  );
}

export default App;