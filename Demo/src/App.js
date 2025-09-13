import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesRow from "./components/FeaturesRow";
import Calculator from "./components/Calculator";
import StepsCarousel from "./components/StepsCarousel";
import HowItWorks from "./components/HowItWorks";
import AppFeatures from "./components/AppFeatures";
import Footer from "./components/Footer";
import About from "./components/About";
import TestimonialSlider from "./components/TestimonialSlider";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <Hero />
      <FeaturesRow />
      <Calculator />
      <StepsCarousel />
      <HowItWorks />
      <AppFeatures />
      <About/>
      <TestimonialSlider/>
      <FAQ/>
      <Footer />
    </div>
  );
}
