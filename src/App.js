import About from "./components/About.jsx";
import { Contact } from "./components/Contact.tsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Portfolio from "./components/Portfolio.jsx";
import { Projects } from "./components/Projects.tsx";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
