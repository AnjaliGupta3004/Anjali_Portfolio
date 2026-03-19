import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SocialDock from "./components/SocialDock"; // Import here
const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <SocialDock /> {/* Place it here */}
      <Hero />
      <div className="max-w-7xl mx-auto pb-20">
        <Experience />
        <Projects />
      </div>
    <footer className="pb-32 pt-10 text-center text-secondary border-t border-white/5">
        <p>© 2026 Anjali Gupta. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;