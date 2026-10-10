import { LOVE_CONFIG } from '../config.js';

const PROMISES = [
  ["🤗", "I will hug you tighter on your bad days and never let you cry alone."],
  ["📞", "Late-night calls, good-morning texts — you will never feel unloved."],
  ["🍲", "I will share my food, my hoodie, my time — everything is ours."],
  ["😤", "Even when we fight, I will be the first to say sorry and hold you."],
  ["🌧️", "In storms or sunshine, I will stand beside you, not in front, not behind."],
  ["👵👴", "One day, old and grey, still holding hands — that's my dream."],
];

export default function Promises() {
  return (
    <>
      <span className="eyebrow">🤞 My vows to you</span>
      <h2 className="h2">6 promises, <span className="script">one lifetime</span></h2>
      <div className="p-grid">
        {PROMISES.map(([e, t], i) => (
          <div key={i} className="p-card">
            <div className="p-num">{i+1}</div>
            <div><div style={{fontSize:22}}>{e}</div><div style={{marginTop:6, lineHeight:1.6, color:'#ffd6dd', fontSize:14}}>{t}</div></div>
          </div>
        ))}
      </div>
      <div style={{marginTop:26, textAlign:'center'}}>
        <div className="script" style={{fontSize:38, color:'#ff8fa3'}}>“Tum meri ho, main tera hoon…”</div>
        <div style={{color:'#d8a7b1', fontSize:14, marginTop:6}}>— and in every universe, I would find you and choose you again, {LOVE_CONFIG.herName} ❤️</div>
      </div>
    </>
  );
}
