import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
import ParallaxSlider from "./components/ParallaxSlider/ParallaxSlider";
import MountainParallax from "./components/MountainParallax/MountainParallax";

import About from "./components/About/About"; // ✅ ADAUGĂ ACEST IMPORT
import Showcase from "./components/Showcase/Showcase";
import ZoomSection from "./components/ZoomSection/ZoomSection";
import Cards3D from "./components/Cards3D/Cards3D";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <ParallaxSlider />
      {/* <Hero /> */}
      <MountainParallax />
    
      <About />
      <Showcase />
      <ZoomSection />
      <Cards3D />
      <Services />
      <Footer />
    </div>
  );
}

export default App;