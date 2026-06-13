export function StageBadge({ stage, small = false }) {
  if (!stage) return null;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-medium ${small ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs'}`}
      style={{ backgroundColor: stage.bgColor, color: stage.color }}
    >
      {stage.emoji} {stage.ageRange}
    </span>
  );
}

export function AllergenBadge({ label, conflict = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
        conflict
          ? 'bg-red-100 text-red-700 ring-1 ring-red-300'
          : 'bg-amber-50 text-amber-700'
      }`}
    >
      {conflict && '⚠️ '}{label}
    </span>
  );
}

export function TimeBadge({ minutes }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#1A2B3C] shadow-sm">
      ⏱ {minutes} min
    </span>
  );
}

export function OverlapBadge({ count }) {
  if (!count) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#7C9A7E]/15 px-2.5 py-1 text-xs font-semibold text-[#5a7a5c]">
      🔗 {count} shared ingredient{count === 1 ? '' : 's'}
    </span>
  );
}
