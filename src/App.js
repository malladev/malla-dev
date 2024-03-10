import About from "./components/About.jsx";
import { Contact } from "./components/Contact.tsx";
import Hero from "./components/Hero.jsx";
import MySkills from "./components/MySkills.jsx";
import Navbar from "./components/Navbar.jsx";
import { Projects } from "./components/Projects.tsx";
import Service from "./components/Service.jsx";
import { TechScroll } from "./components/TechScroll.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechScroll />
      <About />
      <MySkills />
      <Service />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
