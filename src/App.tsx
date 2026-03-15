import React from 'react';
import Header from './Header.tsx';
import Hero from './Hero.tsx';
import About from './About.tsx';
import Skills from './Skills.tsx';
import Projects from './Projects.tsx';
import Testimonials from './Testimonials.tsx';
import Contact from './Contact.tsx';
import Footer from './Footer.tsx';

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
