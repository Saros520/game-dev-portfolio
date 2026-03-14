import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
