import { BEST_PRODUCTS } from './urls';

export async function getBestProducts() {
  const res = await fetch(BEST_PRODUCTS, {
    next: {
      tags: ['bestProducts'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
