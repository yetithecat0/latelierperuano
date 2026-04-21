---
trigger: always_on
---

# Code Style Guide — L'Atelier Peruano
## de Yonatan Torres · Joyería Artesanal · Neuchâtel, Suiza
### Stack: Next.js · Stitch Design System · next-intl

---

## 1. Arquitectura de Estilos (Design Tokens)

Todo desarrollo debe respetar los siguientes tokens globales
definidos en `/styles/tokens.css`. Ningún valor de color,
tipografía o espaciado debe escribirse hardcoded fuera de
este sistema.

### Base Colors — Fondos

```css
:root {
  /* Fondos principales */
  --bg-base:        #EDD9A3;  /* Kraft parchment — fondo absoluto */
  --bg-surface:     #E2C98A;  /* Kraft medio — superficies de cards */
  --bg-elevated:    #C4985A;  /* Kraft oscuro — elementos elevados */
  --bg-deep:        #2C1A0A;  /* Tierra profunda — secciones especiales
                                 (Litoterapia, Footer, Philosophy strip) */

  /* Fondos de secciones temáticas */
  --bg-community:   #698A48;  /* Verde olivo — sección Comunidad */
  --bg-promo:       #009DBB;  /* Turquesa — sección Promociones */
}
```

### Primary Palette — Colores de marca

```css
:root {
  /* Colores corporativos oficiales (Pantone certificados) */
  --color-primary:      #698A48;  /* Verde olivo — Pantone 370 U */
  --color-secondary:    #009DBB;  /* Turquesa — Pantone 3551 U */

  /* Variantes funcionales */
  --color-primary-hover:   #557A38;  /* Primary oscurecido para hover */
  --color-secondary-hover: #007A94;  /* Secondary oscurecido para hover */
  --color-silver:          #A8B8BC;  /* Plata 925 — ornamentos y detalles */
  --color-gold-accent:     #C4985A;  /* Dorado tierra — bordes y separadores */
}
```

### Text Colors

```css
:root {
  --text-primary:    #1C1208;  /* Tinta profunda — texto principal */
  --text-secondary:  #5C3D1E;  /* Marrón tierra — texto secundario */
  --text-light:      #F5EACF;  /* Crema — texto sobre fondos oscuros */
  --text-muted:      #9A7D5A;  /* Arena — texto de apoyo, disclaimers */
  --text-accent:     #698A48;  /* Verde — citas, pulls quotes, highlights */
}
```

### Stone Colors — Sección Litoterapia

Cada piedra tiene su token de color propio para las cards
de la sección Litoterapia. Nunca usar valores hardcoded
dentro de los componentes.

```css
:root {
  --stone-labradorita:    #4A90A4;
  --stone-lapis:          #1B3A6B;
  --stone-piedra-luna:    #D4DDE4;
  --stone-topacio:        #C4860A;
  --stone-malaquita:      #2D6B4F;
  --stone-crisocola:      #009DBB;
  --stone-dendrito:       #8B7355;
  --stone-opalo-peruano:  #B5C9B7;
  --stone-opalo-australiano: #E8E0D5;
  --stone-agata:          #C4845A;
  --stone-onix:           #1A1A1A;
  --stone-opalo:          #D4C5E2;
  --stone-peridot:        #7DB34A;
  --stone-fluorita:       #9B72B0;
  --stone-amatista:       #7B4F8A;
}
```

### Typography

```css
:root {
  /* Familias tipográficas */
  --font-display:    'Cormorant Garamond', Georgia, serif;
  --font-body:       'Crimson Pro', Georgia, serif;
  --font-script:     'Dancing Script', cursive;
  --font-ui:         'Cinzel', serif;

  /* Escala tipográfica */
  --text-xs:    0.75rem;   /* 12px — disclaimers, etiquetas mínimas */
  --text-sm:    0.875rem;  /* 14px — UI labels, badges */
  --text-base:  1rem;      /* 16px — body base */
  --text-md:    1.125rem;  /* 18px — body destacado */
  --text-lg:    1.5rem;    /* 24px — subtítulos de sección */
  --text-xl:    2rem;      /* 32px — títulos de sección */
  --text-2xl:   3rem;      /* 48px — títulos hero secundarios */
  --text-3xl:   4.5rem;    /* 72px — título hero principal */

  /* Pesos */
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;

  /* Interlineado */
  --leading-tight:   1.1;
  --leading-normal:  1.5;
  --leading-relaxed: 1.8;  /* Para cuerpo de texto largo */

  /* Espaciado de letras */
  --tracking-wide:   0.08em;   /* Cinzel UI labels */
  --tracking-wider:  0.15em;   /* Philosophy strip */
  --tracking-tight:  -0.02em;  /* Display títulos grandes */
}
```

### Layout Tokens

```css
:root {
  /* Contenedor */
  --max-width:       1280px;
  --content-width:   1080px;

  /* Espaciado de secciones */
  --section-padding-y:   120px;
  --section-padding-x:   48px;
  --section-gap:         160px;

  /* Cards y componentes */
  --card-padding:        24px;
  --card-gap:            20px;
  --card-radius:         4px;   /* Mínimo — estética artesanal, no digital */
  --card-border:         1px solid var(--color-gold-accent);

  /* Ornamentos */
  --radius-button:       2px;   /* Botones casi rectos — sello artesanal */
  --radius-badge:        2px;

  /* Grid del catálogo */
  --grid-cols-desktop:   3;
  --grid-cols-tablet:    2;
  --grid-cols-mobile:    1;
}
```

---

## 2. Component System (Stitch)

### Estructura de archivos


