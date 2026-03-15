# DateFlo Repository Instructions

## Absolute Rules

1. **NEVER use dashes anywhere in visible text content.** No hyphens (-), en-dashes (–, &ndash;), or em-dashes (—, &mdash;) in any text that users will see. Use commas, periods, colons, semicolons, or "to" for ranges instead. This applies to HTML text, JavaScript strings, ICS descriptions, and all user-facing copy.

2. **NEVER mention AI.** Always refer to "our team" of planners. DateFlo is a human-curated date planning service.

3. **All date plans must use the cupid-vibe design language.** See `templates/design-cupid-vibe/index.html` for the reference template. Colors, fonts, borders, shadows, button styles, and layout must match.

## Design Standards

- Color palette: `--cupid:#e84393`, `--rose-red:#d63031`, `--arrow-gold:#f9ca24`, `--blush:#fff0f5`, `--card-bg:#fff5f7`, `--wing-pink:#fd79a8`, `--deep-rose:#8e3a59`, `--cream:#fff8fa`, `--text-dark:#2d132c`
- Font: System font stack, Playfair Display only for hero h1
- Borders: 3px solid with offset box-shadows
- Buttons: pill-shaped (border-radius:50px) with offset shadows
- Stops: color-cycling via nth-child(3n)

## Map Buttons

- Use logo images instead of text: `assets/google-logo.png`, `assets/apple-logo-white.png`, `assets/apple-logo-black.png`
- Google buttons: white background with thin border (`border:1px solid #ccc`)
- Apple buttons on dark backgrounds: white Apple logo
- Apple buttons on light backgrounds: black Apple logo
- Venue locations: wrapped in a `venue-box` (rounded box with venue name + Google/Apple logo buttons)
- Parking: label + row layout with Google/Apple logo buttons

## Parking Links

- Always use exact lat/lng coordinates, never place-name searches
- Google Maps format: `https://www.google.com/maps/dir/?api=1&destination=LAT,LNG`
- Apple Maps format: `https://maps.apple.com/?daddr=LAT,LNG&dirflg=d`
- Every parking option must have both Google and Apple Maps buttons
- Research actual lot locations via satellite view before adding coordinates

## Transport Corner

- Uses `float:right` (NOT position:absolute) to prevent overlap with content
- Fixed width: `width:200px;max-width:200px;box-sizing:border-box`
- Heads Up notes expand inside the transport corner, not full-width

## Deployment

- GitHub Pages repo: `ene120/DateFlo-Dates` at `dateflo.com`
- Copy files to `/tmp/DateFlo-Dates-check/`, commit, push
- Assets folder: `/assets/` at repo root for shared images (logos)

## Form

- Consultation form POSTs to Google Apps Script endpoint
- Fields include separate love languages per partner (loveLangs1, loveLangs2)
