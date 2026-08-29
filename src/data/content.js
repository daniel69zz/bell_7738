/* Contenido editable del sitio. Los productos viven en Products.jsx porque
   cada uno lleva asociado su componente de maqueta. */

export const NAV_LINKS = [
  ["Servicios", "servicios"],
  ["Productos", "productos"],
  ["Proceso", "proceso"],
  ["Equipo", "equipo"],
];

export const SECTORS = ["Retail", "Logística", "Salud", "Fintech", "Educación", "Manufactura", "Agro", "Servicios profesionales"];

export const SERVICES = [
  {
    code: "SFT",
    title: "Software a medida",
    body: "Sistemas internos que reemplazan la planilla compartida, el grupo de WhatsApp y los tres formularios que nadie termina de llenar.",
    items: ["Portales y sistemas internos", "Integración con ERP, bancos y facturación", "Aplicaciones web y móviles"],
  },
  {
    code: "AUT",
    title: "Automatización",
    body: "Conectamos las herramientas que ya usas para que el trabajo repetitivo deje de depender de que alguien se acuerde.",
    items: ["Flujos entre sistemas y APIs", "Reportes y conciliaciones automáticas", "Alertas por WhatsApp y correo"],
  },
  {
    code: "SAS",
    title: "Producto SaaS",
    body: "Del prototipo a un producto con clientes pagando: arquitectura, cobros, soporte y las métricas para decidir qué sigue.",
    items: ["MVP funcional en 8 semanas", "Multi-tenant, planes y facturación", "Analítica de uso y retención"],
  },
];

export const STEPS = [
  { n: "1", t: "Diagnóstico", w: "Semana 1", d: "Nos sentamos con quien hace el trabajo, no solo con quien lo dirige. Salimos con el proceso dibujado y una lista de lo que duele." },
  { n: "2", t: "Prototipo", w: "Semanas 2–3", d: "Un prototipo navegable con tus datos reales. Sirve para discutir sobre algo concreto antes de escribir el sistema." },
  { n: "3", t: "Construcción", w: "Semanas 4–12", d: "Entregas cada dos semanas en un entorno que puedes usar. Sin sorpresas al final ni demos que solo funcionan en nuestra máquina." },
  { n: "4", t: "Operación", w: "Continuo", d: "Monitoreo, soporte y mejoras. Si prefieres llevarlo tú, entregamos el código documentado y capacitamos a tu equipo." },
];

export const STATS = [
  [38, "Proyectos entregados", "Desde 2021, entre sistemas internos y productos."],
  [120, "Procesos automatizados", "Tareas que antes ocupaban a alguien todas las semanas."],
  [14, "Días por entrega", "Ciclo fijo: cada dos semanas ves algo funcionando."],
  [9, "Clientes activos", "La mayoría sigue con nosotros después del primer proyecto."],
];

export const STACK = ["React", "TypeScript", "Node", "Python", "PostgreSQL", "AWS", "Docker", "n8n", "Flutter", "Metabase"];

export const ROLES = [
  ["Producto", "Traducimos el proceso a decisiones y prioridades."],
  ["Ingeniería", "Cuatro personas escribiendo el sistema, no una fábrica."],
  ["Datos", "Reportes que se usan, no tableros que nadie abre."],
  ["Soporte", "Alguien contesta cuando algo falla un martes a las 7."],
];

export const NEEDS = ["Software a medida", "Automatización", "Producto SaaS", "Todavía no sé"];
