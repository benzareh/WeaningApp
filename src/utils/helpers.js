import { AGE_STAGES } from '../data/allergens';

// ── Dates & weeks ────────────────────────────────────────────────

export const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const DAY_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

/** Monday of the week containing `date`, as YYYY-MM-DD (the planner's week key). */
export function getWeekKey(date = new Date()) {
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7; // Mon=0 … Sun=6
  d.setDate(d.getDate() - day);
  return d.toISOString().slice(0, 10);
}

export function addWeeks(weekKey, n) {
  const d = new Date(weekKey + 'T12:00:00');
  d.setDate(d.getDate() + n * 7);
  return getWeekKey(d);
}

export function formatWeekLabel(weekKey) {
  const start = new Date(weekKey + 'T12:00:00');
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const opts = { day: 'numeric', month: 'short' };
  return `${start.toLocaleDateString('en-GB', opts)} – ${end.toLocaleDateString('en-GB', opts)}`;
}

export function isCurrentWeek(weekKey) {
  return weekKey === getWeekKey();
}

// ── Baby age & stages ────────────────────────────────────────────

export function ageInMonths(dob) {
  if (!dob) return null;
  const birth = new Date(dob);
  const now = new Date();
  let months = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
  if (now.getDate() < birth.getDate()) months -= 1;
  return Math.max(0, months);
}

export function stageForAge(months) {
  if (months == null) return null;
  if (months < 6) return 'stage1';
  if (months < 9) return 'stage2';
  return 'stage3';
}

export function getStage(stageId) {
  return AGE_STAGES.find((s) => s.id === stageId);
}

export function formatAge(months) {
  if (months == null) return '';
  if (months < 12) return `${months} month${months === 1 ? '' : 's'}`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem ? `${years}y ${rem}m` : `${years} year${years === 1 ? '' : 's'}`;
}

// ── Ingredient overlap ───────────────────────────────────────────

export function ingredientIds(recipe) {
  return (recipe?.ingredients || []).map((i) => i.id);
}

/** How many ingredients `recipe` shares with the given list of recipes. */
export function overlapScore(recipe, plannedRecipes) {
  const planned = new Set(plannedRecipes.flatMap(ingredientIds));
  return ingredientIds(recipe).filter((id) => planned.has(id)).length;
}

/** Ingredient ids that `recipe` shares with the planned recipes. */
export function sharedIngredients(recipe, plannedRecipes) {
  const planned = new Set(plannedRecipes.flatMap(ingredientIds));
  return ingredientIds(recipe).filter((id) => planned.has(id));
}

/** True if the recipe contains any of the baby's allergens. */
export function hasAllergenConflict(recipe, allergies = []) {
  return (recipe.allergens || []).some((a) => allergies.includes(a));
}

// ── Image compression for custom recipe photos ──────────────────

export function compressImage(file, maxSize = 700, quality = 0.78) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function uid() {
  return `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
