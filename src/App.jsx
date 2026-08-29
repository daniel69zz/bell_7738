import "./styles/base.css";
import { useReveal } from "./hooks/useReveal";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Services from "./components/Services";
import Manifesto from "./components/Manifesto";
import Products from "./components/Products";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <div className="b7">
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Manifesto />
      <Products />
      <Process />
      <Stats />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
