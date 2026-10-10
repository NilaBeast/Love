import { useRef, useState } from 'react';
import confetti from 'canvas-confetti';

export default function Proposal() {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);
  const [yes, setYes] = useState(false);
  const noBtnRef = useRef(null);

  const dodge = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const rangeX = isMobile ? 120 : 260;
    const rangeY = isMobile ? 70 : 120;
    const x = (Math.random() - 0.5) * rangeX;
    const y = (Math.random() - 0.5) * rangeY;
    setNoPos({ x, y });
    setNoCount((c) => c + 1);
  };

  const sayYes = () => {
    setYes(true);
    const end = Date.now() + 2500;
    (function frame() {
      confetti({ particleCount: 6, angle: 60, spread: 60, origin: { x: 0 }, colors: ['#ff4d6d','#ff8fa3','#ffcf5c','#fff'] });
      confetti({ particleCount: 6, angle: 120, spread: 60, origin: { x: 1 }, colors: ['#ff4d6d','#ff8fa3','#ffcf5c','#fff'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    setTimeout(() => {
      confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 }, colors: ['#ff4d6d','#ff8fa3','#ffe5a3','#fff'] });
    }, 400);
  };

  const noTexts = ["No 🙈", "Are you sure? 🥺", "Really? 😢", "Think again! 💭", "No escaping! 😂", "Too late! 💖"];

  return (
    <>
      <div className="proposal">
        <span className="eyebrow">💍 The big question</span>
        <h2>Ankita, will you stay mine forever?</h2>
        <p style={{color:'#d8a7b1', marginTop:10}}>No pressure… but my whole heart is waiting for your answer 🥺👉👈</p>
        <div className="btns">
          <button className="btn-love btn-yes" onClick={sayYes}>Yes! Forever ❤️</button>
          <button
            ref={noBtnRef}
            className="btn-no"
            onMouseEnter={dodge}
            onTouchStart={dodge}
            onClick={dodge}
            style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
          >
            {noTexts[Math.min(noCount, noTexts.length - 1)]}
          </button>
        </div>
        <div style={{marginTop:14, fontSize:13, color:'#ffb3c1'}}>* The “No” button is shy — it runs away, just like I would if you ever leave me 😜</div>
      </div>

      {yes && (
        <div className="success-modal" onClick={()=>setYes(false)}>
          <div className="success-card" onClick={(e)=>e.stopPropagation()}>
            <div style={{fontSize:50}}>💍❤️🥰</div>
            <h2>She said YESSS!</h2>
            <p style={{marginTop:10, lineHeight:1.7}}>Ankita loves Nilajeet — officially, forever, in front of the whole universe! I promise to love you louder every day, to annoy you a little, to pamper you a lot, and to never let go.</p>
            <div style={{marginTop:16, fontFamily:'Playfair Display', fontStyle:'italic'}}>— Locked in, sealed with love ♾️</div>
            <button className="btn-love" style={{marginTop:18}} onClick={()=>setYes(false)}>Keep Loving 💖</button>
          </div>
        </div>
      )}
    </>
  );
}
