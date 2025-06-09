import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="p-0 m-0 overflow-hidden bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Socials />
    </div>
  );
}

export default App;
