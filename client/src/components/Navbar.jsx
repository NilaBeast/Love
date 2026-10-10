import { useState } from 'react';
import { LOVE_CONFIG } from '../config.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <a href="#home" className="nav-logo">
        <span className="logo-heart">❤️</span>
        <span>{LOVE_CONFIG.herName} <span style={{color:'#ff8fa3'}}>❤</span> {LOVE_CONFIG.hisName}</span>
      </a>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#home" onClick={()=>setOpen(false)}>Home</a>
        <a href="#gallery" onClick={()=>setOpen(false)}>Gallery</a>
        <a href="#story" onClick={()=>setOpen(false)}>Story</a>
        <a href="#letters" onClick={()=>setOpen(false)}>Letters</a>
        <a href="#reasons" onClick={()=>setOpen(false)}>Why You</a>
        <a href="#surprise" onClick={()=>setOpen(false)} className="btn-love" style={{color:'white'}}>Surprise 💍</a>
      </div>
      <button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
    </nav>
  );
}
