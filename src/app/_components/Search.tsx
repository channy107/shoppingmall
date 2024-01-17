import Image from 'next/image';
import SearchIcon from '../../../public/svg/search.svg';
import * as stylex from '@stylexjs/stylex';

export default function Search() {
  return <Image alt="search" src={SearchIcon} style={{ margin: '0px 15px', cursor: 'pointer' }} />;
}
