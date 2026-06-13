import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Trash2, CalendarPlus } from 'lucide-react';
import RecipeImage from '../components/ui/RecipeImage';
import { StageBadge, AllergenBadge, TimeBadge } from '../components/ui/Badge';
import { getRecipeById } from '../data/recipes';
import { getIngredient } from '../data/ingredients';
import { ALLERGENS } from '../data/allergens';
import { getStage } from '../utils/helpers';
import useStore from '../store/useStore';

const serif = { fontFamily: "'Playfair Display', serif" };

function StepList({ part, icon, accent }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2.5">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl text-xl" style={{ backgroundColor: `${accent}18` }}>
          {icon}
        </span>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: accent }}>
            {icon === '🥄' ? 'Spoon · puree' : 'Hands · finger food'}
          </div>
          <h3 className="font-semibold leading-tight" style={serif}>{part.name}</h3>
        </div>
      </div>
      <ol className="mt-5 space-y-3.5">
        {part.steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#1A2B3C]/75">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: accent }}
            >
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const customRecipes = useStore((s) => s.customRecipes);
  const favourites = useStore((s) => s.favourites);
  const toggleFavourite = useStore((s) => s.toggleFavourite);
  const deleteCustomRecipe = useStore((s) => s.deleteCustomRecipe);
  const allergies = useStore((s) => s.profile.allergies);

  const recipe = getRecipeById(id, customRecipes);

  if (!recipe) {
    return (
      <div className="py-20 text-center">
        <p className="text-[#1A2B3C]/60">Recipe not found.</p>
        <Link to="/app/recipes" className="mt-3 inline-block text-sm font-semibold text-[#C4704F]">
          ← Back to recipes
        </Link>
      </div>
    );
  }

  const fav = favourites.includes(recipe.id);
  const conflicts = (recipe.allergens || []).filter((a) => allergies.includes(a));

  const handleDelete = () => {
    if (window.confirm(`Delete "${recipe.title}"? This can't be undone.`)) {
      deleteCustomRecipe(recipe.id);
      navigate('/app/recipes');
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-1.5 text-sm font-semibold text-[#1A2B3C]/55 transition hover:text-[#1A2B3C]"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="relative">
          <RecipeImage recipe={recipe} className="h-56 sm:h-72" />
          <div className="absolute left-4 top-4">
            <TimeBadge minutes={recipe.time} />
          </div>
          <button
            onClick={() => toggleFavourite(recipe.id)}
            className={`absolute right-4 top-4 rounded-full p-2.5 shadow transition ${
              fav ? 'bg-[#C4704F] text-white' : 'bg-white/90 text-[#1A2B3C]/40'
            }`}
            aria-label="Toggle favourite"
          >
            <Heart size={18} fill={fav ? 'currentColor' : 'none'} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-1.5">
            {recipe.stages.map((s) => <StageBadge key={s} stage={getStage(s)} />)}
            {recipe.isCustom && (
              <span className="rounded-full bg-[#8FAADC]/15 px-2.5 py-1 text-xs font-medium text-[#5b79b3]">
                ✨ Your recipe
              </span>
            )}
          </div>
          <h1 className="mt-3 text-3xl font-semibold" style={serif}>{recipe.title}</h1>
          {recipe.intro && <p className="mt-2 text-[#1A2B3C]/60">{recipe.intro}</p>}

          {conflicts.length > 0 && (
            <div className="mt-4 rounded-2xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
              ⚠️ <strong>Heads up:</strong> this recipe contains{' '}
              {conflicts.map((c) => ALLERGENS.find((a) => a.id === c)?.label || c).join(', ')} — listed
              in your baby&apos;s allergies.
            </div>
          )}
        </div>
      </div>

      {/* Ingredients */}
      <div className="mt-5 rounded-3xl bg-white p-6 shadow-sm">
        <h3 className="font-semibold" style={serif}>🧺 Ingredients</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {(recipe.ingredients || []).map((ing) => {
            const info = getIngredient(ing.id);
            return (
              <li key={ing.id} className="flex items-center gap-2.5 rounded-xl bg-[#FDF6EC] px-3.5 py-2.5 text-sm">
                <span>{info.emoji}</span>
                <span className="flex-1 font-medium text-[#1A2B3C]/80">{ing.name || info.name}</span>
                <span className="text-xs text-[#1A2B3C]/50">{ing.qty}</span>
              </li>
            );
          })}
        </ul>
        {(recipe.allergens || []).length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {recipe.allergens.map((a) => (
              <AllergenBadge
                key={a}
                label={ALLERGENS.find((x) => x.id === a)?.label || a}
                conflict={allergies.includes(a)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Two parts */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <StepList part={recipe.puree} icon="🥄" accent="#C4704F" />
        <StepList part={recipe.finger} icon="✋" accent="#7C9A7E" />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pb-8">
        <Link
          to="/app/planner"
          className="flex items-center gap-2 rounded-full bg-[#1A2B3C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2a3f54]"
        >
          <CalendarPlus size={16} /> Add to this week&apos;s plan
        </Link>
        {recipe.isCustom && (
          <button
            onClick={handleDelete}
            className="flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            <Trash2 size={15} /> Delete recipe
          </button>
        )}
      </div>
    </div>
  );
}
