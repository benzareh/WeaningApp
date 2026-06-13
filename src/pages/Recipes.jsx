import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Heart } from 'lucide-react';
import RecipeCard from '../components/recipes/RecipeCard';
import { getAllRecipes } from '../data/recipes';
import { AGE_STAGES } from '../data/allergens';
import { ageInMonths, stageForAge, hasAllergenConflict } from '../utils/helpers';
import useStore from '../store/useStore';

const serif = { fontFamily: "'Playfair Display', serif" };

const MEAL_FILTERS = [
  { id: 'all', label: 'All meals' },
  { id: 'breakfast', label: '🌅 Breakfast' },
  { id: 'lunch', label: '☀️ Lunch' },
  { id: 'dinner', label: '🌙 Dinner' },
];

export default function Recipes() {
  const profile = useStore((s) => s.profile);
  const customRecipes = useStore((s) => s.customRecipes);
  const favourites = useStore((s) => s.favourites);

  const babyStage = stageForAge(ageInMonths(profile.dob));
  const [stageFilter, setStageFilter] = useState(babyStage || 'all');
  const [mealFilter, setMealFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [favsOnly, setFavsOnly] = useState(false);
  const [hideAllergens, setHideAllergens] = useState(true);

  const recipes = useMemo(() => {
    let list = getAllRecipes(customRecipes);
    if (stageFilter !== 'all') list = list.filter((r) => r.stages.includes(stageFilter));
    if (mealFilter !== 'all') list = list.filter((r) => (r.meals || []).includes(mealFilter));
    if (favsOnly) list = list.filter((r) => favourites.includes(r.id));
    if (hideAllergens && profile.allergies.length) {
      list = list.filter((r) => !hasAllergenConflict(r, profile.allergies));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          (r.ingredients || []).some((i) => i.id.replace(/-/g, ' ').includes(q))
      );
    }
    return list;
  }, [customRecipes, stageFilter, mealFilter, search, favsOnly, hideAllergens, favourites, profile.allergies]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold" style={serif}>Recipes</h1>
          <p className="mt-1 text-sm text-[#1A2B3C]/55">
            Every recipe = one spoonable puree + one finger food
          </p>
        </div>
        <Link
          to="/app/recipes/new"
          className="flex items-center gap-1.5 rounded-full bg-[#C4704F] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#C4704F]/25 transition hover:bg-[#b06343]"
        >
          <Plus size={16} /> Add recipe
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A2B3C]/35" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes or ingredients…"
          className="w-full rounded-2xl border border-[#1A2B3C]/8 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#C4704F]/50"
        />
      </div>

      {/* Stage filter */}
      <div className="scrollbar-hide -mx-4 mb-3 flex gap-2 overflow-x-auto px-4">
        <button
          onClick={() => setStageFilter('all')}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
            stageFilter === 'all' ? 'bg-[#1A2B3C] text-white' : 'bg-white text-[#1A2B3C]/60'
          }`}
        >
          All stages
        </button>
        {AGE_STAGES.map((s) => (
          <button
            key={s.id}
            onClick={() => setStageFilter(s.id)}
            className="shrink-0 rounded-full px-4 py-2 text-sm font-medium transition"
            style={
              stageFilter === s.id
                ? { backgroundColor: s.color, color: 'white' }
                : { backgroundColor: 'white', color: '#1A2B3Caa' }
            }
          >
            {s.emoji} {s.ageRange}
            {s.id === babyStage && ' · current'}
          </button>
        ))}
      </div>

      {/* Meal + toggles */}
      <div className="scrollbar-hide -mx-4 mb-6 flex items-center gap-2 overflow-x-auto px-4">
        {MEAL_FILTERS.map((m) => (
          <button
            key={m.id}
            onClick={() => setMealFilter(m.id)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
              mealFilter === m.id ? 'bg-[#7C9A7E] text-white' : 'bg-white text-[#1A2B3C]/55'
            }`}
          >
            {m.label}
          </button>
        ))}
        <button
          onClick={() => setFavsOnly(!favsOnly)}
          className={`flex shrink-0 items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
            favsOnly ? 'bg-[#C4704F] text-white' : 'bg-white text-[#1A2B3C]/55'
          }`}
        >
          <Heart size={12} fill={favsOnly ? 'currentColor' : 'none'} /> Favourites
        </button>
        {profile.allergies.length > 0 && (
          <button
            onClick={() => setHideAllergens(!hideAllergens)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
              hideAllergens ? 'bg-red-500 text-white' : 'bg-white text-[#1A2B3C]/55'
            }`}
          >
            🛡️ {hideAllergens ? 'Allergens hidden' : 'Show allergens'}
          </button>
        )}
      </div>

      {recipes.length === 0 ? (
        <div className="rounded-3xl bg-white py-16 text-center">
          <div className="text-4xl">🍽️</div>
          <p className="mt-3 font-medium text-[#1A2B3C]/60">No recipes match those filters</p>
          <p className="mt-1 text-sm text-[#1A2B3C]/40">Try clearing the search or filters</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      )}
    </div>
  );
}
