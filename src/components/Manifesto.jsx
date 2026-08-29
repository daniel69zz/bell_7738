import { useEffect, useRef, useState } from "react";
import Display from "./Display";
import "../styles/manifesto.css";

export default function Manifesto() {
  const ref = useRef(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const prog = (vh * 0.85 - r.top) / (vh * 0.62);
      setP(Math.max(0, Math.min(1, prog)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const flipped = p > 0.5;
  return (
    <section className="sec mani" ref={ref}>
      <div className="wrap mani-grid">
        <div>
          <span className="eyebrow rv">Por qué el nombre</span>
          <h2 className="h2 rv" style={{ "--d": "70ms" }}>Los mismos dígitos, otra lectura.</h2>
          <p className="rv" style={{ "--d": "140ms" }}>
            Escribe 7738 en una calculadora y gírala: dice BELL. No cambió ningún dato,
            cambió desde dónde se lee.
          </p>
          <p className="rv" style={{ "--d": "200ms" }}>
            Nos dedicamos a eso. Los pedidos, las facturas y las personas de tu empresa ya
            están ahí; lo que falta casi siempre es ordenarlos de otra manera para que
            empiecen a decir algo útil.
          </p>
          <div className="mani-scroll rv" style={{ "--d": "260ms" }}>
            <span>Sigue bajando</span>
            <span className="mani-bar"><i style={{ width: `${p * 100}%` }} /></span>
          </div>
        </div>
        <div className="rv" style={{ "--d": "120ms" }}>
          <div className="bezel">
            <div className="lcd mani-screen">
              <div style={{ transform: `rotate(${p * 180}deg)`, transformOrigin: "50% 50%" }}>
                <Display value="BELL" offOpacity={0.12} glow />
              </div>
              <div className="mani-read">
                <b>{flipped ? "7738" : "BELL"}</b>
                <span>{Math.round(p * 180)}°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- mocks --------------------------- */
