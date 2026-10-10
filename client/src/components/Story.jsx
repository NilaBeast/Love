import { motion } from 'framer-motion';
import { TIMELINE } from '../config.js';

export default function Story() {
  return (
    <>
      <span className="eyebrow">💫 How we fell in love</span>
      <h2 className="h2">Our story, <span className="script">written in stars</span></h2>
      <p className="lead">Not every love story is perfect, but ours is true. Every chapter with you feels like my favourite fairytale — and I never want it to end.</p>
      <div className="timeline">
        {TIMELINE.map((t, i) => (
          <motion.div key={i} className="t-item" initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:0.05*i}}>
            <div className="t-date">{t.date}</div>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
