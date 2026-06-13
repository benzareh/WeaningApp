import { useState } from 'react';

// Recipe photo with a graceful fallback: if the remote image fails (offline,
// dead URL) we render the recipe's gradient + emoji so cards never look broken.
export default function RecipeImage({ recipe, className = '', rounded = '' }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const showFallback = failed || !recipe.image;

  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${recipe.gradient?.[0] || '#F2A5A5'}, ${recipe.gradient?.[1] || '#C4704F'})` }}
      >
        <span className="text-5xl drop-shadow-lg" role="img" aria-label={recipe.title}>
          {recipe.emoji || '🥄'}
        </span>
      </div>
      {!showFallback && (
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
}
