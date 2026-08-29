import { useEffect } from "react";

/**
 * Observa los elementos marcados con .rv / .rv-l / .rv-w y les añade .in
 * cuando entran en pantalla. Se monta una sola vez, en App.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll(".b7 .rv, .b7 .rv-l, .b7 .rv-w, .b7 .proc-step")
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
