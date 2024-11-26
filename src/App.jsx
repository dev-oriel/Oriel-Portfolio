import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track scroll position to toggle visibility of the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layers */}
      <div className="fixed top-0 -z-20 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gray-900"></div>
        <div className="absolute top-0 z-[-1] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-70"></div>
        <div className="absolute top-0 z-[-1] h-full w-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent)] opacity-20"></div>
      </div>

      {/* Application Content */}
      <div className="container mx-auto px-4">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <section id="about">
            <About />
          </section>
          <section id="technologies">
            <Technologies />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="reviews">
            <Reviews />
          </section>
          <section id="contacts">
            <Contacts />
          </section>
        </main>
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-cyan-500 text-white p-3 rounded-sm shadow-lg hover:bg-cyan-600 transition duration-300"
          aria-label="Scroll to top"
        >
          ⬆
        </button>
      )}
    </div>
  );
};

export default App;
