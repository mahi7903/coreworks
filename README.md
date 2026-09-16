# Jhalak Core Drilling — Website

Business website for Jhalak Core Drilling, a soil testing and core drilling
sample-collection service for private and government projects in India.

## Project status

🚧 In draft. Placeholder content is marked with `[PLACEHOLDER]` text and a
yellow **TODO** flag throughout the site — see [CONTENT-NEEDED.md](./CONTENT-NEEDED.md)
for the full checklist of real content still needed before launch.

## Tech stack

- Plain HTML5 / CSS3 / vanilla JavaScript — no build step, no framework
- Hosted on [Netlify](https://netlify.com) (free tier)
- Contact form uses [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) — form submissions are captured automatically once deployed on Netlify, no backend code needed
- Custom domain: `jhalakcoredrilling.co.in` (or final agreed name), purchased via Hostinger India

## Project structure

```
.
├── index.html          Home page
├── services.html       Services page
├── about.html           About page
├── gallery.html         Photo gallery
├── contact.html         Contact page + enquiry form
├── css/style.css        Shared stylesheet
├── js/script.js         Shared JS (nav toggle, form handling)
├── assets/images/       Site images go here
├── netlify.toml          Netlify config
└── CONTENT-NEEDED.md    Checklist of real content to collect from the client
```

## Running locally

No build tools needed — just open `index.html` in a browser, or serve the
folder with any static server, e.g.:

```bash
npx serve .
```

## Deployment

Deployed via Netlify, connected to this GitHub repo for automatic deploys on
push to `main`. See the project handoff notes for domain + DNS setup steps.

## Author

Built by Mahi (freelance) for Jhalak Core Drilling.
