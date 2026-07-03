"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Cart state: items keyed by id -> { id, name, price, type, qty }
export const useCart = create(
  persist(
    (set, get) => ({
      items: {},
      isOpen: false,

      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),

      add: (item) =>
        set((s) => {
          const cur = s.items[item.id];
          return {
            items: {
              ...s.items,
              [item.id]: cur
                ? { ...cur, qty: cur.qty + 1 }
                : { id: item.id, name: item.name, price: item.price, type: item.type, qty: 1 },
            },
          };
        }),

      dec: (id) =>
        set((s) => {
          const cur = s.items[id];
          if (!cur) return s;
          const items = { ...s.items };
          if (cur.qty <= 1) delete items[id];
          else items[id] = { ...cur, qty: cur.qty - 1 };
          return { items };
        }),

      remove: (id) =>
        set((s) => {
          const items = { ...s.items };
          delete items[id];
          return { items };
        }),

      clear: () => set({ items: {} }),

      count: () => Object.values(get().items).reduce((n, i) => n + i.qty, 0),
      total: () => Object.values(get().items).reduce((n, i) => n + i.price * i.qty, 0),
    }),
    { name: "threechillies_cart_v2" }
  )
);
