import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, Trash2, X, ShoppingBasket } from 'lucide-react';
import RecipePicker from '../components/planner/RecipePicker';
import RecipeImage from '../components/ui/RecipeImage';
import useStore from '../store/useStore';
import { getAllRecipes, getRecipeById } from '../data/recipes';
import { autoPlanWeek } from '../utils/autoplan';
import {
  getWeekKey, addWeeks, formatWeekLabel, isCurrentWeek,
  DAY_NAMES, DAY_SHORT, ageInMonths, stageForAge, ingredientIds,
} from '../utils/helpers';

const serif = { fontFamily: "'Playfair Display', serif" };

const SLOT_META = {
  breakfast: { label: 'Breakfast', emoji: '🌅' },
  lunch: { label: 'Lunch', emoji: '☀️' },
  dinner: { label: 'Dinner', emoji: '🌙' },
};

export default function Planner() {
  const profile = useStore((s) => s.profile);
  const plan = useStore((s) => s.plan);
  const assignMeal = useStore((s) => s.assignMeal);
  const clearMeal = useStore((s) => s.clearMeal);
  const clearWeek = useStore((s) => s.clearWeek);
  const setWeekPlan = useStore((s) => s.setWeekPlan);
  const customRecipes = useStore((s) => s.customRecipes);

  const [weekKey, setWeekKey] = useState(getWeekKey());
  const [picker, setPicker] = useState(null); // { dayIndex, slot }

  const slots = profile.breakfastEnabled ? ['breakfast', 'lunch', 'dinner'] : ['lunch', 'dinner'];
  const weekPlan = plan[weekKey] || {};

  const plannedRecipes = useMemo(
    () =>
      Object.values(weekPlan)
        .flatMap((day) => Object.values(day || {}))
        .map((id) => getRecipeById(id, customRecipes))
        .filter(Boolean),
    [weekPlan, customRecipes]
  );

  // Weekly overlap stats: how many ingredients are reused across meals
  const stats = useMemo(() => {
    const counts = {};
    plannedRecipes.forEach((r) => {
      new Set(ingredientIds(r)).forEach((id) => (counts[id] = (counts[id] || 0) + 1));
    });
    const ids = Object.keys(counts);
    const shared = ids.filter((id) => counts[id] > 1);
    return { unique: ids.length, shared: shared.length, meals: plannedRecipes.length };
  }, [plannedRecipes]);

  const handleMagicFill = () => {
    const babyStage = stageForAge(ageInMonths(profile.dob));
    const filled = autoPlanWeek({
      existingPlan: weekPlan,
      slots,
      babyStage,
      allergies: profile.allergies,
      customRecipes,
    });
    setWeekPlan(weekKey, filled);
  };

  const handleClearWeek = () => {
    if (window.confirm('Clear all meals planned for this week?')) clearWeek(weekKey);
  };

  const today = new Date();
  const todayIndex = isCurrentWeek(weekKey) ? (today.getDay() + 6) % 7 : -1;

  return (
    <div className="pb-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold" style={serif}>
            {profile.babyName ? `${profile.babyName}'s week` : 'Meal planner'}
          </h1>
          <p className="mt-1 text-sm text-[#1A2B3C]/55">Tap any slot to choose a meal</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleMagicFill}
            className="flex items-center gap-1.5 rounded-full bg-[#7C9A7E] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7C9A7E]/25 transition hover:bg-[#6b8a6d]"
          >
            <Sparkles size={15} /> Magic fill
          </button>
          {plannedRecipes.length > 0 && (
            <button
              onClick={handleClearWeek}
              className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-[#1A2B3C]/55 transition hover:text-red-500"
            >
              <Trash2 size={15} /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Week navigation */}
      <div className="mb-5 flex items-center justify-between rounded-2xl bg-white p-2 shadow-sm">
        <button
          onClick={() => setWeekKey(addWeeks(weekKey, -1))}
          className="rounded-xl p-2.5 text-[#1A2B3C]/50 transition hover:bg-[#FDF6EC]"
          aria-label="Previous week"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="text-center">
          <div className="text-sm font-semibold">{formatWeekLabel(weekKey)}</div>
          {isCurrentWeek(weekKey) ? (
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#7C9A7E]">This week</div>
          ) : (
            <button onClick={() => setWeekKey(getWeekKey())} className="text-[10px] font-semibold text-[#C4704F] hover:underline">
              Jump to this week
            </button>
          )}
        </div>
        <button
          onClick={() => setWeekKey(addWeeks(weekKey, 1))}
          className="rounded-xl p-2.5 text-[#1A2B3C]/50 transition hover:bg-[#FDF6EC]"
          aria-label="Next week"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Overlap stats */}
      {stats.meals > 1 && (
        <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-1 rounded-2xl bg-[#7C9A7E]/10 px-5 py-3.5 text-sm text-[#5a7a5c]">
          <span className="font-semibold">🔗 Overlap report:</span>
          <span><strong>{stats.meals}</strong> meals planned</span>
          <span><strong>{stats.unique}</strong> ingredients to buy</span>
          <span><strong>{stats.shared}</strong> reused across meals</span>
          <Link to="/app/shopping" className="ml-auto flex items-center gap-1 font-semibold text-[#C4704F] hover:underline">
            <ShoppingBasket size={14} /> Shopping list →
          </Link>
        </div>
      )}

      {/* Days */}
      <div className="grid gap-4 md:grid-cols-2">
        {DAY_NAMES.map((dayName, dayIndex) => (
          <div
            key={dayName}
            className={`rounded-3xl bg-white p-4 shadow-sm ${todayIndex === dayIndex ? 'ring-2 ring-[#C4704F]/60' : ''}`}
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold" style={serif}>
                {dayName}
              </h3>
              {todayIndex === dayIndex && (
                <span className="rounded-full bg-[#C4704F]/12 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#C4704F]">
                  Today
                </span>
              )}
            </div>
            <div className="space-y-2">
              {slots.map((slot) => {
                const recipeId = weekPlan[dayIndex]?.[slot];
                const recipe = recipeId ? getRecipeById(recipeId, customRecipes) : null;
                const meta = SLOT_META[slot];
                return (
                  <div key={slot} className="flex items-center gap-2">
                    <span className="w-7 text-center text-sm" title={meta.label}>{meta.emoji}</span>
                    {recipe ? (
                      <div className="flex flex-1 items-center gap-2 overflow-hidden rounded-2xl bg-[#FDF6EC]">
                        <Link
                          to={`/app/recipes/${recipe.id}`}
                          className="flex flex-1 items-center gap-2.5 overflow-hidden py-1.5 pl-1.5"
                        >
                          <RecipeImage recipe={recipe} className="h-10 w-10 shrink-0" rounded="rounded-xl" />
                          <span className="truncate text-sm font-medium">{recipe.title}</span>
                        </Link>
                        <button
                          onClick={() => clearMeal(weekKey, dayIndex, slot)}
                          className="px-2.5 text-[#1A2B3C]/30 transition hover:text-red-500"
                          aria-label={`Remove ${meta.label}`}
                        >
                          <X size={15} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setPicker({ dayIndex, slot })}
                        className="flex-1 rounded-2xl border-2 border-dashed border-[#1A2B3C]/12 py-2.5 text-sm font-medium text-[#1A2B3C]/40 transition hover:border-[#C4704F]/50 hover:text-[#C4704F]"
                      >
                        + Add {meta.label.toLowerCase()}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <RecipePicker
        open={!!picker}
        onClose={() => setPicker(null)}
        slot={picker?.slot}
        plannedRecipes={plannedRecipes}
        onPick={(recipeId) => {
          assignMeal(weekKey, picker.dayIndex, picker.slot, recipeId);
          setPicker(null);
        }}
      />
    </div>
  );
}
