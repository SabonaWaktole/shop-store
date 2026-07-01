---
name: CINETICA 2093
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1b1c'
  surface-container: '#1f1f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c6c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e3e2e2'
  on-tertiary-container: '#646464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '900'
    lineHeight: 100%
    letterSpacing: 0.1em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: 0.05em
  body-main:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: 0.01em
  label-mono:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 100%
    letterSpacing: 0.15em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 140%
    letterSpacing: 0.02em
spacing:
  unit: 4px
  container-max: 1920px
  gutter: 1px
  margin-mobile: 20px
  margin-desktop: 60px
---

## Brand & Style
The brand personality is an intersection of high-fashion editorial and dystopian retro-futurism. It balances the stark, utilitarian authority of the "Apple 1984" era with the cinematic, immersive scale of a luxury streetwear label from the year 2093. 

The aesthetic is **Cinematic Brutalism**. It rejects the soft, approachable curves of contemporary SaaS design in favor of sharp edges, aggressive high-contrast, and an unapologetic use of negative space. The UI serves as a silent, premium frame for high-scale photography, evoking an emotional response of exclusivity, rebellion, and cold technical precision. Surfaces are either void-black or sterile-white, punctuated by the metallic sheen of digital "brushed silver."

## Colors
The palette is strictly monochromatic and cold. 

- **Primary White (#FFFFFF):** Used for all high-impact typography and primary UI triggers. It must feel blinding against the dark background.
- **Deep Black (#000000):** The infinite canvas. Used for the primary background to create a "void" effect that allows photography to emerge without borders.
- **Cold Grayscale:** Mid-tones are used sparingly for secondary metadata and disabled states. 
- **Brushed Silver (#E2E2E2):** Applied as a subtle gradient or thin stroke to simulate metallic hardware, referencing luxury garment detailing.

The default mode is **Dark**, emphasizing the cinematic, nocturnal atmosphere of the brand.

## Typography
Typography is the primary structural element of the design system. It utilizes **Inter** for its neutral, Swiss-inspired precision and **Geist** for technical, monospaced accents.

- **Headlines:** Must always be uppercase with expanded letter-spacing to evoke luxury and authority. 
- **Body Text:** Kept small and sharp. High line-height ensures legibility amidst a high-contrast environment.
- **Monospace Accents:** Used for product IDs, pricing, and technical specs to reinforce the "2093" futuristic/industrial narrative.
- **Scale:** Large display type should be used as a graphic element, often overlapping imagery or bleeding off the edge of the grid.

## Layout & Spacing
The layout follows a **Strict Brutalist Grid** inspired by high-end editorial archives. 

- **Grid Model:** A 12-column system where the "gutters" are represented by 1px solid lines rather than empty space, creating a blueprint or technical drawing aesthetic.
- **Negative Space:** Use "aggressive" padding. Sections should have massive vertical breathing room (160px+) to elevate the perceived value of the content.
- **Responsive Behavior:** 
    - **Desktop:** Full-bleed imagery with overlapping text. 
    - **Tablet:** 8-column layout, shifting to vertical stacks for editorial content.
    - **Mobile:** 4-column layout. Spacing is condensed but retains the 1px divider lines to maintain the technical structure.

## Elevation & Depth
This design system rejects traditional shadows and depth. It is a **Flat-Technical** system.

- **Tonal Layering:** Depth is achieved through "Void Stacking"—layering solid black panels over photography or using 1px white outlines to define boundaries.
- **Glassmorphism:** Used strictly for navigation overlays. A very high-intensity backdrop blur (30px+) with a 10% white tint, creating a "frosted laboratory glass" effect.
- **Interaction:** Depth is signaled by inversion. A white element becomes black on hover; a thin border becomes a thick, solid fill. There are no ambient shadows.

## Shapes
The shape language is binary: **Absolute Sharpness.** 

Every element—buttons, input fields, image containers, and cards—must have a 0px corner radius. This conveys a sense of architectural permanence and industrial coldness. Circles are permitted only for functional icons (e.g., a radio button), but even then, they should be housed within square hit areas.

## Components

- **Buttons:** Large, rectangular blocks. Primary buttons are solid white with black uppercase text. Secondary buttons are 1px white outlines ("Ghost" style). Hover states trigger a full color inversion.
- **Input Fields:** A single 1px bottom border. Labels use the `label-mono` style and sit above the line. Error states are signaled by a flash of high-contrast silver, never soft colors.
- **Product Cards:** No borders or backgrounds. The image takes up 100% of the card width, followed by minimal monospaced metadata. On hover, the image should slightly zoom or shift to a secondary "editorial" shot.
- **Lists:** Separated by 1px horizontal lines that span the full width of the container. No vertical dividers in list views.
- **Chips/Tags:** Small, rectangular boxes with 1px borders. Text is always uppercase `label-mono`.
- **Exclusive Feature - "The Scanner":** A horizontal 1px line that slowly drifts vertically across hero images, acting as a "loading" or "active" state indicator, mimicking a futuristic biometric scan.