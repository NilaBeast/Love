import { useEffect, useRef } from 'react';

// Floating hearts + sparkles canvas
export default function FloatingHearts() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, raf;
    const hearts = [];
    const emojis = ['❤️', '💖', '💕', '✨', '🌸', '💗'];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 42; i++) {
      hearts.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        s: 10 + Math.random() * 22,
        vy: 0.3 + Math.random() * 0.9,
        vx: (Math.random() - 0.5) * 0.5,
        o: 0.15 + Math.random() * 0.5,
        e: emojis[Math.floor(Math.random() * emojis.length)],
        ph: Math.random() * Math.PI * 2,
      });
    }

    function tick(t) {
      ctx.clearRect(0, 0, w, h);
      hearts.forEach((p) => {
        p.y -= p.vy;
        p.x += p.vx + Math.sin(t / 1500 + p.ph) * 0.3;
        if (p.y < -30) {
          p.y = h + 30;
          p.x = Math.random() * w;
        }
        ctx.globalAlpha = p.o;
        ctx.font = `${p.s}px serif`;
        ctx.fillText(p.e, p.x, p.y);
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="hearts-canvas" ref={ref} />;
}
