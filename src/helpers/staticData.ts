/* eslint-disable max-len */
export const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,23}/;
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]){7,24}/;

export const navBarLinks = [
  {
    path: '/',
    name: 'home',
    dropdown: false,
  },
  {
    path: '/recipes',
    name: 'recipes',
    dropdown: true,
  },
  {
    path: '/blog',
    name: 'blog',
    dropdown: false,
  },
  {
    path: '/contacts',
    name: 'contacts',
    dropdown: false,
  },
  {
    path: '/info',
    name: 'about us',
    dropdown: false,
  },
];

export const categories = [
  {
    type: 'breakfast',
    imgUrl: 'https://images.stockcake.com/public/c/5/a/c5ab60b4-66ad-43aa-ac91-cdd0ecb12a1a/rustic-breakfast-spread-stockcake.jpg',
  },
  {
    type: 'soup',
    imgUrl: 'https://images.stockcake.com/public/b/a/a/baa3eb74-2a01-4c7b-b497-3e2381f52d57_large/savory-noodle-soup-stockcake.jpg',
  },
  {
    type: 'salad',
    imgUrl: 'https://images.stockcake.com/public/c/e/e/cee08208-ff80-407d-b58c-06cdb2bcd91c_large/fresh-salad-splash-stockcake.jpg',
  },
  {
    type: 'dessert',
    imgUrl: 'https://images.stockcake.com/public/a/e/2/ae26336e-4422-47e7-9c78-0e224a93fdb8_large/strawberry-shortcake-delight-stockcake.jpg',
  },
  {
    type: 'bread',
    imgUrl: 'https://images.stockcake.com/public/f/b/3/fb3f028b-dced-4843-8166-287362929a6b/bakery-bread-display-stockcake.jpg',
  },
  {
    type: 'drink',
    imgUrl: 'https://images.stockcake.com/public/0/9/3/0935e58d-4693-4a83-8ae6-4107f80557f0_large/cocktail-pouring-moment-stockcake.jpg',
  },
// 'snack', 'fingerfood', 'marinade',
//   'sauce', 'beverage',
//   'appetizer', 'side dish', 'main course',
];


// 'https://images.stockcake.com/public/d/3/4/d348f33b-9bc6-4ffb-b3b0-2ce507af7290/cozy-dining-setup-stockcake.jpg'

// 'https://images.stockcake.com/public/4/c/8/4c8b951e-1308-4fad-a3a8-886907184817_large/sizzling-pan-cooking-stockcake.jpg'

// "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/1/kitchen-design-ideas_0_1200.jpg"

// 'https://images.stockcake.com/public/3/a/1/3a1e67cf-fa59-4006-97fe-2eccd77525f4/cozy-breakfast-spread-stockcake.jpg'

// 'https://images.stockcake.com/public/1/a/7/1a72759a-1b7b-4ef8-9d96-4b5359a50a2d/cooking-fresh-meal-stockcake.jpg'

// 'https://images.stockcake.com/public/a/c/b/acb17adb-d0a5-4e16-8128-56f46e42a3f3/rustic-kitchen-morning-stockcake.jpg'
