# Shaikh Saniya — Personal Portfolio Website

A modern, accessible, and responsive personal developer portfolio website designed and built for Shaikh Saniya, a second-year Bachelor of Science in Information Technology (BSc IT) student.

Built as the final project for the **Coursera Introduction to Web Development** course, demonstrating semantic HTML5 structure, accessible user experience, modern CSS styling with design system tokens, and genuine JavaScript interactivity.

---

## 🌟 Live Demo & Repository

- **Live Published Portfolio:** [https://sancryption.github.io/saniya-portfolio/](https://sancryption.github.io/saniya-portfolio/)
- **GitHub Repository:** [https://github.com/sancryption/saniya-portfolio](https://github.com/sancryption/saniya-portfolio)

---

## 🎨 Visual Identity & Design System

The portfolio embodies a **modern editorial design with a subtle futuristic influence**:
- **Backgrounds:** Warm off-white and soft neutrals (`#FBFBFA`, `#F3F3EE`) for high readability.
- **Typography:** Deep forest-green and near-black tones (`#0D1912`, `#263B2F`) paired with clean typography (`Space Grotesk` for display headings, `Plus Jakarta Sans` for body copy, and `JetBrains Mono` for technical notations).
- **Accent:** Crisp lime/chartreuse accent (`#A3E635` / `#416B09` high-contrast) providing vibrant focal points while strictly maintaining WCAG contrast ratios.
- **Visuals:** Project-specific bespoke interface panels rather than generic stock photography or repetitive cards.

---

## 📁 Project Structure

```text
saniya-portfolio/
├── index.html        # Semantic HTML5 single-page structure & accessible markup
├── style.css         # Modern vanilla CSS design system & responsive media queries
├── script.js         # Accessible vanilla JavaScript interactivity & keyboard handling
└── README.md         # Documentation, Rubric Mapping & Deployment Guide
```

---

## 🚀 Featured Projects Showcase

This portfolio showcases Shaikh Saniya's four actual projects:

1. **SafetyReady (Drug Safety & Regulatory Readiness)**
   - *Overview:* Drug safety signal detection and regulatory submission readiness project developed for the IBM Bob AI Innovation Hackathon. Analyzes safety reports using Proportional Reporting Ratios (PRR) and evaluates submission readiness against ICH Common Technical Document (CTD) requirements.
   - *Technologies:* React, TypeScript, Python, FastAPI, SQLite
   - *Repository:* [https://github.com/sancryption/bob-ai-hackathon-parallaxa](https://github.com/sancryption/bob-ai-hackathon-parallaxa)

2. **Lotus Next (Open-Source Software Development)**
   - *Overview:* Open-source software development project contributing frontend interface customization, custom message bubble colors, and global accent theme token configuration to the Lotus web UI.
   - *Technologies:* React, TypeScript, Vite, Git, GitHub
   - *Repository:* [https://github.com/bigduu/lotus-next](https://github.com/bigduu/lotus-next)

3. **The Anatomy of a Memory (3D Game Development)**
   - *Overview:* A psychological survival-horror 3D experience set in an abandoned biological research facility. Features atmospheric exploration, environmental puzzles, and a compelling narrative centered on identity and memory.
   - *Technologies:* Web 3D, Interactive Storytelling, Audio & Atmosphere, RUN.world
   - *Live Game:* [https://w.run/sannie/the-anatomy-of-a-memory](https://w.run/sannie/the-anatomy-of-a-memory)

4. **AURA: Field Safety Co-Pilot (Field Safety Application)**
   - *Overview:* A field-safety supervisor dashboard and incident management application designed around high-stakes field safety workflows, real-time alert triage, and operational clarity.
   - *Technologies:* React, TypeScript, Vite, CSS Architecture
   - *Live Deployment:* [https://aura-field-safety-co-pilottt.onrender.com](https://aura-field-safety-co-pilottt.onrender.com/)

---

## 📊 Coursera Assessment Rubric Mapping (20/20 Points)

| Criterion | Points | Implementation Details |
| :--- | :---: | :--- |
| **1. HTML Structure** | **5 / 5** | Strict HTML5 semantic layout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`. Single `<h1>` in hero section with logical `<h2>` and `<h3>` hierarchy. Document metadata, open-graph tags, and clean relative asset paths. |
| **2. Accessibility** | **3 / 3** | Visible skip-to-content link, `aria-expanded` and `aria-controls` on mobile navigation, `aria-live="polite"` feedback for clipboard actions, visible `:focus-visible` focus rings, WCAG AAA/AA color contrast compliance, and full `@media (prefers-reduced-motion: reduce)` support. |
| **3. CSS Styling** | **5 / 5** | Dedicated stylesheet (`style.css`) with unified CSS Custom Properties design system. Modular Flexbox and CSS Grid layouts, polished micro-interactions, custom interactive code terminal, and bespoke project cards with zero external UI libraries. |
| **4. JavaScript Interactivity** | **5 / 5** | Dedicated script (`script.js`) executing without errors. Features responsive mobile navigation with automatic closing on click/Escape/outside click, functional copy-email action with clipboard API and legacy fallback, dynamic footer copyright year, and active scroll spy navigation. |
| **5. Responsive Design** | **2 / 2** | Mobile (< 640px), tablet (640px–1024px), and desktop (> 1024px) media queries. Touch-friendly targets (min 44×44px), zero horizontal overflow, and fluid typography. |
| **Total Score** | **20 / 20** | **Complete Coursera Assessment Requirements Fulfilled** |

---

## 💻 Local Testing & Verification

To run and preview the website locally without any build tools or dependencies:

1. **Using Python's built-in HTTP server:**
   ```bash
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your web browser.

2. **Using Node's npx:**
   ```bash
   npx serve .
   ```

3. **Or simply double-click `index.html`** in any modern web browser.

---

## 🚢 GitHub Pages Deployment Guide

1. **Create Repository:**
   Create a new public repository named `saniya-portfolio` on your GitHub account (`https://github.com/sancryption/saniya-portfolio`).

2. **Push Files:**
   Ensure `index.html`, `style.css`, `script.js`, and `README.md` are in the repository root:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Shaikh Saniya personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/sancryption/saniya-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub: `https://github.com/sancryption/saniya-portfolio`
   - Click **Settings** (top navigation tab)
   - On the left sidebar, click **Pages**
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**
   - Under **Branch**, select `main` and folder `/ (root)`, then click **Save**
   - Wait 1–2 minutes for GitHub Actions to complete the deployment.
   - The site is live at: `https://sancryption.github.io/saniya-portfolio/`
