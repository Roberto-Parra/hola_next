import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
];



export const Navbar = () => {
  return (
    <nav className={ styles['menu-container']}>
      {
        menuItems.map(({name, path}) => (
          <ActiveLink key={ path } text={ name } href={path}/>
        ))
      }



      {/* <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" /> */}
    </nav>
  )
}

