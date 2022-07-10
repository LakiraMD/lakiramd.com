import React, { useEffect } from 'react';
import './styles/style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
