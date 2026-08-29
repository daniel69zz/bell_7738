import Display from "./Display";
import { SERVICES } from "../data/content";
import "../styles/services.css";

export default function Services() {
  return (
    <section className="sec wrap" id="servicios">
      <div className="sec-head">
        <span className="eyebrow rv">Qué hacemos</span>
        <h2 className="h2 rv" style={{ "--d": "70ms" }}>Tres formas de trabajar con nosotros.</h2>
        <p className="lead rv" style={{ "--d": "140ms" }}>
          Casi siempre empieza igual: un proceso que creció más rápido que las herramientas
          que lo sostienen. Elegimos el camino más corto entre ese problema y algo que funcione.
        </p>
      </div>
      <div className="svc-grid">
        {SERVICES.map((s, i) => (
          <article className="svc rv" key={s.code} style={{ "--d": `${i * 110}ms` }}>
            <span className="svc-chip">
              <Display value={s.code} on="var(--ink)" off="var(--ink)" offOpacity={0.17} glow />
            </span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <ul>
              {s.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ================================================================== *
 *  MANIFIESTO · PRODUCTOS · PROCESO · CIFRAS
 * ================================================================== */
