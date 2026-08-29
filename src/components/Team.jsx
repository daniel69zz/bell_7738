import { STACK, ROLES } from "../data/content";
import "../styles/team.css";

export default function Team() {
  return (
    <section className="sec wrap" id="equipo">
      <div className="team-grid">
        <div>
          <span className="eyebrow rv">Quiénes somos</span>
          <h2 className="h2 rv" style={{ "--d": "70ms" }}>Un equipo chico que se mete en tu operación.</h2>
          <p className="lead rv" style={{ "--d": "140ms" }}>
            Nueve personas en La Paz. Trabajamos con pocos clientes a la vez porque el
            trabajo bueno pide entender el negocio, y eso no se reparte entre veinte cuentas.
          </p>
          <div className="stack rv" style={{ "--d": "200ms" }}>
            {STACK.map((s) => <span key={s}>{s}</span>)}
          </div>
        </div>
        <div>
          <div className="quote rv" style={{ "--d": "120ms" }}>
            <p>“Llegamos con una planilla de 40 pestañas y salimos con un sistema que el equipo abrió solo, sin manual.”</p>
            <footer>Marcela Ríos · Operaciones, Distribuidora Andina</footer>
          </div>
          <div className="roles rv" style={{ "--d": "180ms" }}>
            {ROLES.map(([r, d]) => (
              <div className="role" key={r}><b>{r}</b><span>{d}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
