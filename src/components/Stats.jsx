import Display from "./Display";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { STATS } from "../data/content";
import "../styles/stats.css";

function Stat({ target, label, note, delay }) {
  const [ref, seen] = useInView({ threshold: 0.5 });
  const pad = String(target).length;
  const val = useCountUp(target, seen, 1500, pad);
  return (
    <div className="stat rv" ref={ref} style={{ "--d": `${delay}ms` }}>
      <div className="stat-scr">
        <Display value={val} on="var(--green)" off="var(--green)" offOpacity={0.13} style={{ width: "auto", height: "100%" }} ariaLabel={`${target} ${label}`} />
      </div>
      <b>{label}</b>
      <span>{note}</span>
    </div>
  );
}
export default function Stats() {
  return (
    <section className="sec stats">
      <div className="wrap stats-grid">
        {STATS.map(([n, l, note], i) => (
          <Stat key={l} target={n} label={l} note={note} delay={i * 110} />
        ))}
      </div>
    </section>
  );
}

/* ================================================================== *
 *  EQUIPO · CONTACTO · PIE
 * ================================================================== */
