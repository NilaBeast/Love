import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOVE_LETTERS } from '../config.js';

export default function Letters() {
  const [idx, setIdx] = useState(0);
  const letter = LOVE_LETTERS[idx];
  return (
    <>
      <span className="eyebrow">💌 Letters from my heart</span>
      <h2 className="h2">Words I <span className="script">never said aloud</span></h2>
      <p className="lead">I may tease you, I may annoy you, but inside, this is what I always feel. Read slowly, my love — every word is true.</p>
      <div className="letter-tabs">
        {LOVE_LETTERS.map((l, i) => (
          <button key={i} className={i===idx?'on':''} onClick={()=>setIdx(i)}>{l.title.split(' ').slice(0,3).join(' ')}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} className="letter-paper" initial={{opacity:0, y:20, rotate:-0.5}} animate={{opacity:1, y:0, rotate:0}} exit={{opacity:0, y:-12}} transition={{duration:0.4}}>
          <div style={{fontSize:12, letterSpacing:2, textTransform:'uppercase', opacity:.6}}>{letter.date} • sealed with a kiss 😘</div>
          <h3>{letter.title}</h3>
          <pre>{letter.body}</pre>
          <div style={{marginTop:18, display:'flex', gap:8, flexWrap:'wrap'}}>
            <span style={{background:'#ff4d6d', color:'white', padding:'6px 12px', borderRadius:99, fontSize:12}}>❤️ Forever Yours</span>
            <span style={{background:'#1e0714', color:'#ffe5a3', padding:'6px 12px', borderRadius:99, fontSize:12}}>💍 Nilajeet → Ankita</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
