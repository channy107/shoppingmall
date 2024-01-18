import { HttpResponse, http } from 'msw';
import { bestProducts } from './data';
import { BEST_PRODUCTS } from '@/ api/urls';

export const handlers = [
  http.get(BEST_PRODUCTS, () => {
    return HttpResponse.json(bestProducts);
  }),
];
