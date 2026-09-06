# Yoshita Sharma — Portfolio

A single-page personal portfolio for Yoshita Sharma, Corporate & Commercial Legal Professional (BBA LL.B. (Hons.), NMIMS School of Law, Indore).

Plain HTML, CSS and vanilla JavaScript — no build step, no framework, no dependencies. Works as a static site on GitHub Pages, Vercel, Netlify, or any static host.

## What's inside

```
.
├── index.html          # All page content/sections
├── css/
│   └── style.css       # All styling (design tokens, layout, responsive rules)
├── js/
│   └── script.js       # Mobile nav, scroll-reveal animation, expandable
│                        # experience details, recruiter-snapshot panel
├── assets/
│   ├── portrait.jpg     # Profile photo shown in the hero section
│   └── Yoshita_Sharma_Resume.pdf   # File served by every "Download CV" button
├── vercel.json          # Static-site config for Vercel
└── .gitignore
```

## Sections

1. Hero — headline, portrait, quick stats, contact shortcuts
2. About — summary + qualification/credential facts
3. Expertise — six practice-area cards
4. Experience — timeline of internships (2024–2026) with expandable detail panels for each role
5. Publication — three published research pieces, each linking out to the live article
6. Education & Credentials — academic record + certifications/workshops
7. Achievements & Leadership — competitions/activities and positions of responsibility, plus a tools/technical list
8. Contact — direct contact methods + CV download
9. Floating "Recruiter snapshot" button — a quick-glance card with headline stats and CV/email shortcuts

## Replacing your content

- **Photo** — swap `assets/portrait.jpg` with your own image (same filename, or update the `src` in `index.html`'s `.hero-portrait img`).
- **CV** — replace `assets/Yoshita_Sharma_Resume.pdf` with your latest CV (keep the same filename, or update every `href="assets/Yoshita_Sharma_Resume.pdf"` in `index.html`).
- **Text** — all copy lives directly in `index.html`; edit in place.
- **Colors/fonts** — controlled by the CSS variables at the top of `css/style.css` (`:root { ... }`).

## Running locally

No build tools needed. Any static server works, for example:

```bash
# Python
python3 -m http.server 8000

# Node (if you have it)
npx serve .
```

Then open `http://localhost:8000`.

## Deploying

### Option A — Vercel (recommended)

1. Push this folder to a new GitHub repository (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Other** (static site) — no build command, no output directory override needed.
4. Click **Deploy**. Vercel will serve `index.html` at the root automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

### Option C — GitHub Pages

1. Push to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<username>.github.io/<repo>/`.

## Pushing to GitHub for the first time

```bash
git init
git add .
git commit -m "Initial commit — portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Notes

- Fonts (Fraunces + Inter) are loaded from Google Fonts via CDN — no local font files needed.
- The "Download CV" buttons use a native `download` attribute, so the PDF downloads directly rather than opening in a new tab.
- Scroll-triggered fade/slide-up animations use `IntersectionObserver` and respect `prefers-reduced-motion`.
- Fully responsive — tested breakpoints at 980px (tablet/nav collapse) and 640px (mobile).
