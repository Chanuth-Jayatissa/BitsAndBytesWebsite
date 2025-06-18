import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Resources from './components/Resources';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Resources />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;