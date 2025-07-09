import Hero from "./sections/Hero";
import Navbar from "./Navbar";
import Benefits from "./sections/Benefits";
import Footer from "./sections/Footer";
export default function Wrapper() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <Benefits />
        <Footer />
      </div>
    </div>
  );
}
