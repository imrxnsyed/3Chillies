"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "@/lib/toastStore";

export default function Toaster() {
  const { message, visible } = useToast();
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream-50 shadow-soft ring-1 ring-gold/40"
        >
          <span className="mr-2">🌶️</span>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
