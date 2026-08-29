import { useEffect, useRef, useState } from "react";

/** Devuelve [ref, visto]: `visto` pasa a true la primera vez que el nodo entra en pantalla. */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.35, ...options }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

/** Cuenta hasta el objetivo cuando entra en pantalla, como una calculadora. */
