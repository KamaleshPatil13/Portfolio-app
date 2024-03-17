import { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/UI/Hero";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
