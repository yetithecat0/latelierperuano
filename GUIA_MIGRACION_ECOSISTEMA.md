# Guía de Migración al Ecosistema gutiperu.com

Esta guía detalla los pasos técnicos necesarios para integrar proyectos independientes como sub-rutas del dominio principal `gutiperu.com` utilizando Next.js y el sistema de "Rewrites".

---

## 1. Configuración del Subproyecto (Ej: L'Atelier, Studio, etc.)

Para que el subproyecto funcione en una sub-ruta (ej: `/latelierperuano`), debe conocer su nueva ubicación.

### A. Ajustar `next.config.mjs`
Es fundamental configurar el `basePath`. Esto asegura que Next.js anteponga la ruta a todos los recursos estáticos y rutas internas.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/nombre-del-proyecto', // Ej: /latelierperuano
  images: {
    unoptimized: true, // RECOMENDADO: Evita fallos de optimización al ser servido por proxy
  },
  // ... resto de la configuración
};
```

### B. Rutas de Imágenes e Iconos
Debido a comportamientos específicos de Next.js cuando se sirve detrás de un proxy (Rewrite), la resolución automática de imágenes puede fallar.

- **Imágenes locales**: Se recomienda añadir manualmente el prefijo en las rutas de datos/constantes.
  - *Mal*: `/images/producto.png`
  - *Bien*: `/nombre-del-proyecto/images/producto.png`
- **Metadata (layout.js)**: NO añadas el prefijo manualmente en `favicon` u `og:image` si usas `basePath`, ya que Next.js lo duplicaría. Usa rutas relativas a la carpeta public: `/favicon.png`.

---

## 2. Configuración del Hub Principal (`gutiperu-web`)

El proyecto raíz debe actuar como un "ruteador" hacia las instancias de Vercel de cada subproyecto.

### A. Configurar Rewrites en `next.config.mjs`
Añade las reglas de ruteo para capturar el tráfico de la sub-ruta y enviarlo al despliegue independiente.

```javascript
// gutiperu-web/next.config.mjs
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/nombre-del-proyecto',
        destination: 'https://despliegue.vercel.app/nombre-del-proyecto',
      },
      {
        source: '/nombre-del-proyecto/:path*',
        destination: 'https://despliegue.vercel.app/nombre-del-proyecto/:path*',
      },
    ]
  },
};
```

> [!IMPORTANT]
> Si el subproyecto usa `next-intl` (i18n), asegúrate de que el destino incluya el idioma por defecto si es necesario (ej: `.../nombre-del-proyecto/es`).

---

## 3. Checklist de Verificación post-migración

- [ ] **Imágenes Locales**: ¿Se ven en el dominio principal? Si no, revisa si tienen el prefijo del proyecto.
- [ ] **Scripts de Next.js**: ¿Cargan los archivos `_next/static`? (Ver en pestaña Network del navegador).
- [ ] **Navegación**: ¿Los enlaces internos mantienen la sub-ruta o te sacan al dominio raíz?
- [ ] **Favicon**: ¿Se muestra el icono correcto del subproyecto?
- [ ] **Formularios**: Si usas Formspree u otros, verifica que la redirección tras el envío no rompa la URL.

---

## 4. Solución de Problemas Comunes

| Problema | Causa Probable | Solución |
| :--- | :--- | :--- |
| Imágenes 404 | Ruta sin prefijo `/proyecto/` | Añadir prefijo manual en el `src` de la imagen. |
| Imágenes 400 (Bad Request) | Fallo en optimización de Next.js | Activar `unoptimized: true` en el subproyecto. |
| Pantalla en blanco | Fallo al cargar JS de `_next` | Verificar que el Rewrite en el Hub incluya el `:path*`. |
| Estilos rotos | CSS no encuentra fuentes/imágenes | Usar rutas relativas en CSS o prefijar con el `basePath`. |

---
*Documento generado por Antigravity para el ecosistema gutiperu.com*
