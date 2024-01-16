import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/img/logo.png';
import * as stylex from '@stylexjs/stylex';

export default function Header() {
  return (
    <Link href="/">
      <Image src={Logo} alt="logo" width="190" height="70" {...stylex.props(styles.logo)} />
    </Link>
  );
}

const styles = stylex.create({
  logo: {
    cursor: 'pointer',
  },
});
