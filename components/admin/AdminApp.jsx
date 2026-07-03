"use client";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";
import { Store } from "@/lib/store";
import { CATEGORY_ORDER } from "@/lib/menuData";

const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER || "admin";
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS || "3chillies";
const SESSION_KEY = "threechillies_admin_ok";

/* ------------------------------ Login ------------------------------ */
function Login({ onOk }) {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (u.trim() === ADMIN_USER && p === ADMIN_PASS) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onOk();
    } else {
      setErr("Incorrect username or password.");
    }
  };

  return (
    <div className="grid min-h-screen place-items-center bg-charcoal px-4 ember-bg">
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={submit}
        className="glass w-full max-w-sm rounded-3xl p-8 ring-1 ring-white/10"
      >
        <div className="mb-6 flex flex-col items-center text-center">
          <Logo className="h-16 w-16" />
          <h1 className="mt-3 font-display text-2xl font-bold text-cream">Staff Login</h1>
          <p className="text-sm text-cream/50">3 Chillies · Menu CRM</p>
        </div>
        <label className="mb-1.5 block text-xs font-semibold text-cream/80">Username</label>
        <input
          value={u}
          onChange={(e) => setU(e.target.value)}
          autoFocus
          className="mb-4 w-full rounded-xl border border-white/10 bg-charcoal/60 px-4 py-3 text-sm text-cream outline-none focus:border-chili-red"
          placeholder="admin"
        />
        <label className="mb-1.5 block text-xs font-semibold text-cream/80">Password</label>
        <input
          type="password"
          value={p}
          onChange={(e) => setP(e.target.value)}
          className="mb-2 w-full rounded-xl border border-white/10 bg-charcoal/60 px-4 py-3 text-sm text-cream outline-none focus:border-chili-red"
          placeholder="••••••••"
        />
        {err && <p className="mb-2 text-sm text-chili-red">{err}</p>}
        <button className="mt-3 w-full rounded-full bg-chili-red py-3 font-semibold text-white shadow-glow transition hover:bg-chili-reddk">
          Sign in
        </button>
        <a href="/" className="mt-4 block text-center text-xs text-cream/40 hover:text-cream/70">← Back to site</a>
      </motion.form>
    </div>
  );
}

/* ---------------------------- Item modal ---------------------------- */
const emptyItem = { name: "", price: "", category: "", type: "veg", desc: "", img: "" };

function ItemModal({ open, initial, onClose, onSave }) {
  const [f, setF] = useState(emptyItem);
  useEffect(() => {
    setF(initial ? { ...initial, price: String(initial.price) } : emptyItem);
  }, [initial, open]);
  if (!open) return null;
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const field = "w-full rounded-xl border border-white/10 bg-charcoal/60 px-4 py-3 text-sm text-cream outline-none focus:border-chili-red";

  return (
    <div className="fixed inset-0 z-[120] grid place-items-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-charcoal-800 ring-1 ring-white/10"
      >
        <div className="flex items-center justify-between bg-charcoal-700 px-6 py-4">
          <h3 className="font-display text-xl text-cream">{initial ? "Edit Item" : "Add Item"}</h3>
          <button onClick={onClose} className="text-2xl text-cream/70 hover:text-cream">×</button>
        </div>
        <div className="space-y-4 p-6">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-cream/80">Dish name</label>
            <input value={f.name} onChange={set("name")} className={field} placeholder="e.g. Paneer Butter Masala" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-cream/80">Price (₹)</label>
              <input type="number" min="0" value={f.price} onChange={set("price")} className={field} placeholder="309" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-cream/80">Category</label>
              <input list="cats" value={f.category} onChange={set("category")} className={field} placeholder="Chinese" />
              <datalist id="cats">{CATEGORY_ORDER.map((c) => <option key={c} value={c} />)}</datalist>
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-cream/80">Short description (optional)</label>
            <input value={f.desc} onChange={set("desc")} className={field} placeholder="Wok-tossed paneer & peppers" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-cream/80">Image URL (optional)</label>
            <input value={f.img || ""} onChange={set("img")} className={field} placeholder="https://… (leave empty for an automatic photo)" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-cream/80">Type</label>
            <div className="flex gap-3">
              {[["veg", "🟢 Veg", "bg-chili-green"], ["nonveg", "🔴 Non-Veg", "bg-chili-red"]].map(([v, label, bg]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setF((s) => ({ ...s, type: v }))}
                  className={`flex-1 rounded-xl border py-3 text-sm font-semibold transition ${
                    f.type === v ? `${bg} border-transparent text-white` : "border-white/10 text-cream/70"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 px-6 pb-6">
          <button onClick={onClose} className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-cream/80 hover:bg-white/5">Cancel</button>
          <button
            onClick={() => onSave(f)}
            className="rounded-full bg-chili-red px-6 py-2.5 text-sm font-semibold text-white shadow-glow hover:bg-chili-reddk"
          >
            Save Item
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------------------- Dashboard ---------------------------- */
function Dashboard({ onLogout }) {
  const [menu, setMenu] = useState(null);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [type, setType] = useState("all");
  const [modal, setModal] = useState({ open: false, item: null });
  const [toast, setToast] = useState("");

  const flash = (m) => {
    setToast(m);
    setTimeout(() => setToast(""), 2000);
  };

  const load = () => Store.getMenu().then(setMenu).catch((e) => flash("Load error: " + e.message));
  useEffect(() => {
    load();
  }, []);

  const cats = useMemo(() => {
    if (!menu) return [];
    const s = new Set(menu.map((m) => m.category));
    return [...s].sort((a, b) => {
      const ia = CATEGORY_ORDER.indexOf(a), ib = CATEGORY_ORDER.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
  }, [menu]);

  const rows = useMemo(() => {
    if (!menu) return [];
    const term = q.trim().toLowerCase();
    return menu
      .filter((m) => (!term || m.name.toLowerCase().includes(term)) && (cat === "all" || m.category === cat) && (type === "all" || m.type === type))
      .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
  }, [menu, q, cat, type]);

  const stats = useMemo(() => {
    if (!menu) return { total: 0, veg: 0, nonveg: 0, avg: 0 };
    const total = menu.length;
    const veg = menu.filter((m) => m.type === "veg").length;
    const avg = total ? Math.round(menu.reduce((s, m) => s + Number(m.price), 0) / total) : 0;
    return { total, veg, nonveg: total - veg, avg };
  }, [menu]);

  const save = async (f) => {
    const price = parseInt(f.price, 10);
    if (!f.name.trim()) return flash("Enter a dish name.");
    if (isNaN(price) || price < 0) return flash("Enter a valid price.");
    if (!f.category.trim()) return flash("Enter a category.");
    const payload = { name: f.name.trim(), price, category: f.category.trim(), type: f.type, desc: f.desc?.trim() || "", img: f.img?.trim() || "" };
    try {
      if (f.id) {
        await Store.updateItem(f.id, payload);
        flash("Item updated ✔");
      } else {
        await Store.addItem(payload);
        flash("Item added ✔");
      }
      setModal({ open: false, item: null });
      load();
    } catch (e) {
      flash("Error: " + e.message);
    }
  };

  const del = async (m) => {
    if (!confirm(`Delete "${m.name}"? This cannot be undone.`)) return;
    try {
      await Store.deleteItem(m.id);
      flash("Item deleted");
      load();
    } catch (e) {
      flash("Error: " + e.message);
    }
  };

  const reset = async () => {
    if (Store.mode === "supabase") return flash("Reset is only available in demo mode.");
    if (!confirm("Reset the menu to the original 80+ items? Custom changes will be lost.")) return;
    await Store.resetMenu();
    flash("Menu reset");
    load();
  };

  const sel = "rounded-full border border-white/10 bg-charcoal-800 px-4 py-2 text-sm text-cream outline-none";

  return (
    <div className="min-h-screen bg-charcoal ember-bg">
      {/* header */}
      <header className="sticky top-0 z-40 glass">
        <div className="mx-auto flex h-[70px] w-[94%] max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="leading-none">
              <b className="block font-display text-lg text-cream">3 Chillies</b>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-soft">Menu CRM</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${Store.mode === "supabase" ? "bg-chili-green text-white" : "bg-chili-yellow text-charcoal"}`}>
              {Store.mode === "supabase" ? "● Supabase" : "● Demo mode"}
            </span>
            <a href="/" target="_blank" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-cream/80 hover:bg-white/5 sm:block">View Site ↗</a>
            <button onClick={() => setModal({ open: true, item: null })} className="rounded-full bg-chili-red px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-chili-reddk">＋ Add</button>
            <button onClick={onLogout} className="rounded-full border border-white/15 px-4 py-2 text-sm text-cream/70 hover:bg-white/5">Logout</button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-[94%] max-w-7xl py-8">
        <h1 className="font-display text-3xl font-bold text-cream">Menu Manager</h1>
        <p className="mt-1 text-cream/55">Add, edit and remove dishes and prices. Changes go live on the website instantly.</p>

        {Store.mode !== "supabase" && (
          <div className="mt-5 rounded-xl border border-gold-soft/40 bg-gold/10 px-4 py-3 text-sm text-gold-soft">
            Demo mode — edits save to this browser only. Add Supabase keys in <code className="rounded bg-black/30 px-1.5">.env.local</code> to sync across devices (see README).
          </div>
        )}

        {/* stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            [stats.total, "Total dishes"],
            [stats.veg, "Vegetarian"],
            [stats.nonveg, "Non-Vegetarian"],
            [inr(stats.avg), `Avg price · ${cats.length} cats`],
          ].map(([b, s]) => (
            <div key={s} className="glass rounded-2xl p-5 ring-1 ring-white/5">
              <div className="font-display text-3xl text-chili-yellow">{b}</div>
              <div className="text-xs text-cream/55">{s}</div>
            </div>
          ))}
        </div>

        {/* toolbar */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-white/10 bg-charcoal-800 px-4 py-2">
            <span className="text-cream/50">🔍</span>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search items…" className="w-full min-w-[140px] bg-transparent text-sm text-cream outline-none placeholder:text-cream/40" />
          </div>
          <select value={cat} onChange={(e) => setCat(e.target.value)} className={sel}>
            <option value="all">All categories</option>
            {cats.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className={sel}>
            <option value="all">Veg & Non-Veg</option>
            <option value="veg">Veg only</option>
            <option value="nonveg">Non-Veg only</option>
          </select>
          <button onClick={reset} className="rounded-full border border-white/10 px-4 py-2 text-sm text-cream/70 hover:bg-white/5">↺ Reset</button>
        </div>

        {/* table */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left">
            <thead className="bg-charcoal-700 text-[11px] uppercase tracking-wider text-cream/70">
              <tr>
                <th className="px-5 py-3">Dish</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {menu === null ? (
                  <tr><td colSpan={5} className="px-5 py-12 text-center text-cream/50">Loading…</td></tr>
                ) : rows.length === 0 ? (
                  <tr><td colSpan={5} className="px-5 py-12 text-center text-cream/50">No items match.</td></tr>
                ) : (
                  rows.map((m) => (
                    <motion.tr key={m.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border-t border-white/5 text-sm text-cream/90 hover:bg-white/5">
                      <td className="px-5 py-3">
                        <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle" style={{ background: m.type === "veg" ? "#34c759" : "#ff3b30" }} />
                        <b className="font-semibold">{m.name}</b>
                      </td>
                      <td className="px-5 py-3"><span className="rounded-full bg-white/5 px-2.5 py-1 text-xs">{m.category}</span></td>
                      <td className="px-5 py-3">{m.type === "veg" ? "Veg" : "Non-Veg"}</td>
                      <td className="px-5 py-3 font-display font-bold text-chili-yellow">{inr(m.price)}</td>
                      <td className="px-5 py-3">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => setModal({ open: true, item: m })} className="rounded-full border border-white/15 px-3 py-1.5 text-xs hover:bg-white/10">✎ Edit</button>
                          <button onClick={() => del(m)} className="rounded-full border border-chili-red px-3 py-1.5 text-xs text-chili-red hover:bg-chili-red hover:text-white">🗑 Delete</button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </main>

      <ItemModal open={modal.open} initial={modal.item} onClose={() => setModal({ open: false, item: null })} onSave={save} />

      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} className="fixed bottom-6 left-1/2 z-[130] -translate-x-1/2 rounded-full bg-charcoal-700 px-6 py-3 text-sm font-semibold text-cream shadow-soft ring-1 ring-gold/30">
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------ Root ------------------------------ */
export default function AdminApp() {
  const [ready, setReady] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    setOk(sessionStorage.getItem(SESSION_KEY) === "1");
    setReady(true);
  }, []);

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setOk(false);
  };

  if (!ready) return <div className="grid min-h-screen place-items-center bg-charcoal text-cream/50">Loading…</div>;
  return ok ? <Dashboard onLogout={logout} /> : <Login onOk={() => setOk(true)} />;
}
