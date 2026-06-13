import { supabase } from './supabase';

// One row per family in the `family_data` table:
//   { user_id (uuid, PK), data (jsonb), updated_at }
// Row Level Security ensures a user can only read/write their own row.

const TABLE = 'family_data';

// Fetch the family's saved document. Returns null if they have no row yet.
export async function loadFamilyData(userId) {
  const { data, error } = await supabase
    .from(TABLE)
    .select('data')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    console.error('Failed to load family data:', error.message);
    return null;
  }
  return data?.data ?? null;
}

// Upsert the family's document. Called (debounced) whenever state changes.
export async function saveFamilyData(userId, slice) {
  const { error } = await supabase
    .from(TABLE)
    .upsert(
      { user_id: userId, data: slice, updated_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    );

  if (error) console.error('Failed to save family data:', error.message);
  return !error;
}
