import { SECTORS } from "../data/content";
import "../styles/ticker.css";

export default function Ticker() {
  const row = [...SECTORS, ...SECTORS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-in">
        {row.map((s, i) => (
          <span className="tick-item" key={i}><i />{s}</span>
        ))}
      </div>
    </div>
  );
}
