import { useEffect, useState } from "react";

export function useCountUp(target, seen, dur = 1400, pad = 0) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setN(target); return; }
    let raf, t0;
    const step = (t) => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, target, dur]);
  return String(n).padStart(pad, "0");
}

/* ================================================================== *
 *  NAV · HERO · TICKER · SERVICIOS
 * ================================================================== */
