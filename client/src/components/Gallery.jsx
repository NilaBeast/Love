import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHOTOS } from '../config.js';
import { LoveImg } from './Hero.jsx';

function SmartPhoto({ photo, onClick }) {
  const list = photo.candidates || [];
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setIdx(0);
    setFailed(false);
  }, [photo.id]);

  return (
    <div className="g-card" onClick={onClick}>
      {!failed && list[idx] ? (
        <img
          src={list[idx]}
          alt={photo.caption}
          loading="lazy"
          decoding="async"
          onError={() => {
            if (idx + 1 < list.length) setIdx(idx + 1);
            else setFailed(true);
          }}
        />
      ) : (
        <div className="g-placeholder">
          <div>
            <div className="big">A ❤️ N</div>
            <div className="ph-sub">Missing: photos/photo-{String(photo.id).padStart(2,'0')}.jpeg</div>
          </div>
        </div>
      )}
      <div className="g-overlay">
        <span className="g-tag">{photo.tag}</span>
        <div className="g-cap">{photo.caption}</div>
      </div>
    </div>
  );
}

function LightImg({ photo }) {
  const list = photo.candidates || [];
  const [idx, setIdx] = useState(0);
  useEffect(() => setIdx(0), [photo.id]);
  return (
    <img
      src={list[idx]}
      alt={photo.caption}
      onError={() => { if (idx + 1 < list.length) setIdx(idx + 1); }}
    />
  );
}

export default function Gallery({ lightbox, setLightbox }) {
  const [filter, setFilter] = useState('All');
  const tags = ['All', 'Festival Glow', 'City of Joy', 'Togetherness', 'Date Night', 'Candid'];
  const filtered = filter === 'All' ? PHOTOS : PHOTOS.filter(p => p.tag === filter || p.caption.toLowerCase().includes(filter.toLowerCase()));
  const list = filtered.length ? filtered : PHOTOS;

  // lightbox index is relative to `list`; store photo id instead of index for safety
  const activePhoto = lightbox !== null ? list[lightbox] : null;
  const go = (dir) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + list.length) % list.length);
  };

  return (
    <>
      <span className="eyebrow">📸 Our beautiful memories</span>
      <h2 className="h2">Every photo <span className="script">holds my heartbeat</span></h2>
      <p className="lead">From festival lights to Howrah sunsets to cosy movie dates — wherever you are, that place becomes my favourite. Tap any photo to feel it fullscreen. ({PHOTOS.length} memories 💖)</p>

      <div className="filter-row" role="tablist" aria-label="Filter photos">
        {tags.map(t => (
          <button key={t} className={filter === t ? 'on' : ''} onClick={() => { setFilter(t); setLightbox(null); }}>{t}</button>
        ))}
      </div>

      <div className="g-grid">
        {list.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}>
            <SmartPhoto photo={p} onClick={() => setLightbox(i)} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activePhoto && (
          <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setLightbox(null)}>
            <button className="lb-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
            <button className="lb-btn lb-prev" onClick={(e)=>{e.stopPropagation(); go(-1);}} aria-label="Previous">‹</button>
            <div className="lb-inner" onClick={(e)=>e.stopPropagation()}>
              <LightImg photo={activePhoto} />
              <div className="cap">❤️ {activePhoto.caption} ❤️</div>
              <div className="lb-count">{(lightbox+1)} / {list.length}</div>
            </div>
            <button className="lb-btn lb-next" onClick={(e)=>{e.stopPropagation(); go(1);}} aria-label="Next">›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
