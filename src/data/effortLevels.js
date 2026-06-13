// Effort level metadata for the playful effort badges.
// Replaces numeric prep times with food-pun difficulty indicators.

export const EFFORT_LEVELS = {
  easy: {
    id: 'easy',
    label: 'Easy PEA-sy',
    emoji: '🫛',
    color: '#2E7D32',
    bg: '#E8F5E9',
    border: '#A5D6A7',
  },
  medium: {
    id: 'medium',
    label: 'Manag-APPLE',
    emoji: '🍏',
    color: '#E65100',
    bg: '#FFF3E0',
    border: '#FFCC80',
  },
  hard: {
    id: 'hard',
    label: 'MASH-ellin Star',
    emoji: '⭐',
    color: '#C62828',
    bg: '#FFEBEE',
    border: '#EF9A9A',
  },
};

export function getEffort(id) {
  return EFFORT_LEVELS[id] || EFFORT_LEVELS.medium;
}
