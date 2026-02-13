import { Milestone, Reason } from "./types";

/*
  IMPORTANT:
  This ensures images work both locally and after deployment
  (Vercel / Netlify / GitHub Pages)
*/
const base = import.meta.env.BASE_URL || "/";

/* -------------------- LOVE JOURNEY TIMELINE -------------------- */

export const MILESTONES: Milestone[] = [
  {
    date: "August 9, 2021",
    title: "Where It All Began",
    description:
      'A simple WhatsApp chat asking for math notes turned into the start of something beautiful. "It only takes one hello to start a lifetime of happiness."',
    icon: "📱",
  },
  {
    date: "April 3, 2023",
    title: "Last Day of School",
    description:
      'Walking the school corridors one last time together, marking the end of a beautiful chapter.',
    icon: "🏫",
  },
  {
    date: "April 2023",
    title: "Typewriting Class Meets",
    description:
      "Our regular meetups at typewriting class after school. Every click of the keys felt like a heartbeat.",
    icon: "⌨️",
  },
  {
    date: "June 13, 2023",
    title: "The Distance Test",
    description:
      "Moving to long distance as you went away for NEET coaching. Communication was hard, but our love stood strong.",
    icon: "📡",
  },
  {
    date: "May 4, 2024",
    title: "Welcome Back",
    description:
      "The long wait finally ended when you returned from coaching. My world felt whole again.",
    icon: "✨",
  },
  {
    date: "June 15, 2024",
    title: "Reunited After a Year",
    description:
      "Our first meeting after a whole year apart. No words could describe the joy.",
    icon: "❤️",
  },
  {
    date: "June 2024",
    title: "Supporting Your Dreams",
    description:
      "Heading into NEET repeater year 2. We faced storms, but stayed together.",
    icon: "📖",
  },
  {
    date: "May 4, 2025",
    title: "The Journey Continues",
    description: "You completed NEET, and I couldn’t be more proud of you.",
    icon: "🎓",
  },
  {
    date: "May 16, 2025",
    title: "Victory Over the Storms",
    description: "A meetup after many struggles. We proved nothing can break us.",
    icon: "🌈",
  },
  {
    date: "May 28, 2025",
    title: "A New Rhythm",
    description: "A quiet moment where words were no longer needed.",
    icon: "✨",
  },
  {
    date: "June 18, 2025",
    title: "The Road to Us",
    description:
      "Our bus journey from Trichy to Chennai — realizing how much we mean to each other.",
    icon: "🚌",
  },
  {
    date: "July 12, 2025",
    title: "Your Selfless Heart",
    description:
      "Our midnight journey to Erode for my TNPSC exam. You protected me and sacrificed your sleep.",
    icon: "🌙",
  },
  {
    date: "July - Nov 2025",
    title: "A Season of Us",
    description:
      "Months filled with precious meetups, bike rides, and simple moments.",
    icon: "🏍️",
  },
  {
    date: "December 28, 2025",
    title: "Ending the Year with Love",
    description: "Our final meetup of the year — ending with more love than ever.",
    icon: "🎆",
  },
  {
    date: "Present - 2026",
    title: "Five Years Strong",
    description: "Entering our 5th Valentine’s Day together.",
    icon: "♾️",
  },
];

/* -------------------- MEMORY GALLERY -------------------- */

export const MEMORIES = [
  { url: `${base}images/child.jpeg`, caption: "Childhood us ❤️" },
  { url: `${base}images/first.jpeg`, caption: "Typewriting class ✨" },
  { url: `${base}images/anime3.jpeg`, caption: "Waiting for you 💕" },
  { url: `${base}images/bus.jpeg`, caption: "Together again 😍" },
  { url: `${base}images/hand.jpeg`, caption: "Our dreams 💭" },
  { url: `${base}images/anime2.jpeg`, caption: "Lovely us 💕" },
  { url: `${base}images/us1.jpeg`, caption: "The pretty us ❤️" },
  { url: `${base}images/rose.jpeg`, caption: "Flower Bloom 💖" },
  { url: `${base}images/fav.jpeg`, caption: "Our journey continues 🚀" },
  { url: `${base}images/hand1.jpeg`, caption: "Hands together 💕" },
  { url: `${base}images/anime1.jpeg`, caption: "Sky and us 😚" },
  { url: `${base}images/last.jpeg`, caption: "Every moment with you is a treasure 🥰" },
];

/* -------------------- WHY I LOVE YOU -------------------- */

export const REASONS: Reason[] = [
  {
    title: "Your Infinite Love",
    text: "After five years, your love still feels like a warm embrace.",
  },
  {
    title: "Gentle Care",
    text: "The way you protect and care for me shows the depth of your heart.",
  },
  {
    title: "Unwavering Support",
    text: "Through every exam, struggle, and distance, you were always there.",
  },
  {
    title: "Choosing 'Us'",
    text: "No matter the fights, we always choose each other.",
  },
  {
    title: "Your Resilience",
    text: "You never gave up on your dreams or on us.",
  },
  {
    title: "Our Shared Growth",
    text: "From school corridors to lifelong partners.",
  },
];
