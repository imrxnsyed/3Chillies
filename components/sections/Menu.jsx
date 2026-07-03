"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store } from "@/lib/store";
import { CATEGORY_ORDER, CATEGORY_ICON, SEED_MENU, dishImage } from "@/lib/menuData";
import { useCart } from "@/lib/cartStore";
import { useToast } from "@/lib/toastStore";

const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");

function orderCats(cats) {
  return [...cats].sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a), ib = CATEGORY_ORDER.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
}
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function VegBadge({ type }) {
  const c = type === "veg" ? "border-chili-green" : "border-chili-red";
  const d = type === "veg" ? "bg-chili-green" : "bg-chili-red";
  return (
    <span className={`grid h-4 w-4 place-items-center rounded-[3px] border-2 bg-white ${c}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${d}`} />
    </span>
  );
}

function DishPhoto({ item }) {
  const [err, setErr] = useState(false);
  const src = dishImage(item);
  return (
    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-cream-200 to-cream-300">
      {!err && src ? (
        <img
          src={src}
          alt={item.name}
          loading="lazy"
          onError={() => setErr(true)}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="grid h-full place-items-center text-5xl">{CATEGORY_ICON[item.category] || "🌶️"}</div>
      )}
      <span className="absolute left-2.5 top-2.5">
        <VegBadge type={item.type} />
      </span>
      <span className="absolute bottom-2.5 right-2.5 rounded-full bg-espresso/80 px-3 py-1 font-display text-sm font-bold text-gold-soft backdrop-blur-sm">
        {inr(item.price)}
      </span>
    </div>
  );
}

function DishCard({ item, qty, onAdd, onDec }) {
  return (
    <div className="card group flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-soft">
      <DishPhoto item={item} />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h4 className="font-sans text-[15px] font-semibold text-ink">{item.name}</h4>
        {item.desc && <p className="line-clamp-2 text-xs text-ink-soft">{item.desc}</p>}
        <div className="mt-auto flex items-center justify-end pt-2">
          {qty > 0 ? (
            <div className="flex items-center gap-3 rounded-full border border-cream-300 bg-cream-200 p-1">
              <button
                onClick={() => onDec(item.id)}
                className="grid h-7 w-7 place-items-center rounded-full bg-white text-ink shadow-sm hover:bg-chili-red hover:text-white"
              >
                −
              </button>
              <span className="min-w-[16px] text-center text-sm font-semibold text-ink">{qty}</span>
              <button
                onClick={() => onAdd(item)}
                className="grid h-7 w-7 place-items-center rounded-full bg-white text-ink shadow-sm hover:bg-chili-green hover:text-white"
              >
                +
              </button>
            </div>
          ) : (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onAdd(item)}
              className="rounded-full bg-chili-red px-5 py-2 text-[13px] font-bold text-white transition hover:bg-chili-reddk"
            >
              + Add
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [menu, setMenu] = useState(null);
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");
  const [active, setActive] = useState("");
  const navRef = useRef(null);

  const items = useCart((s) => s.items);
  const add = useCart((s) => s.add);
  const dec = useCart((s) => s.dec);
  const showToast = useToast((s) => s.show);

  useEffect(() => {
    let alive = true;
    Store.getMenu()
      .then((data) => alive && setMenu(data))
      .catch(() => alive && setMenu(SEED_MENU.map((x, i) => ({ id: "s" + i, ...x }))));
    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    if (!menu) return [];
    const term = q.trim().toLowerCase();
    return menu.filter((m) => {
      const okType = filter === "all" || m.type === filter;
      const okQ = !term || m.name.toLowerCase().includes(term);
      return okType && okQ;
    });
  }, [menu, filter, q]);

  const grouped = useMemo(() => {
    const g = {};
    filtered.forEach((m) => (g[m.category] = g[m.category] || []).push(m));
    return g;
  }, [filtered]);

  const cats = orderCats(Object.keys(grouped));

  const onAdd = (item) => {
    add(item);
    showToast(`${item.name} added`);
  };

  return (
    <section id="menu" className="ember-bg relative scroll-mt-20 pb-24 pt-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-chili-red">Our Kitchen</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">The Menu</h2>
          <p className="mt-3 text-ink-soft">Tap to add — your total updates live in the cart.</p>
        </div>

        {/* toolbar */}
        <div className="sticky top-[74px] z-30 -mx-2 mb-6 rounded-2xl pt-2">
          <div className="card flex flex-wrap items-center gap-3 rounded-2xl p-3">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-cream-300 bg-white px-4 py-2.5">
              <span className="text-ink-faint">🔍</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search dishes… paneer, noodles, chicken"
                className="w-full min-w-[160px] bg-transparent text-sm text-ink outline-none placeholder:text-ink-faint"
              />
            </div>
            <div className="flex gap-2">
              {[
                ["all", "All"],
                ["veg", "🟢 Veg"],
                ["nonveg", "🔴 Non-Veg"],
              ].map(([v, label]) => (
                <button
                  key={v}
                  onClick={() => setFilter(v)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    filter === v
                      ? "bg-espresso text-cream-50"
                      : "border border-cream-300 bg-white text-ink-soft hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* category pills */}
          {cats.length > 0 && (
            <div ref={navRef} className="no-bar mt-2 flex gap-2 overflow-x-auto pb-1">
              {cats.map((c) => (
                <a
                  key={c}
                  href={`#cat-${slug(c)}`}
                  onClick={() => setActive(c)}
                  className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-[13px] font-semibold transition ${
                    active === c
                      ? "border-chili-red bg-chili-red text-white"
                      : "border-cream-300 bg-cream-50 text-ink-soft hover:border-chili-red/60 hover:text-chili-red"
                  }`}
                >
                  {CATEGORY_ICON[c]} {c}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* content */}
        {menu === null ? (
          <div className="py-20 text-center text-ink-faint">Loading menu…</div>
        ) : cats.length === 0 ? (
          <div className="py-20 text-center text-ink-faint">No dishes match your search.</div>
        ) : (
          cats.map((cat) => (
            <div key={cat} id={`cat-${slug(cat)}`} className="mb-14 scroll-mt-48">
              <h3 className="mb-6 flex items-center gap-4 font-display text-2xl font-bold text-ink">
                <span>{CATEGORY_ICON[cat]}</span>
                {cat}
                <span className="h-px flex-1 bg-cream-300" />
                <span className="text-sm font-normal text-ink-faint">{grouped[cat].length}</span>
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <AnimatePresence mode="popLayout">
                  {grouped[cat]
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                      >
                        <DishCard item={item} qty={items[item.id]?.qty || 0} onAdd={onAdd} onDec={dec} />
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
