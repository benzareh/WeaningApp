// Built-in recipe library.
// Every recipe has two parts:
//   • puree  — the spoon-fed element
//   • finger — the graspable finger-food element
// Max 5 ingredients per recipe. Recipes are grouped in ingredient families
// so weekly plans naturally share ingredients.
// effort: 'easy' | 'medium' | 'hard'

export const RECIPES = [

  // ══════════════════════════════════════════════════════
  // STAGE 1 · First tastes (4–6 months)
  // ══════════════════════════════════════════════════════

  {
    id: 'sweet-potato-carrot-velvet',
    title: 'Sweet Potato & Carrot Velvet',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🍠',
    gradient: ['#F5A86B', '#E8753D'],
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80',
    intro: 'A naturally sweet first dinner. Both roots steam in one pan.',
    puree: {
      name: 'Silky sweet potato & carrot purée',
      steps: [
        'Peel and chop 1 sweet potato and 1 carrot into small chunks.',
        'Steam for 12–15 minutes until completely soft.',
        'Blend with a splash of baby\'s usual milk until silky smooth.',
      ],
    },
    finger: {
      name: 'Soft roasted sweet potato wedge',
      steps: [
        'Cut a thick wedge of sweet potato and toss in a little olive oil.',
        'Roast at 180°C for 25 minutes until very soft.',
        'Cool and check it squishes easily before serving.',
      ],
    },
    ingredients: [
      { id: 'sweet-potato', qty: '1 large' },
      { id: 'carrot', qty: '1' },
      { id: 'olive-oil', qty: '1 tsp' },
    ],
    allergens: [],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'apple-pear-cloud',
    title: 'Apple & Pear Cloud',
    stages: ['stage1', 'stage2'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🍐',
    gradient: ['#C8E6C9', '#9CCC9F'],
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80',
    intro: 'Gentle stewed orchard fruits — a classic first taste.',
    puree: {
      name: 'Stewed apple & pear purée',
      steps: [
        'Peel, core and chop 1 apple and 1 pear.',
        'Simmer with 2 tbsp water for 8–10 minutes until soft.',
        'Blend or mash to your baby\'s preferred texture.',
      ],
    },
    finger: {
      name: 'Ripe pear slices',
      steps: [
        'Choose a very ripe, soft pear.',
        'Peel and cut into thick finger-length slices.',
        'Serve at room temperature — soft enough to gum easily.',
      ],
    },
    ingredients: [
      { id: 'apple', qty: '1' },
      { id: 'pear', qty: '2' },
    ],
    allergens: [],
    tags: ['veggie', 'freezable', 'no-cook-finger'],
  },

  {
    id: 'banana-avocado-mash',
    title: 'Banana & Avocado Dream',
    stages: ['stage1', 'stage2'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🥑',
    gradient: ['#AED581', '#7CB342'],
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&q=80',
    intro: 'Zero cooking. Creamy, energy-dense and ready in five minutes.',
    puree: {
      name: 'Banana & avocado mash',
      steps: [
        'Mash half a ripe banana with half a ripe avocado.',
        'Serve immediately — it browns quickly.',
      ],
    },
    finger: {
      name: 'Banana batons',
      steps: [
        'Cut the remaining banana half into thick batons.',
        'Leave a little skin on one end as a handle for easier gripping.',
      ],
    },
    ingredients: [
      { id: 'banana', qty: '1 ripe' },
      { id: 'avocado', qty: '½ ripe' },
    ],
    allergens: [],
    tags: ['veggie', 'no-cook', '5-min'],
  },

  {
    id: 'broccoli-potato-green-velvet',
    title: 'Broccoli Trees & Green Velvet',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥦',
    gradient: ['#81C784', '#4CAF50'],
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80',
    intro: 'Broccoli "trees" are the perfect natural finger food — built-in handle included.',
    puree: {
      name: 'Broccoli & potato purée',
      steps: [
        'Steam 1 chopped potato for 8 minutes, then add half the broccoli florets for 6 more.',
        'Blend with a splash of water until smooth.',
      ],
    },
    finger: {
      name: 'Steamed broccoli trees',
      steps: [
        'Steam remaining florets with stalks left long for 7–8 minutes.',
        'Cool — baby holds the stalk and munches the floret.',
      ],
    },
    ingredients: [
      { id: 'broccoli', qty: '½ head' },
      { id: 'potato', qty: '1' },
    ],
    allergens: [],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'butternut-apple-puree',
    title: 'Butternut & Apple Sunshine',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🎃',
    gradient: ['#FFB74D', '#FB8C00'],
    image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=800&q=80',
    intro: 'Sweet roasted squash with a hint of apple — a reliable favourite.',
    puree: {
      name: 'Roasted butternut & apple purée',
      steps: [
        'Roast cubed butternut squash at 190°C for 20 minutes.',
        'Stew the chopped apple in a splash of water for 8 minutes.',
        'Blend both together until smooth.',
      ],
    },
    finger: {
      name: 'Roasted butternut fingers',
      steps: [
        'Cut squash into chip-shaped fingers and toss in olive oil.',
        'Roast at 190°C for 25 minutes until very soft throughout.',
      ],
    },
    ingredients: [
      { id: 'butternut', qty: '½ small' },
      { id: 'apple', qty: '1' },
      { id: 'olive-oil', qty: '1 tsp' },
    ],
    allergens: [],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'parsnip-pea-mash',
    title: 'Parsnip & Pea Mash',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🟢',
    gradient: ['#DCE775', '#9E9D24'],
    image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&q=80',
    intro: 'Sweet parsnip mellows the fresh green pop of peas.',
    puree: {
      name: 'Parsnip & pea purée',
      steps: [
        'Steam 2 chopped parsnips for 10 minutes, add frozen peas for the last 3.',
        'Blend with a splash of water — sieve for younger babies to remove pea skins.',
      ],
    },
    finger: {
      name: 'Soft parsnip batons',
      steps: [
        'Cut a parsnip into chunky batons and steam until very soft.',
        'Cool before serving.',
      ],
    },
    ingredients: [
      { id: 'parsnip', qty: '2' },
      { id: 'peas', qty: 'large handful' },
    ],
    allergens: [],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'mango-banana-sunrise',
    title: 'Mango & Banana Sunrise',
    stages: ['stage1', 'stage2'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🥭',
    gradient: ['#FFD54F', '#FFA000'],
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=80',
    intro: 'Tropical, naturally sweet, and no cooking required.',
    puree: {
      name: 'Mango & banana purée',
      steps: [
        'Blend half a ripe mango with half a banana until smooth.',
      ],
    },
    finger: {
      name: 'Ripe mango slice',
      steps: [
        'Cut a wide, flat slice of ripe mango.',
        'Leave the skin on the back as a grip and serve chilled.',
      ],
    },
    ingredients: [
      { id: 'mango', qty: '1 ripe' },
      { id: 'banana', qty: '½' },
    ],
    allergens: [],
    tags: ['veggie', 'no-cook', '5-min'],
  },

  {
    id: 'courgette-potato-puree',
    title: 'Courgette & Potato Smash',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥒',
    gradient: ['#A5D6A7', '#66BB6A'],
    image: 'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=800&q=80',
    intro: 'Mild and gentle — a lovely introduction to green vegetables.',
    puree: {
      name: 'Courgette & potato purée',
      steps: [
        'Steam 1 chopped potato for 8 minutes, add 1 chopped courgette for 5 more.',
        'Blend until smooth — courgette adds liquid so you rarely need extra.',
      ],
    },
    finger: {
      name: 'Soft courgette sticks',
      steps: [
        'Cut a courgette into thick batons and steam for 5–6 minutes until soft.',
        'Cool before serving — the skin helps them hold together.',
      ],
    },
    ingredients: [
      { id: 'courgette', qty: '2' },
      { id: 'potato', qty: '1' },
    ],
    allergens: [],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'carrot-swede-velvet',
    title: 'Carrot & Swede Velvet',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥕',
    gradient: ['#FFCC80', '#F57C00'],
    image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=800&q=80',
    intro: 'Two root vegetables that love each other — naturally sweet and deeply comforting.',
    puree: {
      name: 'Carrot & swede purée',
      steps: [
        'Peel and chop 2 carrots and ¼ swede into small chunks.',
        'Steam for 15 minutes until completely soft.',
        'Blend with a splash of water until silky.',
      ],
    },
    finger: {
      name: 'Soft steamed carrot batons',
      steps: [
        'Steam thick carrot batons for 10–12 minutes until very soft.',
        'Cool completely before serving.',
      ],
    },
    ingredients: [
      { id: 'carrot', qty: '2' },
      { id: 'swede', qty: '¼' },
    ],
    allergens: [],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'peach-banana-first',
    title: 'Peachy Banana First Taste',
    stages: ['stage1'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🍑',
    gradient: ['#FFCCBC', '#FF7043'],
    image: 'https://images.unsplash.com/photo-1563746924237-f81d2a3d9219?w=800&q=80',
    intro: 'As simple as it gets — two fruits, no cooking, pure sweetness.',
    puree: {
      name: 'Peach & banana purée',
      steps: [
        'Peel a ripe peach and remove the stone.',
        'Blend with half a ripe banana until completely smooth.',
      ],
    },
    finger: {
      name: 'Soft peach wedge',
      steps: [
        'Cut a thick wedge of very ripe peach (peeled).',
        'If it\'s not quite ripe, steam for 3 minutes to soften first.',
      ],
    },
    ingredients: [
      { id: 'peach', qty: '1 ripe' },
      { id: 'banana', qty: '½' },
    ],
    allergens: [],
    tags: ['veggie', 'no-cook'],
  },

  // ══════════════════════════════════════════════════════
  // STAGE 2 · Exploring flavours (6–9 months)
  // ══════════════════════════════════════════════════════

  {
    id: 'chicken-sweet-potato-apple',
    title: 'Chicken, Sweet Potato & Apple',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍗',
    gradient: ['#FFCC80', '#F57C00'],
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&q=80',
    intro: 'A brilliant first meat dish — apple keeps the chicken moist and sweet.',
    puree: {
      name: 'Chicken, sweet potato & apple blend',
      steps: [
        'Poach a chicken breast in water for 15 minutes until cooked through.',
        'Steam chopped sweet potato and apple until soft.',
        'Blend everything with a little poaching liquid to a soft mash.',
      ],
    },
    finger: {
      name: 'Shredded chicken strip & sweet potato wedge',
      steps: [
        'Shred some poached chicken into baby-graspable strips.',
        'Serve alongside a soft roasted sweet potato wedge.',
      ],
    },
    ingredients: [
      { id: 'chicken-breast', qty: '1' },
      { id: 'sweet-potato', qty: '1' },
      { id: 'apple', qty: '1' },
    ],
    allergens: [],
    tags: ['iron-rich', 'freezable'],
  },

  {
    id: 'salmon-pea-potato',
    title: 'Salmon, Pea & Potato Mash',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🐟',
    gradient: ['#FFAB91', '#FF7043'],
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
    intro: 'Omega-3 rich salmon with sweet peas — brain food for little ones.',
    puree: {
      name: 'Flaked salmon, pea & potato mash',
      steps: [
        'Steam chopped potato for 10 minutes; lay salmon on top for the final 8.',
        'Add peas for the last 3 minutes.',
        'Flake the salmon (check for bones) and mash everything with a splash of milk.',
      ],
    },
    finger: {
      name: 'Large salmon flakes & potato chunks',
      steps: [
        'Set aside some large salmon flakes and soft potato chunks before mashing.',
        'Cool slightly and serve as pick-up pieces.',
      ],
    },
    ingredients: [
      { id: 'salmon', qty: '1 fillet' },
      { id: 'peas', qty: 'large handful' },
      { id: 'potato', qty: '2' },
      { id: 'whole-milk', qty: 'splash' },
    ],
    allergens: ['fish', 'milk'],
    tags: ['omega-3', 'one-pan'],
  },

  {
    id: 'red-lentil-carrot-dahl',
    title: "Baby's First Dahl",
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍛',
    gradient: ['#FFCA28', '#F57F17'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
    intro: 'Gently spiced red lentils — iron-rich, freezable, and loved by the whole family.',
    puree: {
      name: 'Red lentil & carrot dahl',
      steps: [
        'Soften ½ chopped onion in olive oil, add ¼ tsp each cumin and turmeric.',
        'Add 100g rinsed red lentils, 1 grated carrot and 400ml water.',
        'Simmer 20 minutes until thick and soft, then mash or blend lightly.',
      ],
    },
    finger: {
      name: 'Steamed carrot batons',
      steps: [
        'Steam thick carrot batons for 10 minutes until soft.',
        'Serve alongside for dipping into the dahl.',
      ],
    },
    ingredients: [
      { id: 'red-lentils', qty: '100g' },
      { id: 'carrot', qty: '2' },
      { id: 'onion', qty: '½' },
      { id: 'cumin', qty: '¼ tsp' },
      { id: 'turmeric', qty: '¼ tsp' },
    ],
    allergens: [],
    tags: ['veggie', 'iron-rich', 'freezable'],
  },

  {
    id: 'beef-root-veg-casserole',
    title: 'Cosy Beef & Root Veg Casserole',
    stages: ['stage2', 'stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🍲',
    gradient: ['#BCAAA4', '#795548'],
    image: 'https://images.unsplash.com/photo-1608500218807-1664a72b1e0b?w=800&q=80',
    intro: 'Slow-simmered comfort food packed with iron. Freezes beautifully.',
    puree: {
      name: 'Mashed beef & root veg',
      steps: [
        'Brown 150g lean beef mince with ½ chopped onion.',
        'Add chopped carrot, potato and 300ml low-salt stock.',
        'Simmer 30 minutes until everything is soft, then mash to a chunky consistency.',
      ],
    },
    finger: {
      name: 'Soft carrot & potato chunks',
      steps: [
        'Lift out a few large chunks of carrot and potato before mashing.',
        'Cool slightly — soft enough to squish, big enough to grip.',
      ],
    },
    ingredients: [
      { id: 'beef-mince', qty: '150g' },
      { id: 'carrot', qty: '2' },
      { id: 'potato', qty: '1' },
      { id: 'onion', qty: '½' },
      { id: 'low-salt-stock', qty: '1 cube' },
    ],
    allergens: [],
    tags: ['iron-rich', 'freezable'],
  },

  {
    id: 'berry-yoghurt-oat-swirl',
    title: 'Berry, Yoghurt & Oat Swirl',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🫐',
    gradient: ['#9FA8DA', '#5C6BC0'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    intro: 'Creamy yoghurt swirled with warm berry compote and soft oat fingers.',
    puree: {
      name: 'Greek yoghurt & blueberry swirl',
      steps: [
        'Warm a handful of blueberries with 1 tbsp water until they burst (3–4 min), mash lightly.',
        'Swirl through full-fat Greek yoghurt.',
      ],
    },
    finger: {
      name: 'Banana oat fingers',
      steps: [
        'Mash 1 banana with 40g oats and press into finger shapes.',
        'Bake at 180°C for 12 minutes. Cool before serving.',
      ],
    },
    ingredients: [
      { id: 'blueberries', qty: 'handful' },
      { id: 'greek-yoghurt', qty: '3 tbsp' },
      { id: 'porridge-oats', qty: '40g' },
      { id: 'banana', qty: '1' },
    ],
    allergens: ['milk', 'gluten'],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'cauliflower-cheese-puree',
    title: 'Cauliflower Cheese Clouds',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🧀',
    gradient: ['#FFF59D', '#FBC02D'],
    image: 'https://images.unsplash.com/photo-1568584711271-946d1d3eb162?w=800&q=80',
    intro: 'The British classic, baby-sized. Calcium-rich and wonderfully creamy.',
    puree: {
      name: 'Cauliflower cheese purée',
      steps: [
        'Steam half a cauliflower for 10 minutes until soft.',
        'Blend with 30g grated mild cheddar and a splash of whole milk until creamy.',
      ],
    },
    finger: {
      name: 'Roasted cauliflower florets',
      steps: [
        'Toss remaining florets in olive oil, roast at 190°C for 20 minutes.',
        'Cool — the stalk makes a natural handle.',
      ],
    },
    ingredients: [
      { id: 'cauliflower', qty: '1 small' },
      { id: 'cheddar', qty: '30g' },
      { id: 'whole-milk', qty: 'splash' },
      { id: 'olive-oil', qty: '1 tsp' },
    ],
    allergens: ['milk'],
    tags: ['veggie', 'calcium'],
  },

  {
    id: 'pea-mint-ricotta',
    title: 'Pea, Mint & Ricotta Whip',
    stages: ['stage2', 'stage3'],
    meals: ['lunch'],
    effort: 'easy',
    emoji: '🌿',
    gradient: ['#80CBC4', '#26A69A'],
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&q=80',
    intro: 'Fresh, bright and creamy — a little fancy, a lot delicious.',
    puree: {
      name: 'Pea, mint & ricotta purée',
      steps: [
        'Boil 150g frozen peas for 3 minutes, drain.',
        'Blend with 2 tbsp ricotta and 2–3 mint leaves until smooth.',
      ],
    },
    finger: {
      name: 'Pea fritter fingers',
      steps: [
        'Mix 50g mashed peas, 1 egg and 2 tbsp flour into a thick batter.',
        'Fry spoonfuls in a little olive oil 2–3 minutes per side. Cool before serving.',
      ],
    },
    ingredients: [
      { id: 'peas', qty: '200g' },
      { id: 'ricotta', qty: '2 tbsp' },
      { id: 'mint', qty: 'few leaves' },
      { id: 'eggs', qty: '1' },
    ],
    allergens: ['milk', 'eggs'],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'tomato-basil-baby-pasta',
    title: 'Tomato & Basil Baby Pasta',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍝',
    gradient: ['#EF9A9A', '#E53935'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
    intro: 'A first taste of Italy — hidden veg sauce the whole family can share.',
    puree: {
      name: 'Smooth tomato sauce with pasta',
      steps: [
        'Soften ½ chopped onion in olive oil, add 200ml passata and a few basil leaves.',
        'Simmer 10 minutes and blend smooth.',
        'Stir through cooked baby pasta and a little grated cheddar.',
      ],
    },
    finger: {
      name: 'Soft pasta pieces',
      steps: [
        'Cook a few large pasta shapes until very soft.',
        'Toss in a little sauce and serve as slippery pick-up pieces.',
      ],
    },
    ingredients: [
      { id: 'pasta', qty: '80g' },
      { id: 'passata', qty: '200ml' },
      { id: 'onion', qty: '½' },
      { id: 'cheddar', qty: '20g' },
    ],
    allergens: ['gluten', 'milk'],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'apricot-chickpea-tagine',
    title: 'Apricot & Chickpea Mini Tagine',
    stages: ['stage2', 'stage3'],
    meals: ['dinner'],
    effort: 'medium',
    emoji: '🍑',
    gradient: ['#FFCC80', '#EF6C00'],
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&q=80',
    intro: 'Gently spiced, naturally sweet, and full of plant protein.',
    puree: {
      name: 'Chickpea, apricot & sweet potato mash',
      steps: [
        'Simmer chopped sweet potato, 4 chopped dried apricots and ½ tin chickpeas in 200ml water with a pinch of cinnamon.',
        'Cook 15 minutes until soft, then mash or blend.',
      ],
    },
    finger: {
      name: 'Soft sweet potato wedges',
      steps: [
        'Roast sweet potato wedges with a whisper of cinnamon at 190°C for 25 minutes.',
        'Cool before serving.',
      ],
    },
    ingredients: [
      { id: 'chickpeas', qty: '½ tin' },
      { id: 'dried-apricots', qty: '4' },
      { id: 'sweet-potato', qty: '1' },
      { id: 'cinnamon', qty: 'pinch' },
    ],
    allergens: [],
    tags: ['veggie', 'iron-rich', 'freezable'],
  },

  {
    id: 'pear-spinach-green-puree',
    title: 'Pear & Spinach Super Green',
    stages: ['stage2'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🥬',
    gradient: ['#A5D6A7', '#388E3C'],
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&q=80',
    intro: 'Sweet pear makes iron-rich spinach utterly delicious.',
    puree: {
      name: 'Pear & spinach purée',
      steps: [
        'Stew 2 chopped pears in a splash of water for 6 minutes.',
        'Add a large handful of spinach for the final minute until wilted.',
        'Blend until completely smooth.',
      ],
    },
    finger: {
      name: 'Soft pear wedges',
      steps: [
        'Cut a ripe pear into thick wedges.',
        'If firm, steam for 3–4 minutes to soften first.',
      ],
    },
    ingredients: [
      { id: 'pear', qty: '2' },
      { id: 'spinach', qty: 'large handful' },
    ],
    allergens: [],
    tags: ['veggie', 'iron-rich', 'freezable'],
  },

  {
    id: 'apple-cinnamon-porridge',
    title: 'Apple & Cinnamon Porridge',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🥣',
    gradient: ['#D7CCC8', '#8D6E63'],
    image: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=800&q=80',
    intro: 'The breakfast workhorse — warm, filling and endlessly adaptable.',
    puree: {
      name: 'Creamy apple porridge',
      steps: [
        'Simmer 30g oats with 150ml whole milk for 4–5 minutes.',
        'Stir through stewed apple and a pinch of cinnamon.',
      ],
    },
    finger: {
      name: 'Soft stewed apple wedges',
      steps: [
        'Stew thick apple wedges in a splash of water for 6–8 minutes until soft but holding shape.',
        'Cool and serve alongside the porridge.',
      ],
    },
    ingredients: [
      { id: 'porridge-oats', qty: '30g' },
      { id: 'whole-milk', qty: '150ml' },
      { id: 'apple', qty: '1' },
      { id: 'cinnamon', qty: 'pinch' },
    ],
    allergens: ['gluten', 'milk'],
    tags: ['veggie'],
  },

  {
    id: 'hummus-rainbow-plate',
    title: 'Hummus Rainbow Dipping Plate',
    stages: ['stage2', 'stage3'],
    meals: ['lunch'],
    effort: 'easy',
    emoji: '🌈',
    gradient: ['#FFE0B2', '#FB8C00'],
    image: 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?w=800&q=80',
    intro: 'No-cook lunch with maximum independence — dipping is a skill worth practising.',
    puree: {
      name: 'Smooth baby hummus',
      steps: [
        'Blend ½ tin drained chickpeas with 1 tsp tahini and 1 tbsp olive oil until silky.',
        'Loosen with a splash of water for a spoonable consistency.',
      ],
    },
    finger: {
      name: 'Steamed carrot batons & pitta fingers',
      steps: [
        'Steam carrot batons until soft; lightly toast a pitta and slice into fingers.',
        'Serve with the hummus for dipping.',
      ],
    },
    ingredients: [
      { id: 'chickpeas', qty: '½ tin' },
      { id: 'tahini', qty: '1 tsp' },
      { id: 'carrot', qty: '1' },
      { id: 'pitta', qty: '1' },
    ],
    allergens: ['sesame', 'gluten'],
    tags: ['veggie', 'no-cook-mostly'],
  },

  {
    id: 'peach-couscous-chicken',
    title: 'Peachy Chicken Couscous',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍑',
    gradient: ['#FFCCBC', '#FF5722'],
    image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?w=800&q=80',
    intro: 'Sweet peach and tender chicken over fluffy couscous — summery and soft.',
    puree: {
      name: 'Chicken, peach & couscous mash',
      steps: [
        'Poach diced chicken thigh for 12 minutes; soak 50g couscous in hot low-salt stock.',
        'Blend the chicken with a peeled ripe peach and a little poaching liquid.',
        'Stir through the fluffy couscous.',
      ],
    },
    finger: {
      name: 'Soft peach slices & chicken strips',
      steps: [
        'Slice a ripe peach into thick wedges (peeled for younger babies).',
        'Serve with strips of the poached chicken.',
      ],
    },
    ingredients: [
      { id: 'chicken-thigh', qty: '2' },
      { id: 'peach', qty: '2 ripe' },
      { id: 'couscous', qty: '50g' },
      { id: 'low-salt-stock', qty: '1 cube' },
    ],
    allergens: ['gluten'],
    tags: ['iron-rich'],
  },

  {
    id: 'cod-sweetcorn-chowder',
    title: 'Cod & Sweetcorn Chowder Mash',
    stages: ['stage2', 'stage3'],
    meals: ['dinner'],
    effort: 'medium',
    emoji: '🌽',
    gradient: ['#FFF176', '#F9A825'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
    intro: 'Mild, creamy white fish — a gentle seafood introduction.',
    puree: {
      name: 'Cod, sweetcorn & potato chowder mash',
      steps: [
        'Simmer chopped potato and leek in 200ml milk for 12 minutes.',
        'Add the cod for the final 6 minutes, then flake (checking for bones).',
        'Stir in sweetcorn and mash to a chunky, spoonable texture.',
      ],
    },
    finger: {
      name: 'Large cod flakes',
      steps: [
        'Reserve some large flakes of cod before mashing.',
        'Cool slightly and serve as melt-in-the-mouth pick-up pieces.',
      ],
    },
    ingredients: [
      { id: 'cod', qty: '1 fillet' },
      { id: 'sweetcorn', qty: '3 tbsp' },
      { id: 'potato', qty: '2' },
      { id: 'leek', qty: '½' },
      { id: 'whole-milk', qty: '200ml' },
    ],
    allergens: ['fish', 'milk'],
    tags: ['omega-3', 'one-pan'],
  },

  {
    id: 'chicken-leek-potato-mash',
    title: 'Chicken, Leek & Potato Mash',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍗',
    gradient: ['#FFF9C4', '#F9A825'],
    image: 'https://images.unsplash.com/photo-1535400255456-984e4f5a9abe?w=800&q=80',
    intro: 'Classic British comfort food, scaled down. Leek adds a gentle onion sweetness.',
    puree: {
      name: 'Chicken, leek & potato mash',
      steps: [
        'Soften sliced leek in a little butter, add diced chicken breast and cook through.',
        'Add chopped potato and 200ml low-salt stock; simmer 15 minutes until soft.',
        'Mash everything together to a soft consistency.',
      ],
    },
    finger: {
      name: 'Soft potato chunks',
      steps: [
        'Scoop out a few large potato chunks before mashing.',
        'Cool and serve — soft enough to squish between fingers.',
      ],
    },
    ingredients: [
      { id: 'chicken-breast', qty: '1' },
      { id: 'leek', qty: '1' },
      { id: 'potato', qty: '2' },
      { id: 'low-salt-stock', qty: '1 cube' },
    ],
    allergens: [],
    tags: ['freezable'],
  },

  {
    id: 'butternut-lentil-soup',
    title: 'Butternut & Red Lentil Soup',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🎃',
    gradient: ['#FFAB40', '#E65100'],
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&q=80',
    intro: 'Velvety, iron-rich orange soup. Batch-cook and freeze in portions.',
    puree: {
      name: 'Butternut & red lentil soup',
      steps: [
        'Soften ½ onion in olive oil; add cubed butternut squash, 80g red lentils and 500ml low-salt stock.',
        'Simmer 20 minutes until everything is very soft.',
        'Blend until smooth and silky.',
      ],
    },
    finger: {
      name: 'Roasted butternut fingers',
      steps: [
        'Set aside a few cubes of butternut before blending; roast with olive oil at 190°C for 20 minutes.',
        'Cool and serve as soft, graspable chunks.',
      ],
    },
    ingredients: [
      { id: 'butternut', qty: '½' },
      { id: 'red-lentils', qty: '80g' },
      { id: 'onion', qty: '½' },
      { id: 'low-salt-stock', qty: '1 cube' },
    ],
    allergens: [],
    tags: ['veggie', 'iron-rich', 'freezable'],
  },

  {
    id: 'sweet-potato-coconut-curry',
    title: 'Sweet Potato Coconut Curry',
    stages: ['stage2', 'stage3'],
    meals: ['dinner'],
    effort: 'medium',
    emoji: '🥥',
    gradient: ['#FFE082', '#FF8F00'],
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80',
    intro: 'Gentle coconut sweetness with mild spice — building adventurous palates early.',
    puree: {
      name: 'Sweet potato coconut curry mash',
      steps: [
        'Soften ½ onion in olive oil, add ½ tsp mild curry powder.',
        'Add cubed sweet potato and 200ml coconut milk; simmer 20 minutes until soft.',
        'Mash or blend to your baby\'s preferred texture.',
      ],
    },
    finger: {
      name: 'Soft sweet potato wedges',
      steps: [
        'Roast thick sweet potato wedges at 190°C for 25 minutes.',
        'Serve on the side for picking up and dipping.',
      ],
    },
    ingredients: [
      { id: 'sweet-potato', qty: '2' },
      { id: 'coconut-milk', qty: '200ml' },
      { id: 'onion', qty: '½' },
      { id: 'mild-curry-powder', qty: '½ tsp' },
    ],
    allergens: [],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'courgette-cheese-pasta',
    title: 'Courgette & Cheese Pasta',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥒',
    gradient: ['#C5E1A5', '#558B2F'],
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80',
    intro: 'Hidden veg, melted cheese, soft pasta — the holy trinity of baby food.',
    puree: {
      name: 'Courgette cheese sauce with pasta',
      steps: [
        'Grate 1 courgette and cook in a little butter until soft (3 minutes).',
        'Stir in 30g grated cheddar until melted, then blend into a smooth sauce.',
        'Toss through cooked baby pasta shapes.',
      ],
    },
    finger: {
      name: 'Soft pasta pieces',
      steps: [
        'Cook a few large pasta shapes until very soft.',
        'Coat in a little sauce and cool before serving.',
      ],
    },
    ingredients: [
      { id: 'courgette', qty: '1' },
      { id: 'cheddar', qty: '30g' },
      { id: 'pasta', qty: '70g' },
      { id: 'unsalted-butter', qty: 'small knob' },
    ],
    allergens: ['gluten', 'milk'],
    tags: ['veggie', 'quick'],
  },

  {
    id: 'mango-rice-pudding',
    title: 'Mango & Rice Pudding',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast', 'lunch'],
    effort: 'medium',
    emoji: '🥭',
    gradient: ['#FFE082', '#FFB300'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    intro: 'Creamy rice pudding with tropical mango — dessert that\'s also breakfast.',
    puree: {
      name: 'Creamy mango rice pudding',
      steps: [
        'Simmer 50g pudding rice in 300ml whole milk for 20 minutes, stirring often, until thick.',
        'Stir through half a blended ripe mango.',
      ],
    },
    finger: {
      name: 'Ripe mango slices',
      steps: [
        'Slice the remaining mango into thick fingers.',
        'Serve chilled alongside the warm pudding.',
      ],
    },
    ingredients: [
      { id: 'rice', qty: '50g' },
      { id: 'whole-milk', qty: '300ml' },
      { id: 'mango', qty: '1 ripe' },
    ],
    allergens: ['milk'],
    tags: ['veggie'],
  },

  {
    id: 'beef-tomato-pasta',
    title: 'Beef & Tomato Pasta',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍅',
    gradient: ['#EF9A9A', '#C62828'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91798d832f?w=800&q=80',
    intro: 'A baby bolognese — simple, iron-rich and great for the whole family.',
    puree: {
      name: 'Beef & tomato sauce with pasta',
      steps: [
        'Brown 150g beef mince with ½ chopped onion.',
        'Add 1 tin chopped tomatoes; simmer 15 minutes.',
        'Blend lightly and stir through soft-cooked baby pasta.',
      ],
    },
    finger: {
      name: 'Soft pasta pieces',
      steps: [
        'Cook a few large pasta shapes until very soft and coat in a little sauce.',
        'Cool and serve as pick-up pieces.',
      ],
    },
    ingredients: [
      { id: 'beef-mince', qty: '150g' },
      { id: 'chopped-tomatoes', qty: '1 tin' },
      { id: 'pasta', qty: '80g' },
      { id: 'onion', qty: '½' },
    ],
    allergens: ['gluten'],
    tags: ['iron-rich', 'freezable'],
  },

  {
    id: 'lentil-veggie-bolognese',
    title: 'Hidden-Veg Lentil Bolognese',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍝',
    gradient: ['#FFAB91', '#D84315'],
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80',
    intro: 'A veggie bolognese the whole family can share — lentils make it iron-rich.',
    puree: {
      name: 'Lentil bolognese with pasta',
      steps: [
        'Soften ½ onion and 1 grated carrot in olive oil.',
        'Add 80g red lentils and 400g chopped tomatoes; simmer 20 minutes.',
        'Mash lightly and stir through cooked baby pasta.',
      ],
    },
    finger: {
      name: 'Cheesy pasta pieces',
      steps: [
        'Toss large soft-cooked pasta shapes in a little sauce.',
        'Sprinkle with cheddar and serve as pick-up pieces.',
      ],
    },
    ingredients: [
      { id: 'red-lentils', qty: '80g' },
      { id: 'chopped-tomatoes', qty: '1 tin' },
      { id: 'pasta', qty: '80g' },
      { id: 'carrot', qty: '1' },
    ],
    allergens: ['gluten'],
    tags: ['veggie', 'iron-rich', 'freezable'],
  },

  // ══════════════════════════════════════════════════════
  // STAGE 3 · Family foods (9–12 months)
  // ══════════════════════════════════════════════════════

  {
    id: 'mini-fish-pie',
    title: 'Mini Fish Pie',
    stages: ['stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🥧',
    gradient: ['#90CAF9', '#1E88E5'],
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=800&q=80',
    intro: 'The great British classic, scaled down. Make a big one for the family too.',
    puree: {
      name: 'Fish pie mash',
      steps: [
        'Poach cod in 150ml milk for 6 minutes, flake and check for bones.',
        'Mix with peas and a little of the poaching milk.',
        'Top with mashed potato and bake at 200°C for 15 minutes.',
      ],
    },
    finger: {
      name: 'Broccoli trees on the side',
      steps: [
        'Steam long-stalked broccoli florets for 7 minutes.',
        'Serve next to the pie for dipping.',
      ],
    },
    ingredients: [
      { id: 'cod', qty: '1 fillet' },
      { id: 'potato', qty: '2' },
      { id: 'peas', qty: 'handful' },
      { id: 'whole-milk', qty: '150ml' },
      { id: 'broccoli', qty: '½ head' },
    ],
    allergens: ['fish', 'milk'],
    tags: ['family-meal', 'freezable'],
  },

  {
    id: 'chicken-veggie-risotto',
    title: 'Chicken & Courgette Risotto',
    stages: ['stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'hard',
    emoji: '🍚',
    gradient: ['#FFE082', '#FFB300'],
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80',
    intro: 'Creamy, soft rice that clings to the spoon — ideal for self-feeding practice.',
    puree: {
      name: 'Soft chicken & courgette risotto',
      steps: [
        'Soften ½ onion in olive oil, stir in 100g risotto rice.',
        'Add low-salt stock a ladle at a time for 20 minutes; stir in diced chicken halfway.',
        'Finish with grated courgette and cheddar. Mash lightly for younger eaters.',
      ],
    },
    finger: {
      name: 'Poached chicken strips',
      steps: [
        'Set aside a few strips of the cooked chicken.',
        'Serve alongside — soft, graspable protein.',
      ],
    },
    ingredients: [
      { id: 'chicken-breast', qty: '1' },
      { id: 'rice', qty: '100g' },
      { id: 'courgette', qty: '1' },
      { id: 'cheddar', qty: '20g' },
      { id: 'low-salt-stock', qty: '1 cube' },
    ],
    allergens: ['milk'],
    tags: ['family-meal', 'freezable'],
  },

  {
    id: 'turkey-meatballs-tomato',
    title: 'Turkey Meatballs in Tomato Sauce',
    stages: ['stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'hard',
    emoji: '🍅',
    gradient: ['#EF9A9A', '#C62828'],
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80',
    intro: 'Soft, baby-sized meatballs — the ultimate pincer-grip dinner.',
    puree: {
      name: 'Tomato & orzo sauce',
      steps: [
        'Simmer 200ml passata with ½ chopped onion and a pinch of oregano for 10 minutes.',
        'Blend smooth, then stir through cooked orzo.',
      ],
    },
    finger: {
      name: 'Mini turkey meatballs',
      steps: [
        'Mix 200g turkey mince, 2 tbsp breadcrumbs and 1 egg yolk; roll into small balls.',
        'Bake at 200°C for 15 minutes. Cool slightly and serve whole or halved.',
      ],
    },
    ingredients: [
      { id: 'turkey-mince', qty: '200g' },
      { id: 'passata', qty: '200ml' },
      { id: 'orzo', qty: '60g' },
      { id: 'breadcrumbs', qty: '2 tbsp' },
      { id: 'eggs', qty: '1 yolk' },
    ],
    allergens: ['gluten', 'eggs'],
    tags: ['iron-rich', 'freezable'],
  },

  {
    id: 'eggy-bread-banana',
    title: 'Eggy Bread & Banana Yoghurt',
    stages: ['stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🍳',
    gradient: ['#FFE082', '#FF8F00'],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80',
    intro: 'Weekend-feeling breakfast in 12 minutes — a great egg introduction.',
    puree: {
      name: 'Banana & yoghurt smash',
      steps: [
        'Mash half a ripe banana into 3 tbsp Greek yoghurt and swirl.',
      ],
    },
    finger: {
      name: 'Eggy bread soldiers',
      steps: [
        'Whisk 1 egg with a splash of milk; soak a slice of bread.',
        'Fry in butter 2 minutes per side until golden. Cut into soldiers and cool slightly.',
      ],
    },
    ingredients: [
      { id: 'eggs', qty: '1' },
      { id: 'bread', qty: '1 slice' },
      { id: 'banana', qty: '½' },
      { id: 'greek-yoghurt', qty: '3 tbsp' },
    ],
    allergens: ['eggs', 'gluten', 'milk'],
    tags: ['veggie', 'quick'],
  },

  {
    id: 'broccoli-cheese-bites',
    title: 'Broccoli & Cheddar Bites',
    stages: ['stage3'],
    meals: ['lunch'],
    effort: 'medium',
    emoji: '🥦',
    gradient: ['#A5D6A7', '#2E7D32'],
    image: 'https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=800&q=80',
    intro: 'Batch-cook these golden bites and freeze for instant lunches.',
    puree: {
      name: 'Broccoli & potato mash',
      steps: [
        'Steam potato and half the broccoli until soft.',
        'Mash with a little butter and a splash of milk until creamy.',
      ],
    },
    finger: {
      name: 'Baked broccoli & cheddar bites',
      steps: [
        'Mix finely chopped steamed broccoli, 40g grated cheddar, 1 egg and 3 tbsp breadcrumbs.',
        'Shape into small fingers and bake at 190°C for 15 minutes until golden.',
      ],
    },
    ingredients: [
      { id: 'broccoli', qty: '1 head' },
      { id: 'cheddar', qty: '40g' },
      { id: 'eggs', qty: '1' },
      { id: 'potato', qty: '1' },
    ],
    allergens: ['milk', 'eggs'],
    tags: ['veggie', 'freezable', 'batch-cook'],
  },

  {
    id: 'mild-lamb-sweet-potato-curry',
    title: 'Mild Lamb & Sweet Potato Curry',
    stages: ['stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🍛',
    gradient: ['#FFB74D', '#E65100'],
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
    intro: 'Creamy coconut, gentle spice — building adventurous taste buds early.',
    puree: {
      name: 'Mashed lamb & sweet potato curry',
      steps: [
        'Brown 150g lamb mince with ½ onion and 1 tsp mild curry powder.',
        'Add chopped sweet potato and 200ml coconut milk; simmer 20 minutes.',
        'Mash to a soft, spoonable texture.',
      ],
    },
    finger: {
      name: 'Pitta fingers',
      steps: [
        'Lightly toast a wholemeal pitta and cut into fingers.',
        'Perfect for scooping up the curry.',
      ],
    },
    ingredients: [
      { id: 'lamb-mince', qty: '150g' },
      { id: 'sweet-potato', qty: '1' },
      { id: 'coconut-milk', qty: '200ml' },
      { id: 'mild-curry-powder', qty: '1 tsp' },
      { id: 'pitta', qty: '1' },
    ],
    allergens: ['gluten'],
    tags: ['iron-rich', 'freezable'],
  },

  {
    id: 'spinach-cheese-eggy-muffins',
    title: 'Spinach & Cheese Mini Frittata',
    stages: ['stage3'],
    meals: ['breakfast', 'lunch'],
    effort: 'medium',
    emoji: '🥚',
    gradient: ['#C5E1A5', '#558B2F'],
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=800&q=80',
    intro: 'Batch-bake and refrigerate for 3 days of instant breakfasts.',
    puree: {
      name: 'Avocado smash',
      steps: [
        'Mash a ripe avocado with a squeeze of soft tomato flesh.',
        'Serve as a creamy spoonable side.',
      ],
    },
    finger: {
      name: 'Mini spinach & cheddar frittatas',
      steps: [
        'Whisk 3 eggs with a splash of milk, wilted spinach and 30g grated cheddar.',
        'Pour into a greased muffin tin and bake at 180°C for 12–15 minutes. Cool and quarter.',
      ],
    },
    ingredients: [
      { id: 'eggs', qty: '3' },
      { id: 'spinach', qty: 'handful' },
      { id: 'cheddar', qty: '30g' },
      { id: 'avocado', qty: '1' },
    ],
    allergens: ['eggs', 'milk'],
    tags: ['veggie', 'batch-cook', 'freezable'],
  },

  {
    id: 'strawberry-crumpet-breakfast',
    title: 'Strawberry Cream Crumpets',
    stages: ['stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🍓',
    gradient: ['#F48FB1', '#E91E63'],
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80',
    intro: 'A treat breakfast that takes under ten minutes.',
    puree: {
      name: 'Strawberry & yoghurt smash',
      steps: [
        'Mash 4 ripe strawberries into 3 tbsp Greek yoghurt.',
      ],
    },
    finger: {
      name: 'Cream cheese crumpet fingers',
      steps: [
        'Toast a crumpet until soft-golden, spread thinly with cream cheese.',
        'Cut into fingers and top each with a thin strawberry slice.',
      ],
    },
    ingredients: [
      { id: 'strawberries', qty: '6' },
      { id: 'greek-yoghurt', qty: '3 tbsp' },
      { id: 'crumpets', qty: '1' },
      { id: 'cream-cheese', qty: '1 tbsp' },
    ],
    allergens: ['milk', 'gluten'],
    tags: ['veggie', 'quick'],
  },

  {
    id: 'cheese-omelette-soldiers',
    title: 'Cheesy Omelette & Toast Soldiers',
    stages: ['stage3'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🍳',
    gradient: ['#FFF176', '#F57F17'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
    intro: 'A protein-packed meal that comes together in 5 minutes flat.',
    puree: {
      name: 'Soft egg & cheese centre',
      steps: [
        'Whisk 2 eggs and pour into a buttered pan over medium heat.',
        'Sprinkle cheddar over one half; fold and serve the soft, custardy inside with a spoon.',
      ],
    },
    finger: {
      name: 'Toast soldiers',
      steps: [
        'Toast a slice of wholemeal bread and cut into finger-width soldiers.',
        'Cool slightly before serving.',
      ],
    },
    ingredients: [
      { id: 'eggs', qty: '2' },
      { id: 'cheddar', qty: '20g' },
      { id: 'bread', qty: '1 slice' },
      { id: 'unsalted-butter', qty: 'small knob' },
    ],
    allergens: ['eggs', 'milk', 'gluten'],
    tags: ['veggie', 'quick'],
  },

  {
    id: 'mini-salmon-fishcakes',
    title: 'Mini Salmon Fishcakes',
    stages: ['stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'hard',
    emoji: '🐟',
    gradient: ['#FFAB91', '#BF360C'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
    intro: 'Golden mini fishcakes — batch-cook and freeze for quick weeknight dinners.',
    puree: {
      name: 'Pea & potato mash',
      steps: [
        'Steam 2 potatoes until soft and mash with a splash of milk.',
        'Stir through a handful of cooked peas.',
      ],
    },
    finger: {
      name: 'Baked salmon fishcakes',
      steps: [
        'Mix flaked cooked salmon, 200g mashed potato and 2 tbsp breadcrumbs.',
        'Shape into small rounds and bake at 200°C for 20 minutes until golden.',
      ],
    },
    ingredients: [
      { id: 'salmon', qty: '1 fillet' },
      { id: 'potato', qty: '3' },
      { id: 'peas', qty: 'handful' },
      { id: 'breadcrumbs', qty: '2 tbsp' },
    ],
    allergens: ['fish', 'gluten'],
    tags: ['omega-3', 'freezable', 'batch-cook'],
  },

  {
    id: 'mild-chicken-tikka',
    title: 'Mild Chicken Tikka',
    stages: ['stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🫙',
    gradient: ['#FFCC80', '#E65100'],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
    intro: 'Baby\'s first curry night. Gentle spice, creamy yoghurt marinade.',
    puree: {
      name: 'Mild tikka sauce with rice',
      steps: [
        'Marinate diced chicken in 2 tbsp Greek yoghurt and 1 tsp mild curry powder for 30 minutes.',
        'Cook in a little olive oil until golden; add 200ml passata and simmer 15 minutes.',
        'Blend lightly and serve over soft-cooked rice.',
      ],
    },
    finger: {
      name: 'Soft naan fingers',
      steps: [
        'Warm a mini naan (or pitta) and cut into thick fingers.',
        'Perfect for scooping up the sauce.',
      ],
    },
    ingredients: [
      { id: 'chicken-breast', qty: '1' },
      { id: 'greek-yoghurt', qty: '2 tbsp' },
      { id: 'mild-curry-powder', qty: '1 tsp' },
      { id: 'passata', qty: '200ml' },
      { id: 'pitta', qty: '1' },
    ],
    allergens: ['milk', 'gluten'],
    tags: ['freezable'],
  },

  {
    id: 'veggie-egg-fried-rice',
    title: 'Veggie Egg Fried Rice',
    stages: ['stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍳',
    gradient: ['#FFF9C4', '#F57F17'],
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
    intro: 'Colourful, soft and endlessly fun to eat — great for practising self-feeding.',
    puree: {
      name: 'Soft scrambled egg & rice',
      steps: [
        'Cook 100g rice until very soft; push to one side of pan.',
        'Scramble 2 eggs in the other side, then mix together with peas and sweetcorn.',
        'Mash slightly for younger eaters.',
      ],
    },
    finger: {
      name: 'Rice clumps & steamed broccoli',
      steps: [
        'Press clumps of the fried rice into baby-sized portions — it holds together nicely.',
        'Serve with steamed broccoli florets for dipping.',
      ],
    },
    ingredients: [
      { id: 'rice', qty: '100g' },
      { id: 'eggs', qty: '2' },
      { id: 'peas', qty: 'handful' },
      { id: 'sweetcorn', qty: '2 tbsp' },
    ],
    allergens: ['eggs'],
    tags: ['veggie', 'quick'],
  },

  {
    id: 'avocado-egg-toast',
    title: 'Avocado & Scrambled Egg Toast',
    stages: ['stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🥑',
    gradient: ['#A5D6A7', '#2E7D32'],
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=800&q=80',
    intro: 'Trendy brunch food that also happens to be perfect baby food.',
    puree: {
      name: 'Smashed avocado',
      steps: [
        'Mash a ripe avocado with a fork until smooth but slightly chunky.',
        'Serve as a thick, spoonable spread.',
      ],
    },
    finger: {
      name: 'Soft scrambled egg on toast fingers',
      steps: [
        'Gently scramble 2 eggs in butter until just set and custardy.',
        'Spoon onto toasted bread fingers. Cool slightly before serving.',
      ],
    },
    ingredients: [
      { id: 'avocado', qty: '1 ripe' },
      { id: 'eggs', qty: '2' },
      { id: 'bread', qty: '1 slice' },
      { id: 'unsalted-butter', qty: 'small knob' },
    ],
    allergens: ['eggs', 'gluten', 'milk'],
    tags: ['veggie', 'quick'],
  },

  {
    id: 'banana-oat-pancakes',
    title: 'Banana Oat Pancakes',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🥞',
    gradient: ['#FFE082', '#F9A825'],
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=80',
    intro: 'Three ingredients, no sugar, soft and sweet — the perfect baby pancake.',
    puree: {
      name: 'Greek yoghurt & berry dip',
      steps: [
        'Warm a handful of blueberries until they burst, mash and swirl into Greek yoghurt.',
        'Serve as a dipping sauce alongside.',
      ],
    },
    finger: {
      name: 'Mini banana oat pancakes',
      steps: [
        'Mash 1 banana with 1 egg and 3 tbsp oats into a thick batter.',
        'Fry small spoonfuls in butter 2 minutes per side until golden. Cool before serving.',
      ],
    },
    ingredients: [
      { id: 'banana', qty: '1 ripe' },
      { id: 'eggs', qty: '1' },
      { id: 'porridge-oats', qty: '3 tbsp' },
      { id: 'greek-yoghurt', qty: '2 tbsp' },
    ],
    allergens: ['eggs', 'gluten', 'milk'],
    tags: ['veggie', 'quick', 'batch-cook'],
  },

  {
    id: 'chicken-sweetcorn-pitta',
    title: 'Chicken & Sweetcorn Mini Pitta',
    stages: ['stage3'],
    meals: ['lunch'],
    effort: 'easy',
    emoji: '🫓',
    gradient: ['#FFCC80', '#EF6C00'],
    image: 'https://images.unsplash.com/photo-1628191010120-e3f4a4b2db0f?w=800&q=80',
    intro: 'A fun lunchbox favourite — soft pitta pockets with creamy filling.',
    puree: {
      name: 'Creamy chicken & sweetcorn filling',
      steps: [
        'Shred leftover cooked chicken and mix with sweetcorn and cream cheese.',
        'Blend lightly for a smooth, spoonable consistency.',
      ],
    },
    finger: {
      name: 'Mini pitta pockets',
      steps: [
        'Warm a mini pitta, cut in half and gently open each pocket.',
        'Fill loosely with the chicken mixture — a perfect self-feeding shape.',
      ],
    },
    ingredients: [
      { id: 'chicken-breast', qty: '1 (cooked)' },
      { id: 'sweetcorn', qty: '2 tbsp' },
      { id: 'cream-cheese', qty: '1 tbsp' },
      { id: 'pitta', qty: '1' },
    ],
    allergens: ['gluten', 'milk'],
    tags: ['quick'],
  },

  {
    id: 'sweet-potato-pepper-soup',
    title: 'Sweet Potato & Red Pepper Soup',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🫑',
    gradient: ['#FF8A65', '#BF360C'],
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&q=80',
    intro: 'Vibrantly orange, naturally sweet and packed with vitamin C.',
    puree: {
      name: 'Sweet potato & red pepper soup',
      steps: [
        'Roast cubed sweet potato and halved red pepper at 190°C for 25 minutes.',
        'Blend with 300ml low-salt vegetable stock until smooth.',
      ],
    },
    finger: {
      name: 'Soft bread soldiers',
      steps: [
        'Lightly toast a slice of bread and cut into thick fingers.',
        'Perfect for dipping into the soup.',
      ],
    },
    ingredients: [
      { id: 'sweet-potato', qty: '1 large' },
      { id: 'red-pepper', qty: '1' },
      { id: 'low-salt-stock', qty: '1 cube' },
      { id: 'bread', qty: '1 slice' },
    ],
    allergens: ['gluten'],
    tags: ['veggie', 'freezable'],
  },

  {
    id: 'tuna-pasta-bake',
    title: 'Tuna & Sweetcorn Pasta',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🐟',
    gradient: ['#80DEEA', '#00838F'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
    intro: 'A family classic that comes together in minutes — omega-3 made easy.',
    puree: {
      name: 'Creamy tuna & sweetcorn pasta',
      steps: [
        'Cook baby pasta shapes until very soft; drain.',
        'Stir through drained tinned tuna (in spring water), sweetcorn and a little cream cheese.',
        'Mash or blend lightly for younger eaters.',
      ],
    },
    finger: {
      name: 'Large soft pasta pieces',
      steps: [
        'Cook a few larger pasta shapes until very soft.',
        'Coat in the sauce and serve as pick-up pieces.',
      ],
    },
    ingredients: [
      { id: 'tinned-tuna', qty: '1 small tin (in spring water)' },
      { id: 'pasta', qty: '80g' },
      { id: 'sweetcorn', qty: '2 tbsp' },
      { id: 'cream-cheese', qty: '1 tbsp' },
    ],
    allergens: ['fish', 'gluten', 'milk'],
    tags: ['omega-3', 'quick'],
  },

  {
    id: 'blueberry-yoghurt-pancakes',
    title: 'Blueberry Yoghurt Pancakes',
    stages: ['stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🫐',
    gradient: ['#9FA8DA', '#283593'],
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99eb4b789?w=800&q=80',
    intro: 'Fluffy purple-speckled pancakes that make breakfast feel like a celebration.',
    puree: {
      name: 'Blueberry & yoghurt swirl',
      steps: [
        'Warm a handful of blueberries in a pan until they burst (2–3 minutes).',
        'Swirl into Greek yoghurt for a pretty purple sauce.',
      ],
    },
    finger: {
      name: 'Mini blueberry pancakes',
      steps: [
        'Mix 4 tbsp flour, 1 egg, 3 tbsp milk and a handful of blueberries into a batter.',
        'Fry small spoonfuls in butter 2 minutes per side until cooked through. Cool before serving.',
      ],
    },
    ingredients: [
      { id: 'blueberries', qty: '80g' },
      { id: 'greek-yoghurt', qty: '3 tbsp' },
      { id: 'eggs', qty: '1' },
      { id: 'flour', qty: '4 tbsp' },
    ],
    allergens: ['eggs', 'gluten', 'milk'],
    tags: ['veggie', 'batch-cook'],
  },

];

export function getRecipeById(id, customRecipes = []) {
  return RECIPES.find((r) => r.id === id) || customRecipes.find((r) => r.id === id);
}

export function getAllRecipes(customRecipes = []) {
  return [...RECIPES, ...customRecipes];
}
