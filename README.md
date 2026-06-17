# Tuna Girgin Portfolio

Modern, bilingual portfolio site for internship, junior software, R&D, computer vision, game development and embedded systems applications.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

On Windows PowerShell, if `npm` is blocked by execution policy, use:

```powershell
npm.cmd install
npm.cmd run dev
```

## Build

```bash
npm run build
```

## Deploying to Vercel

1. Push the project to GitHub.
2. Import the repository on Vercel.
3. Keep the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`

## Content Updates

Main portfolio content lives in `src/data/portfolio.ts`.

Project screenshots are prepared as optional assets. Add files with these names to make them appear automatically:

- `public/projects/campus-vehicle-system.png`
- `public/projects/olympus-voidbound.png`
- `public/projects/tcdd-seat-finder.png`

The CV button expects:

- `public/tuna_girgin_cv.pdf`

For a future profile image, add an image under `public/` and set `profileImage` in `src/data/portfolio.ts`.
