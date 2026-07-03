"use client";
import { create } from "zustand";

export const useToast = create((set) => ({
  message: "",
  visible: false,
  show: (message) => {
    set({ message, visible: true });
    clearTimeout(useToast._t);
    useToast._t = setTimeout(() => set({ visible: false }), 1900);
  },
}));
