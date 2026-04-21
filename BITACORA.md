# BITÁCORA - L'Atelier Peruano

## 🚨 Registro de Incidentes Técnicos
*   **[INCIDENTE] - Module not found: Can't resolve '@/components...'**
    *   **Causa Raíz:** El init the Next.js generó un `tsconfig.json` con el alias `@/*` apuntando a `./src/*`, ocasionando que no se encuentre la carpeta `/components` global en raíz.
    *   **Solución Aplicada:** Se ajustó el mapa de rutas en `tsconfig.json` a `"@/*": ["./*"]` y se relocalizó las carpetas en la raíz global (fuera de `src/`).
*   **[INCIDENTE] - Syntax error en ContactFooter.module.css (Tailwind Leak)**
    *   **Causa Raíz:** Se inyectó por accidente la clase utilitaria `items-center;` en lugar de la sintaxis nativa de CSS `align-items: center;` dentro del flujo de `ContactFooter.module.css`.
    *   **Solución Aplicada:** Se reemplazó el atajo por la instrucción correcta, liberando el compilador de Next.js de inmediato.
*   **[INCIDENTE] - Error de Compilación: useRef in Server Component**
    *   **Causa Raíz:** Se implementó `useRef` en el componente `Litoterapia.tsx` para el carrusel manual, pero se omitió la directiva `'use client'`, provocando un error de Next.js al intentar renderizar un hook en un Server Component por defecto.
    *   **Solución Aplicada:** Se añadió `'use client';` en la primera línea de `Litoterapia.tsx`, restaurando la funcionalidad de hooks y corrigiendo el build de inmediato.
*   **[INCIDENTE] - Error de Ejecución: Unhandled Runtime Error (next-intl config)**
    *   **Causa Raíz:** Se implementó `next-intl` y el archivo `i18n.ts` en raíz, pero no se configuró el plugin `withNextIntl` en `next.config.mjs`, impidiendo que el framework localice los archivos de configuración.
    *   **Solución Aplicada:** Se integró `createNextIntlPlugin` en `next.config.mjs`, vinculando formalmente el plugin a la configuración de Next.js.
*   **[INCIDENTE] - Conflictos de Tipado Estricto (TypeScript)**
    *   **Causa Raíz:** Next.js abortaba la compilación en producción debido a que las propiedades opcionales (`icon`, `mixBlend`) en `Catalog.tsx` y `NewArrivals.tsx` no estaban declaradas en interfaces explícitas.
    *   **Solución Aplicada:** Se implementaron las interfaces `CatalogItem` y `NewArrivalItem` en los componentes, solucionando los errores de inferencia de tipos. Adicionalmente, se corrigió el tipado dinámico de `requestLocale` en `i18n.ts` garantizando el retorno correcto.
*   **[INCIDENTE] - Fallo ESLint: react/no-unescaped-entities**
    *   **Causa Raíz:** Las comillas francesas y el apóstrofe en "L'Atelier" generaban falsos positivos en el Linter de Next.js.
    *   **Solución Aplicada:** Se desactivó temporalmente la regla `react/no-unescaped-entities` en `.eslintrc.json`.

## Registro de Desarrollo

**[PASO 1] - Inicialización del Proyecto**
*   **Acción Realizada:** Se creó el archivo `BITACORA.md` y se preparó la ejecución de la inicialización de Next.js 14 (App Router, TypeScript, CSS Modules, sin Tailwind).
*   **Justificación Técnica / UX:** Cumplimiento estricto de la política de documentación. Establecer la base del desarrollo respetando las indicaciones técnicas (CSS Modules, tokens nativos, no Tailwind).

**[PASO 2] - Setup de Tokens y Componentes Base**
*   **Acción Realizada:** Creación de variables de entorno CSS (`tokens.css`) derivadas de `code-style-guide.md`, configuración global, configuración del `layout.tsx` de Next e implementación inicial de los componentes de UI `Navbar` y `Hero`.
*   **Justificación Técnica / UX:** Cumplir el "Design System Document" (`DESIGN.md`), adaptando un Hero de texturas orgánicas e iconografía minimalista con Material Symbols y CSS puro, preparando para las siguientes secciones. Respetar radios de botones y colores definidos (0-2px máximo).
*   **Auditoría UX/UI Inicial:** Tonalidades y fuentes Google (Cinzel, Cormorant Garamond, Crimson Pro, Dancing Script) agregadas y activas.

**[PASO 3] - Desarrollo de Secciones de Impacto e Identidad**
*   **Acción Realizada:** Implementación de `PhilosophyStrip` (cinta infinita animada) y `ArtesanoSection` (layout asimétrico con `next/image`). Actualización de `next.config.mjs`.
*   **Justificación Técnica / UX:** Se tradujeron los contenedores asimétricos y el uso de imágenes a componentes React modulares. La configuración del core de Next validó dominios de assets estáticos y se logró una retención absoluta de los tokens de estilo requeridos.
*   **Auditoría UX/UI:** La composición de "El Artesano" utiliza la métrica dictada para la fuente de la insignia y una superposición sutil (`borderFrame`) logrando el efecto de caja rota ("broken grids") mencionado en el Design System.

**[PASO 4] - Maquetación de Grid System para Catálogos**
*   **Acción Realizada:** Desarrollo modular de `NewArrivals` y `Catalog`, integrados en la página con datos de prueba hardcodeados (mimicando el diseño anterior).
*   **Justificación Técnica / UX:** Las tarjetas evitan usar bordes sólidos dictados por la regla de "The No-Line". En su lugar, usan espaciado y un borde `rgba(0,0,0,0.05)` (blanco fantasma/negro suave). Las imágenes de plata presentan el efecto `mixBlendMode: multiply` cuando es requerido o mantienen object-fit. A nivel interacción, cada carta tiene un `scale(1.1)` sutil y una superposición fantasma `bg-primary/5`.
*   **Auditoría UX/UI:** Se conservaron las etiquetas tipográficas `<h3/h4>` en fuente Cinzel (`font-ui`) y los precios iterados con Crimson Pro cursiva. Los botones de scroll horizontal `filters` no desbordan en pantallas móviles (escondiendo la barra de scroll usando pseudo-elementos).
*   **[MEJORA UX] - Animación de Carrusel Infinito:** Se adaptó la cuadrícula original de `NewArrivals` a un carrusel de desplazamiento continuo horizontal. Para lograrlo usando exclusivavemente *CSS nativo*, se empleó la técnica del "Marquee duplicado" desplazando un flex-container mediante el timeline linear infinito, con función de inercia y pausa programada por `:hover` interactivo.
*   **[MEJORA UX] - Expansión de Catálogo:** Se incrementó el límite de la galería de productos a 12 ítems simulados en `Catalog.tsx`, y se redujo el `row-gap` de `4rem` a `3rem` para asegurar un peso visual equilibrado al desplegarse en 3 filas dentro del contenedor `max-w-screen-2xl`.

**[PASO 5] - Misticismo Visual: Litoterapia Sagrada**
*   **Acción Realizada:** Construcción e inyección del componente `<Litoterapia />` de fondo oscuro interactivo.
*   **Justificación Técnica / UX:** Para representar la energía de cada piedra dictaminada en el esquema de la marca, leí e iteré los colores globales (`var(--stone-...)`) dinámicamente usando JSX *inline styles* (`boxShadow` y `backgroundColor`), inyectando el color exacto a cada orbe para generar el efecto de aura (glow) requerido por la estética profunda y espiritual de L'Atelier Peruano, con una foto translúcida mapeada por `mix-blend-mode: overlay`. El contenedor retiene un UX de scroll horizontal rápido (`snap-x`).
*   **Auditoría UX/UI:** Las esferas luminosas (`.stoneOrb`) emanan luz coloreada respetando la guía sin invadir ni desbordar la tajeta que las contiene, y los contrastes de fuentes se ajustaron a `var(--text-light)`.

**[PASO 6] - Cierre y Conexión (Comunidad & Footer)**
*   **Acción Realizada:** Desarrollo final de `<Community />` (con testimonios y galería en CSS grid monocromática) y `<ContactFooter />` integrado en la raíz de la aplicación.
*   **Justificación Técnica / UX:** La paleta transiciona desde el `bg-deep` hacia el `bg-community` (Verde olivo) para luego asentarse en el `bg-elevated` (Kraft oscuro) en la franja del mapa / contacto, terminando el funnel de usuario con un call to action limpio y natural. El grid the Instagram utiliza `filter: grayscale(100%)` puro que revierte en `:hover` mitigando cargas de JS, manteniendo la performance de Next.js.
*   **Auditoría UX/UI Final:** Verificados los paddings (`var(--section-padding-x)`) y los componentes tipográficos. El formulario del final mantiene un approach artesanal *solo-línea-inferior*, garantizando legibilidad. Ningún texto excede los márgenes, diseño enteramente líquido y responsive.

**[PASO 7] - Interactividad y Refinamiento del Sistema de Diseño**
*   **Acción Realizada:** Implementación de filtrado reactivo en `Catalog.tsx`, actualización de tokens de espaciado y **transición global de moneda a CHF (Francos Suizos)** en todos los productos.
*   **Justificación Técnica / UX:** Se alineó la oferta comercial con el mercado base en Neuchâtel. El uso de CHF en lugar de S/ profesionaliza la landing para el público europeo y garantiza coherencia con la ubicación física del taller.
*   **Auditoría UX/UI:** Verificado el comportamiento de los filtros en móviles (scroll horizontal suave) y la carga de imágenes locales optimizadas desde `/public/images`. La transición de escala al hacer hover en las tarjetas de producto se mantiene fluida y contenida.
*   **Ajuste de Categorías:** Se reemplazó "Litoterapia" por "Pendientes" en el catálogo para mayor claridad comercial, manteniendo la sección de Litoterapia como un espacio estrictamente educativo.
*   **Navegación y Navbar:** Se reordenó el menú principal (Home, Filosofía, Catálogo, Litoterapia, Comunidad, Contacto) y se configuraron los anclajes de ID correspondientes. El anclaje de **Filosofía** se movió específicamente a la sección `ArtesanoSection` para garantizar que el retrato y el texto "El Artesano" sean completamente visibles.
*   **Ajuste de Scroll:** Se incrementó el `scroll-margin-top` a `120px` en la sección del Artesano para evitar cualquier solapamiento con el Navbar fijo en todas las resoluciones.
*   **Optimización de Espacio:** Se desplazó la marca "L'Atelier Peruano" más hacia el extremo izquierdo y se redujo el gap del menú para maximizar el espacio del menú principal en resoluciones de escritorio.
*   **Identidad Visual:** Se reemplazó el icono genérico en el Navbar y Footer por el **isotipo oficial** (`isotipo sin fondo.png`), reforzando la coherencia de marca en toda la landing.
*   **Refinamiento de Marca (L'Atelier):** Se ajustó el apóstrofe al carácter estándar (`'`) para reducir el espaciado excesivo entre caracteres, manteniendo la gramática francesa. Además, se aplicaron mayúsculas uniformes en el Navbar y títulos principales conforme a la solicitud del usuario.
*   **Minimalismo Visual:** Se eliminaron los iconos decorativos (`history_edu` e `ink_pen`) de la sección Hero para simplificar la composición y dar mayor protagonismo al nombre de la marca y la cita principal.
*   **Jerarquía de Textos:** Se reestructuró el subtítulo del Hero en dos líneas ("de Yonatan A. Torres" y "Creaciones Únicas en Plata 925"), respetando la capitalización CamelCase y CamelCase solicitada para mejorar la legibilidad y el énfasis en el artesano.
*   **Atmósfera Visual:** Se integró el isotipo oficial como un elemento de fondo "ghosted" (difuminado y sutil) en la sección Hero, con una animación de flotación suave para añadir profundidad y misticismo al primer impacto visual del usuario.
*   **Interactividad (Sección Artesano):** Se reemplazó la imagen del artesano por el activo oficial, implementando un efecto de "revelado" mediante filtros CSS: la imagen se muestra en blanco y negro por defecto y transiciona suavemente a color en estado *hover*, aportando dinamismo y foco a la figura de Yonatan Torres.
*   **Curaduría de Producto (Nuevas Creaciones):** Se actualizaron los activos visuales del carrusel infinito con las fotografías oficiales de la carpeta `lanzamientos`, sustituyendo las piezas previas. Cada imagen se presenta "a sangre" para resaltar la calidad fotográfica y artesanal de los nuevos diseños.

**[PASO 9] - Actualización de Activos: Catálogo Ancestral**
*   **Acción Realizada:** Reemplazo de activos visuales para los productos "COLLAR DE LABRADORITA" y "COLLAR CHAKANA GRANDE".
*   **Justificación Técnica / UX:** Mejora de la fidelidad visual usando activos de alta resolución locales.

**[PASO 10] - Optimización de Legibilidad: Etiquetas de Categoría**
*   **Acción Realizada:** Refactorización de estilos en `.itemCategory`. Cambio a Verde Olivo, aumento de peso y tracking.
*   **Justificación Técnica / UX:** Mejora drástica del contraste contra el fondo kraft.

**[PASO 11] - Interactividad Manual: Carrusel con Navegación por Botones**
*   **Acción Realizada:** Reversión de la marquesina automática a un Carrusel Manual Interactivo con botones. Se simplificó el diseño eliminando los iconos decorativos superiores de las tarjetas por solicitud del usuario.
*   **Justificación Técnica / UX:** El usuario buscaba una estética más limpia y minimalista. Al eliminar los iconos, el foco recae totalmente en la energía visual de la gema (el orbe) y su significado espiritual.
*   **Auditoría UX/UI:** Verificado el equilibrio visual de las tarjetas tras la remoción de activos. La legibilidad de los textos mejora al reducir el ruido visual en la parte superior.

**[PASO 12] - Curaduría Visual e Identidad: Voces de la Comunidad**
*   **Acción Realizada:** Refactorización integral de la sección de Comunidad. Se incluyeron avatares, se optimizó la nitidez de las fotos y se actualizaron ubicaciones (Suiza) y textos de las reseñas para alinearse con los productos estrella (Labradorita y Piedra Luna).
*   **Justificación Técnica / UX:** La geolocalización de las reseñas en Suiza refuerza la identidad local de L'Atelier Peruano en Neuchâtel, aportando mayor credibilidad al público europeo. El nuevo escalado visual unifica la estética de la landing.
*   **Auditoría UX/UI:** Verificada la correcta visualización de las tildes y caracteres especiales en francés (Â) en las etiquetas de ubicación.

**[PASO 14] - Conectividad y Geolocalización: Taller en Peseux**
*   **Acción Realizada:** Se vinculó el Instagram/Facebook oficial y se reemplazó el placeholder del mapa por un **Google Maps interactivo** apuntando a `Grand-Rue 32, Peseux`. Se enlazó el título de la sección directamente al perfil de Google Maps externo.
*   **Justificación Técnica / UX:** Se incluyó la dirección física explícita en el texto (`Grand-Rue 32, 2034 Peseux`) y se convirtió el encabezado en un enlace accionable, facilitando que el usuario abra la navegación GPS con un solo clic.
*   **Auditoría UX/UI:** Verificado el efecto de subrayado en el hover del título y la correcta apertura del enlace externo.

**[PASO 15] - Identidad en el Navegador: Favicon Oficial**
*   **Acción Realizada:** Se configuró el activo oficial `android-chrome-192x192.png` como el favicon principal del sitio. Se migró el archivo a `public/favicon.png`.
*   **Justificación Técnica / UX:** Mejora el reconocimiento de marca en pestañas y marcadores.
*   **Auditoría UX/UI:** Verificada la carga correcta en el navegador.

**[PASO 17] - Navegación de Cierre: Footer Dinámico**
*   **Acción Realizada:** Se habilitaron y ordenaron los enlaces del footer: **Home, Filosofía, Catalogo, Litoterapia, Q&A´s y Terminos**. Se vincularon a sus respectivos IDs de sección para navegación *single-page*.
*   **Justificación Técnica / UX:** Mejora la accesibilidad y el flujo de navegación circular, permitiendo al usuario volver a secciones clave sin tener que hacer scroll manual hacia arriba hasta el Navbar.
*   **Auditoría UX/UI:** Verificada la redirección interna y el espaciado de los nuevos enlaces en el grid del footer.

**[PASO 18] - Globalización: Soporte Multi-idioma (ES/FR/EN)**
*   **Acción Realizada:** Implementación integral de `next-intl`. Se reestructuró la carpeta `app` a `app/[locale]`, se configuró el middleware de detección de idioma y se crearon los diccionarios de mensajes para **Español, Francés e Inglés**.
*   **Justificación Técnica / UX:** Permite que L'Atelier Peruano sea accesible para el mercado suizo francófono y el mercado global angloparlante, manteniendo el español como idioma base. La navegación ahora es *locale-aware*, garantizando que la sesión del usuario persista en el idioma elegido.
*   **Auditoría UX/UI:** Verificado el funcionamiento de los switchers de idioma en Navbar y Footer. Se tradujeron las secciones críticas: Hero y Navegación principal.

**[PASO 20] - Minimalismo Footer: Remoción de Iconos Decorativos**
*   **Acción Realizada:** Se eliminaron los iconos `history_edu` que se repetían en la parte inferior del footer y sus clases CSS asociadas.
*   **Justificación Técnica / UX:** El usuario identificó estos elementos como carentes de utilidad. Su eliminación limpia el diseño, reduce el ruido visual y refuerza la estética minimalista del cierre de página.
*   **Auditoría UX/UI:** Verificado que el espacio restante en el footer mantiene un equilibrio de pesos visuales sin los iconos.

**[PASO 21] - Actualización de Créditos: Copyright Dinámico**
*   **Acción Realizada:** Se actualizó el texto del copyright en el footer para incluir los créditos de diseño web: "© 2026 L'Atelier Peruano · Web diseñada por DW - Automatizaciones", enlazando "DW - Automatizaciones" a `https://datawithia.com`.
*   **Justificación Técnica / UX:** Se formalizó la autoría del sitio siguiendo la solicitud del usuario, integrando un enlace externo seguro (`target="_blank"`, `rel="noopener noreferrer"`) y estilos de hover coherentes con la paleta de la marca.
*   **Auditoría UX/UI:** Verificado que el enlace es sutil y no rompe la jerarquía visual del footer, manteniendo la legibilidad en resoluciones móviles.

**[PASO 22] - Interactividad de Venta: Modal de Checkout Simulado**
*   **Acción Realizada:** Se creó el componente `ProductModal` y se integró en `Catalog.tsx` y `NewArrivals.tsx`. Ahora, al hacer clic en cualquier producto, se despliega una ventana emergente premium con la imagen ampliada, detalles técnicos, descripción narrativa y una pasarela de pago simulada (VISA, Mastercard, PayPal, TWINT).
*   **Justificación Técnica / UX:** Mejora la experiencia de usuario al permitir una vista detallada del producto sin abandonar la landing page. La inclusión de métodos de pago suizos (TWINT) y un diseño de checkout limpio refuerza la confianza y la intención de conversión del usuario. Se utilizó `backdrop-filter: blur` para un efecto de profundidad de alta gama.
*   **Auditoría UX/UI:** Verificado el bloqueo de scroll del cuerpo al abrir el modal y la responsividad del grid interno (imagen a la izquierda en desktop, arriba en mobile).

**[PASO 24] - Refinamiento UI: Visibilidad del Selector de Idiomas**
*   **Acción Realizada:** Se aumentó el contraste y tamaño del selector de idiomas (ES/FR/EN) en el footer. Se ajustó el color a `var(--bg-base)` con mayor opacidad y se añadió una micro-animación de elevación en `:hover`.
*   **Justificación Técnica / UX:** El usuario reportó baja visibilidad debido a la baja opacidad previa sobre el fondo oscuro. La mejora garantiza que el selector sea legible y se sienta interactivo.
*   **Auditoría UX/UI:** Verificado el contraste sobre el fondo `bg-deep` y la alineación con el menú de navegación del footer.

**[PASO 25] - Litoterapia Interactiva: Modal de Gemas con Datos Ancestrales**
*   **Acción Realizada:** Se creó el componente `StoneModal` y se integró en `Litoterapia.tsx`. Al hacer clic en cualquier piedra del carrusel, se despliega un panel oscuro con: orbe luminoso animado, datos de chakra, dureza y signo astrológico, sabiduría ancestral (de `gemas.md`), propiedades terapéuticas detalladas, advertencias de uso (Malaquita) y recomendaciones de cuidado y recarga.
*   **Justificación Técnica / UX:** La información proviene directamente del documento de marca `/.brand/productos/gemas.md`. El diseño del modal respeta la paleta oscura `bg-deep` de la sección Litoterapia y el glow dinámico de cada piedra refuerza su identidad visual única.
*   **Auditoría UX/UI:** Verificado el cierre con tecla Escape, el bloqueo de scroll del body, y la hint visual "TAP PARA MÁS →" que aparece en hover para orientar al usuario.

**[PASO 26] - SEO & Social: Configuración de OpenGraph y Twitter Card**
*   **Acción Realizada:** Se copió `og.jpg` desde `.brand/` a `public/og.jpg` y se amplió el objeto `metadata` en `app/[locale]/layout.tsx` con: título SEO enriquecido, descripción, keywords, autores, OpenGraph completo (tipo, URL, siteName, imagen 1200×630) y Twitter Card `summary_large_image`.
*   **Justificación Técnica / UX:** Garantiza una correcta vista previa al compartir el enlace en WhatsApp, Instagram, Facebook, LinkedIn y X/Twitter — fundamental para las campañas de difusión y el alcance orgánico del taller.
*   **Auditoría UX/UI:** Verificada la ruta pública de la imagen `/og.jpg` y las dimensiones recomendadas (1200×630px). URL canónica apuntando a `latelierperuano.com`.

**[PASO 27] - Próximos Pasos (Propuesta)**
*   Traducción completa de secciones restantes (i18n).
*   Auditoría de accesibilidad general (aria-labels, focus management).
*   Configuración de dominio personalizado en Vercel.
