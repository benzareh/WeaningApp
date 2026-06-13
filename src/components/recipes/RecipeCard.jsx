import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import RecipeImage from '../ui/RecipeImage';
import { StageBadge, TimeBadge, OverlapBadge } from '../ui/Badge';
import { getStage, hasAllergenConflict } from '../../utils/helpers';
import useStore from '../../store/useStore';

const serif = { fontFamily: "'Playfair Display', serif" };

export default function RecipeCard({ recipe, overlap = 0 }) {
  const allergies = useStore((s) => s.profile.allergies);
  const favourites = useStore((s) => s.favourites);
  const toggleFavourite = useStore((s) => s.toggleFavourite);
  const conflict = hasAllergenConflict(recipe, allergies);
  const fav = favourites.includes(recipe.id);

  return (
    <Link
      to={`/app/recipes/${recipe.id}`}
      className="card-hover group block overflow-hidden rounded-3xl bg-white shadow-sm"
    >
      <div className="relative">
        <RecipeImage recipe={recipe} className="h-44" />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <TimeBadge minutes={recipe.time} />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavourite(recipe.id);
          }}
          className={`absolute right-3 top-3 rounded-full p-2 shadow-sm backdrop-blur transition ${
            fav ? 'bg-[#C4704F] text-white' : 'bg-white/90 text-[#1A2B3C]/40 hover:text-[#C4704F]'
          }`}
          aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
        >
          <Heart size={15} fill={fav ? 'currentColor' : 'none'} />
        </button>
        {conflict && (
          <div className="absolute bottom-0 inset-x-0 bg-red-500/90 px-3 py-1.5 text-center text-xs font-semibold text-white">
            ⚠️ Contains a listed allergen
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-1.5">
          {recipe.stages.map((s) => (
            <StageBadge key={s} stage={getStage(s)} small />
          ))}
          {recipe.isCustom && (
            <span className="rounded-full bg-[#8FAADC]/15 px-2 py-0.5 text-[10px] font-medium text-[#5b79b3]">
              ✨ Your recipe
            </span>
          )}
        </div>
        <h3 className="mt-2.5 font-semibold leading-snug text-[#1A2B3C]" style={serif}>
          {recipe.title}
        </h3>
        <div className="mt-2.5 space-y-1 text-xs text-[#1A2B3C]/55">
          <p className="line-clamp-1">🥄 {recipe.puree?.name}</p>
          <p className="line-clamp-1">✋ {recipe.finger?.name}</p>
        </div>
        {overlap > 0 && (
          <div className="mt-2.5">
            <OverlapBadge count={overlap} />
          </div>
        )}
      </div>
    </Link>
  );
}
