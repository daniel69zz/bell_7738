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

  // Con el menú abierto: Escape lo cierra y, si la ventana crece hasta
  // escritorio, se cierra solo para no dejarlo colgado tras el breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 941px)");
    const onWide = (e) => e.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open]);
  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };
  return (
    <header className={`nav ${stuck ? "stuck" : ""} ${open ? "open-menu" : ""}`}>
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
          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            <span />
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu" id="menu-movil">
          {NAV_LINKS.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={go(id)}>{label}</a>
          ))}
          <a href="#contacto" className="key key-a" style={{ marginTop: 16, justifyContent: "center" }} onClick={go("contacto")}>Hablemos</a>
        </div>
      )}
    </header>
  );
}
