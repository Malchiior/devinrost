import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ImageGenerator from "./components/ImageGenerator";
import Contact from './components/Contact';// ...
/*import Footer from './components/Footer';*/

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />   {/* <-- Make sure this is included */}
      <Projects />
      <ImageGenerator />
      <Contact />
      {/* <Footer /> Uncomment when Footer is ready */}
      
    </div>
  );
}

export default App;
