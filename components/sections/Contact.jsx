"use client";
import Reveal from "@/components/motion/Reveal";
import { RESTAURANT } from "@/lib/menuData";

const CARDS = [
  { ic: "📍", title: "Address", body: RESTAURANT.address },
  { ic: "📞", title: "Phone", body: RESTAURANT.phone, href: "tel:+917013892089" },
  { ic: "💬", title: "WhatsApp", body: "Message us to book or order", href: "https://wa.me/917013892089" },
  { ic: "🕐", title: "Hours", body: RESTAURANT.hours },
];

export default function Contact() {
  return (
    <section id="contact" className="ember-bg relative scroll-mt-20 bg-cream-200 pb-24 pt-32">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-chili-red">Find us</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">Visit 3 Chillies</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal dir="left">
            <div className="grid gap-4">
              {CARDS.map((c) => (
                <div key={c.title} className="card flex items-start gap-4 rounded-2xl p-5">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-chili-red text-xl text-white">{c.ic}</span>
                  <div>
                    <b className="block text-ink">{c.title}</b>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-soft hover:text-chili-red">{c.body}</a>
                    ) : (
                      <span className="text-sm text-ink-soft">{c.body}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal dir="right" delay={0.1}>
            <div className="h-full min-h-[360px] overflow-hidden rounded-2xl border border-cream-300 shadow-card">
              <iframe
                title="3 Chillies location"
                src="https://www.google.com/maps?q=3+Chillies+Banjara+Hills+Hyderabad&output=embed"
                className="h-full min-h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
