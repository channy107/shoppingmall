import * as stylex from '@stylexjs/stylex';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Search from './Search';

const menus = [
  { name: 'Login', href: '/login' },
  { name: 'Join', href: '/join' },
  { name: 'Cart', href: '/cart' },
];

export default function Header() {
  return (
    <header {...stylex.props(styles.header)}>
      <Logo />
      <nav {...stylex.props(styles.nav)}>
        {menus.map((menu) => (
          <HeaderMenu key={menu.name} name={menu.name} href={menu.href} />
        ))}
        <Search />
      </nav>
    </header>
  );
}

const styles = stylex.create({
  header: {
    width: '100%',
    height: 70,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    padding: '10px 20px',
  },
});
