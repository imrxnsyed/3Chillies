"use client";

// Rising steam puffs — drop over any hot dish / icon.
export default function Steam({ className = "" }) {
  return (
    <span aria-hidden className={`pointer-events-none absolute left-0 right-0 mx-auto flex justify-center gap-2 ${className}`}>
      {[0, 0.6, 1.2].map((d, i) => (
        <span key={i} className="steam-puff" style={{ animationDelay: `${d}s`, left: `${40 + i * 10}%` }} />
      ))}
    </span>
  );
}
