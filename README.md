# ASAP Training Center - Landing Page

Sitio web oficial de **ASAP Training Center**, centro de entrenamiento funcional y de fuerza en el Zaidín (Granada).

Construido a partir del diseño de Google Stitch utilizando **Astro**, **Tailwind CSS** y **TypeScript** con salida estática pura y optimizado para 97+ en Google Lighthouse Móvil.

## 🚀 Tecnologías
- **Framework:** [Astro](https://astro.build/) (v5)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Tokens de diseño Stitch)
- **Tipografía:** Bebas Neue e Inter (autoalojadas en `.woff2`)
- **Datos centralizados:** `src/data/centro.ts`
- **Despliegue:** Vercel / Hostinger

## 📦 Estructura del Proyecto
- `src/data/centro.ts`: Toda la información del centro (contacto, servicios, tarifas, opiniones, preguntas frecuentes).
- `src/components/`: Un componente Astro independiente por sección.
- `src/pages/`: Portada (`index.astro`) y páginas legales (`aviso-legal`, `privacidad`, `cookies`).

## 🛠️ Comandos
```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo
npm run build    # Compilar sitio estático en /dist
npm start        # Iniciar servidor de producción local
```
