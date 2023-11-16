// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Feature from './components/Feature';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css'
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Feature />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
