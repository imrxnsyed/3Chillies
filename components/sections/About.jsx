"use client";
import Reveal from "@/components/motion/Reveal";
import { SITE_IMG } from "@/lib/menuData";

export default function About() {
  return (
    <section id="about" className="ember-bg relative scroll-mt-20 bg-cream-200 pb-24 pt-32">
      <div className="mx-auto grid w-[92%] max-w-6xl items-center gap-14 md:grid-cols-2">
        <Reveal dir="left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-chili-red">Our Story</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Where <span className="text-gradient italic">spice</span> meets comfort.
          </h2>
          <p className="mt-5 text-ink-soft">
            3 Chillies brings together the smoky char of the tandoor and the fiery, wok-tossed magic of Indo-Chinese
            cooking. Every plate is built for sharing — with family, with friends, over good music.
          </p>
          <p className="mt-4 text-ink-soft">
            Our cozy, contemporary dining room lets you slow down and savour every bite in the heart of Banjara Hills.
          </p>
          <div className="mt-8 flex flex-wrap gap-10">
            {[
              ["4.6★", "Google Rating"],
              ["Fresh", "Made to order"],
              ["Cozy", "Family friendly"],
            ].map(([b, s]) => (
              <div key={s}>
                <div className="font-display text-3xl text-gold">{b}</div>
                <div className="text-sm text-ink-soft">{s}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal dir="right" delay={0.1}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl border border-gold/30" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
              <img src={SITE_IMG.dining} alt="Our dining room" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 to-transparent px-4 pb-4 pt-14 text-center text-[11px] uppercase tracking-[0.25em] text-cream-200">
                Indo-Chinese · Banjara Hills
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
