# Portrait Research System — Visual & Motion V4

## Art direction

The portfolio keeps the accepted editorial layout and rebuilds only the opening and analytical hero object. The opening uses the supplied `Home (1)` monochrome artwork as the exact cinematic key visual—portrait, layered typography, and signature together—without regenerating or re-composing the subject.

## Intro portrait

- Direct entry: 5 seconds on capable desktop devices; 3.8 seconds on mobile or constrained devices.
- The complete supplied `DONG THANH DAT` portrait composition is shown intact. The professional hero immediately restores the correct Vietnamese name `Đồng Thành Đạt`.
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
- Two unicode-ranged local Inter Variable WOFF2 subsets (Latin and Vietnamese, 57 KB combined) replace six remote font weights.

## Typography and content

The hero name uses Inter Variable with explicit line height, Vietnamese-safe clipping insets, and a transform/opacity reveal. All research content, PDF evidence, certificates, brand marks, tools, and contact information remain unchanged.
