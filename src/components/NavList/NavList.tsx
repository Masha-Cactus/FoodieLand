import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavList.scss';
import { capitalize } from '@mui/material';

type Props = {
  links: string[];
  place?: string;
};

const getPath = (link: string) => {
  if (link === 'home') {
    return './';
  }

  if (link === 'about us') {
    return '/info';
  }

  return link;
};

const NavBar: React.FC<Props> = ({ links, place }) => {
  const getLinkNavClass = ({ isActive }: { isActive: boolean }) =>
    classNames('NavList__link', {
      'is-active': isActive,
      'NavList__link--footer': place,
    });

  return (
    <ul className={classNames('NavList', {
      'NavList--footer' : place,
    })}>
      {links.map(link => (
        <NavLink
          key={link}
          to={getPath(link)}
          className={getLinkNavClass}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        >
          {capitalize(link)}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavBar;
