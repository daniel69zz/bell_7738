import Display from "./Display";
import { STEPS } from "../data/content";
import "../styles/process.css";

export default function Process() {
  return (
    <section className="sec wrap" id="proceso">
      <div className="sec-head">
        <span className="eyebrow rv">Cómo trabajamos</span>
        <h2 className="h2 rv" style={{ "--d": "70ms" }}>Cuatro etapas, en este orden.</h2>
        <p className="lead rv" style={{ "--d": "140ms" }}>
          El orden importa: cada etapa existe para que la siguiente cueste menos.
        </p>
      </div>
      <div className="proc">
        {STEPS.map((s, i) => (
          <div className={`proc-step rv`} key={s.n} style={{ "--d": `${i * 130}ms` }}>
            <div className="proc-num">
              <Display value={s.n} on="var(--green)" off="var(--green)" offOpacity={0.14} />
            </div>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <span className="proc-when">{s.w}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- cifras --------------------------- */
