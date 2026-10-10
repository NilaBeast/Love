# 💖 Ankita ❤️ Nilajeet — Our Love Website

A romantic, advanced React client-side website built with love.

## Run locally

```bash
cd client
npm install
npm run dev
```
Open http://localhost:3000

## Add your 20 photos

Copy your photos into:
```
client/public/photos/
```
Name them:
```
photo-01.jpg
photo-02.jpg
...
photo-20.jpg
```
`.jpg / .jpeg / .png / .webp` all work — the site auto-fallbacks.
If a photo is missing, a beautiful `A ❤️ N` placeholder shows.

## Add music (optional)

```
client/public/music/love.mp3
```
Press 🎶 button to play.

## Edit texts / dates

Edit `client/src/config.js`:
- `togetherSince` — your anniversary date
- `LOVE_LETTERS`, `REASONS`, `TIMELINE`, photo captions

## Build

```bash
npm run build
```
Deploy `dist/` to Vercel / Netlify / GitHub Pages.

Made with ❤️ by Nilajeet for Ankita.
