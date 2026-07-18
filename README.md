# Harshavardan N — Portfolio

A premium portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Design Concept: "Phase-Locked"

The visual identity is derived from the published patent on the Cortico-Thalamic Phase-Locked tFUS System, featuring wave interference patterns, precision aesthetics, and medical AI elegance.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 + CSS Variables
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk, JetBrains Mono

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

### Vercel (Recommended)
```bash
vercel --prod
```

### GitHub Pages
```bash
npm install -D gh-pages
# Add to package.json: "deploy": "gh-pages -d dist"
npm run deploy
```

## Customization

1. Add your photo to `public/images/portrait.png`
2. Add your resume to `public/resume.pdf`
3. Add project screenshots to `public/images/projects/`
4. Update `app/lib/data.ts` with your latest information

## License

MIT
