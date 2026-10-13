import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'shield' && (
          <g transform="translate(232 40)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z" strokeWidth="2" />
            <path d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z" strokeWidth="1" strokeOpacity="0.4" />
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="30" x2={i % 2 ? 72 : 86} y1={56 + i * 14} y2={56 + i * 14} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.35 + i * 0.1} />
            ))}
            <path d="M40 124 l12 12 l26 -28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'flow' && (
          <g fill="none" stroke={a}>
            <rect x="200" y="56" width="150" height="94" rx="12" strokeWidth="2" strokeOpacity="0.85" />
            <rect x="214" y="72" width="28" height="20" rx="4" strokeOpacity="0.7" />
            <line x1="214" x2="330" y1="124" y2="124" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="18 8" />
            <g transform="translate(176 196)" fontFamily="Inter" fontSize="10" fill={a} stroke="none" letterSpacing="2">
              <circle cx="16" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" />
              <path d="M34 16 h46" stroke={a} strokeWidth="2" />
              <circle cx="96" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.8" />
              <path d="M112 8 l38 -22 M112 24 l38 22" stroke={a} strokeWidth="2" strokeOpacity="0.6" />
              <circle cx="166" cy="-18" r="10" fill={a} fillOpacity="0.8" />
              <circle cx="166" cy="50" r="10" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.5" />
            </g>
          </g>
        )}
        {project.motif === 'tenants' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={196 + c * 44}
                  y={50 + r * 44}
                  width="34"
                  height="34"
                  rx="7"
                  strokeWidth="1.6"
                  strokeOpacity={0.25 + ((r + c) % 3) * 0.25}
                  fill={(r + c) % 4 === 0 ? a : 'none'}
                  fillOpacity="0.25"
                />
              )),
            )}
            <path d="M188 200 h190" strokeWidth="2" strokeOpacity="0.7" />
            <path d="M188 214 h190" strokeWidth="1" strokeOpacity="0.35" />
            <path d="M188 228 h190" strokeWidth="1" strokeOpacity="0.2" />
          </g>
        )}
        {project.motif === 'rag' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${190 + i * 16} ${54 + i * 14})`}>
                <rect width="64" height="82" rx="6" strokeWidth="1.6" strokeOpacity={0.35 + i * 0.25} fill="#000" fillOpacity="0.25" />
                {[0, 1, 2, 3].map((l) => (
                  <line key={l} x1="10" x2={l % 2 ? 40 : 52} y1={16 + l * 14} y2={16 + l * 14} strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.5" />
                ))}
              </g>
            ))}
            <path d="M268 112 C 292 112, 296 150, 318 150" strokeWidth="1.6" strokeDasharray="4 5" strokeOpacity="0.7" />
            {Array.from({ length: 18 }).map((_, i) => (
              <circle key={i} cx={318 + (i % 6) * 11} cy={130 + Math.floor(i / 6) * 13} r={i % 4 === 0 ? 3.6 : 2.2} fill={a} fillOpacity={i % 4 === 0 ? 0.95 : 0.4} stroke="none" />
            ))}
            <path d="M300 196 h84 a10 10 0 0 1 10 10 v26 a10 10 0 0 1 -10 10 h-52 l-14 12 v-12 h-18 a10 10 0 0 1 -10 -10 v-26 a10 10 0 0 1 10 -10 z" strokeWidth="2" strokeOpacity="0.85" />
            <line x1="304" x2="370" y1="214" y2="214" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.6" />
            <line x1="304" x2="352" y1="228" y2="228" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.35" />
          </g>
        )}
        {project.motif === 'lakehouse' && (
          <g fill="none" stroke={a}>
            {[
              { y: 60, c: '#f2d07a', label: 'GOLD' },
              { y: 116, c: '#d8dde6', label: 'SILVER' },
              { y: 172, c: '#c98a55', label: 'BRONZE' },
            ].map((l, i) => (
              <g key={l.label}>
                <path d={`M${206 - i * 10} ${l.y + 18} L${290} ${l.y} L${374 + i * 10} ${l.y + 18} L${290} ${l.y + 36} Z`} stroke={l.c} strokeWidth="2" strokeOpacity="0.9" fill={l.c} fillOpacity="0.12" />
                <text x="290" y={l.y + 22} textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" letterSpacing="3" fill={l.c} stroke="none">
                  {l.label}
                </text>
              </g>
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <path key={i} d={`M${214 + i * 38} 262 v-34`} strokeWidth="1.6" strokeOpacity="0.5" strokeDasharray="3 4" />
            ))}
            <path d="M200 262 h180" strokeWidth="2" strokeOpacity="0.7" />
          </g>
        )}
        {project.motif === 'forecast' && (
          <g fill="none" stroke={a}>
            {[38, 56, 44, 70, 62, 84, 76, 98].map((h, i) => (
              <rect key={i} x={200 + i * 22} y={236 - h} width="12" height={h} rx="3" fill={a} fillOpacity={0.12 + (i % 3) * 0.06} strokeOpacity="0.35" />
            ))}
            <path d="M196 196 C 230 186, 246 160, 272 168 S 318 130, 342 120 S 372 96, 392 84" strokeWidth="2.6" strokeOpacity="0.95" />
            <path d="M342 120 S 372 96, 392 84" strokeWidth="2.6" strokeDasharray="5 6" strokeOpacity="0.9" stroke="#fff" />
            <path d="M330 112 Q 362 78 396 66 L 396 104 Q 368 112 340 134 Z" fill={a} fillOpacity="0.14" stroke="none" />
            <circle cx="342" cy="120" r="5" fill={a} stroke="none" />
            <path d="M196 240 h200" strokeWidth="1.6" strokeOpacity="0.6" />
          </g>
        )}
        {project.motif === 'stream' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={`M180 ${92 + i * 34} C 220 ${72 + i * 34}, 250 ${112 + i * 34}, 290 ${92 + i * 34} S 360 ${72 + i * 34}, 400 ${92 + i * 34}`}
                strokeWidth={i === 1 ? 2.4 : 1.5}
                strokeOpacity={0.3 + i * 0.15}
              />
            ))}
            {[200, 236, 262, 304, 330, 372].map((x, i) => (
              <circle key={x} cx={x} cy={[96, 118, 160, 178, 128, 196][i]} r="4" fill={a} fillOpacity="0.55" stroke="none" />
            ))}
            <circle cx="318" cy="150" r="13" strokeWidth="2.4" stroke="#ff5a6e" />
            <circle cx="318" cy="150" r="4.5" fill="#ff5a6e" stroke="none" />
            <path d="M318 132 v-14 M336 150 h14" stroke="#ff5a6e" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M4.5 4 L12 15.5 L19.5 4 M12 15.5 V28" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
