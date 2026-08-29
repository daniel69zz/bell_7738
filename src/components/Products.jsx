import { MockTurno, MockCobro, MockRuta, MockSello } from "./ProductMocks";
import "../styles/products.css";

const PRODUCTS = [
  { name: "Turno", kicker: "Agenda y reservas", state: ["on", "En producción"], mock: MockTurno,
    body: "Reservas en línea, recordatorios automáticos y una agenda que el equipo entiende sin capacitación. Pensado para clínicas, talleres y estudios.",
    metric: ["38%", "menos citas perdidas"] },
  { name: "Cobro", kicker: "Facturación recurrente", state: ["on", "En producción"], mock: MockCobro,
    body: "Emite, envía y persigue facturas solo. Cuando alguien se atrasa, el recordatorio sale sin que nadie lo escriba.",
    metric: ["1.200", "facturas al mes"] },
  { name: "Ruta", kicker: "Entregas en tiempo real", state: ["beta", "Beta abierta"], mock: MockRuta,
    body: "Cada entrega en un mapa, con avisos al cliente y una hoja de ruta que se reordena cuando algo cambia.",
    metric: ["9", "flotas conectadas"] },
  { name: "Sello", kicker: "Aprobaciones internas", state: ["beta", "Piloto"], mock: MockSello,
    body: "Órdenes de compra, permisos y contratos con firma digital y una fila clara: quién falta y desde cuándo.",
    metric: ["6 h", "para aprobar, antes 4 días"] },
];
export default function Products() {
  return (
    <section className="sec wrap" id="productos">
      <div className="sec-head">
        <span className="eyebrow rv">Productos propios</span>
        <h2 className="h2 rv" style={{ "--d": "70ms" }}>Lo que construimos cuando nadie nos encarga nada.</h2>
        <p className="lead rv" style={{ "--d": "140ms" }}>
          Cuatro productos que nacieron de proyectos reales y hoy funcionan solos. También son
          la base sobre la que armamos soluciones a medida más rápido.
        </p>
      </div>
      <div className="prd-grid">
        {PRODUCTS.map((p, i) => {
          const Mock = p.mock;
          return (
            <article className="prd rv" key={p.name} style={{ "--d": `${(i % 2) * 110}ms` }}>
              <div className="prd-mock"><Mock /></div>
              <div className="prd-body">
                <div className="prd-top">
                  <h3>{p.name}</h3>
                  <span className={`pill ${p.state[0]}`}>{p.state[1]}</span>
                </div>
                <span className="prd-kicker">{p.kicker}</span>
                <p>{p.body}</p>
                <div className="prd-metric">
                  <b>{p.metric[0]}</b><span>{p.metric[1]}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* --------------------------- proceso --------------------------- */
