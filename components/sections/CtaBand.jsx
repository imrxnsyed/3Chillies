"use client";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { RESTAURANT } from "@/lib/menuData";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(135deg, #992d1c 0%, #b93b28 55%, #8a2717 100%)" }}>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-[120px]" />
      <div className="grain pointer-events-none absolute inset-0" />
      <Reveal className="relative mx-auto w-[92%] max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold text-cream-50 sm:text-6xl">
          Hungry yet? <span className="italic text-gold-soft">Let&rsquo;s eat.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-cream-200/80">
          Order in a few taps or reserve your table — open daily till 12:30 AM in Banjara Hills.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/menu"
            className="rounded-full bg-cream-50 px-9 py-4 font-semibold text-chili-reddk shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
          >
            Order from the Menu
          </Link>
          <a
            href={`https://wa.me/${RESTAURANT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream-50/30 bg-cream-50/10 px-9 py-4 font-semibold text-cream-50 backdrop-blur-sm transition hover:border-gold-soft hover:bg-cream-50/20"
          >
            Message on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
