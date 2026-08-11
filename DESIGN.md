# Portrait Research System — Visual & Motion V4

## Art direction

The portfolio keeps the accepted editorial layout and rebuilds only the opening and analytical hero object. The opening is monochrome portraiture: controlled rim light, deep negative space, layered condensed-scale typography, and a hand-drawn SVG signature. It uses the real supplied portrait asset and does not regenerate the subject.

## Intro portrait

- Direct entry: 5 seconds on capable desktop devices; 3.8 seconds on mobile or constrained devices.
- `DONG THANH DAT` is intentionally unaccented uppercase display text. The professional hero immediately restores the correct Vietnamese name `Đồng Thành Đạt`.
- Back and foreground type layers pass behind and in front of the portrait without obscuring the face.
- The signature is SVG stroke animation, not a text font.
- The transition is CSS-only black to white; the intro creates no canvas or WebGL context.
- Internal returns skip the intro. `?intro=1` forces it and `?skipIntro=1` skips it for QA.

## Research Core 2.0

The single realtime object communicates a three-stage research model:

- **Observation:** five distinct respondent/data nodes.
- **Structure:** three calibrated, intentionally inclined analytical rings.
- **Insight:** a ceramic synthesis core with an optical reading surface.

Pointer proximity or a touch tap separates the assembly. It returns with damping and no bounce. Idle motion is limited to about 1.2° horizontally, 0.6° vertically, and a very small vertical drift.

## Performance strategy

- A 19 KB static WebP render appears immediately; the realtime Three.js core loads after the intro.
- One WebGL canvas maximum; the portrait intro is CSS and SVG only.
- Device pixel ratio is clamped to 1.4 desktop and 1.15 mobile.
- The canvas renders on demand during interaction and wakes at a low idle cadence. `requestAnimationFrame` and idle timers are cancelled while offscreen or when the tab is hidden.
- Geometry, materials, PMREM resources, observers, listeners, timers, and animation frames are disposed on unmount.
- One local variable Inter WOFF2 replaces six remote font weights.

## Typography and content

The hero name uses Inter Variable with explicit line height, Vietnamese-safe clipping insets, and a transform/opacity reveal. All research content, PDF evidence, certificates, brand marks, tools, and contact information remain unchanged.
