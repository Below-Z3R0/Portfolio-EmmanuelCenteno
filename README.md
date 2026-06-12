<div align="center">

# Emmanuel.Dev

**Full Stack Developer Portfolio**

<br>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-8b5cf6?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-emmanuel-centeno-t2a7.vercel.app/)
[![Status](https://img.shields.io/badge/Status-Available_for_work-8b5cf6?style=for-the-badge&logo=handshake&logoColor=white)](#-connect)
[![License](https://img.shields.io/badge/License-MIT-8b5cf6?style=for-the-badge&logo=open-source-initiative&logoColor=white)](LICENSE)

<br>

A minimalist, high-performance portfolio built with modern web technologies.
Focused on clean architecture, intentional design, and a seamless user experience.

[Features](#-features) · [Tech Stack](#%EF%B8%8F-tech-stack) · [Quick Start](#-quick-start) · [Architecture](#%EF%B8%8F-architecture) · [Connect](#-connect)

</div>

---

## ✨ Overview

This is the source code of my personal portfolio — a single-page application that showcases my work, skills, and background as a **Full Stack Developer in training**, specialized in the **JavaScript ecosystem** (React, Node.js, TypeScript) with **Supabase** and **PostgreSQL** on the backend.

The project demonstrates production-grade practices: **Atomic Design** component architecture, **type-safe validation** with Zod, **server state management** with React Query, **accessible animations** with Framer Motion, and a **bilingual (ES/EN) interface** with persistent **dark/light theming**.

<br>

> 💡 The portfolio is **deployed on Vercel** and the data is fetched dynamically from **Supabase**, with a static fallback layer in `src/staticdata/` for type reference.

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="96"><br><img src="public/React.svg" width="48" height="48" alt="React"/><br><sub><b>React 19</b></sub></td>
<td align="center" width="96"><br><img src="public/TypeScript.svg" width="48" height="48" alt="TypeScript"/><br><sub><b>TypeScript</b></sub></td>
<td align="center" width="96"><br><img src="public/Tailwind CSS.svg" width="48" height="48" alt="Tailwind"/><br><sub><b>Tailwind v4</b></sub></td>
<td align="center" width="96"><br><img src="public/Vite.svg" width="48" height="48" alt="Vite"/><br><sub><b>Vite 8</b></sub></td>
</tr>
<tr>
<td align="center"><sub>UI Library</sub></td>
<td align="center"><sub>Type Safety</sub></td>
<td align="center"><sub>Styling</sub></td>
<td align="center"><sub>Build Tool</sub></td>
</tr>
</table>

<br>

**State & Data**

![React Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443B38?style=for-the-badge&logo=zustand&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)

**Backend & Services**

![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgresSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FFB400?style=for-the-badge&logo=microsoft-outlook&logoColor=white)

**Animation & Quality**

![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)
![Vercel Analytics](https://img.shields.io/badge/Vercel_Analytics-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Husky](https://img.shields.io/badge/Husky-42B029?style=for-the-badge&logo=git&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

---

## ✨ Features

- 🌍 **Bilingual (ES / EN)** — Full interface translation with language toggle, persistent across sessions.
- 🎭 **Dark / Light theme** — Auto-detects system preference, manual override persists in `localStorage`.
- 📱 **Fully responsive** — Custom breakpoints (`qw: 921px`, `ew: 700px`, `ww: 640px`) optimized for mobile, tablet, and desktop.
- ✨ **Smooth animations** — Section fade-ups with `framer-motion` using `viewport={{ once: true }}` for performance.
- 💀 **Loading skeletons** — Per-section skeleton components for a polished loading experience.
- 📧 **Contact form** — Validated with **Zod** schemas, sent via **EmailJS**, no backend required.
- 🗄️ **Dynamic data** — Content fetched from **Supabase** with React Query caching (1h `staleTime`).
- 🏗️ **Atomic Design** — Clear separation: `atoms` → `molecules` → `organisms` → `skeletons`.
- 🔒 **Type-safe** — Strict TypeScript, runtime validation with Zod, no `any` in business logic.
- ⚡ **Optimized build** — Code splitting, lazy loading, Vercel Analytics integration.
- 🎨 **Custom design system** — CSS variables for tokens (`--accent`, `--bg-card`, `--text-main`, etc.) — zero hardcoded hex in components.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  App.tsx (Root)                                             │
│  ├── NavBar (responsive)                                    │
│  ├── HeroSection                                            │
│  ├── TecnologiesSection   ←  useGeneralData() → React Query│
│  ├── ProjectsSection      ←  useProjectsData() → React Query│
│  ├── AboutMeSection                                          │
│  └── ContactSection       ←  EmailJS + Zod validation       │
└─────────────────────────────────────────────────────────────┘
         │                                      │
         ▼                                      ▼
   getContentData("Hero"...)         getProjetData("Portfolio")
   (RPC → Supabase)                  (RPC → Supabase)
         │                                      │
         └──────────── Zod schema validation ──┘
                          │
                          ▼
                  Typed components
```

**Key principles:**
- **Single source of truth** — schemas in `src/schema/` validate data at the boundary.
- **Parallel fetching** — `Promise.all` in services to minimize latency.
- **Component composition** — organisms consume atoms/molecules, no prop drilling beyond 2 levels.
- **Design tokens** — CSS variables in `index.css` consumed via Tailwind v4 `@theme` directive.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 20.x
- **pnpm** (or npm/yarn)
- A **Supabase** project (optional — only needed for live data)
- An **EmailJS** account (optional — only for contact form)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Below-Z3R0/Portfolio-EmmanuelCenteno.git
cd Portfolio-EmmanuelCenteno

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env-example .env
# Edit .env with your credentials (see below)

# 4. Start the dev server
pnpm dev

# 5. Open http://localhost:5173
```

### Environment Variables

The project expects the following variables in `.env`:

```bash
# Supabase (required for live data)
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=

# EmailJS (required for contact form)
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

> 🔒 **Never commit `.env`** — it's already in `.gitignore`.

### Available Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `pnpm dev`      | Start dev server with HMR            |
| `pnpm build`    | Type-check and build for production  |
| `pnpm preview`  | Preview the production build         |
| `pnpm lint`     | Run ESLint on the codebase           |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/          # Button, LinkButton, Title1-4, Paragraph
│   ├── molecules/      # NavBar, ProjectCard, TecnologiesCard, Formulary
│   ├── organims/       # HeroSection, AboutMeSection, ContactSection...
│   ├── skeletons/      # Loading states (HomePage, Formulary, NavBar...)
│   ├── componentsindex.ts
│   └── componentstypes.ts
│
├── hooks/              # useGeneralData, useProjectsData, useLanguage, useTheme
├── api/                # Services (Supabase RPC + data fetching)
├── schema/             # Zod schemas for runtime validation
├── staticdata/         # Reference data shape (matches Supabase response)
├── types/              # Shared TypeScript types
└── assets/             # Custom SVG icons + image map

public/                 # Static assets (icons, profile images, project images)
docs/skills/           # 19 development skill guidelines (Atomic Design, design, etc.)
```

---

## 🎯 Roadmap

- ✅ **Portfolio v1** — Live in production with bilingual support and dynamic data
- 🚧 **NINCY** — Udemy-style learning platform (in development)
- 📚 **`docs/skills/`** — Modular AI agent guidelines for projects (19 skills documented)
- 🔜 **Blog section** — Coming soon

---

## 🤝 Connect

<div align="center">

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-8b5cf6?style=for-the-badge)](https://portfolio-emmanuel-centeno-t2a7.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Below-Z3R0)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emmanuel-centeno-3bbab53b1/)

</div>

<br>

> 💼 **Open to opportunities** — Full Stack, Frontend, or Backend roles.
> Feel free to reach out via the contact form on the live site or LinkedIn.

---

## 📜 License

Released under the **MIT License**. See [`LICENSE`](LICENSE) for details.

<br>

<div align="center">

**Coded by Emmanuel Centeno** · *Built with React, TypeScript & Tailwind CSS*

<sub>⭐ If you like this project, consider giving it a star!</sub>

</div>
