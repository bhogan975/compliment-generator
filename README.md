# Compliment Generator

Simple, responsive Compliment Generator built with vanilla HTML, CSS, and JavaScript.

Files
- `index.html` — main HTML file
- `styles.css` — styling (uses Flexbox for centering)
- `script.js` — compliment logic and interactions

How to run locally

1. Open the project folder in your browser by double-clicking `index.html`.

OR

2. Serve locally using a simple static server (recommended to avoid CORS or file-loading quirks):

   - Using Python 3 (from the project directory):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Notes
- The compliments are defined in `script.js` in the `compliments` array.
- No build tools or dependencies required.
