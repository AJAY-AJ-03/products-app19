import { Category } from './types/category';
import { PRODUCTS } from './products';

export const CATEGORIES: Category[] = [
  {
    name: 'Veg',
    slug: 'veg',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2rLOoHQ5hilftZ7TUyaFtWDiNavOLxfbXw&s',
    products: PRODUCTS.filter(product => product.category.slug === 'veg'),
  },
  {
    name: 'Non-veg',
    slug: 'non-veg',
    imageUrl:
      'https://www.shutterstock.com/image-photo/tandoori-chicken-indian-non-vegetarian-260nw-2231161337.jpg',
    products: PRODUCTS.filter(product => product.category.slug === 'non-veg'),
  },
  {
    name: 'Break fast',
    slug: 'break fast',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/75/Breakfast_at_the_Black_Bear_Diner.jpg',
    products: PRODUCTS.filter(product => product.category.slug === 'break fast'),
  },
  {
    name: 'Lunch',
    slug: 'lunch',
    imageUrl:
      'https://media.istockphoto.com/id/473582820/photo/nepali-thali-meal-set-with-mutton-curry.jpg?s=612x612&w=0&k=20&c=57AIVUdYVCe09dINwzr_fkG0TuqpO_JMeJHqEM8bT1A=',
    products: PRODUCTS.filter(
      product => product.category.slug === 'lunch'
    ),
  },
];