import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Dentro del contenedor (DOCKER=1) no hay navegador que abrir.
  server: { port: 5173, open: process.env.DOCKER !== "1" },
});
