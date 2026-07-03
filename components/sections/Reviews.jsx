"use client";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { REVIEWS, RESTAURANT } from "@/lib/menuData";

export default function Reviews() {
  return (
    <section id="reviews" className="ember-bg relative scroll-mt-20 bg-cream-200 pb-24 pt-32">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-chili-red">Loved by guests</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">What people say</h2>
          <p className="mt-3 text-ink-soft">
            Rated {RESTAURANT.rating}★ across {RESTAURANT.reviewCount} Google reviews.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <TiltCard className="h-full rounded-2xl" max={5}>
                <div className="card h-full rounded-2xl p-7">
                  <div className="mb-3 tracking-[2px] text-gold">{"★".repeat(r.stars)}</div>
                  <p className="italic text-ink">&ldquo;{r.text}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-chili-red font-display font-bold text-white">
                      {r.author.charAt(0)}
                    </span>
                    <div>
                      <b className="block text-sm text-ink">{r.author}</b>
                      <small className="text-ink-faint">via Google</small>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
