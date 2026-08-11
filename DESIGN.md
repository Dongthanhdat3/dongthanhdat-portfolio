# Kinetic Research Object — Visual & Motion System V3

## Art direction

The visual system is **visually rich but structurally clean**: product-film lighting, controlled negative space, physical depth, and one highly finished analytical object. The supplied Apple product references inform camera discipline, material response, exploded assembly, rim lighting, and framing only. No Apple product, geometry, logo, footage, or proprietary typography is reproduced.

## Research Core

The single WebGL object used across intro and hero is an original industrial-design metaphor for structured research:

- **Central ceramic core = Business Question**
- **Metal and glass nodes = Observations**
- **Optical lens = Insight**
- **Brushed-aluminum frame = Analytical Model**
- **Smoked-glass output plane = Decision**

The object contains nine procedural parts and no image textures or external model. Pointer proximity progressively separates the parts; pointer leave settles them back together. Touch uses a tap-to-explode/tap-to-assemble state without capturing vertical scrolling.

## Cinematic sequence

The direct-load intro follows silhouette → material reveal → exploded structure → precision assembly → name reveal. It lasts 4.2 seconds on desktop and 3.4 seconds on mobile, can be skipped after one second, does not replay on internal return, and supports `?intro=1` for visual QA. Reduced-motion users receive a short static transition with no exploded animation.

## Performance strategy

- One shared WebGL canvas for intro and hero; no other canvas exists.
- Procedural geometry and materials; no GLB or texture payload.
- Device pixel ratio clamped to 1.6 desktop and 1.25 mobile.
- Rendering pauses when the hero is offscreen or the tab is hidden.
- All geometries, materials, PMREM resources, observers, listeners, and animation frames are disposed on unmount.
- Tools and project panels use transform-only 2.5D interaction, not realtime WebGL.

## Typography and rhythm

- Inter throughout.
- Hero name: `clamp(64px, 7.4vw, 112px)`, weight 700.
- Project H1: `clamp(48px, 4.6vw, 66px)`, weight 650.
- H2: `clamp(34px, 3vw, 50px)`.
- White hero and calm About; off-white capabilities; graphite tool lab; white projects; off-white education; graphite contact.
- Motion density concentrates on intro, hero, tools, and project plaques; academic content uses restrained reveal only.

## Content rules

All original research content, PDF evidence, certificates, brand marks, and contact information remain unchanged. Homepage project cards use shorter editorial titles; detail pages retain the full research titles.
