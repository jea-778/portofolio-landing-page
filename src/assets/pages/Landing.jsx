import { Element } from "react-scroll";

import Navbar from "../layouts/Navbar"
import IntroPersonalBrand from "../components/Intro"
import Dashboard from "../components/Dashboard";
import SkillAdd from "../components/SkillAdd";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Element name="home" />

      <IntroPersonalBrand />

      <Dashboard />

      <Element name="projects" />
      <Projects projectName="FILM API TMDB" />

      <Element name="about" />
      <Footer />
    </>
  );
}

export default App