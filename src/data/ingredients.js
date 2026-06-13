// Canonical ingredient catalogue. Every recipe references these by id so the
// app can detect overlap between meals and build aggregated shopping lists.
// Aisles match a typical UK supermarket layout.

export const AISLES = [
  { id: 'fruit-veg', label: 'Fruit & Veg', emoji: '🥕' },
  { id: 'meat-fish', label: 'Meat & Fish', emoji: '🍗' },
  { id: 'dairy-eggs', label: 'Dairy & Eggs', emoji: '🥛' },
  { id: 'bakery', label: 'Bakery', emoji: '🍞' },
  { id: 'cupboard', label: 'Food Cupboard', emoji: '🥫' },
  { id: 'frozen', label: 'Frozen', emoji: '🧊' },
];

export const INGREDIENTS = {
  // ── Fruit & Veg ────────────────────────────────────────────────
  'sweet-potato':   { name: 'Sweet potato', emoji: '🍠', aisle: 'fruit-veg' },
  'potato':         { name: 'Potato', emoji: '🥔', aisle: 'fruit-veg' },
  'carrot':         { name: 'Carrot', emoji: '🥕', aisle: 'fruit-veg' },
  'parsnip':        { name: 'Parsnip', emoji: '🥕', aisle: 'fruit-veg' },
  'swede':          { name: 'Swede', emoji: '🥔', aisle: 'fruit-veg' },
  'butternut':      { name: 'Butternut squash', emoji: '🎃', aisle: 'fruit-veg' },
  'broccoli':       { name: 'Broccoli', emoji: '🥦', aisle: 'fruit-veg' },
  'cauliflower':    { name: 'Cauliflower', emoji: '🥦', aisle: 'fruit-veg' },
  'courgette':      { name: 'Courgette', emoji: '🥒', aisle: 'fruit-veg' },
  'cucumber':       { name: 'Cucumber', emoji: '🥒', aisle: 'fruit-veg' },
  'spinach':        { name: 'Spinach', emoji: '🥬', aisle: 'fruit-veg' },
  'tomato':         { name: 'Tomatoes', emoji: '🍅', aisle: 'fruit-veg' },
  'red-pepper':     { name: 'Red pepper', emoji: '🫑', aisle: 'fruit-veg' },
  'onion':          { name: 'Onion', emoji: '🧅', aisle: 'fruit-veg' },
  'garlic':         { name: 'Garlic', emoji: '🧄', aisle: 'fruit-veg' },
  'leek':           { name: 'Leek', emoji: '🥬', aisle: 'fruit-veg' },
  'apple':          { name: 'Apple', emoji: '🍎', aisle: 'fruit-veg' },
  'pear':           { name: 'Pear', emoji: '🍐', aisle: 'fruit-veg' },
  'banana':         { name: 'Banana', emoji: '🍌', aisle: 'fruit-veg' },
  'avocado':        { name: 'Avocado', emoji: '🥑', aisle: 'fruit-veg' },
  'mango':          { name: 'Mango', emoji: '🥭', aisle: 'fruit-veg' },
  'blueberries':    { name: 'Blueberries', emoji: '🫐', aisle: 'fruit-veg' },
  'strawberries':   { name: 'Strawberries', emoji: '🍓', aisle: 'fruit-veg' },
  'peach':          { name: 'Peach', emoji: '🍑', aisle: 'fruit-veg' },
  'mint':           { name: 'Fresh mint', emoji: '🌿', aisle: 'fruit-veg' },
  'basil':          { name: 'Fresh basil', emoji: '🌿', aisle: 'fruit-veg' },
  'dill':           { name: 'Fresh dill', emoji: '🌿', aisle: 'fruit-veg' },

  // ── Meat & Fish ────────────────────────────────────────────────
  'chicken-breast': { name: 'Chicken breast', emoji: '🍗', aisle: 'meat-fish' },
  'chicken-thigh':  { name: 'Chicken thighs', emoji: '🍗', aisle: 'meat-fish' },
  'turkey-mince':   { name: 'Turkey mince', emoji: '🦃', aisle: 'meat-fish' },
  'beef-mince':     { name: 'Beef mince (lean)', emoji: '🥩', aisle: 'meat-fish' },
  'lamb-mince':     { name: 'Lamb mince', emoji: '🥩', aisle: 'meat-fish' },
  'salmon':         { name: 'Salmon fillet', emoji: '🐟', aisle: 'meat-fish' },
  'cod':            { name: 'Cod fillet', emoji: '🐟', aisle: 'meat-fish' },

  // ── Dairy & Eggs ───────────────────────────────────────────────
  'whole-milk':     { name: 'Whole milk', emoji: '🥛', aisle: 'dairy-eggs' },
  'greek-yoghurt':  { name: 'Greek yoghurt (full fat)', emoji: '🥣', aisle: 'dairy-eggs' },
  'cheddar':        { name: 'Mild cheddar', emoji: '🧀', aisle: 'dairy-eggs' },
  'ricotta':        { name: 'Ricotta', emoji: '🧀', aisle: 'dairy-eggs' },
  'cream-cheese':   { name: 'Cream cheese', emoji: '🧀', aisle: 'dairy-eggs' },
  'unsalted-butter':{ name: 'Unsalted butter', emoji: '🧈', aisle: 'dairy-eggs' },
  'eggs':           { name: 'Eggs', emoji: '🥚', aisle: 'dairy-eggs' },

  // ── Bakery ─────────────────────────────────────────────────────
  'bread':          { name: 'Wholemeal bread', emoji: '🍞', aisle: 'bakery' },
  'pitta':          { name: 'Wholemeal pitta', emoji: '🫓', aisle: 'bakery' },
  'crumpets':       { name: 'Crumpets', emoji: '🥯', aisle: 'bakery' },

  // ── Food Cupboard ──────────────────────────────────────────────
  'porridge-oats':  { name: 'Porridge oats', emoji: '🌾', aisle: 'cupboard' },
  'pasta':          { name: 'Baby pasta shapes', emoji: '🍝', aisle: 'cupboard' },
  'orzo':           { name: 'Orzo pasta', emoji: '🍚', aisle: 'cupboard' },
  'rice':           { name: 'Risotto rice', emoji: '🍚', aisle: 'cupboard' },
  'couscous':       { name: 'Couscous', emoji: '🍚', aisle: 'cupboard' },
  'red-lentils':    { name: 'Red lentils', emoji: '🫘', aisle: 'cupboard' },
  'chickpeas':      { name: 'Tinned chickpeas', emoji: '🫘', aisle: 'cupboard' },
  'passata':        { name: 'Passata', emoji: '🍅', aisle: 'cupboard' },
  'chopped-tomatoes': { name: 'Tinned chopped tomatoes', emoji: '🍅', aisle: 'cupboard' },
  'coconut-milk':   { name: 'Coconut milk (tinned)', emoji: '🥥', aisle: 'cupboard' },
  'olive-oil':      { name: 'Olive oil', emoji: '🧴', aisle: 'cupboard' },
  'tahini':         { name: 'Tahini', emoji: '🫙', aisle: 'cupboard' },
  'flour':          { name: 'Plain flour', emoji: '🌾', aisle: 'cupboard' },
  'breadcrumbs':    { name: 'Breadcrumbs', emoji: '🍞', aisle: 'cupboard' },
  'mild-curry-powder': { name: 'Mild curry powder', emoji: '🟡', aisle: 'cupboard' },
  'cumin':          { name: 'Ground cumin', emoji: '🟤', aisle: 'cupboard' },
  'cinnamon':       { name: 'Ground cinnamon', emoji: '🟤', aisle: 'cupboard' },
  'turmeric':       { name: 'Turmeric', emoji: '🟡', aisle: 'cupboard' },
  'oregano':        { name: 'Dried oregano', emoji: '🌿', aisle: 'cupboard' },
  'dried-apricots': { name: 'Dried apricots', emoji: '🍑', aisle: 'cupboard' },
  'low-salt-stock': { name: 'Low-salt stock cube', emoji: '🧂', aisle: 'cupboard' },
  'sweetcorn':      { name: 'Sweetcorn (tinned)', emoji: '🌽', aisle: 'cupboard' },
  'tinned-tuna':    { name: 'Tinned tuna (in water)', emoji: '🐟', aisle: 'cupboard' },

  // ── Frozen ─────────────────────────────────────────────────────
  'peas':           { name: 'Frozen peas', emoji: '🟢', aisle: 'frozen' },
};

export function getIngredient(id) {
  return INGREDIENTS[id] || { name: id, emoji: '🥄', aisle: 'cupboard' };
}
