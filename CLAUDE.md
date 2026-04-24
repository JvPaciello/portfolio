# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with `--host` (exposes on LAN).
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/`.
- `npm run lint` — run ESLint over the repo.

## Architecture

Single-page personal portfolio built with React 19 + Vite 6, styled with Tailwind CSS v4 (loaded via the `@tailwindcss/vite` plugin and a single `@import "tailwindcss"` in `src/index.css` — there is no `tailwind.config.js`).

`src/App.jsx` is the entire page: it renders `Header`, `HeroSection`, `AboutSection`, `ProjectsSection`, and `Socials` in order inside one root `<div>` with `bg-black`. There is no router despite `react-router-dom` being a dependency — navigation is anchor-based scrolling between sections. New content belongs inside one of these section components, or as a new sibling section wired into `App.jsx`.

Animations use `framer-motion`; icons come from `react-icons`. Project data (titles, descriptions, images, links) is hardcoded inline within `ProjectsSection.jsx` — adding a project means editing that array and dropping the image into `public/`.

ESLint flat config (`eslint.config.js`) treats unused vars starting with uppercase/underscore as allowed (convention for unused imports of components/constants).
