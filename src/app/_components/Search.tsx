import Image from 'next/image';
import SearchIcon from '../../../public/svg/search.svg';
import * as stylex from '@stylexjs/stylex';

export default function Search() {
  return <Image {...stylex.props(styles.icon)} alt="search" src={SearchIcon} />;
}

const styles = stylex.create({
  icon: {
    margin: '10px 20px',
    cursor: 'pointer',
  },
});
