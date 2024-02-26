import { Rating } from '@mui/material';
import { RecipeType } from '../../../types/recipeType';
// import Rating from '../../elements/Rating/Rating';
import './RecipeCard.scss';
import TimeIcon from '../../elements/TimeIcon/TimeIcon';
import MealTypeIcon from '../../elements/MealTypeIcon/MealTypeIcon';

type Props = {
  recipe: RecipeType;
};

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const {
    title,
    cookingTimeInMinutes,
    category,
    imageUrl,
    // rating,
  } = recipe;

  return (
    <article className="RecipeCard">
      <img
        src={imageUrl}
        alt={`${title} image`}
        className="RecipeCard__image"
      />
      <h2 className="RecipeCard__name">{title}</h2>
      <div className="RecipeCard__info">
        <TimeIcon time={cookingTimeInMinutes} />
        <MealTypeIcon type={category[0]} />
        <Rating />
      </div>
    </article>
  );
};

export default RecipeCard;
