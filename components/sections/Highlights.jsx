"use client";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { SITE_IMG } from "@/lib/menuData";

const CARDS = [
  { href: "/menu", img: SITE_IMG.platter, icon: "🍽️", title: "The Menu", desc: "80+ Indo-Chinese dishes — order with a live cart.", cta: "Browse & order" },
  { href: "/reservations", img: SITE_IMG.dining, icon: "🪑", title: "Reservations", desc: "Book a table for family dinners or a night out.", cta: "Book now" },
  { href: "/gallery", img: SITE_IMG.chef, icon: "📸", title: "Gallery", desc: "A taste of our food and dining room in pictures.", cta: "Take a look" },
  { href: "/about", img: SITE_IMG.spices, icon: "🌶️", title: "Our Story", desc: "Where smoky tandoor meets fiery wok cooking.", cta: "Read more" },
];

export default function Highlights() {
  return (
    <section className="ember-bg relative py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-chili-red">Explore</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">Everything, one tap away</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.08}>
              <TiltCard className="h-full rounded-2xl" max={6}>
                <Link
                  href={c.href}
                  className="card group flex h-full flex-col overflow-hidden rounded-2xl transition hover:shadow-soft"
                >
                  <div className="relative h-36 overflow-hidden bg-cream-200">
                    <img
                      src={c.img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <span className="absolute bottom-2 left-3 text-3xl drop-shadow">{c.icon}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-2xl text-ink">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink-soft">{c.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-chili-red transition group-hover:gap-3">
                      {c.cta} <span>→</span>
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
