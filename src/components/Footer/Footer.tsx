import { navBarLinks } from '../../helpers/staticData';
import NavBar from '../NavList/NavList';
import Logo from '../elements/Logo/Logo';
import './Footer.scss';

const links = navBarLinks;

const Footer = () => {
  return (
    <footer className='Footer'>
      <Logo />
      <div className="Footer__menu">
        Menu
        <NavBar links={links} place='footer' />
      </div>
    </footer>
  );
};

export default Footer;

