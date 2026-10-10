import { useEffect, useState } from 'react';
import FloatingHearts from './components/FloatingHearts.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import Story from './components/Story.jsx';
import Letters from './components/Letters.jsx';
import Reasons from './components/Reasons.jsx';
import Proposal from './components/Proposal.jsx';
import Promises from './components/Promises.jsx';
import { LOVE_CONFIG } from './config.js';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [audioEl, setAudioEl] = useState(null);

  useReveal();

  useEffect(() => {
    // re-observe after enter
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('in');
      });
    }, 500);
    return () => clearTimeout(t);
  }, [entered]);

  const toggleMusic = () => {
    try {
      if (!audioEl) {
        const a = new Audio('/music/love.mp3');
        a.loop = true;
        a.volume = 0.6;
        setAudioEl(a);
        a.play().then(()=>setPlaying(true)).catch(()=>{
          alert('Add a romantic song as public/music/love.mp3 and press play again 💖');
        });
      } else {
        if (playing) { audioEl.pause(); setPlaying(false); }
        else { audioEl.play(); setPlaying(true); }
      }
    } catch {
      alert('Add public/music/love.mp3 to enable music 🎶');
    }
  };

  return (
    <>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <FloatingHearts />

      {/* 💌 Entry gate */}
      <div className={`gate ${entered ? 'hidden' : ''}`}>
        <div className="gate-card">
          <div className="envelope" onClick={() => setEntered(true)}>💌</div>
          <h1>For My Ankita</h1>
          <p>A small world I built with all my love, just for you.<br/>21 memories, 3 letters, 1 question…</p>
          <button className="btn-love" style={{marginTop:18, fontSize:16, padding:'14px 32px'}} onClick={() => setEntered(true)}>
            Open With Love ❤️
          </button>
          <div style={{marginTop:12, fontSize:12, color:'#d8a7b1'}}>— with all my heart, Nilajeet</div>
        </div>
      </div>

      <Navbar />

      <div className="wrap">
        <section id="home" className="hero">
          <Hero onOpenGallery={() => document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'})} />
        </section>

        <div className="marquee">
          <div className="marquee-track">
            {Array(2).fill(`Ankita ❤️ Nilajeet • Tu Hi Meri Jaan • Forever & Always • My Sunshine • My Home • I Love You • `).map((t,i)=><span key={i}>{t}</span>)}
          </div>
        </div>

        <section id="gallery" className="reveal">
          <Gallery lightbox={lightbox} setLightbox={setLightbox} />
        </section>

        <section id="story" className="reveal">
          <Story />
        </section>

        <section id="letters" className="reveal">
          <Letters />
        </section>

        <section id="reasons" className="reveal">
          <Reasons />
        </section>

        <section id="surprise" className="reveal">
          <Proposal />
        </section>

        <section id="promises" className="reveal">
          <Promises />
        </section>
      </div>

      <footer>
        <div className="big-love">Ankita ❤️ Nilajeet</div>
        <div style={{marginTop:6}}>Made with endless love, late nights & a beating heart 💓</div>
        <div style={{marginTop:6, fontSize:12}}>Every pixel says “I love you”. Every line of code whispers your name.</div>
        <div style={{marginTop:14}}>
          <a href="#home" className="btn-ghost">Back to top ↑</a>
        </div>
      </footer>

      <button className="fab-music" onClick={toggleMusic} title="Play our song">
        {playing ? '⏸️' : '🎶'}
      </button>
    </>
  );
}
