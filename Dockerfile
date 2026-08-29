# syntax=docker/dockerfile:1

# ------------------------------------------------------------------ #
#  BELL 7738 — sitio estático (React + Vite) servido por nginx        #
#                                                                     #
#  Producción:  docker build -t bell7738 . && docker run -p 8080:80 bell7738
#  Desarrollo:  docker build --target dev -t bell7738-dev .
# ------------------------------------------------------------------ #

# ---------- dependencias (capa cacheada) ----------
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- desarrollo: vite con recarga en caliente ----------
FROM node:20-alpine AS dev
WORKDIR /app
ENV NODE_ENV=development
# vite.config.js no abre el navegador cuando DOCKER=1
ENV DOCKER=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ---------- build de producción ----------
FROM node:20-alpine AS build
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- runtime: nginx sirviendo dist/ ----------
FROM nginx:1.27-alpine AS runtime
COPY docker/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY docker/nginx.conf              /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
CMD ["nginx", "-g", "daemon off;"]
