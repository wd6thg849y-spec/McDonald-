export const MENU_ITEMS = [
  {
    id: 'b1',
    name: 'The Truffle Royale',
    description: 'Double wagyu beef, black truffle mayo, aged gruyere, brioche bun.',
    price: 18.99,
    calories: 850,
    spicy: 0,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Best Seller', 'AI Recommended'],
  },
  {
    id: 'b2',
    name: 'Inferno Crunch',
    description: 'Crispy buttermilk chicken, ghost pepper glaze, jalapeño slaw.',
    price: 14.50,
    calories: 720,
    spicy: 3,
    image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Spicy', 'Trending'],
  },
  {
    id: 'b3',
    name: 'Neon Smash',
    description: 'Triple smashed patties, house neon sauce, caramelized onions.',
    price: 16.00,
    calories: 910,
    spicy: 1,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Limited Edition'],
  },
  {
    id: 's1',
    name: 'Golden Loaded Fries',
    description: 'Crinkle cut fries, liquid gold cheese, smoked bacon dust.',
    price: 8.99,
    calories: 540,
    spicy: 0,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Side'],
  }
];

export const DEALS = [
  {
    id: 'd1',
    title: 'Midnight Cravings',
    discount: 'Buy 1 Get 1 Free',
    description: 'On all Smash Burgers after 10 PM. Order now before it ends.',
    expiresIn: 3600 * 2, // 2 hours
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 'd2',
    title: 'The Ultimate Combo',
    discount: '30% OFF',
    description: 'Any signature burger + loaded fries + premium shake.',
    expiresIn: 3600 * 24,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800&h=600',
  }
];

export const REVIEWS = [
  {
    author: 'Sarah J.',
    rating: 5,
    text: 'Literally the best burger I have ever ordered. The truffle mayo is life-changing.',
    time: '2 hours ago'
  },
  {
    author: 'Mike T.',
    rating: 5,
    text: 'Delivery was insanely fast. Fries were still crispy. 10/10.',
    time: '5 hours ago'
  },
  {
    author: 'Elena R.',
    rating: 4,
    text: 'The app is so slick and easy to use. The food matches the hype.',
    time: '1 day ago'
  }
];
