'use client';
import useGetBestProducts from '@/app/_query/useGetBestProducts';
import * as stylex from '@stylexjs/stylex';
import BestItem from './BestItem';

export default function Best() {
  const { data: bestProducts = [] } = useGetBestProducts();

  return (
    <main {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>Best Products</h1>
      <p>{'이번주 가장 인기있는 상품 목록입니다.'}</p>
      <ul {...stylex.props(styles.bestItemContainer)}>
        {bestProducts.map((product) => (
          <BestItem key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}

const styles = stylex.create({
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px auto',
    '@media (max-width: 768px)': {
      margin: '20px auto',
    },
  },
  title: {
    marginBottom: 20,
  },
  bestItemContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    marginVertical: 20,
  },
});
