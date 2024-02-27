import { capitalize } from '@mui/material';
import { CategoryType } from '../../../types/categoryType';
import './CategoryCard.scss';

type Props = {
  category: CategoryType;
};

const CategoryCard:React.FC<Props> = ({ category }) => {
  return (
    <article className="CategoryCard">
      <img
        src={category.imgUrl}
        alt={category.type}
        className='CategoryCard__image'
      />
      <p className='CategoryCard__name'>{capitalize(category.type)}</p>
    </article>
  );
};

export default CategoryCard;

