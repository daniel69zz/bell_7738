import { useEffect, useState } from "react";
import Display from "./Display";
import { NAV_LINKS } from "../data/content";
import { scrollToId } from "../lib/scroll";
import "../styles/nav.css";

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setStuck(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };
  return (
    <header className={`nav ${stuck ? "stuck" : ""}`}>
      <div className="wrap nav-in">
        <a href="#top" className="brand" onClick={go("top")}>
          <span className="brand-chip">
            <Display value="BELL" on="var(--ink)" off="var(--ink)" offOpacity={0.18} glow />
          </span>
          <span className="brand-txt">BELL 7738</span>
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={go(id)}>{label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="#contacto" className="key key-a" onClick={go("contacto")}>Hablemos</a>
          <button className={`burger ${open ? "open" : ""}`} onClick={() => setOpen((o) => !o)} aria-label="Abrir menú" aria-expanded={open}>
            <span />
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          {NAV_LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={go(id)}>{label}</a>
          ))}
          <a href="#contacto" className="key key-a" style={{ marginTop: 16, justifyContent: "center" }} onClick={go("contacto")}>Hablemos</a>
        </div>
      )}
    </header>
  );
}
