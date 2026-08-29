import { useState } from "react";
import Display from "./Display";
import { NEEDS } from "../data/content";
import "../styles/contact.css";

export default function Contact() {
  const [f, setF] = useState({ nombre: "", correo: "", empresa: "", mensaje: "" });
  const [need, setNeed] = useState("");
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const send = () => {
    if (!f.nombre.trim()) return setErr("Falta tu nombre.");
    if (!/^\S+@\S+\.\S+$/.test(f.correo)) return setErr("Revisa el correo: no podemos responderte sin él.");
    setErr("");
    setSent(true);
  };

  return (
    <section className="sec cta" id="contacto">
      <div className="wrap cta-grid">
        <div>
          <span className="eyebrow rv">Contacto</span>
          <h2 className="h2 rv" style={{ "--d": "70ms" }}>Cuéntanos qué proceso te está costando.</h2>
          <p className="lead rv" style={{ "--d": "140ms" }}>
            La primera reunión es de una hora y no se cobra. Salimos de ahí con un alcance
            estimado y un rango de precio, aunque decidas no seguir.
          </p>
          <div className="cta-list rv" style={{ "--d": "200ms" }}>
            <div className="cta-item"><b>Correo</b><span>hola@bell7738.com</span></div>
            <div className="cta-item"><b>WhatsApp</b><span>+591 700 00000</span></div>
            <div className="cta-item"><b>Oficina</b><span>La Paz, Bolivia</span></div>
            <div className="cta-item"><b>Horario</b><span>Lun a vie · 09:00–18:00</span></div>
          </div>
        </div>

        <div className="rv" style={{ "--d": "160ms" }}>
          {sent ? (
            <div className="form sent">
              <div className="sent-scr">
                <Display value="LISTO" on="var(--green)" off="var(--green)" offOpacity={0.13} stagger={70} ariaLabel="Mensaje enviado" />
              </div>
              <h3>Mensaje enviado</h3>
              <p>Gracias, {f.nombre.split(" ")[0]}. Te escribimos a {f.correo} en menos de 24 horas hábiles.</p>
              <button className="key key-b" onClick={() => { setSent(false); setF({ nombre: "", correo: "", empresa: "", mensaje: "" }); setNeed(""); }}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div className="form">
              <div className="field">
                <label htmlFor="n">Nombre</label>
                <input id="n" value={f.nombre} onChange={set("nombre")} placeholder="Cómo te llamamos" />
              </div>
              <div className="field">
                <label htmlFor="c">Correo</label>
                <input id="c" type="email" value={f.correo} onChange={set("correo")} placeholder="tu@empresa.com" />
              </div>
              <div className="field">
                <label htmlFor="e">Empresa</label>
                <input id="e" value={f.empresa} onChange={set("empresa")} placeholder="Opcional" />
              </div>
              <div className="field">
                <label>Qué necesitas</label>
                <div className="chips">
                  {NEEDS.map((n) => (
                    <button key={n} className={`chip ${need === n ? "sel" : ""}`} onClick={() => setNeed(n)} aria-pressed={need === n}>{n}</button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label htmlFor="m">El problema, en dos líneas</label>
                <textarea id="m" value={f.mensaje} onChange={set("mensaje")} placeholder="Ej.: facturamos a mano y se nos pasan los cobros." />
              </div>
              {err && <p className="form-note err">{err}</p>}
              <button className="key key-a" onClick={send} style={{ justifyContent: "center" }}>Enviar mensaje</button>
              <p className="form-note">Respondemos en menos de 24 horas hábiles.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
