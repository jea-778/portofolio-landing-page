

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

      <IntroPersonalBrand />

      <Dashboard />

      <SkillAdd />

      <Projects />

      <Footer />

    </>
  );
}

export default App