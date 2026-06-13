import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Modal from '../components/ui/Modal';
import useStore from '../store/useStore';
import { INGREDIENTS, getIngredient } from '../data/ingredients';
import { getRecipeById } from '../data/recipes';
import { getWeekKey } from '../utils/helpers';

const serif = { fontFamily: "'Playfair Display', serif" };

const STATUSES = [
  { id: 'loved', label: 'Loved it', emoji: '😍', color: '#7C9A7E' },
  { id: 'tried', label: 'Tried it', emoji: '🙂', color: '#D4A847' },
  { id: 'disliked', label: 'Not a fan', emoji: '😖', color: '#C4704F' },
  { id: 'reaction', label: 'Reaction', emoji: '⚠️', color: '#DC2626' },
];

const statusMeta = (id) => STATUSES.find((s) => s.id === id);

export default function Foods() {
  const profile = useStore((s) => s.profile);
  const foodLog = useStore((s) => s.foodLog);
  const logFood = useStore((s) => s.logFood);
  const removeFoodLog = useStore((s) => s.removeFoodLog);
  const plan = useStore((s) => s.plan);
  const customRecipes = useStore((s) => s.customRecipes);

  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null); // ingredient id
  const [note, setNote] = useState('');

  const allIds = Object.keys(INGREDIENTS);
  const triedCount = allIds.filter((id) => foodLog[id]).length;

  // Ingredients coming up in this week's plan that haven't been logged yet
  const upcoming = useMemo(() => {
    const weekPlan = plan[getWeekKey()] || {};
    const ids = new Set();
    Object.values(weekPlan).forEach((day) =>
      Object.values(day || {}).forEach((recipeId) => {
        const r = getRecipeById(recipeId, customRecipes);
        (r?.ingredients || []).forEach((i) => ids.add(i.id));
      })
    );
    return [...ids].filter((id) => !foodLog[id] && INGREDIENTS[id]);
  }, [plan, customRecipes, foodLog]);

  const filtered = useMemo(() => {
    let ids = allIds;
    if (search.trim()) {
      const q = search.toLowerCase();
      ids = ids.filter((id) => INGREDIENTS[id].name.toLowerCase().includes(q));
    }
    // Logged foods first (most recent), then alphabetical
    return ids.sort((a, b) => {
      const la = foodLog[a];
      const lb = foodLog[b];
      if (!!la !== !!lb) return la ? -1 : 1;
      if (la && lb && la.date !== lb.date) return lb.date.localeCompare(la.date);
      return INGREDIENTS[a].name.localeCompare(INGREDIENTS[b].name);
    });
  }, [search, foodLog, allIds]);

  const openEditor = (id) => {
    setEditing(id);
    setNote(foodLog[id]?.note || '');
  };

  const setStatus = (status) => {
    logFood(editing, status, note);
    if (status !== 'reaction') setEditing(null);
  };

  return (
    <div className="mx-auto max-w-2xl pb-6">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold" style={serif}>
          {profile.babyName ? `${profile.babyName}'s food diary` : 'Food diary'}
        </h1>
        <p className="mt-1 text-sm text-[#1A2B3C]/55">
          Track every first taste — {triedCount} of {allIds.length} foods explored
        </p>
      </div>

      {/* Progress ring strip */}
      <div className="mb-5 rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between text-sm font-semibold">
          <span>Food explorer progress</span>
          <span className="text-[#7C9A7E]">{Math.round((triedCount / allIds.length) * 100)}%</span>
        </div>
        <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-[#FDF6EC]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#7C9A7E] to-[#D4A847] transition-all duration-500"
            style={{ width: `${(triedCount / allIds.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Upcoming new foods */}
      {upcoming.length > 0 && (
        <div className="mb-5 rounded-2xl bg-[#D4A847]/10 p-5">
          <h3 className="text-sm font-bold text-[#9a7b2e]">✨ New foods coming up this week</h3>
          <p className="mt-0.5 text-xs text-[#9a7b2e]/70">From your meal plan — tap to log once tasted</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {upcoming.map((id) => {
              const info = getIngredient(id);
              return (
                <button
                  key={id}
                  onClick={() => openEditor(id)}
                  className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-[#1A2B3C]/75 shadow-sm transition hover:shadow"
                >
                  {info.emoji} {info.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A2B3C]/35" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search foods…"
          className="w-full rounded-2xl border border-[#1A2B3C]/8 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-[#C4704F]/50"
        />
      </div>

      <ul className="space-y-1.5">
        {filtered.map((id) => {
          const info = INGREDIENTS[id];
          const log = foodLog[id];
          const meta = log && statusMeta(log.status);
          return (
            <li key={id}>
              <button
                onClick={() => openEditor(id)}
                className="flex w-full items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left shadow-sm transition hover:shadow"
              >
                <span className="text-xl">{info.emoji}</span>
                <span className="flex-1">
                  <span className="block text-sm font-medium text-[#1A2B3C]/85">{info.name}</span>
                  {log?.note && <span className="block text-xs text-red-500">{log.note}</span>}
                </span>
                {meta ? (
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: `${meta.color}18`, color: meta.color }}
                  >
                    {meta.emoji} {meta.label}
                  </span>
                ) : (
                  <span className="rounded-full bg-[#1A2B3C]/5 px-3 py-1 text-xs text-[#1A2B3C]/40">
                    Not tried
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Status editor modal */}
      <Modal
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing ? `${getIngredient(editing).emoji} ${getIngredient(editing).name}` : ''}
      >
        {editing && (
          <div className="pb-2">
            <p className="mb-4 text-sm text-[#1A2B3C]/60">How did it go?</p>
            <div className="grid grid-cols-2 gap-2.5">
              {STATUSES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStatus(s.id)}
                  className={`rounded-2xl border-2 px-4 py-4 text-sm font-semibold transition ${
                    foodLog[editing]?.status === s.id ? 'shadow-md' : ''
                  }`}
                  style={{
                    borderColor: foodLog[editing]?.status === s.id ? s.color : '#1A2B3C14',
                    backgroundColor: foodLog[editing]?.status === s.id ? `${s.color}14` : 'white',
                    color: s.color,
                  }}
                >
                  <span className="block text-2xl">{s.emoji}</span>
                  {s.label}
                </button>
              ))}
            </div>
            <label className="mt-4 block text-xs font-semibold text-[#1A2B3C]/55">
              Notes (especially for reactions)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. small rash around mouth, spoke to GP"
              rows={2}
              className="mt-1.5 w-full resize-none rounded-2xl border border-[#1A2B3C]/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#C4704F]/60"
            />
            <div className="mt-3 flex justify-between">
              {foodLog[editing] && (
                <button
                  onClick={() => {
                    removeFoodLog(editing);
                    setEditing(null);
                  }}
                  className="text-xs font-medium text-[#1A2B3C]/45 hover:text-red-500"
                >
                  Clear entry
                </button>
              )}
              <button
                onClick={() => {
                  if (foodLog[editing]) logFood(editing, foodLog[editing].status, note);
                  setEditing(null);
                }}
                className="ml-auto rounded-full bg-[#1A2B3C] px-6 py-2.5 text-sm font-semibold text-white"
              >
                Done
              </button>
            </div>
            {foodLog[editing]?.status === 'reaction' && (
              <p className="mt-3 rounded-xl bg-red-50 p-3 text-xs text-red-600">
                If your baby shows signs of a serious allergic reaction (swelling, difficulty
                breathing), call 999. For milder reactions, speak to your GP or health visitor.
              </p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
