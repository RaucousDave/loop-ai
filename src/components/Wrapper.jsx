import Hero from "./sections/Hero";
import Navbar from "./Navbar";
import Benefits from "./sections/Benefits";
import Footer from "./sections/Footer";
export default function Wrapper() {
  return (
    <div>
      <div>
        <div className="pt-5 md:px-6 bg-gray-300">
          <Navbar />
          <Hero />
        </div>
        <Benefits />
        <Footer />
      </div>
    </div>
  );
}
