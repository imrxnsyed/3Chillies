"use client";

const WORDS = [
  "Butter Chicken", "Paneer Tikka", "Schezwan Noodles", "Chilli Paneer",
  "Chicken 65", "Hakka Noodles", "Manchurian", "Golden Prawns",
  "Tandoori Kebab", "Fried Rice", "Honey Chilli Potato", "Lollipop",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="border-y border-cream-300 bg-cream-200 py-4">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 font-display text-xl italic text-ink-soft">
            {w}
            <span className="text-chili-red">🌶️</span>
          </span>
        ))}
      </div>
    </div>
  );
}
