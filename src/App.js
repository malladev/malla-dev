import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import MySkills from "./components/MySkills.jsx";
import Navbar from "./components/Navbar.jsx";
import { TechScroll } from "./components/TechScroll.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechScroll />
      <About />
      <MySkills />
    </div>
  );
}

export default App;
