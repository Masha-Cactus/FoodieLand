import { NavLink } from 'react-router-dom';
import { navBarLinks } from '../../helpers/staticData';
import Logo from '../elements/Logo/Logo';
import NavBar from '../NavList/NavList';
import './Header.scss';
import { openSignIn } from '../../features/modalsSlice';
import { useAppDispatch } from '../../store/hooks';

const links = navBarLinks;

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className='Header'>
      <Logo />
      <NavBar links={links}/>
      <div className='Header__icons'>
        <NavLink
          to="favorites"
          className='Header__icon Header__icon--heart' />
        <div
          className='Header__icon Header__icon--user'
          onClick={() => dispatch(openSignIn())}
        />
      </div>
    </header>
  );
};

export default Header;
