"use client";
import { motion } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 42 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -46 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 46 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } },
};

export default function Reveal({ children, dir = "up", delay = 0, className = "", once = true }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[dir]}
    >
      {children}
    </motion.div>
  );
}
