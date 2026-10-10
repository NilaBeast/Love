// 💖 Central love config — edit me!
export const LOVE_CONFIG = {
  herName: "Ankita",
  hisName: "Nilajeet",
  // Change to your real anniversary / first-meet date
  togetherSince: "2024-02-14T00:00:00",
  heroTagline: "Every love story is beautiful, but ours is my favourite.",
  whatsappNumber: "", // optional
};

// Base respects vite.config `base` ('./' for portable builds, '/' for dev).
// Using BASE_URL makes photos work in dev, preview, and file:// builds.
const B = import.meta.env.BASE_URL || "./";
const url = (p) => `${B}${p.replace(/^\/+/, "")}`;

const CAPTIONS = [
  "My sunshine in black — you make festivals brighter ✨",
  "That smile that stops my world 💫",
  "Elegance, grace, and pure magic 🖤",
  "Caught in the wind, stolen by my heart 💕",
  "Fixing your hair, fixing my heart too 🥺",
  "Kolkata yellows fade before your glow 🌆",
  "Howrah Bridge stood still to admire you 🌉",
  "My queen in the city of joy 👑",
  "That side-look I dream about every night 🌙",
  "Hand in hand, heart in heart 🤎",
  "Forever my favourite view ❤️",
  "Side by side, this is where I belong 🫶",
  "Matching hearts, matching black 🖤",
  "Your happiness is my home 🏠",
  "A kiss on the cheek, a lifetime in my heart 😘",
  "Howrah diaries with my love 📸",
  "Us against the world, always 💪❤️",
  "Movie date cuddles — my safest place 🍿",
  "You + Me = Forever ♾️",
  "Ankita ❤️ Nilajeet — written in the stars ✨",
  "My cutest habit — loving you more daily 💖",
];

const TAGS = ["Festival Glow", "Candid", "Elegant", "Breezy", "Cute", "City of Joy", "Howrah Love", "Queen", "Dreamy", "Togetherness", "Favourite", "Belonging", "Twinning", "Home", "Kiss of Love", "Diaries", "Us", "Date Night", "Forever", "Destiny", "Sweetheart"];

// IMPORTANT: your files are .jpeg — so .jpeg is tried FIRST.
// Fallbacks cover .jpg / .JPG / .JPEG / .png / .webp in case you rename later.
function buildPhoto(i) {
  const n = String(i + 1).padStart(2, "0");
  const base = `photos/photo-${n}`;
  return {
    id: i + 1,
    candidates: [
      url(`${base}.jpeg`),
      url(`${base}.jpg`),
      url(`${base}.JPG`),
      url(`${base}.JPEG`),
      url(`${base}.png`),
      url(`${base}.webp`),
    ],
    caption: CAPTIONS[i] || `Us, forever ❤️ (${n})`,
    tag: TAGS[i] || "Us",
  };
}

// 21 photos (you have photo-01 … photo-21)
export const PHOTOS = Array.from({ length: 21 }, (_, i) => buildPhoto(i));

export const LOVE_LETTERS = [
  {
    title: "To My Dearest Ankita 💌",
    date: "From the bottom of my heart",
    body: `My dearest Ankita,

I don't know when it happened — when your smile became my sunrise and your voice became my favourite song. But I know this: before you, I was just existing. After you, I started living.

When I look at your photos, I don't just see beauty — I see home. I see the girl in black who turned an ordinary decorated park into a festival, who turned a Howrah Bridge backdrop into a romantic film, who turned a simple selfie into my most treasured memory.

You are my peace in chaos, my laughter in silence, my courage in fear. If I had one wish, I would wish to relive every moment with you — again and again, forever.

Yours, only yours,
Nilajeet ❤️`,
  },
  {
    title: "Why You Are My Miracle 🌙",
    date: "A confession",
    body: `Ankita,

People search the whole world for a miracle. I just look at you.

The way you hold your bag, the way you tilt your head, the way your long black hair dances in the wind, the way your jhumkas shine when you smile — everything about you feels like poetry God wrote just for me.

I get jealous of the wind that touches your hair, of the camera that gets to stare at you, of the time that steals you away from me. I want every second with you. I want lazy mornings, crazy nights, long walks, silent cuddles — a whole lifetime of us.

You are not my girlfriend. You are my prayer answered.

Forever obsessed,
Nilajeet 💖`,
  },
  {
    title: "My Promise To You 🤞",
    date: "Till my last breath",
    body: `My love,

I promise you — not just in good days, but in the hard days too.

I promise to hold your hand when you cry, to make you laugh when you are angry, to stand beside you when the world is against you, to choose you every single day, even on days you find it hard to choose yourself.

I don't want a perfect love story. I want a true one — with fights, tears, hugs, late-night sorry messages, and morning smiles. I want YOU, with all your mood swings, your cute anger, your emotional heart — because that is the Ankita I fell for.

One day, when we are old, sitting together, I want to say — "See? I told you. It was always you."

I love you, Ankita. More than yesterday, less than tomorrow.

Your Nilajeet 💍`,
  },
];

export const REASONS = [
  { emoji: "😍", title: "Your Smile", text: "One smile from you and my worst day turns into my best memory." },
  { emoji: "👀", title: "Your Eyes", text: "Deep, honest, emotional — I get lost in them and I never want to be found." },
  { emoji: "💇‍♀️", title: "Your Hair", text: "Long, black, flowing in the wind — like a dream I can touch." },
  { emoji: "🖤", title: "Your Style", text: "That black kurti, red palazzo, brown bag — you make simplicity look royal." },
  { emoji: "😘", title: "Your Care", text: "The way you lean on me, hold me close — I feel like the luckiest man alive." },
  { emoji: "🌙", title: "Your Heart", text: "Soft, emotional, pure. You love deeply, and being loved by you is my blessing." },
  { emoji: "😂", title: "Your Laughter", text: "Your laugh is my favourite sound in this entire universe." },
  { emoji: "🤞", title: "Your Trust", text: "You chose me. Out of billions, you chose me — I will spend my life deserving it." },
];

export const TIMELINE = [
  { date: "The First Sight 👀", title: "You Stole My Eyes", text: "I saw you and the world went quiet. Everything else blurred — only you were in focus. I knew my heart was no longer mine." },
  { date: "First Talk 💬", title: "Your Voice Became Home", text: "Nervous hello, endless talks, late-night chats. I started waiting for your messages more than food, sleep, anything." },
  { date: "First Outing 🌸", title: "Festival of Us", text: "Decorated park, pink drapes, marigold strings — but my eyes saw only one decoration: you, in black, smiling like my dream." },
  { date: "Kolkata Diaries 🌉", title: "Howrah Bridge Witness", text: "Yellow taxi, giant bridge, golden sunset — a filmy backdrop, yet you outshone it all. My heroine, my story." },
  { date: " cosy Dates 🍿", title: "Cheek Kisses & Cuddles", text: "Your head on my shoulder, my kiss on your cheek. The theatre lights dimmed, but our love glowed brighter." },
  { date: "Today ♾️", title: "Forever Loading...", text: "This website is my small gift. My big gift will be a lifetime — standing beside you in every photo, every storm, every smile." },
];
