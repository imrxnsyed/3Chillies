"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { useCart } from "@/lib/cartStore";

const LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const openCart = useCart((s) => s.open);
  const items = useCart((s) => s.items);
  const count = Object.values(items).reduce((n, i) => n + i.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] border-b border-cream-300/70 bg-cream/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <nav className="mx-auto flex h-[74px] w-[92%] max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="leading-none">
            <b className="block font-display text-xl text-ink">3 Chillies</b>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold">Indo-Chinese</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium transition ${
                  active ? "text-chili-red" : "text-ink-soft hover:text-chili-red"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-chili-red"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/reservations"
            className="hidden rounded-full border border-chili-red/40 px-5 py-2.5 text-sm font-semibold text-chili-red transition hover:bg-chili-red hover:text-white lg:block"
          >
            Book a Table
          </Link>
          <button
            onClick={openCart}
            className="relative grid h-11 w-11 place-items-center rounded-full bg-chili-red text-white shadow-glow transition hover:bg-chili-reddk"
            aria-label="Open cart"
          >
            🛒
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1.5 -top-1.5 grid h-5 min-w-[20px] place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-white"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full text-2xl text-ink md:hidden"
            aria-label="Menu"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-cream-300 bg-cream md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-lg px-3 py-2.5 transition hover:bg-cream-200 ${
                    pathname === l.href ? "font-semibold text-chili-red" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
