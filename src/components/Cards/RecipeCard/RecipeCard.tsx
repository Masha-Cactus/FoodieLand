import { Rating } from '@mui/material';
import { RecipeType } from '../../../types/recipeType';
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
    <div className="RecipeCard">
      <Link
        to={`/recipes/${recipeId}`}
        // to='/recipes/654959'
        className="RecipeCard__link"
      >
        <img
          src={image}
          alt={`${title} image`}
          className="RecipeCard__image"
        />
      </Link>

      <div className="RecipeCard__info">
        <TimeIcon time={cookingTimeInMinutes} />
        <MealTypeIcon type={category[0]} />
        <Rating />
      </div>
      <Link
        to={`/recipes/${recipeId}`}
        className="RecipeCard__link"
      >
        <h2 className="RecipeCard__name">{title}</h2>
      </Link>
    </div>
  );
};

export default RecipeCard;
