import { capitalize } from '@mui/material';
import './MealTypeIcon.scss';

type Props = {
  type: string;
};

const MealTypeIcon: React.FC<Props> = ({ type }) => {
  return (
    <div className='MealTypeIcon'>
      <span className='MealTypeIcon__icon'/>
      <span className='MealTypeIcon__title'>{capitalize(type)}</span>
    </div>
  );
};

export default MealTypeIcon;

