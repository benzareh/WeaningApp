import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Modal from '../ui/Modal';
import RecipeImage from '../ui/RecipeImage';
import { OverlapBadge, TimeBadge } from '../ui/Badge';
import { getAllRecipes } from '../../data/recipes';
import { overlapScore, hasAllergenConflict, ageInMonths, stageForAge } from '../../utils/helpers';
import useStore from '../../store/useStore';

// Modal picker for a planner slot. Recipes are ranked by how many
// ingredients they share with meals already planned this week — the heart
// of the "overlap" feature.
export default function RecipePicker({ open, onClose, onPick, slot, plannedRecipes }) {
  const profile = useStore((s) => s.profile);
  const customRecipes = useStore((s) => s.customRecipes);
  const [search, setSearch] = useState('');
  const [allStages, setAllStages] = useState(false);

  const babyStage = stageForAge(ageInMonths(profile.dob));

  const ranked = useMemo(() => {
    let list = getAllRecipes(customRecipes);
    if (slot) list = list.filter((r) => !r.meals || r.meals.includes(slot));
    if (babyStage && !allStages) list = list.filter((r) => r.stages.includes(babyStage));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((r) => r.title.toLowerCase().includes(q));
    }
    return list
      .map((r) => ({
        recipe: r,
        overlap: overlapScore(r, plannedRecipes),
        conflict: hasAllergenConflict(r, profile.allergies),
        timesPlanned: plannedRecipes.filter((p) => p.id === r.id).length,
      }))
      .sort((a, b) => {
        if (a.conflict !== b.conflict) return a.conflict ? 1 : -1;
        if (a.timesPlanned !== b.timesPlanned) return a.timesPlanned - b.timesPlanned;
        return b.overlap - a.overlap;
      });
  }, [customRecipes, slot, babyStage, allStages, search, plannedRecipes, profile.allergies]);

  return (
    <Modal open={open} onClose={onClose} title={`Pick a ${slot || 'meal'}`} wide>
      <div className="relative mb-3">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1A2B3C]/35" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes…"
          className="w-full rounded-xl border border-[#1A2B3C]/10 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#C4704F]/50"
        />
      </div>
      {babyStage && (
        <label className="mb-3 flex items-center gap-2 text-xs text-[#1A2B3C]/55">
          <input
            type="checkbox"
            checked={allStages}
            onChange={(e) => setAllStages(e.target.checked)}
            className="accent-[#C4704F]"
          />
          Show recipes from all stages (not just {profile.babyName}&apos;s current stage)
        </label>
      )}
      <p className="mb-3 text-xs text-[#1A2B3C]/45">
        🔗 Sorted by shared ingredients with this week&apos;s plan — pick high-overlap meals to shop less and waste less.
      </p>
      <div className="space-y-2.5">
        {ranked.length === 0 && (
          <p className="py-8 text-center text-sm text-[#1A2B3C]/50">No matching recipes.</p>
        )}
        {ranked.map(({ recipe, overlap, conflict, timesPlanned }) => (
          <button
            key={recipe.id}
            onClick={() => onPick(recipe.id)}
            className="flex w-full items-center gap-3 rounded-2xl bg-white p-2.5 text-left shadow-sm transition hover:shadow-md"
          >
            <RecipeImage recipe={recipe} className="h-16 w-16 shrink-0" rounded="rounded-xl" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-[#1A2B3C]">{recipe.title}</div>
              <div className="mt-1 flex flex-wrap items-center gap-1.5">
                <TimeBadge minutes={recipe.time} />
                <OverlapBadge count={overlap} />
                {timesPlanned > 0 && (
                  <span className="rounded-full bg-[#1A2B3C]/8 px-2 py-0.5 text-[10px] font-medium text-[#1A2B3C]/55">
                    Planned ×{timesPlanned}
                  </span>
                )}
                {conflict && (
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-600">
                    ⚠️ allergen
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </Modal>
  );
}
