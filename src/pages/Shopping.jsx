import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import useStore from '../store/useStore';
import { getRecipeById } from '../data/recipes';
import { AISLES, getIngredient } from '../data/ingredients';
import { getWeekKey, addWeeks, formatWeekLabel, isCurrentWeek } from '../utils/helpers';

const serif = { fontFamily: "'Playfair Display', serif" };

export default function Shopping() {
  const plan = useStore((s) => s.plan);
  const checked = useStore((s) => s.checked);
  const toggleChecked = useStore((s) => s.toggleChecked);
  const resetChecked = useStore((s) => s.resetChecked);
  const customRecipes = useStore((s) => s.customRecipes);

  const [weekKey, setWeekKey] = useState(getWeekKey());
  const weekChecked = checked[weekKey] || [];

  // Aggregate every ingredient across the week's planned meals
  const { byAisle, totalItems, sharedCount } = useMemo(() => {
    const weekPlan = plan[weekKey] || {};
    const agg = {}; // id -> { name, emoji, aisle, qtys: [], recipes: Set }
    Object.values(weekPlan).forEach((day) =>
      Object.values(day || {}).forEach((recipeId) => {
        const recipe = getRecipeById(recipeId, customRecipes);
        if (!recipe) return;
        (recipe.ingredients || []).forEach((ing) => {
          const info = getIngredient(ing.id);
          if (!agg[ing.id]) {
            agg[ing.id] = {
              id: ing.id,
              name: ing.name || info.name,
              emoji: info.emoji,
              aisle: info.aisle,
              qtys: [],
              recipes: new Set(),
            };
          }
          if (ing.qty) agg[ing.id].qtys.push(ing.qty);
          agg[ing.id].recipes.add(recipe.title);
        });
      })
    );

    const items = Object.values(agg);
    const byAisle = AISLES.map((aisle) => ({
      ...aisle,
      items: items
        .filter((i) => i.aisle === aisle.id)
        .sort((a, b) => b.recipes.size - a.recipes.size || a.name.localeCompare(b.name)),
    })).filter((a) => a.items.length > 0);

    return {
      byAisle,
      totalItems: items.length,
      sharedCount: items.filter((i) => i.recipes.size > 1).length,
    };
  }, [plan, weekKey, customRecipes]);

  const doneCount = weekChecked.length;

  return (
    <div className="mx-auto max-w-2xl pb-6">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold" style={serif}>Shopping list</h1>
        <p className="mt-1 text-sm text-[#1A2B3C]/55">
          Built automatically from your week&apos;s plan, aisle by aisle
        </p>
      </div>

      {/* Week navigation */}
      <div className="mb-5 flex items-center justify-between rounded-2xl bg-white p-2 shadow-sm">
        <button onClick={() => setWeekKey(addWeeks(weekKey, -1))} className="rounded-xl p-2.5 text-[#1A2B3C]/50 hover:bg-[#FDF6EC]" aria-label="Previous week">
          <ChevronLeft size={18} />
        </button>
        <div className="text-center">
          <div className="text-sm font-semibold">{formatWeekLabel(weekKey)}</div>
          {isCurrentWeek(weekKey) && (
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#7C9A7E]">This week</div>
          )}
        </div>
        <button onClick={() => setWeekKey(addWeeks(weekKey, 1))} className="rounded-xl p-2.5 text-[#1A2B3C]/50 hover:bg-[#FDF6EC]" aria-label="Next week">
          <ChevronRight size={18} />
        </button>
      </div>

      {totalItems === 0 ? (
        <div className="rounded-3xl bg-white py-16 text-center shadow-sm">
          <div className="text-4xl">🧺</div>
          <p className="mt-3 font-medium text-[#1A2B3C]/60">Nothing on the list yet</p>
          <p className="mt-1 text-sm text-[#1A2B3C]/45">Plan some meals and they&apos;ll appear here</p>
          <Link
            to="/app/planner"
            className="mt-5 inline-block rounded-full bg-[#C4704F] px-6 py-2.5 text-sm font-semibold text-white"
          >
            Open the planner
          </Link>
        </div>
      ) : (
        <>
          {/* Progress + overlap summary */}
          <div className="mb-5 rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">
                {doneCount} of {totalItems} in the trolley
              </span>
              {doneCount > 0 && (
                <button
                  onClick={() => resetChecked(weekKey)}
                  className="flex items-center gap-1 text-xs font-medium text-[#1A2B3C]/45 hover:text-[#C4704F]"
                >
                  <RotateCcw size={12} /> Reset
                </button>
              )}
            </div>
            <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-[#FDF6EC]">
              <div
                className="h-full rounded-full bg-[#7C9A7E] transition-all duration-500"
                style={{ width: `${totalItems ? (doneCount / totalItems) * 100 : 0}%` }}
              />
            </div>
            {sharedCount > 0 && (
              <p className="mt-3 text-xs text-[#5a7a5c]">
                🔗 <strong>{sharedCount}</strong> of these ingredients are shared between meals — nice planning!
              </p>
            )}
          </div>

          <div className="space-y-5">
            {byAisle.map((aisle) => (
              <div key={aisle.id} className="rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1A2B3C]/55">
                  {aisle.emoji} {aisle.label}
                </h3>
                <ul className="space-y-1.5">
                  {aisle.items.map((item) => {
                    const done = weekChecked.includes(item.id);
                    const shared = item.recipes.size > 1;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => toggleChecked(weekKey, item.id)}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                            done ? 'bg-[#7C9A7E]/8' : 'hover:bg-[#FDF6EC]'
                          }`}
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 text-[10px] text-white transition ${
                              done ? 'border-[#7C9A7E] bg-[#7C9A7E]' : 'border-[#1A2B3C]/20'
                            }`}
                          >
                            {done && '✓'}
                          </span>
                          <span className="text-base">{item.emoji}</span>
                          <span className={`flex-1 text-sm font-medium ${done ? 'text-[#1A2B3C]/35 line-through' : 'text-[#1A2B3C]/85'}`}>
                            {item.name}
                            <span className="ml-2 text-xs font-normal text-[#1A2B3C]/40">
                              {item.qtys.join(' + ')}
                            </span>
                          </span>
                          {shared && (
                            <span
                              className="rounded-full bg-[#7C9A7E]/15 px-2 py-0.5 text-[10px] font-bold text-[#5a7a5c]"
                              title={[...item.recipes].join(', ')}
                            >
                              🔗 ×{item.recipes.size}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
