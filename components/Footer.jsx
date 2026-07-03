import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="ember-bg bg-espresso py-14 text-cream-200">
      <div className="mx-auto grid w-[92%] max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Logo />
            <span className="leading-none">
              <b className="block font-display text-lg text-cream-50">3 Chillies</b>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Indo-Chinese</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-cream-200/70">
            Quality Indo-Chinese cuisine to enjoy with family and friends. Banjara Hills, Hyderabad.
          </p>
        </div>
        <div>
          <h5 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold-soft">Explore</h5>
          {[
            ["/menu", "Menu"],
            ["/about", "About"],
            ["/gallery", "Gallery"],
            ["/reservations", "Reservations"],
            ["/reviews", "Reviews"],
            ["/contact", "Contact"],
          ].map(([h, l]) => (
            <Link key={h} href={h} className="mb-2.5 block text-sm text-cream-200/80 transition hover:text-gold-soft">
              {l}
            </Link>
          ))}
        </div>
        <div>
          <h5 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold-soft">Order &amp; Book</h5>
          <a href="tel:+917013892089" className="mb-2.5 block text-sm text-cream-200/80 hover:text-gold-soft">
            Call: 070138 92089
          </a>
          <a
            href="https://wa.me/917013892089"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 block text-sm text-cream-200/80 hover:text-gold-soft"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-[92%] max-w-6xl flex-wrap justify-between gap-2 border-t border-cream-50/10 pt-6 text-xs text-cream-200/50">
        <span>© {new Date().getFullYear()} 3 Chillies. All rights reserved.</span>
        <span>
          Built by{" "}
          <a
            href="https://voxsera.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold-soft transition hover:text-cream-50"
          >
            Voxsera AI Solutions
          </a>
        </span>
      </div>
    </footer>
  );
}
