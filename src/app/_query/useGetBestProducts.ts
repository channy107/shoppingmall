import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../_constants/queryKey';
import { getBestProducts } from '@/ api/getBestProducts';

const useGetBestProducts = () => {
  const fetcher = async () => {
    const response = await getBestProducts();

    return response;
  };

  return useQuery<IBestProduct[]>({ queryKey: [QUERY_KEYS.BEST_PRODUCTS], queryFn: fetcher });
};

export default useGetBestProducts;
