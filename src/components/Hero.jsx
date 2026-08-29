import { useEffect, useState } from "react";
import Display from "./Display";
import { onNavClick } from "../lib/scroll";
import "../styles/hero.css";

function HeroScreen() {
  const [boot, setBoot] = useState(true);
  const [flip, setFlip] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setBoot(false), 820);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (boot) return;
    const i = setInterval(() => setFlip((f) => !f), 5400);
    return () => clearInterval(i);
  }, [boot]);
  return (
    <div className="hero-visual">
      <div className="bezel">
        <div
          className="lcd screen"
          onClick={() => setFlip((f) => !f)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setFlip((f) => !f))}
          aria-label="Girar la pantalla"
        >
          <div className="scr-top">
            <span className={!flip ? "lit" : ""}>MARCA</span>
            <span className={flip ? "lit" : ""}>NUM</span>
            <span className="lit">AUTO</span>
            <span>API</span>
            <span>SAAS</span>
          </div>
          <div className="flipper" style={{ transform: `rotate(${flip ? 180 : 0}deg)` }}>
            <Display value={boot ? "8888" : "BELL"} stagger={34} offOpacity={0.12} glow />
          </div>
          <div className="scr-bot">
            <div className="reading" aria-live="polite">
              <span style={{ opacity: flip ? 0 : 1 }}>BELL</span>
              <span style={{ opacity: flip ? 1 : 0 }}>7738</span>
            </div>
            <div className="scr-hint">Gírala ↻</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div>
          <span className="eyebrow rv">Software a medida · Automatización · SaaS</span>
          <h1 className="rv" style={{ "--d": "80ms" }}>
            El software que tu operación <em>ya está pidiendo</em>, construido a tu medida.
          </h1>
          <p className="lead hero-lead rv" style={{ "--d": "160ms" }}>
            Somos un equipo pequeño que diseña, construye y mantiene sistemas internos,
            automatizaciones y productos SaaS. Entregamos cada dos semanas y el código
            queda a tu nombre desde el primer día.
          </p>
          <div className="hero-actions rv" style={{ "--d": "240ms" }}>
            <a className="key key-a" href="#contacto" onClick={onNavClick("contacto")}>
              Agendar una llamada
            </a>
            <a className="key key-b" href="#productos" onClick={onNavClick("productos")}>
              Ver lo que hicimos
            </a>
          </div>
          <div className="hero-meta rv" style={{ "--d": "320ms" }}>
            <span><b>La Paz, Bolivia</b> · trabajo remoto</span>
            <span>Respondemos en <b>menos de 24 h</b></span>
            <span>Primera reunión <b>sin costo</b></span>
          </div>
        </div>
        <HeroScreen />
      </div>
    </section>
  );
}
