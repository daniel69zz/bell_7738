/** Desplazamiento suave hacia una sección por su id. */
export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Handler listo para usar en <a href="#id">. */
export const onNavClick = (id) => (e) => {
  e.preventDefault();
  scrollToId(id);
};
