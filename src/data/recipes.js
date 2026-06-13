// Built-in recipe library, adapted from a baby weaning recipe collection.
// Every recipe has two parts:
//   • puree  — the spoon-fed / mashed element (best for younger babies)
//   • finger — the graspable finger-food element (baby-led weaning)
// Recipes reference ingredient ids from ingredients.js so weekly plans share
// ingredients and the shopping list can be aggregated.
// effort: 'easy' | 'medium' | 'hard'
// Visuals are generated illustrations from `emoji` + `gradient` (no photos).

export const RECIPES = [

  // ══════════════════════════════════════════════════════
  // 30-DAY FIRST FOODS · single tastes (days 1–10)
  // ══════════════════════════════════════════════════════

  {
    id: 'first-broccoli',
    title: 'Broccoli',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥦',
    gradient: ['#A8D5A2', '#5BA45A'],
    intro: 'A brilliant first food — so different to anything baby has had, with lovely savoury, slightly bitter notes.',
    puree: {
      name: 'Smooth broccoli purée',
      steps: [
        'Boil or steam 75g broccoli (about 4 florets) for 8–10 minutes.',
        'Blend most of it with a little of baby\'s usual milk until smooth, or mash with a fork and cooking water.',
        'Serve a couple of teaspoons.',
      ],
    },
    finger: {
      name: 'Broccoli tree',
      steps: [
        'Set one cooked floret aside before blending.',
        'The long stalk is perfect for little hands to hold and munch the top.',
      ],
    },
    ingredients: [
      { id: 'broccoli', qty: '75g (4 florets)' },
      { id: 'usual-milk', qty: 'a little' },
    ],
    allergens: [],
    tags: ['veggie', 'first-food', 'freezable'],
  },

  {
    id: 'first-courgette',
    title: 'Courgette',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥒',
    gradient: ['#A8D5A2', '#66BB6A'],
    intro: 'Fairly bitter but a little creamy, and very watery so it needs little extra liquid.',
    puree: {
      name: 'Courgette mash',
      steps: [
        'Cut 120g courgette into adult-finger sticks; peel some.',
        'Boil or steam for about 5 minutes until soft.',
        'Blend or mash the rest, adding a little of baby\'s usual milk if needed.',
      ],
    },
    finger: {
      name: 'Soft courgette sticks',
      steps: [
        'Set aside a couple of peeled, cooked sticks.',
        'Peeling makes them easier to chew for the first few tries.',
      ],
    },
    ingredients: [
      { id: 'courgette', qty: '120g' },
      { id: 'usual-milk', qty: 'optional' },
    ],
    allergens: [],
    tags: ['veggie', 'first-food'],
  },

  {
    id: 'first-avocado',
    title: 'Avocado',
    stages: ['stage1', 'stage2'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🥑',
    gradient: ['#AED581', '#7CB342'],
    intro: 'A totally different texture and a great source of healthy fats — no cooking required.',
    puree: {
      name: 'Avocado mash',
      steps: [
        'Scoop out half a ripe avocado, remove the stone.',
        'Mash well with some of baby\'s usual milk.',
      ],
    },
    finger: {
      name: 'Avocado finger',
      steps: [
        'Cut a finger-sized stick, leaving skin on the bottom half as a grip.',
        'Only offer if soft enough to squidge between finger and thumb.',
      ],
    },
    ingredients: [
      { id: 'avocado', qty: '½ ripe' },
      { id: 'usual-milk', qty: 'a little' },
    ],
    allergens: [],
    tags: ['veggie', 'first-food', 'no-cook'],
  },

  {
    id: 'first-potato',
    title: 'Potato',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥔',
    gradient: ['#FFE0A3', '#E8B563'],
    intro: 'A neutral taste that combines beautifully with other ingredients without stealing the show.',
    puree: {
      name: 'Potato mash',
      steps: [
        'Peel 1 medium potato (about 200g) and chop into sticks.',
        'Boil or steam 10–12 minutes until soft.',
        'Mash half with a splash of usual milk or cooking water to loosen.',
      ],
    },
    finger: {
      name: 'Potato finger sticks',
      steps: [
        'Set aside half the cooked sticks.',
        'Remove the skin initially as it\'s tough without chewing skills. Great as dippers later.',
      ],
    },
    ingredients: [
      { id: 'potato', qty: '1 medium (200g)' },
      { id: 'usual-milk', qty: 'a splash' },
    ],
    allergens: [],
    tags: ['veggie', 'first-food', 'freezable'],
  },

  {
    id: 'first-spinach',
    title: 'Spinach',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥬',
    gradient: ['#A5D6A7', '#388E3C'],
    intro: 'A bitter, totally new taste. Pair with potato to thicken while the green notes come through.',
    puree: {
      name: 'Spinach purée',
      steps: [
        'Steam 1 large handful of spinach (about 30g) for 2 minutes until wilted.',
        'Blend to a thin purée with a splash of baby\'s usual milk.',
      ],
    },
    finger: {
      name: 'Potato dippers',
      steps: [
        'Spinach is tricky to hold, so serve a stick or two of cooked potato.',
        'Show baby how to dip the potato into the purée.',
      ],
    },
    ingredients: [
      { id: 'spinach', qty: '30g' },
      { id: 'potato', qty: 'a few sticks' },
      { id: 'usual-milk', qty: 'a splash' },
    ],
    allergens: [],
    tags: ['veggie', 'first-food', 'iron-rich'],
  },

  {
    id: 'first-aubergine',
    title: 'Aubergine',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🍆',
    gradient: ['#B7A6E0', '#7E57C2'],
    intro: 'A neutral but bitter, totally new taste and texture — often left out of weaning but worth a try.',
    puree: {
      name: 'Roasted aubergine mash',
      steps: [
        'Bake half an aubergine at 200°C for 30–40 minutes until the inside is soft.',
        'Scoop out the flesh, discard the skin and mash really well.',
        'Add a few splashes of baby\'s usual milk if needed.',
      ],
    },
    finger: {
      name: 'Veg stick dipper',
      steps: [
        'Serve with a potato finger or broccoli floret as a dipper.',
        'Demonstrate dipping yourself if baby is unsure.',
      ],
    },
    ingredients: [
      { id: 'aubergine', qty: '½' },
      { id: 'potato', qty: 'a stick' },
      { id: 'usual-milk', qty: 'optional' },
    ],
    allergens: [],
    tags: ['veggie', 'first-food'],
  },

  {
    id: 'first-cauliflower',
    title: 'Cauliflower',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥦',
    gradient: ['#F5F0E1', '#D9CBA3'],
    intro: 'A distinctive taste that\'s super-easy to cook and packed with fibre and nutrients.',
    puree: {
      name: 'Cauliflower purée',
      steps: [
        'Boil or steam 85g cauliflower (about 3 florets) for 8–10 minutes.',
        'Blend most of it, loosening with a little usual milk if needed.',
      ],
    },
    finger: {
      name: 'Cauliflower floret',
      steps: [
        'Set one soft floret aside to offer as a finger food.',
      ],
    },
    ingredients: [
      { id: 'cauliflower', qty: '85g (3 florets)' },
      { id: 'usual-milk', qty: 'a little' },
    ],
    allergens: [],
    tags: ['veggie', 'first-food'],
  },

  {
    id: 'first-swede',
    title: 'Swede',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥔',
    gradient: ['#FFD8A8', '#E8A04D'],
    intro: 'Easy to prepare and to bulk out meals, just like potato. Lovely as soft sticks or mash.',
    puree: {
      name: 'Swede mash',
      steps: [
        'Peel 100g swede and chop into sticks.',
        'Boil or steam 12–15 minutes until softened.',
        'Mash or blend, adding a little usual milk or cooking water.',
      ],
    },
    finger: {
      name: 'Soft swede sticks',
      steps: [
        'Set aside a couple of cooked sticks to munch on.',
      ],
    },
    ingredients: [
      { id: 'swede', qty: '100g' },
      { id: 'usual-milk', qty: 'a little' },
    ],
    allergens: [],
    tags: ['veggie', 'first-food', 'freezable'],
  },

  {
    id: 'first-green-beans',
    title: 'Green Beans',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🫛',
    gradient: ['#A8D5A2', '#4CAF50'],
    intro: 'A great start to weaning — cook them squidgy and let baby experiment with coordination.',
    puree: {
      name: 'Green bean purée',
      steps: [
        'Top, tail and de-string 50g green beans.',
        'Steam or boil 10–12 minutes, then blend (they\'re hard to mash) with a little usual milk.',
      ],
    },
    finger: {
      name: 'Whole soft green beans',
      steps: [
        'Set aside a couple of whole cooked beans as finger foods.',
      ],
    },
    ingredients: [
      { id: 'green-beans', qty: '50g' },
      { id: 'usual-milk', qty: 'a little' },
    ],
    allergens: [],
    tags: ['veggie', 'first-food'],
  },

  {
    id: 'first-kale',
    title: 'Kale',
    stages: ['stage1', 'stage2'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥬',
    gradient: ['#A5D6A7', '#2E7D32'],
    intro: 'Brilliant for introducing bitter tastes. Mix with potato or swede to soften the texture.',
    puree: {
      name: 'Kale purée',
      steps: [
        'Remove the stalks from 30g (a large handful) of kale.',
        'Steam the leaves 5–7 minutes, then blend smooth with usual milk or cooking water.',
      ],
    },
    finger: {
      name: 'Swede or potato dipper',
      steps: [
        'Serve with a soft vegetable stick to dip into the purée.',
      ],
    },
    ingredients: [
      { id: 'kale', qty: '30g' },
      { id: 'potato', qty: 'a stick' },
      { id: 'usual-milk', qty: 'a little' },
    ],
    allergens: [],
    tags: ['veggie', 'first-food', 'iron-rich'],
  },

  // ══════════════════════════════════════════════════════
  // 30-DAY FIRST FOODS · combinations & allergens (days 11–30)
  // ══════════════════════════════════════════════════════

  {
    id: 'broccoli-potato-combo',
    title: 'Broccoli & Potato',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥦',
    gradient: ['#A8D5A2', '#5BA45A'],
    intro: 'Combining ingredients builds confidence towards ‘mini meals’ and adds variety.',
    puree: {
      name: 'Broccoli & potato mash',
      steps: [
        'Steam 50g potato sticks for 2 minutes, add 2 broccoli florets and cook 10 more.',
        'Mash together well (potato is best mashed, not blended), loosening with cooking water.',
      ],
    },
    finger: {
      name: 'Floret & potato stick',
      steps: [
        'Set aside one floret and a couple of potato sticks.',
        'Tip: mash, roll into balls and bake at 200°C for 20 minutes for easy-to-hold finger balls.',
      ],
    },
    ingredients: [
      { id: 'potato', qty: '50g' },
      { id: 'broccoli', qty: '30g (2 florets)' },
      { id: 'usual-milk', qty: 'optional' },
    ],
    allergens: [],
    tags: ['veggie', 'combination', 'freezable'],
  },

  {
    id: 'swede-lentils',
    title: 'Swede & Lentils',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🫘',
    gradient: ['#FFD8A8', '#D98C45'],
    intro: 'Lentils are nutrient-rich and a good source of iron. Offer small amounts and build up gradually.',
    puree: {
      name: 'Swede & lentil mash',
      steps: [
        'Steam 100g swede sticks 12–15 minutes until soft.',
        'Cook 2 heaped tsp lentils per packet instructions.',
        'Mash the swede with the lentils, loosening with cooking water or usual milk.',
      ],
    },
    finger: {
      name: 'Soft swede fingers',
      steps: [
        'Set aside a few swede sticks to serve alongside.',
      ],
    },
    ingredients: [
      { id: 'swede', qty: '100g' },
      { id: 'red-lentils', qty: '2 heaped tsp' },
      { id: 'usual-milk', qty: 'a little' },
    ],
    allergens: [],
    tags: ['veggie', 'iron-rich', 'combination'],
  },

  {
    id: 'spinach-egg',
    title: 'Spinach & Egg',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥚',
    gradient: ['#C5E1A5', '#7CB342'],
    intro: 'Introducing the first allergen — egg. Start with a tiny amount and watch for any reaction.',
    puree: {
      name: 'Spinach & egg purée',
      steps: [
        'Steam 30g spinach 2 minutes and blend to a purée.',
        'Hard-boil 1 egg for 10 minutes until the yolk is cooked through; peel.',
        'Mash ¼ of the egg and stir a tiny amount (≤¼ tsp) into the spinach.',
      ],
    },
    finger: {
      name: 'Potato dippers',
      steps: [
        'Serve with a couple of potato fingers to dip.',
      ],
    },
    ingredients: [
      { id: 'spinach', qty: '30g' },
      { id: 'eggs', qty: '1' },
      { id: 'potato', qty: 'a few sticks' },
    ],
    allergens: ['eggs'],
    tags: ['allergen-intro', 'iron-rich', 'combination'],
  },

  {
    id: 'green-beans-chicken',
    title: 'Green Beans & Chicken',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍗',
    gradient: ['#FFE0A3', '#E8A04D'],
    intro: 'Get baby tasting meat early. A good source of protein, B vitamins and iron.',
    puree: {
      name: 'Chicken & green bean blend',
      steps: [
        'Wrap 50g chicken in foil and roast at 200°C for about 20 minutes.',
        'Steam 50g green beans 10–12 minutes.',
        'Blend the chicken and beans to the desired consistency with a little cooking water.',
      ],
    },
    finger: {
      name: 'Chicken strips & whole beans',
      steps: [
        'Set aside a few thin chicken strips and whole green beans.',
        'Chicken should squidge easily between finger and thumb.',
      ],
    },
    ingredients: [
      { id: 'chicken-breast', qty: '50g' },
      { id: 'green-beans', qty: '50g' },
    ],
    allergens: [],
    tags: ['iron-rich', 'protein', 'combination'],
  },

  {
    id: 'tomato-chickpeas',
    title: 'Tomatoes & Chickpeas',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🍅',
    gradient: ['#F2A099', '#D64545'],
    intro: 'Doesn’t need extra fluid — tomato adds plenty of water. A great chance to practise dipping.',
    puree: {
      name: 'Tomato & chickpea mash',
      steps: [
        'Steam 30g pre-cooked chickpeas with 50g tomatoes for about 5 minutes.',
        'Blend for just a few seconds to keep some texture; remove any tomato skin.',
      ],
    },
    finger: {
      name: 'Broccoli dipper',
      steps: [
        'Serve with a cooked broccoli floret to dip and scoop.',
      ],
    },
    ingredients: [
      { id: 'chickpeas', qty: '30g' },
      { id: 'tomato', qty: '50g' },
      { id: 'broccoli', qty: '1 floret' },
    ],
    allergens: [],
    tags: ['veggie', 'combination'],
  },

  {
    id: 'courgette-beef',
    title: 'Courgette & Beef',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🥩',
    gradient: ['#C9A98C', '#8A5A33'],
    intro: 'Beef is a great source of iron, so include it early. Try meat a few different ways.',
    puree: {
      name: 'Beef & courgette mash',
      steps: [
        'Steam 100g courgette sticks 5 minutes (peel a few).',
        'Brown 50g beef mince in a pan for about 5 minutes until cooked through.',
        'Blend the mince with most of the courgette for a few seconds to keep texture.',
      ],
    },
    finger: {
      name: 'Courgette sticks (or mini meatballs)',
      steps: [
        'Serve with the peeled courgette sticks.',
        'Tip: mix mince with grated courgette, roll into balls and bake at 200°C for 20 minutes.',
      ],
    },
    ingredients: [
      { id: 'courgette', qty: '100g' },
      { id: 'beef-mince', qty: '50g' },
      { id: 'olive-oil', qty: 'if needed' },
    ],
    allergens: [],
    tags: ['iron-rich', 'protein', 'combination'],
  },

  {
    id: 'avocado-peanut-butter',
    title: 'Avocado & Peanut Butter',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🥜',
    gradient: ['#AED581', '#9CCC65'],
    intro: 'Adding another allergen — peanut. Use 100% nut butter and watch for any reaction.',
    puree: {
      name: 'Avocado & peanut butter mash',
      steps: [
        'Mash half an avocado well.',
        'Loosen ½ tsp peanut butter with a splash of boiled water or usual milk.',
        'Stir the loosened peanut butter through the avocado.',
      ],
    },
    finger: {
      name: 'Avocado sticks',
      steps: [
        'Serve with a couple of avocado sticks (skin on the bottom half to grip).',
      ],
    },
    ingredients: [
      { id: 'avocado', qty: '½' },
      { id: 'peanut-butter', qty: '½ tsp' },
      { id: 'usual-milk', qty: 'a splash' },
    ],
    allergens: ['peanuts'],
    tags: ['allergen-intro', 'no-cook'],
  },

  {
    id: 'kale-carrot-ginger',
    title: 'Kale, Carrot & Ginger',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥕',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'A refreshing way to start experimenting with flavours and build familiarity with variety.',
    puree: {
      name: 'Kale, carrot & ginger mash',
      steps: [
        'Steam a small handful of kale 5–7 minutes; blend with a little liquid.',
        'Steam carrot sticks about 10 minutes until soft.',
        'Mash the carrots with the kale purée and a tiny pinch of ground ginger.',
      ],
    },
    finger: {
      name: 'Carrot sticks',
      steps: [
        'Set aside a few soft carrot sticks to serve alongside.',
      ],
    },
    ingredients: [
      { id: 'kale', qty: '1 small handful' },
      { id: 'carrot', qty: '1' },
      { id: 'ground-ginger', qty: 'a tiny pinch' },
    ],
    allergens: [],
    tags: ['veggie', 'flavour', 'combination'],
  },

  {
    id: 'peas-egg-rice',
    title: 'Peas, Egg & Rice',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🟢',
    gradient: ['#A8D5A2', '#66BB6A'],
    intro: 'A great mix of proteins. Peas are a powerhouse of vitamin C — and egg keeps that allergen in the diet.',
    puree: {
      name: 'Pea, egg & rice mash',
      steps: [
        'Cook 25g rice per packet (or use ~50g pre-cooked).',
        'Hard-boil 1 egg 10 minutes, peel and mash.',
        'Steam 20g peas 5 minutes; mix peas, rice and 1 tsp egg and mash, loosening with cooking water.',
      ],
    },
    finger: {
      name: 'Rice & pea ball',
      steps: [
        'Roll some of the mix into a small ball as a finger food.',
      ],
    },
    ingredients: [
      { id: 'rice', qty: '25g' },
      { id: 'eggs', qty: '1' },
      { id: 'peas', qty: '20g' },
    ],
    allergens: ['eggs'],
    tags: ['protein', 'combination'],
  },

  {
    id: 'pepper-turkey-spring-onion',
    title: 'Red Pepper, Turkey & Spring Onion',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🦃',
    gradient: ['#F2A099', '#D64545'],
    intro: 'Turkey is a good protein to experiment with — swap for chicken or beef if you prefer.',
    puree: {
      name: 'Turkey & red pepper mash',
      steps: [
        'Steam ½ deseeded red pepper 8–10 minutes; peel off the skin.',
        'Cook 50g turkey mince with finely diced spring onion for about 5 minutes.',
        'Blend the turkey with some pepper for a few seconds to keep texture.',
      ],
    },
    finger: {
      name: 'Pepper sticks (or turkey balls)',
      steps: [
        'Serve with the remaining soft pepper sticks.',
        'Tip: roll turkey mince and spring onion into balls and bake at 200°C for 20 minutes.',
      ],
    },
    ingredients: [
      { id: 'red-pepper', qty: '½' },
      { id: 'spring-onion', qty: '1 small' },
      { id: 'turkey-mince', qty: '50g' },
      { id: 'olive-oil', qty: 'a little' },
    ],
    allergens: [],
    tags: ['protein', 'combination'],
  },

  {
    id: 'broccoli-salmon-rice',
    title: 'Broccoli, Salmon & Rice',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🐟',
    gradient: ['#9ED0E6', '#3E92CC'],
    intro: 'Salmon is another allergen and a great source of omega-3. Lovely to get baby used to fish early.',
    puree: {
      name: 'Salmon, broccoli & rice mash',
      steps: [
        'Bake a piece of salmon (wrapped in foil) at 200°C for about 20 minutes.',
        'Cook ~30g rice and steam 75g broccoli florets 8–10 minutes.',
        'Mash 15g flaked salmon (check for bones) with the rice and broccoli, adding cooking water.',
      ],
    },
    finger: {
      name: 'Broccoli florets',
      steps: [
        'Set aside 2 soft florets as finger foods.',
      ],
    },
    ingredients: [
      { id: 'salmon', qty: '1 small piece (~15g for baby)' },
      { id: 'rice', qty: '15–30g' },
      { id: 'broccoli', qty: '75g' },
    ],
    allergens: ['fish'],
    tags: ['allergen-intro', 'omega-3', 'combination'],
  },

  {
    id: 'sweet-potato-kidney-bean-coriander',
    title: 'Sweet Potato, Kidney Bean & Coriander',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🍠',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'Sweet potato adds bulk and natural sweetness; kidney beans add protein and fibre.',
    puree: {
      name: 'Sweet potato & kidney bean mash',
      steps: [
        'Steam 100g sweet potato sticks 10–12 minutes, adding 30g rinsed kidney beans for the last 5.',
        'Mash with a little finely chopped coriander and cooking water.',
      ],
    },
    finger: {
      name: 'Sweet potato sticks',
      steps: [
        'Set aside 2–3 soft sticks. Tip: roll the mash into balls and bake at 200°C for 20 minutes.',
      ],
    },
    ingredients: [
      { id: 'sweet-potato', qty: '100g' },
      { id: 'kidney-beans', qty: '30g' },
      { id: 'coriander', qty: '1 small sprig' },
    ],
    allergens: [],
    tags: ['veggie', 'protein', 'combination'],
  },

  {
    id: 'avocado-chicken-quinoa-peanut',
    title: 'Avocado, Chicken & Quinoa with Peanut Dip',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🥑',
    gradient: ['#AED581', '#7CB342'],
    intro: 'A flavour- and protein-packed combo that keeps peanut in the diet (leave it out if baby reacted before).',
    puree: {
      name: 'Chicken, avocado & quinoa mash',
      steps: [
        'Roast a small chicken breast (foil-wrapped) at 200°C for 20–25 minutes.',
        'Cook ~15g quinoa per packet (or use 25g pre-cooked).',
        'Blend chicken, quinoa and ½ avocado with ½–1 tsp peanut butter, loosening with usual milk.',
      ],
    },
    finger: {
      name: 'Chicken strips & avocado finger',
      steps: [
        'Set aside 1–2 chicken strips and a slice of avocado.',
      ],
    },
    ingredients: [
      { id: 'chicken-breast', qty: '1 small' },
      { id: 'quinoa', qty: '15g' },
      { id: 'avocado', qty: '½' },
      { id: 'peanut-butter', qty: '½–1 tsp' },
    ],
    allergens: ['peanuts'],
    tags: ['protein', 'allergen-intro', 'combination'],
  },

  {
    id: 'spinach-strawberry-butter-beans',
    title: 'Spinach, Strawberry & Butter Beans',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🍓',
    gradient: ['#F7B5C4', '#E8718D'],
    intro: 'Bitter and sweet together — experimental and surprisingly delicious. Use ripe, juicy strawberries.',
    puree: {
      name: 'Strawberry, butter bean & spinach mash',
      steps: [
        'Steam 40g butter beans with a handful of spinach 4 minutes; blend the spinach.',
        'Slip the butter beans out of their skins and mash with 4 hulled strawberries.',
        'Mix in the spinach purée.',
      ],
    },
    finger: {
      name: 'Strawberry slices',
      steps: [
        'Serve with thin slices of a large strawberry, or squashed butter bean balls to dip.',
      ],
    },
    ingredients: [
      { id: 'butter-beans', qty: '40g' },
      { id: 'spinach', qty: '1 small handful' },
      { id: 'strawberries', qty: '5' },
    ],
    allergens: [],
    tags: ['veggie', 'fruit', 'combination'],
  },

  {
    id: 'pepper-turkey-pasta',
    title: 'Red Pepper, Turkey & Pasta',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍝',
    gradient: ['#F2A099', '#D64545'],
    intro: 'A turkey & pepper sauce plus soft pasta — moving baby on to more family-style meals. Pasta is a wheat allergen.',
    puree: {
      name: 'Turkey & pepper pasta mash',
      steps: [
        'Cook a few pieces of fusilli until very soft (not al dente).',
        'Grill ½ red pepper, peel and chop; cook 50g turkey mince with diced spring onion 5 minutes.',
        'Blend the mince with the pepper a few seconds, then mash through the pasta.',
      ],
    },
    finger: {
      name: 'Pepper sticks & soft pasta',
      steps: [
        'Set aside a few pepper sticks and whole soft pasta pieces.',
      ],
    },
    ingredients: [
      { id: 'fusilli', qty: '2–3 pieces' },
      { id: 'red-pepper', qty: '½' },
      { id: 'spring-onion', qty: '1 small' },
      { id: 'turkey-mince', qty: '50g' },
    ],
    allergens: ['gluten'],
    tags: ['allergen-intro', 'protein', 'combination'],
  },

  {
    id: 'mushroom-egg-potato',
    title: 'Mushrooms, Egg & Potato',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'medium',
    emoji: '🍄',
    gradient: ['#D7CCC8', '#8D6E63'],
    intro: 'A typical breakfast option (any time of day) and a step towards family-friendly breakfasts.',
    puree: {
      name: 'Mushroom, egg & potato mash',
      steps: [
        'Steam 100g potato sticks 10–12 minutes; hard-boil and mash half an egg.',
        'Fry 40g sliced mushrooms in a little oil 5 minutes, then blend a few seconds.',
        'Mash the potato, mushroom and egg together, loosening with usual milk.',
      ],
    },
    finger: {
      name: 'Potato sticks',
      steps: [
        'Set aside a few potato sticks. Tip: roll the mix into mini balls and bake at 200°C for 20 minutes.',
      ],
    },
    ingredients: [
      { id: 'potato', qty: '100g' },
      { id: 'eggs', qty: '1' },
      { id: 'mushrooms', qty: '40g' },
      { id: 'olive-oil', qty: 'a little' },
    ],
    allergens: ['eggs'],
    tags: ['breakfast', 'combination'],
  },

  {
    id: 'tomato-cannellini-basil',
    title: 'Tomatoes, Cannellini Beans & Basil',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🌿',
    gradient: ['#9FD8CB', '#3FA796'],
    intro: 'About trying flavours and smells — let baby rub and sniff a basil leaf. Beans add protein and iron.',
    puree: {
      name: 'Tomato, bean & basil mash',
      steps: [
        'Steam 40g cannellini beans with 1 large tomato 3–4 minutes.',
        'Peel and chop the tomato; blend with 1 basil leaf for a few seconds.',
        'Mash the beans and stir into the tomato and basil.',
      ],
    },
    finger: {
      name: 'Tomato slices',
      steps: [
        'Serve with a few soft tomato slices (skin removed).',
      ],
    },
    ingredients: [
      { id: 'cannellini-beans', qty: '40g' },
      { id: 'tomato', qty: '1 large' },
      { id: 'basil', qty: '1 leaf' },
    ],
    allergens: [],
    tags: ['veggie', 'flavour', 'combination'],
  },

  {
    id: 'aubergine-chickpeas-plum',
    title: 'Aubergine, Chickpeas & Plum',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍆',
    gradient: ['#B7A6E0', '#7E57C2'],
    intro: 'A quirky sweet-and-bitter combo — neutral aubergine meets sweet, tart plum.',
    puree: {
      name: 'Aubergine, chickpea & plum mash',
      steps: [
        'Bake ½ scored aubergine (drizzled with oil) at 200°C for 30–40 minutes.',
        'Peel and destone a plum; steam with 30g chickpeas about 5 minutes.',
        'Scoop the aubergine flesh and blend with the plum and chickpeas, keeping some texture.',
      ],
    },
    finger: {
      name: 'Soft plum fingers',
      steps: [
        'Set aside a few plum slices (peeled) as finger foods.',
      ],
    },
    ingredients: [
      { id: 'aubergine', qty: '½' },
      { id: 'chickpeas', qty: '30g' },
      { id: 'plum', qty: '1' },
      { id: 'olive-oil', qty: 'a little' },
    ],
    allergens: [],
    tags: ['veggie', 'fruit', 'combination'],
  },

  {
    id: 'banana-oats-peanut',
    title: 'Banana with Oats & Peanut Butter',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🍌',
    gradient: ['#FFE08A', '#F4B400'],
    intro: 'An easy, on-the-go favourite. Oats add carbohydrate and energy; peanut keeps that allergen in the diet.',
    puree: {
      name: 'Peanut butter porridge',
      steps: [
        'Cook 20g oats with about 100ml water or usual milk over low heat for 5 minutes.',
        'Once soft and gooey, stir in 1 tsp peanut butter.',
      ],
    },
    finger: {
      name: 'Banana sticks',
      steps: [
        'Serve with a few banana sticks. Tip: mix oats, ½ mashed banana and peanut butter into energy balls.',
      ],
    },
    ingredients: [
      { id: 'porridge-oats', qty: '20g' },
      { id: 'peanut-butter', qty: '1 tsp' },
      { id: 'banana', qty: '1' },
      { id: 'milk', qty: '~100ml' },
    ],
    allergens: ['peanuts'],
    tags: ['breakfast', 'allergen-intro'],
  },

  {
    id: 'carrot-cake-porridge-first',
    title: 'Carrot Cake Porridge',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🥕',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'A way to add veg in the morning and introduce another allergen — cow’s milk.',
    puree: {
      name: 'Carrot cake porridge',
      steps: [
        'Steam 1 peeled carrot 12–15 minutes until soft and mash well.',
        'Cook 20g oats with 100ml cow’s milk about 5 minutes until thick.',
        'Stir in the mashed carrot and a tiny pinch of cinnamon.',
      ],
    },
    finger: {
      name: 'Carrot sticks',
      steps: [
        'Set a few cooked carrot sticks aside. Tip: bake leftover porridge in mini muffin cases at 200°C for 30 minutes.',
      ],
    },
    ingredients: [
      { id: 'carrot', qty: '1 medium' },
      { id: 'porridge-oats', qty: '20g' },
      { id: 'milk', qty: '100ml cow’s milk' },
      { id: 'cinnamon', qty: 'a pinch' },
    ],
    allergens: ['milk'],
    tags: ['breakfast', 'allergen-intro', 'veggie'],
  },

  // ══════════════════════════════════════════════════════
  // BREAKFAST COLLECTION
  // ══════════════════════════════════════════════════════

  {
    id: 'blueberry-oaty-pancakes',
    title: 'Blueberry Oaty Pancakes',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🫐',
    gradient: ['#B7A6E0', '#6C4FB6'],
    intro: 'Quick, fuss-free pancakes you can make in a rush — perfect bite-sized for self-feeding.',
    puree: {
      name: 'Yoghurt & berry dip',
      steps: [
        'Serve the pancakes with a dollop of plain yoghurt for dipping.',
        'Or mash a few extra blueberries through the yoghurt.',
      ],
    },
    finger: {
      name: 'Mini blueberry pancakes',
      steps: [
        'Blend 150g oats, 1 egg, 1 tsp baking powder, 1–2 tbsp chopped nuts, 150ml milk and 100g blueberries until smooth.',
        'Cook small dollops in a little oil, flipping once browned. Cut into strips for baby.',
      ],
    },
    ingredients: [
      { id: 'porridge-oats', qty: '150g' },
      { id: 'eggs', qty: '1' },
      { id: 'baking-powder', qty: '1 tsp' },
      { id: 'nuts', qty: '1–2 tbsp' },
      { id: 'milk', qty: '150ml' },
      { id: 'blueberries', qty: '100g' },
    ],
    allergens: ['eggs', 'nuts'],
    tags: ['breakfast', 'freezable'],
  },

  {
    id: 'nutty-french-toast',
    title: 'Nutty French Toast',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🍞',
    gradient: ['#FFE08A', '#F4B400'],
    intro: 'French toast with a nutty twist — quick to make and packed with extra nutrients.',
    puree: {
      name: 'Yoghurt & berry topping',
      steps: [
        'Serve with a dollop of plain yoghurt and a little mashed berry.',
      ],
    },
    finger: {
      name: 'Nutty French toast strips',
      steps: [
        'Whisk 1 egg with a pinch of cinnamon. Spread 1–2 tsp peanut butter on a slice of bread.',
        'Dip both sides in the egg, then cook in a little oil ~3 minutes each side. Cut into strips.',
      ],
    },
    ingredients: [
      { id: 'eggs', qty: '1' },
      { id: 'bread', qty: '1 slice' },
      { id: 'peanut-butter', qty: '1–2 tsp' },
      { id: 'cinnamon', qty: 'a pinch' },
      { id: 'olive-oil', qty: 'a drizzle' },
    ],
    allergens: ['eggs', 'gluten', 'peanuts'],
    tags: ['breakfast'],
  },

  {
    id: 'first-brekkie-bowl',
    title: '5-Minute First Brekkie Bowl',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🍌',
    gradient: ['#FFE08A', '#F4B400'],
    intro: 'Super-quick to whizz together — nutrient-packed and great for practising self-feeding.',
    puree: {
      name: 'Banana, peanut & yoghurt bowl',
      steps: [
        'Blend 1 banana, 2 tsp peanut butter, 2 heaped tsp Greek yoghurt and a few oats until smooth.',
        'Add more oats if it needs thickening.',
      ],
    },
    finger: {
      name: 'Fresh fruit fingers',
      steps: [
        'Serve with sliced soft fruits on top for baby to pick up and dip.',
      ],
    },
    ingredients: [
      { id: 'banana', qty: '1 medium' },
      { id: 'peanut-butter', qty: '2 tsp' },
      { id: 'greek-yoghurt', qty: '2 heaped tsp' },
      { id: 'porridge-oats', qty: 'a few' },
    ],
    allergens: ['peanuts', 'milk'],
    tags: ['breakfast', 'no-cook', '5-min'],
  },

  {
    id: 'ultimate-carrot-cake-porridge',
    title: 'The Ultimate Carrot Cake Porridge',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🥕',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'An ‘ultimate’ carrot cake porridge — a fab way to get veggies in at breakfast.',
    puree: {
      name: 'Creamy carrot porridge',
      steps: [
        'Cook 20g finely grated carrot 2–3 minutes to soften.',
        'Add 40g oats, 150ml milk, a pinch of cinnamon and nutmeg; cook 5 minutes until thick.',
        'Stir through 1 tsp cream cheese to serve.',
      ],
    },
    finger: {
      name: 'Pear slices',
      steps: [
        'Serve with a couple of soft pear slices. For younger babies, grind the oats first.',
      ],
    },
    ingredients: [
      { id: 'carrot', qty: '20g (½ carrot)' },
      { id: 'porridge-oats', qty: '40g' },
      { id: 'milk', qty: '150ml' },
      { id: 'cinnamon', qty: 'a pinch' },
      { id: 'cream-cheese', qty: '2 tsp' },
      { id: 'pear', qty: 'a few slices' },
    ],
    allergens: ['milk'],
    tags: ['breakfast', 'veggie'],
  },

  {
    id: 'pina-colada-overnight-oats',
    title: 'Piña Colada Overnight Oats',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🍍',
    gradient: ['#FFE08A', '#FBC02D'],
    intro: 'Overnight oats with a Caribbean pineapple taste — a quick morning option you prep the night before.',
    puree: {
      name: 'Pineapple & coconut oats',
      steps: [
        'The night before, mix 40g oats, 75g chopped pineapple, 1 tbsp desiccated coconut and 1 tsp chia seeds.',
        'Pour over ~100ml milk to cover and refrigerate.',
        'In the morning, stir in a little more milk if needed.',
      ],
    },
    finger: {
      name: 'Soft pineapple pieces',
      steps: [
        'Top with a few soft pieces of pineapple and a sprinkle of coconut.',
      ],
    },
    ingredients: [
      { id: 'porridge-oats', qty: '40g' },
      { id: 'pineapple', qty: '75g' },
      { id: 'desiccated-coconut', qty: '1 tbsp' },
      { id: 'chia-seeds', qty: '1 tsp' },
      { id: 'milk', qty: '~100ml' },
    ],
    allergens: [],
    tags: ['breakfast', 'no-cook'],
  },

  {
    id: 'cheesy-quinoa-porridge',
    title: 'Cheesy Quinoa Porridge',
    stages: ['stage3'],
    meals: ['breakfast'],
    effort: 'medium',
    emoji: '🧀',
    gradient: ['#FFE08A', '#F4B400'],
    intro: 'A savoury breakfast to break out of a porridge rut. Use quinoa flakes to speed it up.',
    puree: {
      name: 'Cheesy quinoa',
      steps: [
        'Simmer 100g rinsed quinoa in 200ml milk, covered, 10–15 minutes until fluffy.',
        'Stir through 20g grated cheddar.',
        'Blend the veggies into it for younger babies.',
      ],
    },
    finger: {
      name: 'Sautéed veg & egg',
      steps: [
        'Fry 100g mushrooms, 200g tomatoes and 50g spinach until soft.',
        'Serve the veg on top with a chopped boiled egg as finger food.',
      ],
    },
    ingredients: [
      { id: 'quinoa', qty: '100g' },
      { id: 'milk', qty: '200ml' },
      { id: 'cheddar', qty: '20g' },
      { id: 'mushrooms', qty: '100g' },
      { id: 'tomato', qty: '200g' },
      { id: 'spinach', qty: '50g' },
      { id: 'eggs', qty: '1' },
    ],
    allergens: ['milk', 'eggs'],
    tags: ['breakfast', 'veggie'],
  },

  {
    id: 'baby-pancakes-basic',
    title: 'Baby Pancakes (Sweet & Savoury)',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast'],
    effort: 'easy',
    emoji: '🥞',
    gradient: ['#FFE08A', '#F9A825'],
    intro: 'A basic American-style pancake with no added sugar or salt. Freezes well for rushed mornings.',
    puree: {
      name: 'Berry pancake topping',
      steps: [
        'Heat 100g berries in a pan ~5 minutes until mushy; mash a little and cool.',
        'Spoon over the pancakes with a dollop of yoghurt. (Or top with the egg & spinach scramble for savoury.)',
      ],
    },
    finger: {
      name: 'Pancake strips',
      steps: [
        'Whisk 250g self-raising flour, 1 tsp baking powder, 1 egg and 300ml milk to a smooth batter.',
        'Cook dollops in a little oil, flipping once browned. Cut into strips for baby.',
      ],
    },
    ingredients: [
      { id: 'self-raising-flour', qty: '250g' },
      { id: 'baking-powder', qty: '1 tsp' },
      { id: 'eggs', qty: '1' },
      { id: 'milk', qty: '300ml' },
      { id: 'frozen-berries', qty: '100g' },
    ],
    allergens: ['gluten', 'eggs', 'milk'],
    tags: ['breakfast', 'freezable'],
  },

  // ══════════════════════════════════════════════════════
  // LUNCH COLLECTION
  // ══════════════════════════════════════════════════════

  {
    id: 'fried-tofu-rice',
    title: 'Fried Tofu Rice',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🍚',
    gradient: ['#FFE08A', '#F4B400'],
    intro: 'A lovely lunch or addition to a curry. Quick with ready-cooked rice. Sesame is an allergen.',
    puree: {
      name: 'Tofu fried rice mash',
      steps: [
        'Cook 75g brown rice. Heat 1 tsp sesame oil and cook 2 chopped spring onions 3–4 minutes.',
        'Crumble in 100g tofu (or whisked egg) with 1 tsp ginger, 1 tsp garlic and 100g frozen veg; cook 5 minutes.',
        'Stir in the rice; mash with a little cooking water for younger babies.',
      ],
    },
    finger: {
      name: 'Rice clumps',
      steps: [
        'Press the fried rice into baby-sized clumps to pick up.',
        'Serve with yoghurt or hummus on the side.',
      ],
    },
    ingredients: [
      { id: 'brown-rice', qty: '75g' },
      { id: 'sesame-oil', qty: '1 tsp' },
      { id: 'spring-onion', qty: '2' },
      { id: 'tofu', qty: '100g' },
      { id: 'ginger', qty: '1 tsp' },
      { id: 'frozen-veg', qty: '100g' },
    ],
    allergens: ['sesame', 'soya'],
    tags: ['veggie', 'lunch'],
  },

  {
    id: 'quick-quesadillas',
    title: 'Quick Quesadillas',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🌯',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'Veg-packed ‘wrap pizzas’ — tasty, filling and quick. Use whatever veg is in the fridge.',
    puree: {
      name: 'Veggie bean filling',
      steps: [
        'Cook ½ chopped leek 5 minutes, add ¼ chopped aubergine and 1 chopped tomato, cook 5 more.',
        'Add 100g chopped butter beans, ½ tsp ground coriander and ½ tsp paprika; cook 2 minutes.',
        'Blend for younger babies.',
      ],
    },
    finger: {
      name: 'Quesadilla fingers',
      steps: [
        'Spread a wrap with tomato purée paste, add the veg mix and a little cheese to half, fold and grill.',
        'Cut into fingers once cooled slightly.',
      ],
    },
    ingredients: [
      { id: 'leek', qty: '40g (½)' },
      { id: 'aubergine', qty: '60g (¼)' },
      { id: 'tomato', qty: '1 large' },
      { id: 'butter-beans', qty: '100g' },
      { id: 'tortilla', qty: '2 large' },
      { id: 'cheddar', qty: '40g' },
      { id: 'tomato-puree', qty: '1 tbsp' },
    ],
    allergens: ['gluten', 'milk'],
    tags: ['veggie', 'lunch'],
  },

  {
    id: 'minestrone-soup',
    title: 'Minestrone Soup',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍲',
    gradient: ['#F2A099', '#D64545'],
    intro: 'A wholesome family minestrone — a good way to start exposing baby to lumps and chunks.',
    puree: {
      name: 'Blended minestrone',
      steps: [
        'Soften 1 onion, then add 1 garlic clove, 2 celery sticks and 2 carrots; cook 5 minutes.',
        'Add tomato purée, herbs, 1 red pepper, 1 tin tomatoes and 800ml stock; simmer 15 minutes.',
        'Blend some for younger babies.',
      ],
    },
    finger: {
      name: 'Soft pasta & bread',
      steps: [
        'Add 60g snapped spaghetti and 200g cannellini beans; simmer 15 minutes until pasta is soft.',
        'Serve with warm bread for dipping.',
      ],
    },
    ingredients: [
      { id: 'onion', qty: '1' },
      { id: 'garlic', qty: '1 clove' },
      { id: 'celery', qty: '2 sticks' },
      { id: 'carrot', qty: '2' },
      { id: 'tomato-puree', qty: '1 tbsp' },
      { id: 'red-pepper', qty: '1 small' },
      { id: 'chopped-tomatoes', qty: '1 tin' },
      { id: 'low-salt-stock', qty: '800ml' },
      { id: 'spaghetti', qty: '60g' },
      { id: 'cannellini-beans', qty: '200g' },
    ],
    allergens: ['gluten', 'celery'],
    tags: ['veggie', 'lunch', 'family-meal'],
  },

  {
    id: 'hummus-pinwheels',
    title: 'Easy Hummus Pinwheels',
    stages: ['stage2', 'stage3'],
    meals: ['lunch'],
    effort: 'easy',
    emoji: '🌯',
    gradient: ['#FFE08A', '#F4B400'],
    intro: 'No-cook pinwheels using a tortilla — a great fridge-raid lunch. Tuna or salmon work well too.',
    puree: {
      name: 'Mashed avocado & hummus',
      steps: [
        'Mash ½ small avocado.',
        'Mix with 1 tbsp hummus / chickpea dip for a smooth spread.',
      ],
    },
    finger: {
      name: 'Pinwheels',
      steps: [
        'Spread a wrap with hummus, layer avocado and spinach leaves, sprinkle a little cheese if you like.',
        'Roll up tightly and cut into little wheels. Serve with veggie sticks.',
      ],
    },
    ingredients: [
      { id: 'tortilla', qty: '1' },
      { id: 'chickpeas', qty: '1 tbsp as hummus' },
      { id: 'avocado', qty: '½ small' },
      { id: 'spinach', qty: 'a few leaves' },
      { id: 'cheddar', qty: 'optional' },
    ],
    allergens: ['gluten', 'sesame'],
    tags: ['veggie', 'lunch', 'no-cook', 'finger-food'],
  },

  {
    id: 'tuna-open-sandwich',
    title: 'Tuna Open Sandwich',
    stages: ['stage2', 'stage3'],
    meals: ['lunch'],
    effort: 'easy',
    emoji: '🐟',
    gradient: ['#9ED0E6', '#3E92CC'],
    intro: 'A very quick, balanced meal — carbs, veg, dairy and protein. A great alternative to tuna mayo.',
    puree: {
      name: 'Creamy tuna spread',
      steps: [
        'Mix 80g drained tuna with 2 tbsp natural yoghurt and 2 tbsp sweetcorn.',
      ],
    },
    finger: {
      name: 'Tuna toast fingers',
      steps: [
        'Toast an English muffin half and spread with the tuna mix; cut into fingers.',
        'Serve with cucumber sticks (skin removed).',
      ],
    },
    ingredients: [
      { id: 'english-muffin', qty: '1' },
      { id: 'tinned-tuna', qty: '80g' },
      { id: 'natural-yoghurt', qty: '2 tbsp' },
      { id: 'sweetcorn', qty: '2 tbsp' },
      { id: 'cucumber', qty: '2 sticks' },
    ],
    allergens: ['fish', 'gluten', 'milk'],
    tags: ['lunch', 'quick'],
  },

  {
    id: 'super-green-frittata',
    title: 'Super Green Frittata',
    stages: ['stage2', 'stage3'],
    meals: ['lunch'],
    effort: 'medium',
    emoji: '🍳',
    gradient: ['#A8D5A2', '#5BA45A'],
    intro: 'A perfect quick lunch with a few extra veggies for good nutrients. Broccoli works if asparagus is out of season.',
    puree: {
      name: 'Mashed frittata',
      steps: [
        'Boil 400g potatoes 10–12 minutes, adding 100g asparagus for the last 5; drain.',
        'Soften ½ onion, add the potatoes, then pour over 3–4 whisked eggs with spinach, peas and mint.',
        'Cook until set, top with cheddar and grill 5 minutes. Mash well for younger babies.',
      ],
    },
    finger: {
      name: 'Frittata fingers',
      steps: [
        'Cool and cut into finger-sized strips to pick up.',
      ],
    },
    ingredients: [
      { id: 'potato', qty: '400g' },
      { id: 'asparagus', qty: '100g' },
      { id: 'onion', qty: '½' },
      { id: 'eggs', qty: '3–4' },
      { id: 'spinach', qty: 'a small handful' },
      { id: 'peas', qty: '50g' },
      { id: 'cheddar', qty: '40g' },
    ],
    allergens: ['eggs', 'milk'],
    tags: ['veggie', 'lunch', 'freezable'],
  },

  {
    id: 'sweet-potato-ginger-fishcakes',
    title: 'Sweet Potato & Ginger Fishcakes',
    stages: ['stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'hard',
    emoji: '🐟',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'A lovely fishcake with sweet potato and ginger. Batch-cook and freeze for quick dinners.',
    puree: {
      name: 'Sweet potato & fish mash',
      steps: [
        'Bake 200g white fish with ginger, garlic and lime (in foil) at 200°C for 10–15 minutes.',
        'Boil 400g sweet potato 10 minutes and mash; flake in the fish with coriander and spring onion.',
        'Mash together for younger babies.',
      ],
    },
    finger: {
      name: 'Baked fishcakes',
      steps: [
        'Shape into 8 cakes; coat in flour, then beaten egg, then breadcrumbs.',
        'Bake at 200°C for about 20 minutes. Offer as fish sticks for baby-led weaning.',
      ],
    },
    ingredients: [
      { id: 'white-fish', qty: '200g' },
      { id: 'ginger', qty: '1 thumb' },
      { id: 'sweet-potato', qty: '400g' },
      { id: 'coriander', qty: '20g' },
      { id: 'spring-onion', qty: '2' },
      { id: 'breadcrumbs', qty: '100g' },
      { id: 'eggs', qty: '1' },
      { id: 'flour', qty: '2 tbsp' },
    ],
    allergens: ['fish', 'gluten', 'eggs'],
    tags: ['omega-3', 'freezable', 'batch-cook'],
  },

  {
    id: 'mac-cheese-kale-cauliflower',
    title: 'Mac & Cheese with Kale & Cauliflower',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🧀',
    gradient: ['#FFE08A', '#F4B400'],
    intro: 'Cheesy favourites and plenty of textures — great for self-feeding practice.',
    puree: {
      name: 'Cheesy veg sauce with pasta',
      steps: [
        'Cook 150g macaroni 5 minutes, add chopped kale and cauliflower and cook 5 more; drain.',
        'Make a roux with 20g butter and 20g flour, whisk in 285ml milk until thick, stir in 40g cheddar.',
        'Mix in the pasta and veg; blend or mash with a little milk for younger babies.',
      ],
    },
    finger: {
      name: 'Pasta & cauliflower pieces',
      steps: [
        'Top with extra cheese and grill 10–15 minutes.',
        'Offer a few solid pasta pieces and cauliflower florets as finger foods.',
      ],
    },
    ingredients: [
      { id: 'macaroni', qty: '150g' },
      { id: 'kale', qty: '1 large handful' },
      { id: 'cauliflower', qty: '100g' },
      { id: 'unsalted-butter', qty: '20g' },
      { id: 'flour', qty: '20g' },
      { id: 'milk', qty: '285ml' },
      { id: 'cheddar', qty: '60g' },
    ],
    allergens: ['gluten', 'milk'],
    tags: ['veggie', 'family-meal', 'freezable'],
  },

  {
    id: 'roast-veg-giant-couscous',
    title: 'Roast Veg & Giant Couscous',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍚',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'Giant couscous is great for exploring new textures. A perfect family recipe — top with cream cheese.',
    puree: {
      name: 'Roast veg couscous mash',
      steps: [
        'Roast chopped courgette, red and yellow pepper and cherry tomatoes with oil at 200°C for 20–25 minutes.',
        'Cook 150g giant couscous ~8 minutes; drain.',
        'Combine with a cumin-lime dressing and blend with the sauce for younger babies.',
      ],
    },
    finger: {
      name: 'Roast veg sticks',
      steps: [
        'Offer the roasted veggies as finger-food sticks for baby to pick up.',
      ],
    },
    ingredients: [
      { id: 'courgette', qty: '1' },
      { id: 'red-pepper', qty: '1' },
      { id: 'yellow-pepper', qty: '1' },
      { id: 'cherry-tomatoes', qty: '200g' },
      { id: 'giant-couscous', qty: '150g' },
      { id: 'cumin', qty: '1 tsp' },
      { id: 'lime', qty: '½' },
    ],
    allergens: ['gluten'],
    tags: ['veggie', 'family-meal'],
  },

  {
    id: 'greek-meze',
    title: 'Greek Meze',
    stages: ['stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🫓',
    gradient: ['#9ED0E6', '#3E92CC'],
    intro: 'A finger-food buffet for the whole family. Only offer a tiny taste of feta as it’s very salty.',
    puree: {
      name: 'Aubergine dip',
      steps: [
        'Serve a smooth aubergine dip (roast ½ aubergine, scoop and blend) as the spoonable element.',
      ],
    },
    finger: {
      name: 'Meze platter',
      steps: [
        'Grill courgette and red pepper sticks ~10 minutes (peel for younger babies).',
        'Toast pittas into triangles; add sliced tomato and a tiny taste of baked feta.',
      ],
    },
    ingredients: [
      { id: 'feta', qty: '100g (tiny taste for baby)' },
      { id: 'courgette', qty: '1' },
      { id: 'red-pepper', qty: '1' },
      { id: 'pitta', qty: '3–4' },
      { id: 'tomato', qty: '1' },
      { id: 'aubergine', qty: '½' },
    ],
    allergens: ['milk', 'gluten'],
    tags: ['family-meal', 'finger-food'],
  },

  {
    id: 'salmon-pesto-pasta',
    title: 'Salmon Pesto Pasta',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🐟',
    gradient: ['#A8D5A2', '#5BA45A'],
    intro: 'A quick meal that exposes baby to nuts and lots of flavour, with a little grilled salmon.',
    puree: {
      name: 'Salmon & pesto pasta mash',
      steps: [
        'Blitz a pesto from basil, spinach, 20g nuts, cheddar, lemon and olive oil.',
        'Cook 40g fusilli, adding asparagus for the last 5 minutes; pan-fry ½ salmon fillet.',
        'Stir a spoonful of pesto through the pasta, flake in the salmon and mash for younger babies.',
      ],
    },
    finger: {
      name: 'Salmon & asparagus fingers',
      steps: [
        'Offer pasta, flaked salmon and asparagus fingers with a little pesto to dip.',
        'Don’t offer salmon and nuts together if either is a first time.',
      ],
    },
    ingredients: [
      { id: 'fusilli', qty: '40g' },
      { id: 'salmon', qty: '½ fillet' },
      { id: 'asparagus', qty: '2–3 spears' },
      { id: 'basil', qty: '50g' },
      { id: 'spinach', qty: '50g' },
      { id: 'nuts', qty: '20g' },
      { id: 'cheddar', qty: '20g' },
      { id: 'lemon', qty: '½' },
    ],
    allergens: ['fish', 'gluten', 'nuts', 'milk'],
    tags: ['omega-3', 'lunch'],
  },

  {
    id: 'mushroom-butter-bean-toast',
    title: 'Mushroom & Butter Bean Toast',
    stages: ['stage2', 'stage3'],
    meals: ['lunch'],
    effort: 'easy',
    emoji: '🍄',
    gradient: ['#D7CCC8', '#8D6E63'],
    intro: 'A creamy, flavourful fridge-raid dish that’s super-easy to adapt and a hit with little ones.',
    puree: {
      name: 'Creamy mushroom & bean mash',
      steps: [
        'Cook 100g diced mushrooms 5 minutes until browned.',
        'Stir in a knob of butter and 1 tbsp flour, then 400ml milk; simmer until thick.',
        'Add 100g chopped butter beans, parsley, paprika and 2 tsp yoghurt; blend for younger babies.',
      ],
    },
    finger: {
      name: 'Toast soldiers',
      steps: [
        'Toast bread and cut into fingers to dip, or spread some mash on top.',
      ],
    },
    ingredients: [
      { id: 'mushrooms', qty: '100g' },
      { id: 'unsalted-butter', qty: '1 knob' },
      { id: 'flour', qty: '1 tbsp' },
      { id: 'milk', qty: '400ml' },
      { id: 'butter-beans', qty: '100g' },
      { id: 'bread', qty: '1–2 slices' },
    ],
    allergens: ['milk', 'gluten'],
    tags: ['veggie', 'lunch'],
  },

  // ══════════════════════════════════════════════════════
  // DINNER COLLECTION
  // ══════════════════════════════════════════════════════

  {
    id: 'fish-pie-broccoli-mash',
    title: 'Fish Pie with Broccoli Mash',
    stages: ['stage2', 'stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🥧',
    gradient: ['#9ED0E6', '#3E92CC'],
    intro: 'An easy, tasty fish pie — make a family meal and give baby a portion.',
    puree: {
      name: 'Fish pie mash',
      steps: [
        'Boil 500g potatoes with 1 head broccoli; mash with butter and milk for the topping.',
        'Make a white sauce (60g butter, 60g flour, 700ml milk); mix in 300g fish, peas, sweetcorn and lemon.',
        'Top with the broccoli mash, add cheese and bake at 200°C for 15–20 minutes. Mash for younger babies.',
      ],
    },
    finger: {
      name: 'Broccoli & fish pieces',
      steps: [
        'Reserve a few broccoli florets and large fish flakes to offer as finger foods.',
      ],
    },
    ingredients: [
      { id: 'potato', qty: '500g' },
      { id: 'broccoli', qty: '1 head' },
      { id: 'white-fish', qty: '300g (salmon or cod)' },
      { id: 'peas', qty: '150g' },
      { id: 'sweetcorn', qty: '1 tin' },
      { id: 'unsalted-butter', qty: '60g + knob' },
      { id: 'flour', qty: '60g' },
      { id: 'milk', qty: '700ml' },
      { id: 'cheddar', qty: '50g (optional)' },
    ],
    allergens: ['fish', 'milk', 'gluten'],
    tags: ['family-meal', 'freezable'],
  },

  {
    id: 'beef-stew-garlic-dippers',
    title: 'Slow-Cooked Beef Stew with Garlic Dippers',
    stages: ['stage2', 'stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🍲',
    gradient: ['#C9A98C', '#8A5A33'],
    intro: 'A good way to include iron-rich red meat early. Slow-cooked until meltingly tender.',
    puree: {
      name: 'Blended beef stew',
      steps: [
        'Brown 400g diced beef, then add onion, garlic, 2 carrots, 1 tbsp flour and tomato purée.',
        'Add 1 tin plum tomatoes, oregano, rosemary and 400ml water; simmer low 2–2.5 hours.',
        'Blend a little for younger babies (salt only adults’ portions).',
      ],
    },
    finger: {
      name: 'Garlic dippers',
      steps: [
        'Spread a halved baguette with garlic, parsley and softened butter.',
        'Bake at 200°C for 8–10 minutes and slice into dippers.',
      ],
    },
    ingredients: [
      { id: 'beef-stewing', qty: '400g' },
      { id: 'onion', qty: '1 large' },
      { id: 'garlic', qty: '3 cloves' },
      { id: 'carrot', qty: '2' },
      { id: 'flour', qty: '1 tbsp' },
      { id: 'tomato-puree', qty: '1 tbsp' },
      { id: 'chopped-tomatoes', qty: '1 tin plum' },
      { id: 'baguette', qty: '1 medium' },
      { id: 'unsalted-butter', qty: '2 tbsp' },
    ],
    allergens: ['gluten', 'milk'],
    tags: ['iron-rich', 'family-meal', 'freezable'],
  },

  {
    id: 'red-dragon-pie',
    title: 'Red Dragon Pie',
    stages: ['stage2', 'stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🥧',
    gradient: ['#F2A099', '#D64545'],
    intro: 'A hearty, nutrient-packed vegetarian take on shepherd’s pie using lentils instead of mince.',
    puree: {
      name: 'Lentil pie mash',
      steps: [
        'Cook 1 onion 5 minutes, add 150g carrots 5 more, then herbs, tomato purée and 100g courgette.',
        'Add 250g pre-cooked puy lentils and 300ml water; simmer 15 minutes until gloopy.',
        'Top with mashed potato and bake at 200°C ~30 minutes. Mash or blend the lentils for babies.',
      ],
    },
    finger: {
      name: 'Soft mash & veg',
      steps: [
        'Offer soft potato and carrot pieces alongside.',
      ],
    },
    ingredients: [
      { id: 'onion', qty: '1' },
      { id: 'carrot', qty: '150g' },
      { id: 'mixed-herbs', qty: '1 tsp' },
      { id: 'tomato-puree', qty: '2 tbsp' },
      { id: 'courgette', qty: '100g' },
      { id: 'puy-lentils', qty: '250g' },
      { id: 'potato', qty: '500g' },
      { id: 'unsalted-butter', qty: '25–30g' },
    ],
    allergens: ['milk'],
    tags: ['veggie', 'iron-rich', 'family-meal', 'freezable'],
  },

  {
    id: 'avocado-pasta',
    title: 'Avocado Pasta',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🥑',
    gradient: ['#AED581', '#7CB342'],
    intro: 'Avocado isn’t just for dipping — it makes a perfect creamy pasta sauce.',
    puree: {
      name: 'Creamy avocado pasta',
      steps: [
        'Cook 150g penne or fusilli per packet.',
        'Blend 1 ripe avocado, 20g nuts, juice of ½ lemon, 2 garlic cloves and a dash of oil until smooth.',
        'Toss the sauce through the pasta; mash slightly for younger babies.',
      ],
    },
    finger: {
      name: 'Soft pasta pieces',
      steps: [
        'Offer a few coated pasta pieces as finger foods.',
      ],
    },
    ingredients: [
      { id: 'penne', qty: '150g' },
      { id: 'avocado', qty: '1 ripe' },
      { id: 'nuts', qty: '20g' },
      { id: 'lemon', qty: '½' },
      { id: 'garlic', qty: '2 cloves' },
    ],
    allergens: ['gluten', 'nuts'],
    tags: ['veggie', 'family-meal'],
  },

  {
    id: 'rainbow-spaghetti-bolognese',
    title: 'Rainbow Spaghetti Bolognese',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🍝',
    gradient: ['#F2A099', '#D64545'],
    intro: 'A classic packed with vegetable colours — the more colour, the more variety and nutrients.',
    puree: {
      name: 'Hidden-veg bolognese',
      steps: [
        'Cook courgette, yellow pepper, beetroot and mushrooms 5 minutes; blend with 1 tin tomatoes.',
        'Brown 1 onion with 200g beef mince (or mashed kidney beans), add garlic, tomato purée and oregano.',
        'Stir in the veg sauce and simmer 10 minutes; serve over soft spaghetti, chopped for babies.',
      ],
    },
    finger: {
      name: 'Chopped spaghetti',
      steps: [
        'Chop the spaghetti short and toss in sauce for easy pick-up.',
      ],
    },
    ingredients: [
      { id: 'courgette', qty: '½' },
      { id: 'yellow-pepper', qty: '½' },
      { id: 'beetroot', qty: '2 pre-cooked' },
      { id: 'mushrooms', qty: '100g' },
      { id: 'chopped-tomatoes', qty: '1 tin' },
      { id: 'onion', qty: '1' },
      { id: 'beef-mince', qty: '200g' },
      { id: 'spaghetti', qty: '300g' },
    ],
    allergens: ['gluten'],
    tags: ['iron-rich', 'family-meal'],
  },

  {
    id: 'falafel-wraps',
    title: 'Oven-Baked Falafel Wraps',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'medium',
    emoji: '🧆',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'Falafel that work as snacks with dips, or made into wraps. Great for finger feeding.',
    puree: {
      name: 'Chickpea dip',
      steps: [
        'Blend some of the falafel mix (or extra chickpeas) into a smooth hummus-style dip.',
      ],
    },
    finger: {
      name: 'Baked falafel & wrap',
      steps: [
        'Blitz 1 tin chickpeas, red onion, parsley, cumin and coriander; add flour and lemon.',
        'Shape into ~10 balls, drizzle with oil and bake at 200°C for 25–30 minutes, turning halfway.',
        'Serve with torn wrap and grated carrot/beetroot for younger babies.',
      ],
    },
    ingredients: [
      { id: 'chickpeas', qty: '1 tin' },
      { id: 'red-onion', qty: '1 small' },
      { id: 'parsley', qty: '10g' },
      { id: 'cumin', qty: '1 tsp' },
      { id: 'ground-coriander', qty: '1 tsp' },
      { id: 'flour', qty: '1 tbsp' },
      { id: 'tortilla', qty: '1' },
      { id: 'carrot', qty: '½' },
    ],
    allergens: ['gluten'],
    tags: ['veggie', 'finger-food', 'family-meal'],
  },

  {
    id: 'witch-and-chips',
    title: 'Witch & Chips (Fish & Chips)',
    stages: ['stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🐟',
    gradient: ['#9ED0E6', '#3E92CC'],
    intro: 'An easy homemade fish and chips — unsalted and without too much saturated fat.',
    puree: {
      name: 'Fish, chip & pea mash',
      steps: [
        'Par-boil potato chips 6–8 minutes, then roast in hot oil with rosemary ~30 minutes.',
        'Coat white fish in egg then breadcrumbs (with lemon zest and paprika); bake ~20 minutes.',
        'Boil 120g peas 5 minutes; mash the fish, chips and peas for younger babies.',
      ],
    },
    finger: {
      name: 'Fish & chip fingers',
      steps: [
        'Offer the breaded fish and chips as finger foods, with mashed peas to dip.',
      ],
    },
    ingredients: [
      { id: 'potato', qty: '3 large' },
      { id: 'white-fish', qty: '450g' },
      { id: 'breadcrumbs', qty: '100g' },
      { id: 'eggs', qty: '1' },
      { id: 'paprika', qty: '1 tsp' },
      { id: 'rosemary', qty: '2 sprigs' },
      { id: 'peas', qty: '120g' },
      { id: 'lemon', qty: '½ (zest)' },
    ],
    allergens: ['fish', 'gluten', 'eggs'],
    tags: ['family-meal', 'finger-food'],
  },

  {
    id: 'mexican-stuffed-jackets',
    title: 'Mexican Stuffed Jackets',
    stages: ['stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🍠',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'Introduce baby to different tastes with flexible toppings — chicken & black bean, salsa and guacamole.',
    puree: {
      name: 'Sweet potato & filling mash',
      steps: [
        'Bake 4 sweet potatoes at 200°C for 30–35 minutes.',
        'Make the chicken & black bean filling (cook onion, chicken, garlic, spices, then black beans 10–15 min; shred).',
        'Mash the sweet potato insides with some filling and a little sour cream for baby.',
      ],
    },
    finger: {
      name: 'Toppings & guacamole',
      steps: [
        'Top jackets with sweetcorn salsa, guacamole (mashed avocado, garlic, coriander, lime) and tomato salsa.',
        'Offer soft jacket pieces and toppings as finger foods.',
      ],
    },
    ingredients: [
      { id: 'sweet-potato', qty: '4' },
      { id: 'chicken-breast', qty: '2' },
      { id: 'black-beans', qty: '1 tin' },
      { id: 'smoked-paprika', qty: '1 tsp' },
      { id: 'cumin', qty: '1 tsp' },
      { id: 'avocado', qty: '2' },
      { id: 'sweetcorn', qty: '1 tin' },
      { id: 'sour-cream', qty: '4 tbsp' },
      { id: 'tomato', qty: '150g' },
    ],
    allergens: ['milk'],
    tags: ['family-meal', 'iron-rich'],
  },

  {
    id: 'babys-first-curry',
    title: "Baby's First Curry",
    stages: ['stage2', 'stage3'],
    meals: ['dinner'],
    effort: 'medium',
    emoji: '🍛',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'Full of nutritious ingredients and really simple. Coconut milk adds creaminess — avoid hot spices.',
    puree: {
      name: 'Mild chicken curry mash',
      steps: [
        'Cook garam masala, turmeric and garlic granules in oil, then tomato purée, sweet potato and chicken.',
        'Add ½ tin coconut milk and 80ml water; simmer 15 minutes, then add cauliflower 5–10 more.',
        'Add peas, cook 5 minutes and mash well for younger babies.',
      ],
    },
    finger: {
      name: 'Bread fingers',
      steps: [
        'Serve with rice or warm flatbread fingers to dip.',
      ],
    },
    ingredients: [
      { id: 'garam-masala', qty: '1–2 tsp' },
      { id: 'turmeric', qty: '1 tsp' },
      { id: 'tomato-puree', qty: '1 heaped tsp' },
      { id: 'sweet-potato', qty: '200g' },
      { id: 'chicken-breast', qty: '1 (or chickpeas)' },
      { id: 'coconut-milk', qty: '½ tin' },
      { id: 'cauliflower', qty: '170g' },
      { id: 'peas', qty: '80g' },
    ],
    allergens: [],
    tags: ['family-meal', 'iron-rich'],
  },

  {
    id: 'babys-first-burger',
    title: "Baby's First Burger",
    stages: ['stage3'],
    meals: ['dinner'],
    effort: 'medium',
    emoji: '🍔',
    gradient: ['#C9A98C', '#8A5A33'],
    intro: 'A healthy homemade burger for baby — simple and not greasy like takeaway versions.',
    puree: {
      name: 'Tomato salsa',
      steps: [
        'Mash a simple tomato salsa (chopped tomato, red onion, a drizzle of oil) to spoon alongside.',
      ],
    },
    finger: {
      name: 'Mini beef/turkey burgers',
      steps: [
        'Mix 300g mince, spring onions, garlic, 1 egg, paprika and cumin by hand.',
        'Form mini burgers and fry ~4 minutes each side. Chop into finger pieces and serve in a mini bun.',
      ],
    },
    ingredients: [
      { id: 'beef-mince', qty: '300g (or turkey)' },
      { id: 'spring-onion', qty: '2' },
      { id: 'garlic', qty: '1 clove' },
      { id: 'eggs', qty: '1' },
      { id: 'paprika', qty: '1 tsp' },
      { id: 'cumin', qty: '1 tsp' },
      { id: 'burger-buns', qty: 'mini, to serve' },
      { id: 'tomato', qty: '1' },
    ],
    allergens: ['eggs', 'gluten'],
    tags: ['iron-rich', 'finger-food', 'family-meal'],
  },

  {
    id: 'babys-first-vegan-burger',
    title: "Baby's First Vegan Burger",
    stages: ['stage3'],
    meals: ['dinner'],
    effort: 'medium',
    emoji: '🍔',
    gradient: ['#A8D5A2', '#5BA45A'],
    intro: 'A one-bowl bean burger — great for a BBQ or dinner, served with salsa and chickpea dip.',
    puree: {
      name: 'Chickpea dip',
      steps: [
        'Serve with a smooth chickpea dip and tomato salsa to spoon alongside.',
      ],
    },
    finger: {
      name: 'Baked bean burgers',
      steps: [
        'Mash ½ tin chickpeas and ½ tin black beans with spring onion, garlic, cumin, paprika and 1 tbsp flour.',
        'Shape into 6 small burgers, drizzle with oil and bake at 200°C for 20 minutes, turning halfway.',
      ],
    },
    ingredients: [
      { id: 'chickpeas', qty: '½ tin' },
      { id: 'black-beans', qty: '½ tin' },
      { id: 'spring-onion', qty: '2' },
      { id: 'garlic', qty: '1 clove' },
      { id: 'cumin', qty: '1 tsp' },
      { id: 'paprika', qty: '1 tsp' },
      { id: 'flour', qty: '1 tbsp' },
      { id: 'burger-buns', qty: 'mini, to serve' },
    ],
    allergens: ['gluten'],
    tags: ['veggie', 'finger-food', 'family-meal'],
  },

  {
    id: 'creamy-lemony-salmon-bake',
    title: 'Creamy Lemony Salmon Bake',
    stages: ['stage2', 'stage3'],
    meals: ['dinner'],
    effort: 'medium',
    emoji: '🐟',
    gradient: ['#9ED0E6', '#3E92CC'],
    intro: 'A lovely, simple one-tray family meal — a great quick Sunday lunch.',
    puree: {
      name: 'Salmon & veg mash',
      steps: [
        'Roast new potatoes and courgette with oil at 200°C for 15–20 minutes (peel some for babies).',
        'Whisk 100g soft cheese with 200ml boiling water and lemon juice; add asparagus and salmon, bake 10 min.',
        'Add peas, drizzle the sauce over and bake 5 more; mash the veg with sauce and flaked salmon.',
      ],
    },
    finger: {
      name: 'Salmon strips & veg',
      steps: [
        'Offer strips of salmon (skin removed) and soft veg fingers.',
      ],
    },
    ingredients: [
      { id: 'new-potatoes', qty: '300g' },
      { id: 'courgette', qty: '1' },
      { id: 'cream-cheese', qty: '100g' },
      { id: 'lemon', qty: '1' },
      { id: 'asparagus', qty: '125g' },
      { id: 'salmon', qty: '2 fillets' },
      { id: 'peas', qty: '100g' },
    ],
    allergens: ['fish', 'milk'],
    tags: ['omega-3', 'family-meal'],
  },

  {
    id: 'traffic-light-lasagne',
    title: 'Traffic Light Lasagne',
    stages: ['stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🍝',
    gradient: ['#F2A099', '#D64545'],
    intro: 'An Italian favourite made quicker with a cheat’s béchamel and lots of veg.',
    puree: {
      name: 'Lasagne sauce mash',
      steps: [
        'Make a cheat’s béchamel: stir crème fraîche, cheese, hot water and nutmeg.',
        'Make a tomato sauce: cook onion, garlic, red pepper, herbs, tomatoes, lentils and sweetcorn.',
        'Layer with spinach and lasagne sheets; bake at 200°C for 20–30 minutes. Mash well for baby.',
      ],
    },
    finger: {
      name: 'Soft lasagne pieces',
      steps: [
        'Cut into small squares and offer the soft pasta layers to pick up.',
      ],
    },
    ingredients: [
      { id: 'creme-fraiche', qty: '250g' },
      { id: 'cheddar', qty: '30g' },
      { id: 'onion', qty: '1 red' },
      { id: 'garlic', qty: '1–2 cloves' },
      { id: 'red-pepper', qty: '1' },
      { id: 'chopped-tomatoes', qty: '1 tin' },
      { id: 'tinned-lentils', qty: '1 tin' },
      { id: 'sweetcorn', qty: '1 tin' },
      { id: 'spinach', qty: '100g' },
      { id: 'lasagne-sheets', qty: '9–10' },
    ],
    allergens: ['milk', 'gluten'],
    tags: ['veggie', 'family-meal', 'freezable'],
  },

  {
    id: 'thai-green-curry',
    title: 'Thai Green Curry',
    stages: ['stage3'],
    meals: ['dinner'],
    effort: 'hard',
    emoji: '🍛',
    gradient: ['#A8D5A2', '#5BA45A'],
    intro: 'A flavour-packed dish to develop baby’s taste buds, with a homemade Thai curry paste.',
    puree: {
      name: 'Green curry sauce with rice',
      steps: [
        'Blitz a paste of coriander, lemongrass, shallot, garlic, ginger, lime, cumin and oil; fry 2–3 minutes.',
        'Add baby corn, green beans and mangetout, then 1 tin coconut milk and prawns or tofu; cook 4–5 minutes.',
        'Serve over soft brown rice; blend a little for younger babies.',
      ],
    },
    finger: {
      name: 'Veg sticks & rice',
      steps: [
        'Offer the soft vegetable sticks with sauce and rice to pick up.',
      ],
    },
    ingredients: [
      { id: 'coriander', qty: '25g' },
      { id: 'lemongrass', qty: '1 stalk' },
      { id: 'garlic', qty: '2 cloves' },
      { id: 'ginger', qty: '1 thumb' },
      { id: 'lime', qty: '½' },
      { id: 'baby-corn', qty: '100g' },
      { id: 'green-beans', qty: '100g' },
      { id: 'mangetout', qty: '100g' },
      { id: 'coconut-milk', qty: '1 tin' },
      { id: 'prawns', qty: '300g (or tofu)' },
      { id: 'brown-rice', qty: 'to serve' },
    ],
    allergens: ['shellfish'],
    tags: ['family-meal', 'flavour'],
  },

  {
    id: 'veg-packed-chilli',
    title: 'Super Easy, Veg-Packed Chilli',
    stages: ['stage2', 'stage3'],
    meals: ['dinner'],
    effort: 'medium',
    emoji: '🌶️',
    gradient: ['#F2A099', '#D64545'],
    intro: 'A great way to get little ones used to new flavours — paprika and cumin instead of hot spices.',
    puree: {
      name: 'Veggie chilli mash',
      steps: [
        'Cook 1 red onion 5 minutes, add paprika, cumin, tomato purée, sweet potato, pepper and mushrooms; cook 5 min.',
        'Add 1 tin tomatoes and 1 tin kidney beans; simmer with the lid on 20–25 minutes, then 10 more uncovered.',
        'Blend or roughly mash for younger babies, adding a splash of water.',
      ],
    },
    finger: {
      name: 'Rice or pitta',
      steps: [
        'Serve with brown rice or warm pitta fingers and a dollop of yoghurt or guacamole.',
      ],
    },
    ingredients: [
      { id: 'red-onion', qty: '1' },
      { id: 'paprika', qty: '1 tsp' },
      { id: 'cumin', qty: '1 tsp' },
      { id: 'tomato-puree', qty: '1 tbsp' },
      { id: 'sweet-potato', qty: '1 medium' },
      { id: 'red-pepper', qty: '1' },
      { id: 'mushrooms', qty: '100g' },
      { id: 'chopped-tomatoes', qty: '1 tin' },
      { id: 'kidney-beans', qty: '1 tin' },
    ],
    allergens: [],
    tags: ['veggie', 'family-meal', 'freezable'],
  },

  // ══════════════════════════════════════════════════════
  // FINGER FOODS & SNACKS
  // ══════════════════════════════════════════════════════

  {
    id: 'spinach-cheddar-muffins',
    title: 'Spinach & Cheddar Muffins',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast', 'lunch'],
    effort: 'medium',
    emoji: '🧁',
    gradient: ['#A8D5A2', '#5BA45A'],
    intro: 'Mini savoury muffins — perfect for breakfast, an on-the-go snack or a light lunch with dips.',
    puree: {
      name: 'Yoghurt dip',
      steps: [
        'Serve a warm muffin with a little plain yoghurt to dip.',
      ],
    },
    finger: {
      name: 'Mini muffins',
      steps: [
        'Wilt 80g spinach, squeeze dry and chop. Beat 2 eggs with 100ml milk and 50g melted butter.',
        'Mix in 150g self-raising flour, 120g cheddar, spring onions and spinach.',
        'Bake in a 12-hole tray at 200°C for 15–20 minutes until golden.',
      ],
    },
    ingredients: [
      { id: 'spinach', qty: '80g' },
      { id: 'eggs', qty: '2' },
      { id: 'milk', qty: '100ml' },
      { id: 'unsalted-butter', qty: '50g' },
      { id: 'self-raising-flour', qty: '150g' },
      { id: 'cheddar', qty: '120g' },
      { id: 'spring-onion', qty: '3' },
    ],
    allergens: ['eggs', 'milk', 'gluten'],
    tags: ['veggie', 'finger-food', 'batch-cook', 'freezable'],
  },

  {
    id: 'carrot-oat-bars',
    title: 'Carrot Oat Bars',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🥕',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'Simple bars and a great way to get extra veg into a baby or toddler. Perfect finger-food bars.',
    puree: {
      name: 'Yoghurt to serve',
      steps: [
        'Serve with a little plain yoghurt for dipping if you like.',
      ],
    },
    finger: {
      name: 'Baked carrot oat bars',
      steps: [
        'Mix grated carrot, grated apple, 2 mashed bananas, 1 tbsp almond butter and 150g oats.',
        'Press into a greased tray and bake at 200°C for 20 minutes; cool and cut into bars.',
      ],
    },
    ingredients: [
      { id: 'carrot', qty: '½' },
      { id: 'apple', qty: '½ small' },
      { id: 'banana', qty: '2' },
      { id: 'almond-butter', qty: '1 tbsp' },
      { id: 'porridge-oats', qty: '150g' },
    ],
    allergens: ['nuts'],
    tags: ['veggie', 'finger-food', 'batch-cook'],
  },

  {
    id: 'cheese-biscuits',
    title: 'Cheese Biscuits',
    stages: ['stage2', 'stage3'],
    meals: ['lunch'],
    effort: 'easy',
    emoji: '🧀',
    gradient: ['#FFE08A', '#F4B400'],
    intro: 'A quick, simple and tasty option. For under-ones, serve with veggie sticks.',
    puree: {
      name: 'Veg dip',
      steps: [
        'Serve with a smooth vegetable purée or hummus to dip.',
      ],
    },
    finger: {
      name: 'Baked cheese biscuits',
      steps: [
        'Mix 50g ground almonds, 50g finely grated cheese and a few pinches of dried herbs.',
        'Press into rounds and bake at 200°C for about 10 minutes until browned; cool to harden.',
      ],
    },
    ingredients: [
      { id: 'ground-almonds', qty: '50g' },
      { id: 'cheddar', qty: '50g' },
      { id: 'oregano', qty: 'a few pinches' },
    ],
    allergens: ['nuts', 'milk'],
    tags: ['finger-food', 'batch-cook'],
  },

  {
    id: 'babys-first-ice-cream',
    title: "Baby's First Ice Cream",
    stages: ['stage2', 'stage3'],
    meals: ['lunch'],
    effort: 'easy',
    emoji: '🍦',
    gradient: ['#B7A6E0', '#6C4FB6'],
    intro: 'A great first ice-cream taste with plenty of nutrients and not too sweet — lovely on a hot day.',
    puree: {
      name: 'Berry yoghurt ice cream',
      steps: [
        'Blend 225g frozen berries, 40g frozen spinach (optional) and 150g yoghurt until smooth.',
        'Serve a scoop straight away.',
      ],
    },
    finger: {
      name: 'Ice lollies',
      steps: [
        'Pour into ice-lolly moulds and freeze for a hold-able version.',
      ],
    },
    ingredients: [
      { id: 'frozen-berries', qty: '225g' },
      { id: 'spinach', qty: '40g (optional)' },
      { id: 'natural-yoghurt', qty: '150g' },
    ],
    allergens: ['milk'],
    tags: ['dessert', 'no-cook', 'fruit'],
  },

  {
    id: 'babys-first-omelette',
    title: "Baby's First Omelette",
    stages: ['stage2', 'stage3'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🍳',
    gradient: ['#FFE08A', '#F4B400'],
    intro: 'A quick, easy light bite for lunch or breakfast. Vary the veg, or keep it plain.',
    puree: {
      name: 'Soft egg centre',
      steps: [
        'Whisk 1 egg with a pinch of oregano and cook gently with softened veg until just set.',
        'Serve the soft inside on a spoon for younger babies.',
      ],
    },
    finger: {
      name: 'Omelette strips',
      steps: [
        'Fry 1 tbsp frozen veg until soft, add the egg and a little cheese; cook through.',
        'Cut into finger strips and serve with toast fingers.',
      ],
    },
    ingredients: [
      { id: 'eggs', qty: '1' },
      { id: 'frozen-veg', qty: '1 tbsp' },
      { id: 'cheddar', qty: 'a little (optional)' },
      { id: 'bread', qty: 'to serve' },
    ],
    allergens: ['eggs', 'milk', 'gluten'],
    tags: ['veggie', 'finger-food', 'quick'],
  },

  {
    id: 'chickpea-flatbread',
    title: 'Chickpea Flatbread',
    stages: ['stage2', 'stage3'],
    meals: ['lunch', 'dinner'],
    effort: 'easy',
    emoji: '🫓',
    gradient: ['#FFC07A', '#F58634'],
    intro: 'An easy homemade, gluten-free flatbread — great with soups and dips or as an alternative to bread.',
    puree: {
      name: 'Dip to serve',
      steps: [
        'Serve with a smooth soup or dip for baby to scoop.',
      ],
    },
    finger: {
      name: 'Flatbread strips',
      steps: [
        'Whisk 125g gram flour, ½ tsp bicarbonate of soda and 200ml water to a smooth batter.',
        'Cook ladlefuls in a little oil 2–3 minutes each side until golden. Cut into strips.',
      ],
    },
    ingredients: [
      { id: 'gram-flour', qty: '125g' },
      { id: 'bicarbonate-soda', qty: '½ tsp' },
      { id: 'olive-oil', qty: 'a drizzle' },
    ],
    allergens: [],
    tags: ['veggie', 'finger-food', 'gluten-free'],
  },

  {
    id: 'leftover-veg-muffins',
    title: 'Leftover Veg Muffins',
    stages: ['stage2', 'stage3'],
    meals: ['breakfast', 'lunch'],
    effort: 'easy',
    emoji: '🧁',
    gradient: ['#A8D5A2', '#66BB6A'],
    intro: 'A quick snack or light meal, and a perfect way to use up leftover veg from the other recipes.',
    puree: {
      name: 'Yoghurt dip',
      steps: [
        'Serve with a little plain yoghurt or hummus to dip.',
      ],
    },
    finger: {
      name: 'Egg & veg muffins',
      steps: [
        'Whisk 3 eggs; pour halfway into a greased 6-hole muffin tray.',
        'Fill with 100g finely chopped leftover veg and a little cheese; bake at 200°C for 15–20 minutes.',
      ],
    },
    ingredients: [
      { id: 'eggs', qty: '3 large' },
      { id: 'frozen-veg', qty: '100g leftover veg' },
      { id: 'cheddar', qty: '15g (optional)' },
    ],
    allergens: ['eggs', 'milk'],
    tags: ['veggie', 'finger-food', 'batch-cook'],
  },

  {
    id: 'rhubarb-crumble',
    title: 'Rhubarb Crumble',
    stages: ['stage2', 'stage3'],
    meals: ['lunch'],
    effort: 'medium',
    emoji: '🍮',
    gradient: ['#F7B5C4', '#E8718D'],
    intro: 'A simple crumble for little ones with lots of flavours and no added sugar.',
    puree: {
      name: 'Rhubarb & banana compote',
      steps: [
        'Steam 300g chopped rhubarb ~8 minutes until soft.',
        'Mix with 2 mashed bananas, a pinch of ginger and a squeeze of lemon.',
      ],
    },
    finger: {
      name: 'Crumble topping',
      steps: [
        'Rub together 75g oats, 75g flour, 60g butter, cinnamon and nutmeg.',
        'Scatter over the fruit and bake at 200°C for ~20 minutes until golden. Serve with yoghurt.',
      ],
    },
    ingredients: [
      { id: 'rhubarb', qty: '300g' },
      { id: 'banana', qty: '2' },
      { id: 'ground-ginger', qty: 'a large pinch' },
      { id: 'porridge-oats', qty: '75g' },
      { id: 'flour', qty: '75g' },
      { id: 'unsalted-butter', qty: '60g' },
    ],
    allergens: ['gluten', 'milk'],
    tags: ['dessert', 'fruit'],
  },

];

export function getRecipeById(id, customRecipes = []) {
  return RECIPES.find((r) => r.id === id) || customRecipes.find((r) => r.id === id);
}

export function getAllRecipes(customRecipes = []) {
  return [...RECIPES, ...customRecipes];
}
