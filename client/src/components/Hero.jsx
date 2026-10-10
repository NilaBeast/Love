import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LOVE_CONFIG, PHOTOS } from '../config.js';

const LINES = [
  "You are my today, my tomorrow, my always. 💖",
  "In your smile, I found my home. 🏠",
  "Every heartbeat whispers: Ankita. 💓",
  "I didn't choose you, my heart did. ✨",
  "Forever isn't long enough with you. ♾️",
];

function useTypewriter() {
  const [text, setText] = useState('');
  const [li, setLi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = LINES[li];
    let timeout;
    if (!del && ci < full.length) {
      timeout = setTimeout(() => setCi(ci + 1), 55);
    } else if (!del && ci === full.length) {
      timeout = setTimeout(() => setDel(true), 1800);
    } else if (del && ci > 0) {
      timeout = setTimeout(() => setCi(ci - 1), 28);
    } else if (del && ci === 0) {
      setDel(false);
      setLi((li + 1) % LINES.length);
    }
    setText(full.slice(0, ci));
    return () => clearTimeout(timeout);
  }, [ci, del, li]);

  return text;
}

function useTogether() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const start = new Date(LOVE_CONFIG.togetherSince).getTime();
  let diff = Math.max(0, now - start);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs };
}

// Robust image: tries candidates[0], then [1], ... Supports .jpeg/.jpg/.png/.webp
export function LoveImg({ photo, alt, ...rest }) {
  const list = photo.candidates || [photo.src, ...(photo.fallbacks || [])];
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setIdx(0);
    setFailed(false);
  }, [photo.id]);

  if (failed) return null;
  const cur = list[idx];
  if (!cur) return null;
  return (
    <img
      src={cur}
      alt={alt}
      onError={() => {
        if (idx + 1 < list.length) setIdx(idx + 1);
        else setFailed(true);
      }}
      {...rest}
    />
  );
}

export default function Hero({ onOpenGallery }) {
  const typed = useTypewriter();
  const t = useTogether();
  const heroPhoto = PHOTOS[1]; // second photo is gorgeous

  return (
    <div className="hero-grid">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <span className="eyebrow">💘 Our forever love story 💘</span>
        <h1>
          {LOVE_CONFIG.herName}
          <span className="amp">loves</span>
          {LOVE_CONFIG.hisName}
        </h1>
        <div className="typewriter">“{typed}<span style={{opacity:.6}}>▍</span>”</div>
        <p className="lead">{LOVE_CONFIG.heroTagline} This little corner of the internet belongs to us — to your smile, your eyes, your laughter, and every tiny moment that makes my heart skip a beat.</p>

        <div className="together">
          <div className="t-box"><b>{t.days}</b><span>Days</span></div>
          <div className="t-box"><b>{t.hours}</b><span>Hours</span></div>
          <div className="t-box"><b>{t.mins}</b><span>Mins</span></div>
          <div className="t-box"><b>{t.secs}</b><span>Secs</span></div>
          <div className="t-box t-box-gold"><b>∞</b><span>Love</span></div>
        </div>

        <div className="hero-cta">
          <a href="#gallery" className="btn-love">See Our Memories 📸</a>
          <a href="#letters" className="btn-ghost">Read My Heart 💌</a>
        </div>
      </motion.div>

      <motion.div
        className="photo-frame"
        initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="ring" aria-hidden="true" />
        <div className="float-chip chip-1">✨ My Sunshine</div>
        <div className="float-chip chip-2">💖 My Forever</div>
        <div className="main-photo">
          <LoveImg photo={heroPhoto} alt="Ankita" />
          <div className="photo-badge">
            <div className="badge-text">
              <div className="badge-title">Ankita ❤️ Nilajeet</div>
              <div className="badge-sub">Together, always &amp; forever</div>
            </div>
            <button className="btn-love btn-small" onClick={onOpenGallery}>{PHOTOS.length} Photos ❤️</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
