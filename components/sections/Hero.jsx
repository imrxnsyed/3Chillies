"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { RESTAURANT, SITE_IMG } from "@/lib/menuData";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-espresso">
      {/* warm photo backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${SITE_IMG.hero})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(36,26,16,0.82) 0%, rgba(36,26,16,0.62) 45%, rgba(36,26,16,0.88) 100%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 grain" aria-hidden />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-[92%] max-w-4xl pt-24 pb-16 text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold-soft/30 bg-espresso/50 px-4 py-1.5 text-sm text-cream-200 backdrop-blur-sm"
        >
          <span className="tracking-[0.25em] text-gold-soft">★★★★★</span>
          <span className="opacity-90">
            {RESTAURANT.rating} · {RESTAURANT.reviewCount} Google reviews
          </span>
        </motion.div>

        <motion.p variants={item} className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold-soft">
          Indo-Chinese · Banjara Hills
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] text-cream-50 sm:text-7xl md:text-8xl"
        >
          A warm table,
          <br />
          <span className="italic text-gold-soft">bold flavours.</span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-7 max-w-xl text-base text-cream-200/90 sm:text-lg">
          Smoky tandoor classics and fiery wok-tossed Indo-Chinese, served in a cozy dining room in the heart of
          Banjara Hills, Hyderabad.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/menu"
            className="rounded-full bg-chili-red px-9 py-4 font-semibold text-white shadow-glow-lg transition hover:-translate-y-0.5 hover:bg-chili-reddk"
          >
            Explore the Menu
          </Link>
          <Link
            href="/reservations"
            className="rounded-full border border-cream-50/40 bg-cream-50/10 px-9 py-4 font-semibold text-cream-50 backdrop-blur-sm transition hover:border-gold-soft hover:bg-cream-50/20"
          >
            Book a Table
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {[
            ["₹200–400", "PER PERSON"],
            ["80+", "SIGNATURE DISHES"],
            ["12:30 AM", "OPEN LATE"],
          ].map(([b, s]) => (
            <div key={s} className="text-center">
              <div className="font-display text-3xl text-cream-50">{b}</div>
              <div className="text-[11px] tracking-[0.2em] text-cream-200/60">{s}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-cream-200/50"
        animate={{ y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
