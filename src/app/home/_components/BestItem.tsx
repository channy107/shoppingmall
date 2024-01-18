import { IBestProduct } from '@/ api/types';
import { formatPrice } from '@/app/_utils/formatPrice';
import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';

interface IProps {
  product: IBestProduct;
}

//TODO 상품 목록 페이지 개발에 필요한 상품 ITEM 컴포넌트에서 재사용하는 것을 고려해 수정 필요
export default function BestItem({ product }: IProps) {
  const { name, description, isSale, price, salePrice, imageUrl } = product;
  return (
    <li {...stylex.props(styles.itemContainer)}>
      <div {...stylex.props(styles.imageContainer)}>
        <Image src={imageUrl} alt={name} fill />
      </div>
      <div {...stylex.props(styles.infoContainer)}>
        <h4>{name}</h4>
        {isSale && <del {...stylex.props(styles.salePrice)}>{formatPrice(salePrice)}</del>}
        <p {...stylex.props(styles.price)}>{formatPrice(price)}</p>
        <p {...stylex.props(styles.description)}>{description}</p>
      </div>
    </li>
  );
}

const styles = stylex.create({
  itemContainer: {
    position: 'relative',
    width: '24%',
    height: 'fit-content',

    listStyle: 'none',
    marginBottom: '20px',
    '@media (max-width: 1024px)': {
      width: '49%',
    },
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    paddingTop: '100%',
  },
  infoContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  salePrice: {
    color: '#999',
    fontSize: 12,
  },
  price: {
    fontSize: 14,
  },
  description: {
    color: '#999',
    fontSize: 12,
  },
});
