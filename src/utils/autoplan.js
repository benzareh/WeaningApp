import { getAllRecipes } from '../data/recipes';
import { overlapScore, hasAllergenConflict } from './helpers';

// Greedy auto-planner: fills every empty slot in the week, preferring
// recipes that share ingredients with what's already chosen, while
// limiting any single recipe to two appearances for variety.
export function autoPlanWeek({ existingPlan = {}, slots, babyStage, allergies, customRecipes }) {
  const all = getAllRecipes(customRecipes).filter(
    (r) => !hasAllergenConflict(r, allergies) && (!babyStage || r.stages.includes(babyStage))
  );

  const plan = JSON.parse(JSON.stringify(existingPlan));
  const chosen = [];

  // Seed `chosen` with recipes already planned so overlap builds on them
  for (const day of Object.values(plan)) {
    for (const id of Object.values(day || {})) {
      const r = all.find((x) => x.id === id) || getAllRecipes(customRecipes).find((x) => x.id === id);
      if (r) chosen.push(r);
    }
  }

  const usage = {};
  chosen.forEach((r) => (usage[r.id] = (usage[r.id] || 0) + 1));

  for (let day = 0; day < 7; day++) {
    for (const slot of slots) {
      if (plan[day]?.[slot]) continue;

      const candidates = all
        .filter((r) => (!r.meals || r.meals.includes(slot)) && (usage[r.id] || 0) < 2)
        .filter((r) => plan[day] === undefined || !Object.values(plan[day]).includes(r.id))
        .map((r) => ({ r, score: overlapScore(r, chosen) - (usage[r.id] || 0) * 2 }))
        .sort((a, b) => b.score - a.score);

      if (!candidates.length) continue;

      // Pick randomly among the top few so each "magic fill" feels fresh
      const pool = candidates.slice(0, Math.min(3, candidates.length));
      const pick = pool[Math.floor(Math.random() * pool.length)].r;

      plan[day] = { ...plan[day], [slot]: pick.id };
      chosen.push(pick);
      usage[pick.id] = (usage[pick.id] || 0) + 1;
    }
  }

  return plan;
}
