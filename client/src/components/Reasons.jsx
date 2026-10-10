import { motion } from 'framer-motion';
import { REASONS } from '../config.js';

export default function Reasons() {
  return (
    <>
      <span className="eyebrow">🥺 Why I love you</span>
      <h2 className="h2">8 little reasons, <span className="script">infinite love</span></h2>
      <p className="lead">If you ask me why I love you, I will need a lifetime to answer. Here are just 8 to start with…</p>
      <div className="r-grid">
        {REASONS.map((r, i) => (
          <motion.div key={i} className="r-card" initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:(i%4)*0.08}}>
            <div className="em">{r.emoji}</div>
            <h4>{r.title}</h4>
            <p>{r.text}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
