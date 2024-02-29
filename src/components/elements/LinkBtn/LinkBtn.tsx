import { NavLink } from 'react-router-dom';
import './LinkBtn.scss';

type Props = {
  path: string;
  text: string;
};

const LinkBtn: React.FC<Props> = ({ path, text }) => {
  return (
    <button
      className='LinkBtn'
    >
      <NavLink to={path}
        className='LinkBtn__link'
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      >{text}
      </NavLink>
    </button>
  );
};

export default LinkBtn;

