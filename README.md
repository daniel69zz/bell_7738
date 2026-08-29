# BELL 7738 — sitio de presentación

Sitio corporativo de BELL 7738: software a medida, automatización y SaaS.
React + Vite, sin librerías de UI ni de animación: todo el movimiento es CSS
más `IntersectionObserver`.

## Empezar

Necesitas Node 18 o superior.

```bash
npm install
npm run dev      # http://localhost:5173
```

Otros comandos:

```bash
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisar el build
```

Para publicar en Netlify, Vercel o Cloudflare Pages: comando de build `npm run build`,
carpeta de salida `dist`.

## Docker

```bash
# producción: build + nginx  →  http://localhost:8080
docker build -t bell7738 .
docker run --rm -p 8080:80 bell7738

# o con compose
docker compose up --build            # producción, puerto 8080
docker compose --profile dev up dev  # vite con recarga, puerto 5173
```

`Dockerfile` tiene cuatro etapas: `deps` (npm ci, capa cacheada), `dev` (vite con
`--host 0.0.0.0`), `build` (genera `dist/`) y `runtime` (nginx 1.27-alpine sirviendo
`dist/`, imagen final ~76 MB). La configuración de nginx vive en `docker/nginx.conf`:
gzip, caché de un año para `/assets/` con hash, `no-cache` para el html, fallback a
`index.html` y cabeceras de seguridad.

## La idea del diseño

El logo es una pantalla de calculadora: **7738 girado 180° se lee BELL**. El sitio
extiende esa idea — el cuerpo de la página es la carcasa clara del aparato y las
pantallas son lo oscuro, con los segmentos encendidos en verde.

El componente `Display` reconstruye la tipografía de siete segmentos usando la
geometría exacta de los polígonos del logo original (`public/logo.svg`), así que
cualquier texto o número que pase por él está escrito en la tipografía de la marca.

```jsx
<Display value="LISTO" on="var(--green)" offOpacity={0.13} />
```

Caracteres soportados: `0-9`, `A C D E F G H I J L N O P R S T U Y`, `-` y espacio.

## Estructura

```
bell_7738/
├── index.html              tipografías, metadatos y OG tags
├── vite.config.js
├── public/
│   ├── logo.svg            logo original
│   └── favicon.svg
└── src/
    ├── main.jsx            punto de entrada
    ├── App.jsx             orden de las secciones
    ├── components/
    │   ├── Display.jsx     pantalla de 7 segmentos (el corazón de la marca)
    │   ├── Nav.jsx         navegación fija + menú móvil
    │   ├── Hero.jsx        portada con la pantalla que gira
    │   ├── Ticker.jsx      cinta de sectores
    │   ├── Services.jsx
    │   ├── Manifesto.jsx   la pantalla que rota según el scroll
    │   ├── Products.jsx
    │   ├── ProductMocks.jsx  maquetas animadas de cada producto
    │   ├── Process.jsx
    │   ├── Stats.jsx       cifras que suben en pantalla de segmentos
    │   ├── Team.jsx
    │   ├── Contact.jsx     formulario
    │   └── Footer.jsx
    ├── data/content.js     textos de servicios, proceso, cifras, stack, roles
    ├── hooks/
    │   ├── useInView.js    detecta cuándo un nodo entra en pantalla
    │   ├── useCountUp.js   animación de conteo
    │   └── useReveal.js    aplica .in a los elementos con .rv
    ├── lib/scroll.js       desplazamiento suave entre secciones
    └── styles/
        ├── base.css        tokens de color, tipografía, panel, teclas, animaciones
        └── *.css           una hoja por sección
```

## Dónde editar

| Qué quieres cambiar | Archivo |
| --- | --- |
| Colores, tipografías, espaciado | `src/styles/base.css` (bloque de variables al inicio) |
| Textos de servicios, proceso, cifras, stack | `src/data/content.js` |
| Productos y sus maquetas | `src/components/Products.jsx` y `ProductMocks.jsx` |
| Titular y textos de portada | `src/components/Hero.jsx` |
| Correo, WhatsApp, dirección | `src/components/Contact.jsx` |
| Orden de las secciones | `src/App.jsx` |

Los colores viven todos en variables CSS bajo `.b7`, en `base.css`:

```css
--case      /* fondo del sitio        */
--case-2    /* bandas alternas        */
--case-3    /* tarjetas elevadas      */
--panel     /* fondo de las pantallas */
--ink       /* segmento encendido     */
--green     /* verde de marca         */
```

## Pendientes antes de publicar

- **El formulario no envía nada.** `Contact.jsx` valida y muestra la confirmación,
  pero no hay backend. Conéctalo a Formspree, Resend, un endpoint propio o similar
  en la función `send()`.
- **Los datos son de relleno**: productos, cifras, testimonio, correo y teléfono.
- Falta favicon en PNG para navegadores viejos y una imagen OG en JPG/PNG
  (hoy apunta al SVG, que algunas redes sociales no previsualizan).

## Accesibilidad

Respeta `prefers-reduced-motion`, tiene foco visible en todos los controles,
la pantalla del hero es operable con teclado y el contraste de texto cumple AA.
