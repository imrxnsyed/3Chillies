"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Store } from "@/lib/store";
import { RESTAURANT } from "@/lib/menuData";

const empty = { name: "", phone: "", date: "", time: "", guests: "3", occasion: "", notes: "" };

export default function Reservation() {
  const [form, setForm] = useState(empty);
  const [msg, setMsg] = useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const today = new Date().toISOString().split("T")[0];

  const waLink = () => {
    let m = "Hi 3 Chillies! I'd like to reserve a table.%0A";
    if (form.name) m += `Name: ${form.name}%0A`;
    m += `Guests: ${form.guests}%0A`;
    if (form.date) m += `Date: ${form.date}%0A`;
    if (form.time) m += `Time: ${form.time}%0A`;
    if (form.occasion) m += `Occasion: ${form.occasion}%0A`;
    return `https://wa.me/${RESTAURANT.whatsapp}?text=${m}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await Store.addReservation(form);
      setMsg(`✔ Thanks, ${form.name || "there"}! Your table request is in — we'll confirm shortly.`);
      setForm(empty);
    } catch {
      setMsg("Saved. You can also confirm instantly on WhatsApp below.");
    }
  };

  const field =
    "w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-chili-red";

  return (
    <section id="reserve" className="ember-bg relative scroll-mt-20 pb-24 pt-32">
      <div className="mx-auto w-[92%] max-w-6xl">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl shadow-soft md:grid-cols-2">
            <div className="ember-bg bg-espresso p-9 text-cream-200 md:p-11">
              <h3 className="font-display text-3xl font-bold text-cream-50">
                Reserve your <span className="italic text-gold-soft">table</span>
              </h3>
              <p className="mt-3 text-cream-200/80">
                Planning a family dinner or a night out? Book ahead — seating is limited and fills fast.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex gap-3"><span className="text-gold-soft">📍</span>{RESTAURANT.address}</li>
                <li className="flex gap-3"><span className="text-gold-soft">📞</span>{RESTAURANT.phone}</li>
                <li className="flex gap-3"><span className="text-gold-soft">🕐</span>{RESTAURANT.hours}</li>
                <li className="flex gap-3"><span className="text-gold-soft">💬</span>Instant booking on WhatsApp</li>
              </ul>
            </div>

            <form onSubmit={submit} className="bg-cream-50 p-9 md:p-11">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-semibold text-ink-soft">Full name</label>
                  <input required value={form.name} onChange={set("name")} className={field} placeholder="Your name" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-semibold text-ink-soft">Phone</label>
                  <input required value={form.phone} onChange={set("phone")} className={field} placeholder="10-digit mobile" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-ink-soft">Date</label>
                  <input required type="date" min={today} value={form.date} onChange={set("date")} className={field} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-ink-soft">Time</label>
                  <input required type="time" value={form.time} onChange={set("time")} className={field} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-ink-soft">Guests</label>
                  <select value={form.guests} onChange={set("guests")} className={field}>
                    {["1", "2", "3", "4", "5", "6", "7", "8+"].map((g) => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-ink-soft">Occasion</label>
                  <input value={form.occasion} onChange={set("occasion")} className={field} placeholder="Optional" />
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-5 w-full rounded-full bg-chili-red py-3.5 font-semibold text-white shadow-glow transition hover:bg-chili-reddk"
              >
                Request Reservation
              </motion.button>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-full bg-chili-green py-3 text-center font-semibold text-white transition hover:brightness-110"
              >
                Book instantly on WhatsApp
              </a>
              {msg && <p className="mt-4 text-center text-sm font-medium text-chili-green">{msg}</p>}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
