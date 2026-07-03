// 3 Chillies — seed menu + restaurant details.
// Used to seed Supabase (supabase/seed.sql) and as the offline fallback.

export const SEED_MENU = [
  { name: "Veg Corn Soup", price: 149, type: "veg", category: "Soups", desc: "Silky sweet-corn broth with crunch." },
  { name: "Veg Hot And Sour Soup", price: 149, type: "veg", category: "Soups", desc: "Tangy, peppery and warming." },
  { name: "Chicken Corn Soup", price: 159, type: "nonveg", category: "Soups", desc: "Creamy corn broth with shredded chicken." },
  { name: "Chicken Hot And Sour Soup", price: 159, type: "nonveg", category: "Soups", desc: "Spicy-sour classic with chicken." },

  { name: "Paneer Tikka (7 Pcs)", price: 309, type: "veg", category: "Tandoori Starters", desc: "Chargrilled cottage cheese, smoky spices." },
  { name: "Achari Paneer Tikka (7 Pcs)", price: 309, type: "veg", category: "Tandoori Starters", desc: "Pickle-spiced tandoori paneer." },
  { name: "Boneless Peri Peri Chicken (7 Pcs)", price: 439, type: "nonveg", category: "Tandoori Starters", desc: "Fiery peri-peri grilled chicken." },
  { name: "Boneless Chicken Tikka (7 Pcs)", price: 439, type: "nonveg", category: "Tandoori Starters", desc: "Classic tandoori chicken tikka." },
  { name: "Boneless Lehsuni Murgh Tikka (7 Pcs)", price: 439, type: "nonveg", category: "Tandoori Starters", desc: "Garlic-marinated chicken tikka." },
  { name: "Fish Tikka (8 Pcs)", price: 439, type: "nonveg", category: "Tandoori Starters", desc: "Spiced tandoori fish." },
  { name: "Boneless Guntur Kebab (7 Pcs)", price: 439, type: "nonveg", category: "Tandoori Starters", desc: "Guntur-chilli fired kebab." },

  { name: "Paneer Butter Masala", price: 309, type: "veg", category: "Veg Main Course", desc: "Paneer in silky tomato-butter gravy." },
  { name: "Palak Paneer", price: 309, type: "veg", category: "Veg Main Course", desc: "Cottage cheese in creamy spinach." },
  { name: "Veg Kundan Masala", price: 349, type: "veg", category: "Veg Main Course", desc: "Rich mixed-veg house special." },
  { name: "Kadhai Paneer", price: 249, type: "veg", category: "Veg Main Course", desc: "Wok-tossed paneer with peppers." },
  { name: "Palak Masala", price: 309, type: "veg", category: "Veg Main Course", desc: "Spiced spinach masala." },
  { name: "Dal Fry", price: 309, type: "veg", category: "Veg Main Course", desc: "Tempered yellow lentils." },
  { name: "Aloo Gobi", price: 189, type: "veg", category: "Veg Main Course", desc: "Potato & cauliflower masala." },
  { name: "Dal Tadka", price: 189, type: "veg", category: "Veg Main Course", desc: "Lentils with smoky tempering." },

  { name: "Butter Chicken", price: 369, type: "nonveg", category: "Non Veg Main Course", desc: "Tandoori chicken in creamy makhani." },
  { name: "Nawabi Chicken", price: 309, type: "nonveg", category: "Non Veg Main Course", desc: "Royal, mildly-spiced curry." },
  { name: "Chicken Lababdar", price: 309, type: "nonveg", category: "Non Veg Main Course", desc: "Tomato-onion chicken curry." },
  { name: "Chicken Tikka Masala", price: 209, type: "nonveg", category: "Non Veg Main Course", desc: "Grilled tikka in masala gravy." },
  { name: "Kadhai Chicken", price: 309, type: "nonveg", category: "Non Veg Main Course", desc: "Peppery wok chicken." },
  { name: "Chatpata Chicken", price: 309, type: "nonveg", category: "Non Veg Main Course", desc: "Tangy, spicy chicken." },

  { name: "Plain Naan", price: 39, type: "veg", category: "Breads", desc: "Tandoor-baked flatbread." },
  { name: "Butter Naan", price: 39, type: "veg", category: "Breads", desc: "Buttered soft naan." },
  { name: "Garlic Naan", price: 49, type: "veg", category: "Breads", desc: "Garlic-butter naan." },

  { name: "Kaju Rice", price: 189, type: "veg", category: "Rice", desc: "Cashew-studded rice." },
  { name: "Plain Rice", price: 149, type: "veg", category: "Rice", desc: "Steamed basmati." },
  { name: "Jeera Rice", price: 159, type: "veg", category: "Rice", desc: "Cumin-tempered rice." },

  { name: "Paneer 65", price: 149, type: "veg", category: "Chinese", desc: "Crispy spiced paneer." },
  { name: "Veg Manchurian", price: 149, type: "veg", category: "Chinese", desc: "Veg balls in tangy sauce." },
  { name: "Chilli Paneer", price: 149, type: "veg", category: "Chinese", desc: "Wok-tossed paneer & peppers." },
  { name: "Honey Chilli Potato", price: 149, type: "veg", category: "Chinese", desc: "Sweet-spicy crispy potatoes." },
  { name: "Diced Paneer", price: 149, type: "veg", category: "Chinese", desc: "Diced paneer, chilli-garlic." },
  { name: "Chicken 65", price: 309, type: "nonveg", category: "Chinese", desc: "South-Indian fried chicken." },
  { name: "Chilli Chicken", price: 309, type: "nonveg", category: "Chinese", desc: "Indo-Chinese chilli chicken." },
  { name: "Chicken Thai Pai", price: 309, type: "nonveg", category: "Chinese", desc: "Thai-style chicken." },
  { name: "Dice Chicken", price: 309, type: "nonveg", category: "Chinese", desc: "Diced chilli chicken." },
  { name: "Chicken Lollipop", price: 309, type: "nonveg", category: "Chinese", desc: "Frenched chicken wings." },
  { name: "Pepper Chicken", price: 309, type: "nonveg", category: "Chinese", desc: "Black-pepper chicken." },
  { name: "Pepper Fish", price: 309, type: "nonveg", category: "Chinese", desc: "Peppery fried fish." },
  { name: "Loose Prawns", price: 369, type: "nonveg", category: "Chinese", desc: "Wok-tossed prawns." },
  { name: "Golden Fried Prawns", price: 369, type: "nonveg", category: "Chinese", desc: "Crisp golden prawns." },
  { name: "Corn Fish", price: 309, type: "nonveg", category: "Chinese", desc: "Fish with corn crumb." },
  { name: "Thread Chicken (8 Pcs)", price: 369, type: "nonveg", category: "Chinese", desc: "Crispy thread-wrapped chicken." },

  { name: "Veg Soft Fried Rice", price: 189, type: "veg", category: "Fried Rice", desc: "Soft-style veg fried rice." },
  { name: "Veg Fried Rice", price: 189, type: "veg", category: "Fried Rice", desc: "Classic veg fried rice." },
  { name: "Veg Schezwan Fried Rice", price: 199, type: "veg", category: "Fried Rice", desc: "Spicy schezwan rice." },
  { name: "Veg Bandi Style Fried Rice", price: 189, type: "veg", category: "Fried Rice", desc: "Street-style fried rice." },
  { name: "Veg Chilli Garlic Fried Rice", price: 199, type: "veg", category: "Fried Rice", desc: "Chilli-garlic fried rice." },
  { name: "Egg Fried Rice", price: 189, type: "nonveg", category: "Fried Rice", desc: "Egg fried rice." },
  { name: "Non Veg Schezwan Fried Rice", price: 219, type: "nonveg", category: "Fried Rice", desc: "Spicy chicken schezwan rice." },
  { name: "Non Veg Soft Fried Rice", price: 209, type: "nonveg", category: "Fried Rice", desc: "Soft-style chicken rice." },
  { name: "Non Veg Bandi Style Fried Rice", price: 209, type: "nonveg", category: "Fried Rice", desc: "Street-style chicken rice." },
  { name: "Non Veg Chilli Garlic Fried Rice", price: 219, type: "nonveg", category: "Fried Rice", desc: "Chilli-garlic chicken rice." },

  { name: "Veg Noodles", price: 189, type: "veg", category: "Noodles", desc: "Classic veg noodles." },
  { name: "Veg Schezwan Noodles", price: 199, type: "veg", category: "Noodles", desc: "Spicy schezwan noodles." },
  { name: "Veg Soft Noodles", price: 189, type: "veg", category: "Noodles", desc: "Soft-style veg noodles." },
  { name: "Veg Exotic Noodles", price: 189, type: "veg", category: "Noodles", desc: "Exotic veg noodles." },
  { name: "Veg Hakka Noodles", price: 189, type: "veg", category: "Noodles", desc: "Hakka-style noodles." },
  { name: "Veg Bandi Style Noodles", price: 189, type: "veg", category: "Noodles", desc: "Street-style noodles." },
  { name: "Veg Chilli Garlic Noodles", price: 199, type: "veg", category: "Noodles", desc: "Chilli-garlic noodles." },
  { name: "Veg American Chopsuey Noodles", price: 219, type: "veg", category: "Noodles", desc: "Crispy noodles, sweet-tangy sauce." },
  { name: "Egg Noodles", price: 189, type: "nonveg", category: "Noodles", desc: "Egg noodles." },
  { name: "Non Veg Soft Noodles", price: 209, type: "nonveg", category: "Noodles", desc: "Soft chicken noodles." },
  { name: "Non Veg Schezwan Noodles", price: 219, type: "nonveg", category: "Noodles", desc: "Spicy chicken schezwan noodles." },
  { name: "Non Veg Exotic Noodles", price: 209, type: "nonveg", category: "Noodles", desc: "Exotic chicken noodles." },
  { name: "Non Veg Hakka Noodles", price: 209, type: "nonveg", category: "Noodles", desc: "Hakka chicken noodles." },
  { name: "Non Veg Bandi Style Noodles", price: 209, type: "nonveg", category: "Noodles", desc: "Street-style chicken noodles." },
  { name: "Non Veg Chilli Garlic Noodles", price: 219, type: "nonveg", category: "Noodles", desc: "Chilli-garlic chicken noodles." },

  { name: "Crispy Corn", price: 149, type: "veg", category: "Snacks", desc: "Golden crispy spiced corn." },

  { name: "Apricot Delight", price: 189, type: "veg", category: "Desserts", desc: "Warm apricot with cream." },
  { name: "Cream Fruit", price: 189, type: "veg", category: "Desserts", desc: "Fresh fruit in sweet cream." },

  { name: "Virgin Mojito", price: 129, type: "veg", category: "Beverages", desc: "Mint-lime cooler." },
  { name: "Sunset Cooler Mocktail", price: 129, type: "veg", category: "Beverages", desc: "Citrus sunset blend." },
  { name: "Tropical Berry Mocktail", price: 129, type: "veg", category: "Beverages", desc: "Berry-tropical fizz." },
  { name: "Blue Lagoon Mocktail", price: 129, type: "veg", category: "Beverages", desc: "Cool blue lemonade." },
  { name: "Sea Breeze Mocktail", price: 129, type: "veg", category: "Beverages", desc: "Cranberry-citrus refresher." },
];

export const CATEGORY_ORDER = [
  "Soups",
  "Tandoori Starters",
  "Veg Main Course",
  "Non Veg Main Course",
  "Chinese",
  "Fried Rice",
  "Noodles",
  "Rice",
  "Breads",
  "Snacks",
  "Desserts",
  "Beverages",
];

// An emoji per category — used as a visual token on cards (until real photos are added).
export const CATEGORY_ICON = {
  Soups: "🍜",
  "Tandoori Starters": "🍢",
  "Veg Main Course": "🥘",
  "Non Veg Main Course": "🍛",
  Chinese: "🥡",
  "Fried Rice": "🍚",
  Noodles: "🍝",
  Rice: "🍚",
  Breads: "🫓",
  Snacks: "🌽",
  Desserts: "🍮",
  Beverages: "🍹",
};

export const RESTAURANT = {
  name: "3 Chillies",
  tagline: "Indo-Chinese Restaurant",
  rating: 4.6,
  reviewCount: 49,
  priceRange: "₹200–400",
  phone: "070138 92089",
  whatsapp: "917013892089",
  address:
    "Pavani Indradhanush Complex, Road No. 2, UBI Colony, Green Valley, Banjara Hills, Hyderabad, Telangana 500034",
  hours: "Open daily · Closes 12:30 AM",
};

export const REVIEWS = [
  { text: "A great place to enjoy quality Indo-Chinese cuisine with family and friends.", author: "Sridevi K.", stars: 5 },
  { text: "Very nice place and reasonable prices. Love the delicious food and music!", author: "Rahul M.", stars: 5 },
  { text: "Fresh flavours, generous portions and a warm, cozy ambience. The starters are unmissable.", author: "Ayesha F.", stars: 5 },
];

/* ------------------------------------------------------------------ */
/* Food photography (Unsplash). Every dish gets a photo:              */
/* 1. item.img (set per-dish in the admin CRM / Supabase) wins,       */
/* 2. else a dish-name keyword match,                                 */
/* 3. else one of the category's photos (rotated for variety).        */
/* Cards fall back to the category emoji if a photo fails to load.    */
/* ------------------------------------------------------------------ */

const U = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=60`;

export const CATEGORY_IMGS = {
  Soups: [U("photo-1547592166-23ac45744acd")],
  "Tandoori Starters": [
    U("photo-1599487488170-d11ec9c172f0"),
    U("photo-1606491956689-2ea866880c84"),
    U("photo-1544025162-d76694265947"),
  ],
  "Veg Main Course": [
    U("photo-1585937421612-70a008356fbe"),
    U("photo-1565557623262-b51c2513a641"),
  ],
  "Non Veg Main Course": [
    U("photo-1603894584373-5ac82b2ae398"),
    U("photo-1606491956689-2ea866880c84"),
  ],
  Chinese: [
    U("photo-1512058564366-18510be2db19"),
    U("photo-1563245372-f21724e3856d"),
    U("photo-1562967914-608f82629710"),
  ],
  "Fried Rice": [U("photo-1603133872878-684f208fb84b")],
  Noodles: [
    U("photo-1585032226651-759b368d7246"),
    U("photo-1563245372-f21724e3856d"),
  ],
  Rice: [U("photo-1603133872878-684f208fb84b")],
  Breads: [
    U("photo-1565557623262-b51c2513a641"),
    U("photo-1601050690597-df0568f70950"),
  ],
  Snacks: [U("photo-1601050690597-df0568f70950")],
  Desserts: [
    U("photo-1488477181946-6428a0291777"),
    U("photo-1551024506-0bccd828d307"),
  ],
  Beverages: [
    U("photo-1551538827-9c037cb4f32a"),
    U("photo-1544145945-f90425340c7e"),
  ],
};

const DISH_IMG_RULES = [
  ["butter chicken", U("photo-1603894584373-5ac82b2ae398")],
  ["paneer tikka", U("photo-1599487488170-d11ec9c172f0")],
  ["65", U("photo-1562967914-608f82629710")],
  ["lollipop", U("photo-1562967914-608f82629710")],
];

// Small stable hash so the same dish always gets the same photo.
function nameHash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export function dishImage(item) {
  if (item?.img) return item.img;
  const n = (item?.name || "").toLowerCase();
  for (const [kw, src] of DISH_IMG_RULES) if (n.includes(kw)) return src;
  const pool = CATEGORY_IMGS[item?.category];
  if (pool?.length) return pool[nameHash(n) % pool.length];
  return U("photo-1504674900247-0877df9cc836");
}

// Site imagery (hero, about, gallery highlights)
export const SITE_IMG = {
  hero: U("photo-1517248135467-4c7edcad34c4"),
  dining: U("photo-1552566626-52f8b828add9"),
  chef: U("photo-1414235077428-338989a2e8c0"),
  spices: U("photo-1596040033229-a9821ebd058d"),
  platter: U("photo-1555396273-367ea4eb4db5"),
};
