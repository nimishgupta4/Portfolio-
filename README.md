# Nimish Gupta — Portfolio V2

A React + Vite portfolio with a restrained Apple-inspired visual system, cinematic CSS details, project filtering, case-study dialogs, light/dark theme, responsive layout, and GitHub Pages deployment.

## Before publishing

Open `src/App.jsx` and replace these placeholders with your real public links:

- `YOUR_EMAIL@example.com`
- `https://github.com/YOUR_USERNAME`
- `https://www.linkedin.com/in/YOUR_USERNAME/`

Only add contact details you are comfortable making public. Project cards are intentionally labelled as concepts / works in progress until you have finished and verified them. Update descriptions and statuses to match the real state of your work.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite prints a local preview URL in the terminal.

## Test the production build

```bash
npm run build
npm run preview
```

The generated site is in `dist/`.

## GitHub Pages setup

This project is configured for the existing repository URL:

`https://nimishgupta4.github.io/Portfolio-/`

The `base` value in `vite.config.js` is `/Portfolio-/`. If your repository name differs, update it to `/<exact-repository-name>/` including capitalization and trailing slash.

1. Add the project files to the **root** of the existing `Portfolio-` repository. Do not put the whole project inside another nested folder.
2. Commit the `.github/workflows/deploy.yml` file.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions** (not “Deploy from a branch”).
5. Open **Actions** and wait for “Deploy portfolio to GitHub Pages” to finish successfully.
6. Open the site URL above and hard refresh if an older version is cached.

The workflow builds the React app and deploys `dist/`. Do not publish the source folder directly as the Pages artifact.

## If the project already contains the old single-file site

Keep a copy of the current `index.html` before replacing it. Vite uses the new root `index.html` as its build entry point. The source React files live in `src/`.

## Important honesty note

This portfolio describes early-stage projects as concepts and work in progress. Do not claim client outcomes, paid work, or completed features unless they are real and verifiable.
