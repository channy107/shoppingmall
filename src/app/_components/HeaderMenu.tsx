import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';

interface Props {
  name: string;
  href: string;
}

export default function HeaderMenu({ name, href }: Props) {
  return (
    <Link href={href} {...stylex.props(styles.item)}>
      {name}
    </Link>
  );
}

const styles = stylex.create({
  item: {
    padding: '10px 20px',
    cursor: 'pointer',
  },
});
