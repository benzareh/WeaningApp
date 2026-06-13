import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// All app state lives here and persists to localStorage. The shape is kept
// flat and serialisable so a future move to a backend (e.g. Supabase for
// shared logins) only needs to swap the persistence layer.

const useStore = create(
  persist(
    (set, get) => ({
      // ── Baby profile / onboarding ────────────────────────────
      profile: {
        onboarded: false,
        babyName: '',
        dob: '',
        allergies: [],
        breakfastEnabled: false,
      },
      setProfile: (updates) =>
        set((s) => ({ profile: { ...s.profile, ...updates } })),
      completeOnboarding: (data) =>
        set((s) => ({ profile: { ...s.profile, ...data, onboarded: true } })),

      // ── Weekly meal plan ─────────────────────────────────────
      // plan[weekKey][dayIndex][slot] = recipeId
      plan: {},
      assignMeal: (weekKey, dayIndex, slot, recipeId) =>
        set((s) => ({
          plan: {
            ...s.plan,
            [weekKey]: {
              ...s.plan[weekKey],
              [dayIndex]: { ...s.plan[weekKey]?.[dayIndex], [slot]: recipeId },
            },
          },
        })),
      clearMeal: (weekKey, dayIndex, slot) =>
        set((s) => {
          const day = { ...s.plan[weekKey]?.[dayIndex] };
          delete day[slot];
          return {
            plan: {
              ...s.plan,
              [weekKey]: { ...s.plan[weekKey], [dayIndex]: day },
            },
          };
        }),
      clearWeek: (weekKey) =>
        set((s) => {
          const plan = { ...s.plan };
          delete plan[weekKey];
          return { plan };
        }),
      setWeekPlan: (weekKey, weekPlan) =>
        set((s) => ({ plan: { ...s.plan, [weekKey]: weekPlan } })),

      // ── Shopping list check-offs ─────────────────────────────
      // checked[weekKey] = [ingredientId, …]
      checked: {},
      toggleChecked: (weekKey, ingredientId) =>
        set((s) => {
          const list = s.checked[weekKey] || [];
          const next = list.includes(ingredientId)
            ? list.filter((i) => i !== ingredientId)
            : [...list, ingredientId];
          return { checked: { ...s.checked, [weekKey]: next } };
        }),
      resetChecked: (weekKey) =>
        set((s) => ({ checked: { ...s.checked, [weekKey]: [] } })),

      // ── Food tracker ─────────────────────────────────────────
      // foodLog[ingredientId] = { status: 'tried'|'loved'|'disliked'|'reaction', note, date }
      foodLog: {},
      logFood: (ingredientId, status, note = '') =>
        set((s) => ({
          foodLog: {
            ...s.foodLog,
            [ingredientId]: { status, note, date: new Date().toISOString().slice(0, 10) },
          },
        })),
      removeFoodLog: (ingredientId) =>
        set((s) => {
          const foodLog = { ...s.foodLog };
          delete foodLog[ingredientId];
          return { foodLog };
        }),

      // ── Custom recipes ───────────────────────────────────────
      customRecipes: [],
      addCustomRecipe: (recipe) =>
        set((s) => ({ customRecipes: [...s.customRecipes, recipe] })),
      deleteCustomRecipe: (id) =>
        set((s) => ({
          customRecipes: s.customRecipes.filter((r) => r.id !== id),
        })),

      // ── Favourites ───────────────────────────────────────────
      favourites: [],
      toggleFavourite: (id) =>
        set((s) => ({
          favourites: s.favourites.includes(id)
            ? s.favourites.filter((f) => f !== id)
            : [...s.favourites, id],
        })),

      // ── Danger zone ──────────────────────────────────────────
      resetAll: () =>
        set({
          profile: { onboarded: false, babyName: '', dob: '', allergies: [], breakfastEnabled: false },
          plan: {},
          checked: {},
          foodLog: {},
          customRecipes: [],
          favourites: [],
        }),
    }),
    { name: 'little-spoons-storage' }
  )
);

export default useStore;
