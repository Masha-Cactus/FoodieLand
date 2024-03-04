import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavList.scss';
import { capitalize } from '@mui/material';
import FadeMenu from '../../elements/FadeMenu/FadeMenu';

type Link = {
  name: string;
  path: string;
  dropdown: boolean;
};

type Props = {
  links: Link[];
  place?: string;
};

const NavBar: React.FC<Props> = ({ links, place }) => {
  const getLinkNavClass = ({ isActive }: { isActive: boolean }) =>
    classNames('NavList__link', {
      'is-active': isActive,
      'NavList__link--footer': place,
    });

  return (
    <ul
      className={classNames('NavList', {
        'NavList--footer': place,
      })}
    >
      {links.map(link => {
        return (link.dropdown && !place) ? (
          <FadeMenu />
        ) : (
          <NavLink
            key={link.name}
            to={link.path}
            className={getLinkNavClass}
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }
          >
            {capitalize(link.name)}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default NavBar;
