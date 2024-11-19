import { Product } from './types/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Idly',
    slug: 'veg',
    heroImage: require('../assets/images/idly.jpg'/* '../assets/images/mac-book-1.jpg' */),
    imagesUrl: [
      require('../assets/images/idly1.jpeg'),
      require('../assets/images/idly2.jpeg'),
      require('../assets/images/idly3.jpeg'),
    ],
    price: 10,
    category: {
      imageUrl: require('../assets/images/mac-book-1.jpg'),
      name: 'Idly',
      slug: 'veg',
    },
    maxQuantity: 5,
  },
  {
    id: 5,
    title: 'Poori',
    slug: 'poori',
    heroImage: require('../assets/images/poori.jpg'),
    imagesUrl: [
      require('../assets/images/poori1.jpeg'),
      require('../assets/images/poori2.jpeg'),
    ],
    price: 12,
    category: {
      imageUrl: require('../assets/images/mac-book-1.jpg'),
      name: 'Laptops',
      slug: 'veg',
    },
    maxQuantity: 7,
  },
  {
    id: 2,
    title: 'Chicken65',
    slug: 'non-veg',
    heroImage: require('../assets/images/chicken65.jpeg'),
    imagesUrl: [
      require('../assets/images/chicken1.jpeg'),
      require('../assets/images/chicken2.jpeg'),
    ],
    price: 70.99,
    category: {
      imageUrl: require('../assets/images/i-phone-1.jpg'),
      name: 'Phones',
      slug: 'non-veg',
    },
    maxQuantity: 10,
  },
  {
    id: 6,
    title: 'Noodles',
    slug: 'noodles',
    heroImage: require('../assets/images/noodles.jpeg'),
    imagesUrl: [
      require('../assets/images/noodles1.jpeg'),
      require('../assets/images/noodles2.jpeg'),
    ],
    price: 100,
    category: {
      imageUrl: require('../assets/images/i-phone-1.jpg'),
      name: 'veg',
      slug: 'veg',
    },
    maxQuantity: 12,
  },
  {
    id: 3,
    title: 'Chicken rice',
    slug: 'chicken rice',
    heroImage: require('../assets/images/chickenRice.jpg'),
    imagesUrl: [
      require('../assets/images/chickenrice1.jpeg'),
      require('../assets/images/chickenrice2.jpeg'),
    ],
    price: 90,
    category: {
      imageUrl: require('../assets/images/head-set-1.jpg'),
      name: 'Accessories',
      slug: 'accessories',
    },
    maxQuantity: 15,
  },
  {
    id: 4,
    title: 'Veg rice',
    slug: 'veg rice',
    heroImage: require('../assets/images/vegRice.jpg'),
    imagesUrl: [
      require('../assets/images/vegrice1.jpeg'),
      require('../assets/images/vegrice2.jpeg'),
    ],
    price: 70,
    category: {
      imageUrl: require('../assets/images/ps-5-1.jpg'),
      name: 'Gaming',
      slug: 'gaming',
    },
    maxQuantity: 3,
  },
  {
    id: 7,
    title: 'Parotta',
    slug: 'parotta',
    heroImage: require('../assets/images/parrota.jpg'),
    imagesUrl: [
      require('../assets/images/parotta1.jpeg'),
      require('../assets/images/parotta2.jpeg'),
    ],
    price: 10,
    category: {
      imageUrl: require('../assets/images/ps-5-1.jpg'),
      name: 'Gaming',
      slug: 'gaming',
    },
    maxQuantity: 8,
  },
];