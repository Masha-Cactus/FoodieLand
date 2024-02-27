import { NavLink } from 'react-router-dom';
import './Logo.scss';
import classNames from 'classnames';
import React from 'react';

type Props = {
  place?: boolean;
};

const Logo: React.FC<Props> = ({ place }) => {
  return (
    <NavLink
      to='/'
      className={classNames('Logo', {
        'Logo--bottom': place,
      })}
    >
      Foodieland
      <span className='Logo__dot'>.</span>
    </NavLink>
  );
};

export default Logo;
