/**
 * Display de 7 segmentos. La geometría de cada segmento sale del logo
 * original de BELL 7738 (bell_7738_variante_display_segmentos_apagados.svg),
 * por eso cualquier texto renderizado aquí es tipográficamente la marca.
 */
const SEG = {
  a: "6,6 12,0 48,0 54,6 48,12 12,12",
  b: "54,6 60,12 60,46 54,52 48,46 48,12",
  c: "54,52 60,58 60,92 54,98 48,92 48,58",
  d: "6,98 12,92 48,92 54,98 48,104 12,104",
  e: "6,52 12,58 12,92 6,98 0,92 0,58",
  f: "6,6 12,12 12,46 6,52 0,46 0,12",
  g: "6,52 12,46 48,46 54,52 48,58 12,58",
};
const KEYS = ["a", "b", "c", "d", "e", "f", "g"];
const GLYPH = {
  "0": "abcdef", "1": "bc", "2": "abged", "3": "abgcd", "4": "fgbc",
  "5": "afgcd", "6": "afgecd", "7": "abc", "8": "abcdefg", "9": "abcdfg",
  B: "abcdefg", E: "afged", L: "fed", A: "abcefg", C: "adef", D: "bcdeg",
  F: "aefg", G: "acdef", H: "bcefg", I: "ef", J: "bcd", N: "ceg", O: "cdeg",
  P: "abefg", R: "eg", S: "afgcd", T: "defg", U: "bcdef", Y: "bcdfg",
  "-": "g", ".": "", " ": "", _: "d",
};
const CELL_W = 60;
const ADV = 76;
const CELL_H = 104;

/** Display de 7 segmentos fiel al logo. */
export default function Display({
  value = "8888",
  on = "var(--ink)",
  off = "var(--ink)",
  offOpacity = 0.11,
  height,
  stagger = 0,
  className = "",
  style,
  glow = false,
  ariaLabel,
}) {
  const chars = String(value).toUpperCase().split("");
  const w = (chars.length - 1) * ADV + CELL_W;
  return (
    <svg
      viewBox={`-5 -5 ${w + 10} ${CELL_H + 10}`}
      className={className}
      style={{ display: "block", width: "100%", height: height || "auto", ...style }}
      role="img"
      aria-label={ariaLabel || `Pantalla: ${value}`}
    >
      {chars.map((ch, i) => {
        const lit = GLYPH[ch] || "";
        return (
          <g key={i} transform={`translate(${i * ADV},0)`}>
            {KEYS.map((k, j) => {
              const isOn = lit.includes(k);
              return (
                <polygon
                  key={k}
                  points={SEG[k]}
                  className={isOn ? "seg-on" : "seg-off"}
                  fill={isOn ? on : off}
                  opacity={isOn ? 1 : offOpacity}
                  style={{
                    transitionDelay: `${(i * 7 + j) * stagger}ms`,
                    filter: isOn && glow ? "drop-shadow(0 0 6px rgba(53,196,148,.55))" : undefined,
                  }}
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

/* --------------------------- hooks --------------------------- */
