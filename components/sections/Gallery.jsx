"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { CATEGORY_IMGS, SITE_IMG } from "@/lib/menuData";

const TILES = [
  { icon: "🍢", label: "Tandoori Platter", span: "row-span-2", img: CATEGORY_IMGS["Tandoori Starters"][0] },
  { icon: "🍗", label: "Butter Chicken", img: CATEGORY_IMGS["Non Veg Main Course"][0] },
  { icon: "🍜", label: "Wok Noodles", img: CATEGORY_IMGS["Noodles"][0] },
  { icon: "🪑", label: "Our Dining Room", img: SITE_IMG.dining },
  { icon: "🌶️", label: "Fresh Spices", img: SITE_IMG.spices },
  { icon: "🍤", label: "From the Kitchen", span: "row-span-2", img: SITE_IMG.chef },
  { icon: "🥘", label: "House Curries", img: CATEGORY_IMGS["Veg Main Course"][0] },
];

function Tile({ t }) {
  const [err, setErr] = useState(false);
  return (
    <motion.figure
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative grid place-items-center overflow-hidden rounded-2xl border border-cream-300 bg-cream-200 shadow-card ${t.span || ""}`}
    >
      {!err ? (
        <img
          src={t.img}
          alt={t.label}
          loading="lazy"
          onError={() => setErr(true)}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <span className="text-5xl opacity-40">{t.icon}</span>
      )}
      <figcaption className="absolute bottom-0 left-0 right-0 translate-y-full bg-espresso/70 px-3 py-2 text-center text-xs text-cream-50 backdrop-blur-sm transition group-hover:translate-y-0">
        {t.label}
      </figcaption>
    </motion.figure>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="ember-bg relative pb-24 pt-32">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-chili-red">A taste in pictures</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">Gallery</h2>
        </div>
        <Reveal dir="scale">
          <div className="grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[180px] md:grid-cols-4">
            {TILES.map((t, i) => (
              <Tile key={i} t={t} />
            ))}
          </div>
        </Reveal>
        <p className="mt-6 text-center text-xs text-ink-faint">
          Want your own photos here? Drop them into <code className="rounded bg-cream-200 px-1.5 py-0.5">/public</code> and
          point the tiles at them.
        </p>
      </div>
    </section>
  );
}
