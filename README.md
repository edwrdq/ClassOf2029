# Class of 2029 — Site Guide

This project is a single‑page React app with an optional Photos page. The header scrolls to sections on the home page; only Photos is a separate route.
I made this as a practice project that could maybe have some use as a website for my graduating class throughout the year — or just for fun! 

Quick start
- Install deps: `npm i` (or `bun install`)
- Run dev server: `npm run dev`
- Open: http://localhost:5173

Structure
- `src/App.tsx` — Home page sections (Home, Events, Board, Gallery preview, Contact) and the status bar.
- `src/pages/Photos.tsx` — Standalone Photos page.
- `src/components/DaysLeftBar.tsx` — “days left” status bar.
- `src/index.css` — Theme + 8‑bit styles and small utility classes.

Update the “Days Left” bar
1) Open `src/App.tsx` and find `<DaysLeftBar firstDayISO=... lastDayISO=... />`.
2) Set your start/end dates (ISO `YYYY-MM-DD`).

Add or edit Events
1) Open `src/App.tsx`, find the `Upcoming Events` section.
2) Add/remove items inside the `<ul>` list. Suggested format:
   - `Event Name — MMM DD` (example: `Welcome Week — Aug 18`).

Edit the Board (alternating photo/bio)
1) Open `src/App.tsx`, find the `Class Board` section.
2) There are five prebuilt rows: President, Vice President, Secretary, Treasurer, Historian.
3) Replace `TBD Name` and the sample bio text for each role.
4) Add photos (optional):
   - Put images in `public/board/` (create it if missing), e.g. `public/board/president.jpg`.
   - Replace the gray square `div` with an image element, e.g.:
     ```tsx
     <div style={{ flex: '0 0 220px', aspectRatio: '1 / 1' }}>
       <img className="pixel-img" src="/board/president.jpg" alt="President — Full Name" />
     </div>
     ```
   - Tip: Keep images roughly square for best layout.

Gallery preview + Photos page
- The Gallery preview lives in `src/App.tsx` under the `Gallery` section; update or replace the gray boxes.
- The “See all photos” button goes to `/photos` (component in `src/pages/Photos.tsx`).
- You can put full‑size images in `public/photos/` and render them there.

Contact section
- Edit the Instagram handle link in the `Contact` section of `src/App.tsx`.

Routing
- Home page sections are anchors: `#home`, `#events`, `#board`, `#gallery`, `#contact`.
- Photos is the only route: `/photos`.
- Unknown routes show the NotFound page.

Theme
- The site defaults to a white, 8‑bit‑styled theme (square corners, bold borders, pixel font).
- Optional dark theme can be enabled by setting `data-theme="dark"` on the `<html>` element.

Notes
- `Home.tsx`, `Events.tsx`, and `Board.tsx` are not used in the single‑page layout.
- If you change section IDs, update the header links to match.
