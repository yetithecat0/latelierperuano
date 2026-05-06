# Documentación de Desarrollo — L'Atelier Peruano
## de Yonatan Torres · Joyería Artesanal · Neuchâtel, Suiza

Esta documentación detalla los aspectos técnicos, estéticos y funcionales implementados en la plataforma digital de **L'Atelier Peruano**. El proyecto ha sido diseñado para ofrecer una experiencia editorial de alta gama, respetando la herencia artesanal peruana y la precisión del mercado suizo.

---

## 1. Stack Tecnológico (Core)
El desarrollo se asienta sobre las tecnologías más modernas para garantizar velocidad, SEO y escalabilidad:

*   **Framework**: [Next.js 14](https://nextjs.org/) utilizando **App Router**.
*   **Lenguaje**: [TypeScript](https://www.typescript.org/) para un tipado estricto y seguridad en el código.
*   **Estilos**: **CSS Modules** nativos. Se evitó el uso de frameworks de utilitarios (como Tailwind) para garantizar un control absoluto de los **Design Tokens** y evitar fugas de estilo.
*   **Internacionalización (i18n)**: [next-intl](https://next-intl-docs.vercel.app/) para soporte multi-idioma (ES, FR, EN).
*   **Iconografía**: [Material Symbols Outlined](https://fonts.google.com/icons) integrados vía Google Fonts.

---

## 2. Identidad Visual y Estética (Design System)
El proyecto se rige por un **Sistema de Diseño (Stitch)** definido en `tokens.css`.

### Paleta de Colores
*   **Fondos Orgánicos**: Uso de tonos Kraft (`--bg-base: #EDD9A3`) y Tierra profunda (`--bg-deep: #2C1A0A`) para evocar materiales naturales.
*   **Colores de Marca**: Verde Olivo (Pantone 370 U) y Turquesa (Pantone 3551 U) como acentos principales.
*   **Acentos Metálicos**: Uso de Plata 925 (`--color-silver`) y Dorado Tierra (`--color-gold-accent`) para bordes y separadores.

### Tipografía Editorial
*   **Display (Títulos)**: `Cormorant Garamond` — Elegancia clásica.
*   **Body (Cuerpo)**: `Crimson Pro` — Legibilidad editorial.
*   **UI Labels**: `Cinzel` — Herencia pétrea y formal.
*   **Script (Citas)**: `Dancing Script` — El toque personal del artesano.

### Principios de Diseño
*   **The No-Line Rule**: Ausencia de bordes sólidos agresivos. Se utilizan sombras atenuadas, espacios en blanco y contrastes tonales.
*   **Broken Grids**: Layouts asimétricos (especialmente en la sección "Artesano") para romper la monotonía digital.

---

## 3. Funciones Principales

### A. Soporte Multi-idioma (i18n)
Estructura `/[locale]` que detecta y persiste la preferencia de idioma del usuario. Soporta completamente:
*   **Español**: Idioma base de la marca.
*   **Francés**: Para el mercado local de Neuchâtel y Suiza francófona.
*   **Inglés**: Para el alcance global.

### B. Interactividad Interactiva (Modales)
Se implementaron dos sistemas de ventanas emergentes premium:
1.  **Product Checkout Modal**: Simulación de compra con detalles técnicos, descripción narrativa y métodos de pago locales (TWINT, VISA, etc.).
2.  **Stone/Gema Modal**: Panel místico con información detallada de cada gema (Chakras, dureza, lore ancestral y beneficios terapéuticos) basada en el documento oficial `gemas.md`.

### C. Sistema de Filtros Reactivos
El catálogo permite el filtrado dinámico (Amuletos, Anillos, Pulseras, Pendientes) sin recargas de página, utilizando estados reactivos de React.

---

## 4. Recursos y Activos

*   **Imágenes**: Procesadas vía `next/image` para optimización automática (WebP, Lazy Loading).
*   **Isotipo Oficial**: Integrado en el Navbar, Footer y como elemento de fondo difuminado ("Ghosted") en el Hero para reforzar el misticismo.
*   **Geolocalización**: Google Maps interactivo embebido apuntando al taller físico en Peseux, Suiza.

---

## 5. SEO y Social Media
*   **OpenGraph & Twitter Card**: Configuración completa con la imagen oficial `og.jpg` (1200x630) para una visualización profesional en WhatsApp, Instagram y X.
*   **Metadata Dinámica**: Títulos y descripciones optimizadas para motores de búsqueda en cada idioma.
*   **Favicon**: Configurado con el isotipo oficial para reconocimiento en pestañas del navegador.

---

## 6. Auditoría de Calidad (UX/UI)
*   **Bloqueo de Scroll**: Al abrir modales, el scroll del body se desactiva para mejorar el foco.
*   **Responsive Líquido**: Diseño adaptado para dispositivos móviles, tablets y monitores ultra-wide.
*   **Puntos de Contacto**: Integración directa con WhatsApp, Facebook e Instagram.

---
**Desarrollado por**: Antigravity AI
**Estado**: Deploy Ready (Vercel)
**Fecha**: Abril 2026
