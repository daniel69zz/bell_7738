import Display from "./Display";
import { NAV_LINKS } from "../data/content";
import { onNavClick } from "../lib/scroll";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div>
          <div className="brand">
            <span className="brand-chip">
              <Display value="BELL" on="var(--ink)" off="var(--ink)" offOpacity={0.18} glow />
            </span>
            <span className="brand-txt">BELL 7738</span>
          </div>
          <p className="foot-small">Software a medida · Automatización · SaaS · La Paz, Bolivia</p>
        </div>
        <div>
          <nav className="foot-nav">
            {NAV_LINKS.map(([l, id]) => (
              <a key={id} href={`#${id}`} onClick={onNavClick(id)}>{l}</a>
            ))}
            <a href="#contacto" onClick={onNavClick("contacto")}>Contacto</a>
          </nav>
          <p className="foot-small">© {new Date().getFullYear()} BELL 7738. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================== *
 *  APP
 * ================================================================== */
