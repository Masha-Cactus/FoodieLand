import { Link } from 'react-router-dom';
import { navBarLinks } from '../../helpers/staticData';
import NavBar from '../NavList/NavList';
import Logo from '../elements/Logo/Logo';
import './Footer.scss';
import GoTopBtn from '../elements/GoTopBtn/GoTopBtn';

const links = navBarLinks;

const Footer = () => {
  return (
    <footer className='Footer'>
      <Logo place/>

      <div className="Footer__menu">
        <div className="Footer__title">Menu</div>
        <NavBar links={links} place='footer' />
      </div>

      <div className="Footer__menu">
        <div className="Footer__title">Follow us</div>
        <div className="Footer__icons">
          <Link to="" className="Footer__icon-keeper">
            <div className="Footer__icon Footer__icon--insta"></div>
          </Link>
          <Link to="" className="Footer__icon-keeper">
            <div className="Footer__icon Footer__icon--ball"></div>
          </Link>
          <Link to="" className="Footer__icon-keeper">
            <div className="Footer__icon Footer__icon--twitter"></div>
          </Link>
          <Link to="" className="Footer__icon-keeper">
            <div className="Footer__icon Footer__icon--youtube"></div>
          </Link>
        </div>
      </div>

      <GoTopBtn />
    </footer>
  );
};

export default Footer;

