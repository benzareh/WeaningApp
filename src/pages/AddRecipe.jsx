import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Plus, X, Check } from 'lucide-react';
import { AGE_STAGES, ALLERGENS } from '../data/allergens';
import { INGREDIENTS } from '../data/ingredients';
import { EFFORT_LEVELS } from '../data/effortLevels';
import { compressImage, uid } from '../utils/helpers';
import useStore from '../store/useStore';

const serif = { fontFamily: "'Playfair Display', serif" };

const MEALS = [
  { id: 'breakfast', label: '🌅 Breakfast' },
  { id: 'lunch', label: '☀️ Lunch' },
  { id: 'dinner', label: '🌙 Dinner' },
];

const GRADIENTS = [
  ['#F2A5A5', '#C4704F'],
  ['#A8C5AA', '#7C9A7E'],
  ['#F5C99B', '#D4A847'],
  ['#9FA8DA', '#5C6BC0'],
];

const slugify = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function AddRecipe() {
  const navigate = useNavigate();
  const addCustomRecipe = useStore((s) => s.addCustomRecipe);
  const fileRef = useRef(null);

  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [stages, setStages] = useState(['stage2']);
  const [meals, setMeals] = useState(['lunch', 'dinner']);
  const [effort, setEffort] = useState('easy');
  const [pureeName, setPureeName] = useState('');
  const [pureeSteps, setPureeSteps] = useState('');
  const [fingerName, setFingerName] = useState('');
  const [fingerSteps, setFingerSteps] = useState('');
  const [allergens, setAllergens] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingInput, setIngInput] = useState('');
  const [qtyInput, setQtyInput] = useState('');
  const [saving, setSaving] = useState(false);

  const toggle = (setter) => (id) =>
    setter((arr) => (arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]));

  const handlePhoto = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setPhoto(await compressImage(file));
    } catch {
      alert('Sorry, that image couldn\'t be read. Try another photo.');
    }
  };

  // Match typed ingredient names against the catalogue for overlap detection
  const suggestions = ingInput.trim().length > 1
    ? Object.entries(INGREDIENTS)
        .filter(([, v]) => v.name.toLowerCase().includes(ingInput.toLowerCase()))
        .slice(0, 5)
    : [];

  const addIngredient = (id, name) => {
    const finalName = name || ingInput.trim();
    if (!finalName) return;
    const finalId = id || slugify(finalName);
    if (ingredients.some((i) => i.id === finalId)) return;
    setIngredients([...ingredients, { id: finalId, name: finalName, qty: qtyInput.trim() || '1' }]);
    setIngInput('');
    setQtyInput('');
  };

  const canSave = title.trim() && pureeName.trim() && fingerName.trim() && ingredients.length > 0;

  const save = () => {
    if (!canSave || saving) return;
    setSaving(true);
    const recipe = {
      id: uid(),
      isCustom: true,
      title: title.trim(),
      stages,
      meals,
      effort,
      emoji: '🍽️',
      gradient: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)],
      image: photo,
      intro: '',
      puree: {
        name: pureeName.trim(),
        steps: pureeSteps.split('\n').map((s) => s.trim()).filter(Boolean),
      },
      finger: {
        name: fingerName.trim(),
        steps: fingerSteps.split('\n').map((s) => s.trim()).filter(Boolean),
      },
      ingredients: ingredients.map(({ id, name, qty }) => ({ id, name, qty })),
      allergens,
      tags: ['your-recipe'],
    };
    addCustomRecipe(recipe);
    navigate(`/app/recipes/${recipe.id}`);
  };

  const inputCls =
    'w-full rounded-2xl border border-[#1A2B3C]/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C4704F]/60';

  return (
    <div className="mx-auto max-w-2xl pb-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-1.5 text-sm font-semibold text-[#1A2B3C]/55 hover:text-[#1A2B3C]"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <h1 className="text-3xl font-semibold" style={serif}>Add your recipe</h1>
      <p className="mt-1 text-sm text-[#1A2B3C]/55">
        Quick and easy — only the starred fields are required.
      </p>

      <div className="mt-6 space-y-6">
        {/* Photo */}
        <button
          onClick={() => fileRef.current?.click()}
          className="relative block h-48 w-full overflow-hidden rounded-3xl border-2 border-dashed border-[#1A2B3C]/15 bg-white transition hover:border-[#C4704F]/50"
        >
          {photo ? (
            <>
              <img src={photo} alt="Recipe" className="h-full w-full object-cover" />
              <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold shadow">
                Change photo
              </span>
            </>
          ) : (
            <span className="flex h-full flex-col items-center justify-center gap-2 text-[#1A2B3C]/45">
              <Camera size={28} />
              <span className="text-sm font-medium">Take or upload a photo</span>
              <span className="text-xs">It&apos;ll appear just like the built-in recipes</span>
            </span>
          )}
        </button>
        <input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handlePhoto} className="hidden" />

        {/* Title */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Recipe name *</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Nana's Veggie Mash" className={inputCls} />
        </div>

        {/* Stage + meals + time */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Suitable stages</label>
          <div className="flex flex-wrap gap-2">
            {AGE_STAGES.map((s) => (
              <button
                key={s.id}
                onClick={() => toggle(setStages)(s.id)}
                className="rounded-full px-4 py-2 text-sm font-medium transition"
                style={
                  stages.includes(s.id)
                    ? { backgroundColor: s.color, color: 'white' }
                    : { backgroundColor: 'white', color: '#1A2B3C99' }
                }
              >
                {s.emoji} {s.ageRange}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold">Good for</label>
            <div className="flex gap-2">
              {MEALS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => toggle(setMeals)(m.id)}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    meals.includes(m.id) ? 'bg-[#7C9A7E] text-white' : 'bg-white text-[#1A2B3C]/60'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Effort */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold">How much effort?</label>
          <div className="flex flex-wrap gap-2">
            {Object.values(EFFORT_LEVELS).map((lvl) => {
              const active = effort === lvl.id;
              return (
                <button
                  key={lvl.id}
                  onClick={() => setEffort(lvl.id)}
                  className="rounded-full px-4 py-2 text-sm font-semibold transition"
                  style={
                    active
                      ? { backgroundColor: lvl.bg, color: lvl.color, border: `1px solid ${lvl.border}` }
                      : { backgroundColor: 'white', color: '#1A2B3C99', border: '1px solid transparent' }
                  }
                >
                  {lvl.emoji} {lvl.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Ingredients */}
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <label className="mb-1.5 block text-sm font-semibold">Ingredients *</label>
          <p className="mb-3 text-xs text-[#1A2B3C]/50">
            Matching pantry ingredients link up with other recipes for overlap magic.
          </p>
          {ingredients.length > 0 && (
            <ul className="mb-3 space-y-1.5">
              {ingredients.map((ing) => (
                <li key={ing.id} className="flex items-center gap-2 rounded-xl bg-[#FDF6EC] px-3 py-2 text-sm">
                  <span>{INGREDIENTS[ing.id]?.emoji || '🥄'}</span>
                  <span className="flex-1 font-medium">{ing.name}</span>
                  <span className="text-xs text-[#1A2B3C]/50">{ing.qty}</span>
                  <button
                    onClick={() => setIngredients(ingredients.filter((i) => i.id !== ing.id))}
                    className="text-[#1A2B3C]/35 hover:text-red-500"
                    aria-label={`Remove ${ing.name}`}
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="relative flex gap-2">
            <div className="relative flex-1">
              <input
                value={ingInput}
                onChange={(e) => setIngInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addIngredient()}
                placeholder="Ingredient (e.g. carrot)"
                className={inputCls}
              />
              {suggestions.length > 0 && (
                <div className="absolute inset-x-0 top-full z-10 mt-1 overflow-hidden rounded-2xl border border-[#1A2B3C]/8 bg-white shadow-lg">
                  {suggestions.map(([id, v]) => (
                    <button
                      key={id}
                      onClick={() => addIngredient(id, v.name)}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm hover:bg-[#FDF6EC]"
                    >
                      <span>{v.emoji}</span> {v.name}
                      <span className="ml-auto text-[10px] text-[#7C9A7E]">🔗 links up</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <input
              value={qtyInput}
              onChange={(e) => setQtyInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addIngredient()}
              placeholder="Qty"
              className="w-20 rounded-2xl border border-[#1A2B3C]/10 bg-white px-3 py-3 text-sm outline-none focus:border-[#C4704F]/60"
            />
            <button
              onClick={() => addIngredient()}
              className="rounded-2xl bg-[#1A2B3C] px-4 text-white transition hover:bg-[#2a3f54]"
              aria-label="Add ingredient"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>

        {/* Puree part */}
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xl">🥄</span>
            <span className="text-sm font-bold uppercase tracking-widest text-[#C4704F]">Puree element *</span>
          </div>
          <input value={pureeName} onChange={(e) => setPureeName(e.target.value)} placeholder="e.g. Creamy veggie mash" className={inputCls} />
          <textarea
            value={pureeSteps}
            onChange={(e) => setPureeSteps(e.target.value)}
            placeholder={'Steps — one per line (optional)\ne.g. Steam the veg for 10 minutes'}
            rows={3}
            className={`${inputCls} mt-2 resize-none`}
          />
        </div>

        {/* Finger part */}
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xl">✋</span>
            <span className="text-sm font-bold uppercase tracking-widest text-[#7C9A7E]">Finger food element *</span>
          </div>
          <input value={fingerName} onChange={(e) => setFingerName(e.target.value)} placeholder="e.g. Soft carrot batons" className={inputCls} />
          <textarea
            value={fingerSteps}
            onChange={(e) => setFingerSteps(e.target.value)}
            placeholder="Steps — one per line (optional)"
            rows={3}
            className={`${inputCls} mt-2 resize-none`}
          />
        </div>

        {/* Allergens */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold">Contains allergens?</label>
          <div className="flex flex-wrap gap-2">
            {ALLERGENS.map((a) => (
              <button
                key={a.id}
                onClick={() => toggle(setAllergens)(a.id)}
                className={`rounded-full px-3.5 py-2 text-xs font-medium transition ${
                  allergens.includes(a.id) ? 'bg-amber-500 text-white' : 'bg-white text-[#1A2B3C]/60'
                }`}
              >
                {a.emoji} {a.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={save}
          disabled={!canSave}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C4704F] py-4 text-base font-semibold text-white shadow-lg shadow-[#C4704F]/25 transition enabled:hover:bg-[#b06343] disabled:opacity-40"
        >
          <Check size={18} /> Save recipe
        </button>
        {!canSave && (
          <p className="text-center text-xs text-[#1A2B3C]/45">
            Add a name, at least one ingredient, and both the puree & finger food names.
          </p>
        )}
      </div>
    </div>
  );
}
