# Design System Document

## 1. Overview & Creative North Star: "The Mystic Alchemist’s Folio"

This design system is built to transform a digital interface into a tactile, sensory journey. The **Creative North Star** is **"The Mystic Alchemist’s Folio"**—a digital experience that feels less like a website and more like a high-end editorial scroll discovered in an artisan's workshop at dusk. 

To move beyond the "standard template" look, we employ **Intentional Asymmetry**. High-end jewelry is about the balance of weight and light; our layouts must reflect this. We use "broken grids" where high-resolution imagery of silverwork overlaps parchment-textured containers, and typography scales are pushed to extremes to create a sense of authoritative luxury. This system rejects the sterile "tech" aesthetic in favor of tonal depth, ritualistic symbols, and the warmth of natural materials.

---

## 2. Colors

The color palette is a sophisticated blend of earth, ore, and ancient pigment. We avoid cold whites (#FFFFFF) and pure blacks (#000000) to maintain the "handcrafted" warmth.

### Color Roles & Tonal Logic
*   **Primary (#466527 - Olive):** Represents the life of the Andes. Used for key call-to-actions and brand-defining moments.
*   **Secondary (#00677c - Turquoise):** The spiritual stone. Used for accents, interactive states, and highlights.
*   **Surface/Background (#fff8f0 / #edd9a3):** The foundation of the "scroll." We use the `surface` and `surface_dim` tokens to create the texture of aged parchment.
*   **On-Surface (#231b00):** Deep earth. This is our primary text color, providing a softer, more organic contrast than black.

### The "No-Line" Rule
To preserve the artisanal feel, **1px solid borders are strictly prohibited** for sectioning. Boundaries must be defined by:
1.  **Tonal Shifts:** Placing a `surface-container-low` section against a `surface-dim` background.
2.  **Soft Transitions:** Subtle, wide-span gradients that transition from `primary` to `primary-container`.
3.  **Negative Space:** Using the spacing scale to create psychological boundaries rather than physical lines.

### Glass & Gradient Signature
For floating elements (modals, dropdowns), use **Glassmorphism**. Apply `surface-variant` with a 60-80% opacity and a `20px` backdrop-blur. This allows the underlying "parchment" textures to bleed through, making the UI feel like layers of frosted quartz or thin vellum.

---

## 3. Typography

The typography strategy uses a high-contrast serif pairing to evoke "The Artisan's Hand" vs "The Ancient Stone."

*   **Display (Cormorant Garamond):** Set with tight tracking and large scales. This is the "voice" of the brand—elegant, literary, and timeless. Use `display-lg` (3.5rem) for hero statements.
*   **Body (Crimson Pro):** A highly legible, classic serif. Used for storytelling and descriptions. It provides the "soul" of the artisanal descriptions.
*   **Artisan Signature (Dancing Script):** Reserved for Yonatan Torres’ personal notes, quotes, or "hand-signed" certificates of authenticity. Use sparingly to maintain impact.
*   **Navigation & Labels (Cinzel):** Inspired by stone inscriptions. Use for menus and metadata (`label-md`). Its chiseled, all-caps nature provides a rigid, structural contrast to the fluid serifs of the body text.

---

## 4. Elevation & Depth: Tonal Layering

Depth in this design system is achieved through **Stacking**, not shadows.

*   **The Layering Principle:** Treat the UI as physical layers of paper and silver. An "Elevated" card is simply a `surface-container-lowest` (#ffffff) shape sitting on a `surface-container-low` (#fff3d7) background. This creates a soft, natural "lift."
*   **Ambient Shadows:** If a floating element (like a quick-buy drawer) requires a shadow, it must be an "Ambient Shadow": 
    *   Blur: 40px - 60px.
    *   Opacity: 4-6%.
    *   Color: A tinted version of the `on-surface` (#231b00), never grey.
*   **The Ghost Border:** If a boundary is required for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Architecture:** Sharp corners (0px to 2px radius max). High-contrast text using `on-primary` or `on-secondary`.
*   **Primary:** Solid `primary` (#466527) with no border.
*   **Secondary:** An "Outline" button using the Ghost Border rule (15% opacity) and `Cinzel` for the label.
*   **States:** On hover, primary buttons should shift to a subtle gradient (Primary → Primary Container) to mimic the shimmer of light on polished silver.

### Bullet Points & Dividers
*   **The Pluma (Feather):** Standard bullets are replaced by a **Silver Feather (#A8B8BC)** icon.
*   **Dividers:** Forbid horizontal lines. Use a centered **Chakana (Andean Cross)** symbol with 48px of vertical spacing on either side to separate major narrative sections.

### Cards
*   **Visual Style:** Cards should never have borders. Use `surface-container-high` for the card background. 
*   **Image Treatment:** Product images should have a slight "cut-out" appearance or be placed on a container with a subtle inner-glow to mimic a physical workshop display case.

### Input Fields
*   **Style:** Underline-only style using the `outline` token (#74796b). 
*   **Focus State:** The underline transitions to `secondary` (Turquoise) with a soft 4px turquoise outer glow.

---

## 6. Do’s and Don'ts

### Do
*   **Do Use Intentional Overlap:** Let a silver jewelry image overlap a text container by 20-30px to break the grid.
*   **Do Embrace Texture:** Use a subtle SVG noise filter or a parchment grain texture on the `surface` background.
*   **Do Prioritize White Space:** Use the spacing scale to let the "Ancient Scroll" breathe. Premium jewelry requires silence.

### Don’t
*   **Don’t Use Rounded Corners:** Avoid any radius above 2px. The brand is sharp, chiseled, and precise—like hand-cut silver.
*   **Don’t Use High-Contrast Borders:** Never use a 100% opaque border to separate content.
*   **Don’t Use Sans-Serif:** Avoid sans-serif fonts entirely. They break the magical/historical immersion of the artisan’s workshop.
*   **Don't Use Pure White Backgrounds:** Every surface must be tinted with the warmth of the `surface` (#fff8f0) or `surface_dim` (#edd9a3) tokens.