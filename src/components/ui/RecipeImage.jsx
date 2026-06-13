// Cartoon SVG illustration generated from the recipe's emoji + gradient.
// No external images — always matches the recipe and works offline.

// Deterministic "random" values seeded by a recipe id string.
function seed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}
function seededRand(s, salt) {
  const x = Math.sin(s + salt) * 10000;
  return x - Math.floor(x);
}

function Illustration({ recipe, width = 400, height = 220 }) {
  const id = recipe.id || recipe.title || 'default';
  const s = seed(id);
  const [c0, c1] = recipe.gradient || ['#F2A5A5', '#C4704F'];
  const emoji = recipe.emoji || '🥄';

  // Generate 6 floating blobs using seeded positions
  const blobs = Array.from({ length: 6 }, (_, i) => ({
    cx: seededRand(s, i * 17 + 1) * width,
    cy: seededRand(s, i * 17 + 2) * height,
    r: 18 + seededRand(s, i * 17 + 3) * 38,
    opacity: 0.10 + seededRand(s, i * 17 + 4) * 0.14,
  }));

  // 8 small sparkle dots
  const dots = Array.from({ length: 8 }, (_, i) => ({
    cx: seededRand(s, i * 7 + 100) * width,
    cy: seededRand(s, i * 7 + 101) * height,
    r: 2.5 + seededRand(s, i * 7 + 102) * 4,
    opacity: 0.18 + seededRand(s, i * 7 + 103) * 0.22,
  }));

  // 3 wavy arc lines for texture
  const arcs = Array.from({ length: 3 }, (_, i) => {
    const x1 = seededRand(s, i * 31 + 200) * (width * 0.5);
    const y1 = seededRand(s, i * 31 + 201) * height;
    const x2 = x1 + 60 + seededRand(s, i * 31 + 202) * 80;
    const y2 = y1 + (seededRand(s, i * 31 + 203) - 0.5) * 50;
    const mx = (x1 + x2) / 2;
    const my = y1 - 20 - seededRand(s, i * 31 + 204) * 25;
    return { d: `M${x1},${y1} Q${mx},${my} ${x2},${y2}`, opacity: 0.12 + seededRand(s, i * 31 + 205) * 0.12 };
  });

  const gradId = `g-${id.replace(/[^a-z0-9]/g, '')}`;
  const glowId = `gw-${id.replace(/[^a-z0-9]/g, '')}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      aria-label={recipe.title}
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c0} />
          <stop offset="100%" stopColor={c1} />
        </linearGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <filter id={`blur-${id.replace(/[^a-z0-9]/g, '')}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Background gradient */}
      <rect width={width} height={height} fill={`url(#${gradId})`} />

      {/* Soft blobs */}
      {blobs.map((b, i) => (
        <circle
          key={i}
          cx={b.cx} cy={b.cy} r={b.r}
          fill="white" opacity={b.opacity}
          filter={`url(#blur-${id.replace(/[^a-z0-9]/g, '')})`}
        />
      ))}

      {/* Wavy lines */}
      {arcs.map((a, i) => (
        <path key={i} d={a.d} stroke="white" strokeWidth="2.5" fill="none" opacity={a.opacity} strokeLinecap="round" />
      ))}

      {/* Small sparkle dots */}
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="white" opacity={d.opacity} />
      ))}

      {/* Central glow halo behind emoji */}
      <circle cx={width / 2} cy={height / 2} r={60} fill={`url(#${glowId})`} />
      <circle cx={width / 2} cy={height / 2} r={44} fill="white" opacity="0.18" />

      {/* Emoji */}
      <text
        x={width / 2}
        y={height / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="68"
        style={{ userSelect: 'none' }}
      >
        {emoji}
      </text>
    </svg>
  );
}

export default function RecipeImage({ recipe, className = '', rounded = '' }) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <Illustration recipe={recipe} />
    </div>
  );
}
