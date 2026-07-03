"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cartStore";
import { RESTAURANT } from "@/lib/menuData";

const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");

export default function CartDrawer() {
  const { isOpen, close, items, add, dec, remove } = useCart();
  const list = Object.values(items);
  const total = list.reduce((n, i) => n + i.price * i.qty, 0);

  const waLink = () => {
    let msg = "Hi 3 Chillies! I'd like to order:%0A";
    list.forEach((i) => (msg += `• ${i.qty} × ${i.name} (${inr(i.price * i.qty)})%0A`));
    msg += `%0ATotal: ${inr(total)}`;
    return `https://wa.me/${RESTAURANT.whatsapp}?text=${msg}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-espresso/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-[110] flex h-full w-[92%] max-w-md flex-col bg-cream-50 shadow-soft"
          >
            <div className="flex items-center justify-between border-b border-cream-300 bg-cream-200 px-6 py-5">
              <h3 className="font-display text-xl text-ink">Your Order</h3>
              <button onClick={close} className="text-3xl leading-none text-ink-soft hover:text-ink">×</button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {list.length === 0 ? (
                <div className="grid h-full place-items-center text-center text-ink-faint">
                  <div>
                    <div className="mb-2 text-5xl">🥡</div>
                    Your cart is empty.
                    <br />
                    Add something delicious!
                  </div>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {list.map((i) => (
                    <motion.div
                      key={i.id}
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, x: 40 }}
                      className="flex items-center gap-3 border-b border-cream-300/70 py-4"
                    >
                      <span className={`h-3 w-3 flex-none rounded-full ${i.type === "veg" ? "bg-chili-green" : "bg-chili-red"}`} />
                      <div className="flex-1">
                        <b className="block text-sm font-semibold text-ink">{i.name}</b>
                        <small className="text-ink-faint">{inr(i.price)} each</small>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-cream-300 bg-white p-1">
                        <button onClick={() => dec(i.id)} className="grid h-6 w-6 place-items-center rounded-full bg-cream-200 text-ink hover:bg-chili-red hover:text-white">−</button>
                        <span className="min-w-[16px] text-center text-sm text-ink">{i.qty}</span>
                        <button onClick={() => add(i)} className="grid h-6 w-6 place-items-center rounded-full bg-cream-200 text-ink hover:bg-chili-green hover:text-white">+</button>
                      </div>
                      <span className="w-16 text-right font-display font-bold text-chili-red">{inr(i.price * i.qty)}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            <div className="border-t border-cream-300 bg-cream-200 p-6">
              <div className="mb-4 flex items-baseline justify-between">
                <span className="text-ink-soft">Total</span>
                <motion.b key={total} initial={{ scale: 1.15 }} animate={{ scale: 1 }} className="font-display text-3xl text-ink">
                  {inr(total)}
                </motion.b>
              </div>
              <a
                href={list.length ? waLink() : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-full py-3.5 text-center font-semibold transition ${
                  list.length
                    ? "bg-chili-red text-white shadow-glow hover:bg-chili-reddk"
                    : "pointer-events-none bg-cream-300 text-ink-faint"
                }`}
              >
                Place Order via WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-ink-faint">Prices indicative, exclusive of taxes.</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
