import { Rating } from '@mui/material';
import { RecipeType } from '../../../types/recipeType';
// import Rating from '../../elements/Rating/Rating';
import './RecipeCard.scss';
import TimeIcon from '../../elements/TimeIcon/TimeIcon';
import MealTypeIcon from '../../elements/MealTypeIcon/MealTypeIcon';
import { Link } from 'react-router-dom';

type Props = {
  recipe: RecipeType;
};

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const { recipeId, title, cookingTimeInMinutes, category, image } = recipe;

  return (
    <Link
      to={`/recipes/${recipeId}`}
      className="RecipeCard"
    >
      <img
        src={image}
        alt={`${title} image`}
        className="RecipeCard__image"
      />
      <div className="RecipeCard__info">
        <TimeIcon time={cookingTimeInMinutes} />
        <MealTypeIcon type={category[0]} />
        <Rating />
      </div>
      <h2 className="RecipeCard__name">{title}</h2>
    </Link>
  );
};

export default RecipeCard;
