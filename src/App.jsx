import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Footer from "./components/Footer";

const App = () => {
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
          <section id="contacts">
            <Contacts />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
