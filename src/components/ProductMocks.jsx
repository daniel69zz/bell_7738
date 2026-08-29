/* Maquetas de interfaz de cada producto. Son puramente decorativas:
   no consumen datos reales, se dibujan con CSS y SVG. */
export function MockTurno() {
  const pattern = "0122010 1002210 0210100 2011020 0120011".split(" ");
  return (
    <>
      <div className="mock-bar"><i /><i /><i /><span>Turno · semana 34</span></div>
      <div className="slot-lbl">{["L", "M", "M", "J", "V", "S", "D"].map((d, i) => <span key={i}>{d}</span>)}</div>
      <div className="slots">
        {pattern.flatMap((row, r) =>
          row.split("").map((c, i) => (
            <i key={`${r}-${i}`} className={c === "1" ? "f" : c === "2" ? "h" : r === 2 && i === 3 ? "now" : ""} />
          ))
        )}
      </div>
    </>
  );
}
export function MockCobro() {
  const rows = [
    ["F-0142", "Bs 4.200", "Pagado", "var(--green)"],
    ["F-0143", "Bs 1.850", "Enviado", "var(--amber)"],
    ["F-0144", "Bs 9.600", "Pagado", "var(--green)"],
  ];
  const bars = [42, 61, 38, 74, 55, 88, 69];
  return (
    <>
      <div className="mock-bar"><i /><i /><i /><span>Cobro · agosto</span></div>
      <div className="inv">
        {rows.map(([id, amt, st, c]) => (
          <div className="inv-row" key={id}>
            <b>{id}</b><span>{amt}</span>
            <span className="st"><i style={{ background: c }} />{st}</span>
          </div>
        ))}
      </div>
      <div className="spark">
        {bars.map((h, i) => (
          <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }} />
        ))}
      </div>
    </>
  );
}
export function MockRuta() {
  return (
    <>
      <div className="mock-bar"><i /><i /><i /><span>Ruta · 3 unidades activas</span></div>
      <svg viewBox="0 0 300 128" style={{ width: "100%", height: "calc(100% - 30px)" }} aria-hidden="true">
        <path id="r7738" d="M14 104 C 70 104, 62 32, 120 34 S 196 96, 236 62 S 276 22, 290 20"
          fill="none" stroke="#2A3125" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 104 C 70 104, 62 32, 120 34 S 196 96, 236 62 S 276 22, 290 20"
          fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray="440" strokeDashoffset="230" opacity=".85" />
        {[[14, 104], [120, 34], [236, 62]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="7" fill="#12160F" stroke="#3C4338" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="2.5" fill={i === 2 ? "var(--amber)" : "var(--green)"} />
          </g>
        ))}
        <circle r="4.5" fill="var(--green-2)">
          <animateMotion dur="6.5s" repeatCount="indefinite"
            path="M14 104 C 70 104, 62 32, 120 34 S 196 96, 236 62 S 276 22, 290 20" />
        </circle>
      </svg>
    </>
  );
}
export function MockSello() {
  const steps = [
    ["done", "Solicitud enviada · Compras", "✓"],
    ["done", "Visto bueno · Jefatura", "✓"],
    ["wait", "Firma pendiente · Gerencia", ""],
    ["", "Archivo y notificación", ""],
  ];
  return (
    <>
      <div className="mock-bar"><i /><i /><i /><span>Sello · OC-2291</span></div>
      <div className="steps-mock">
        {steps.map(([st, label, mark], i) => (
          <div className={`step-m ${st}`} key={i}>
            <span className="dot">{mark}</span>{label}
          </div>
        ))}
      </div>
    </>
  );
}
