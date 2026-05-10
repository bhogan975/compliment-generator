# Compliment Generator

A small, stylish web app that displays warm, tasteful compliments and playful jokes with subtle animations. Built with vanilla HTML, CSS, and JavaScript — perfect as a portfolio project or a lightweight standalone widget.

Features
- Responsive, centered playing-card UI with decorative micro-animations.
- 100 tasteful, mature compliments (non-explicit) stored in `script.js`.
- 50 tasteful jokes with setup/punchline sequencing and animated punchline reveal.
- Emoji particles and a playful emoji badge that update on each generation.
- Decorative inline SVG artwork and a polished SVG favicon (`favicon.svg`).

Project files
- `index.html` — main HTML structure and controls
- `styles.css` — layout, animations, and playing-card visuals
- `script.js` — compliments, jokes, and interaction logic
- `favicon.svg` — project favicon used by modern browsers

Running locally

Option 1 — open directly

1. Double-click `index.html` or open it in your browser.

Option 2 — serve with a simple static server (recommended)

From the project directory run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Development notes
- Compliments and jokes are defined in arrays inside `script.js`.
- Compliments: the app contains mature, suggestive-but-non-explicit lines per content constraints.
- Jokes: punchlines are revealed after a short delay when a setup/punchline pair is used.
- The primary UI uses pure CSS (Flexbox and some transforms) — no frameworks required.

Assets & favicon
- `favicon.svg` is included and referenced in `index.html`. Modern browsers support SVG favicons; if you need PNG/ICO fallbacks, add them to the project and reference them in the head.

Accessibility
- Key interactive elements are keyboard-accessible (buttons, focus states).
- The compliment textarea and joke area use `aria-live` to announce updates for assistive tech.

Ideas for next improvements
- Add a toggle to switch between "clean" and "mature" content modes.
- Add a copy-to-clipboard or share button for compliments and jokes.
- Add unit tests for the random-selection utilities.
- Provide PNG/ICO favicon fallbacks for older browsers.

License
- This project is provided as-is for learning and portfolio use. No license file included — add one if you plan to publish or reuse broadly.

Enjoy — and let me know if you'd like any refinements (modes, toggles, or accessibility tweaks).
