import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../hooks/useMedia';

const LABELS: Record<string, string> = { view: 'VIEW', play: '▶', link: '↗', drag: '↔', close: '✕' };

/**
 * The system pointer stays visible, so moving the mouse never lags.
 * Over elements tagged with `data-cursor="view|play|link|drag|close"` a labelled disc sits
 * exactly on the pointer. Its position is written straight to the transform on each
 * pointer event: no springs and no React re-render per mouse move. Desktop only.
 */
export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  const ref = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<string | null>(null);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    let current: string | null = null;
    const setTo = (next: string | null) => {
      if (next !== current) {
        current = next;
        setMode(next);
      }
    };
    const move = (e: PointerEvent) => {
      const el = ref.current;
      if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      const tagged = (e.target as HTMLElement | null)?.closest?.<HTMLElement>('[data-cursor]');
      setTo(tagged?.dataset.cursor ?? null);
    };
    const leave = () => setTo(null);
    const press = () => setDown(true);
    const release = () => setDown(false);
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', press, { passive: true });
    window.addEventListener('pointerup', release, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, [enabled]);

  if (!enabled) return null;
  const label = mode ? LABELS[mode] : null;
  const size = mode === 'view' ? 72 : mode === 'link' ? 34 : 52;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200]"
      style={{ transform: 'translate3d(-200px, -200px, 0)', willChange: 'transform' }}
    >
      <AnimatePresence>
        {label && (
          <motion.span
            key={mode}
            className="absolute flex items-center justify-center rounded-full bg-[rgba(229,19,43,0.92)] font-sans text-[11px] font-bold tracking-[0.18em] text-white shadow-[0_8px_30px_rgba(229,19,43,0.35)]"
            style={{ width: size, height: size, left: -size / 2, top: -size / 2 }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: down ? 0.88 : 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
