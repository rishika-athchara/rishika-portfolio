import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorLight from './components/CursorLight';
import './styles/globals.css';

function App() {
  /* ── Lenis smooth scroll ── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--pearl)' }}>
      <CursorLight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
