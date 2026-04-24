# NEXUS PDF Studio Pro

**Intelligence Without the Artificial — Bridging Heart, Code, and Consciousness**

A professional mobile-first PDF editor built as a Progressive Web App (PWA).  
Developed by **Kaneon Parker** · [kaneonexus.net](https://kaneonexus.net)

---

## Features

- **Text-First UX** — alignment controls front and center
- **◇ Pyramid / Diamond Layout** — centered text that forms a diamond shape
- **Book Paragraph Justify** — full justified alignment
- **10 Animation Types** — Credits scroll, Fade, Slide, Typewriter
- **🔒 Layer Locking** — prevents accidental edits
- **📌 Template System** — save base layers, wipe data for next customer
- **White-Out Tool** — drag to redact or select words
- **Signature Pad** — touch-optimized
- **Logo / Image Layers** — with blend modes, reflection, shadow
- **Offline Support** — works without internet once installed
- **Installs to Home Screen** — full standalone app experience on Android

---

## Live App

> **[nexus-pdf-studio.kaneonexus.net](https://nexus-pdf-studio.kaneonexus.net)**  
> *(update with your actual GitHub Pages or Vercel URL)*

---

## Deploy Options

### Option A — GitHub Pages (free, instant)

```bash
# In Termux:
cd ~/Projects
git clone https://github.com/1darkcanyon/nexus-pdf-studio
cd nexus-pdf-studio
# Copy files in, then:
git add .
git commit -m "NEXUS PDF Studio Pro PWA"
git push origin main
```

Then in GitHub repo settings → Pages → Source: `main` branch, `/ (root)`.  
Your app will be live at: `https://1darkcanyon.github.io/nexus-pdf-studio`

### Option B — Add to kaneonexus.net (Vercel)

Add all files into a `/pdf-studio` folder in the `1darkcanyon/kaneonexus-website` repo.  
App will be live at: `https://kaneonexus.net/pdf-studio`

---

## File Structure

```
nexus-pdf-studio/
├── index.html        ← Full app (single file)
├── manifest.json     ← PWA manifest
├── sw.js             ← Service worker (offline support)
├── icons/
│   ├── icon-192.png  ← App icon
│   └── icon-512.png  ← Splash icon
└── README.md
```

---

## Install on Android

1. Open the app URL in Chrome
2. Tap the **⬇ INSTALL** banner that appears
3. Or tap Chrome menu → **Add to Home Screen**
4. App opens fullscreen with no browser chrome

---

*NEXUS Integrated Intelligence Solutions · Grants Pass, Oregon*  
*© Kaneon Parker · 1ntegrate1ntelligent5olutions@gmail.com*
