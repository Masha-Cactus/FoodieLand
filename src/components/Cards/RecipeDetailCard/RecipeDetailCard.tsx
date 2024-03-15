import { Fragment } from 'react';
import { RecipeDetailType } from '../../../types/recipeType';
import AddFavoriteBtn from '../../elements/AddFavoriteBtn/AddFavoriteBtn';
import Line from '../../elements/Line/Line';
import './RecipeDetailCard.scss';
import TimeIcon from '../../elements/TimeIcon/TimeIcon';
import MealTypeIcon from '../../elements/MealTypeIcon/MealTypeIcon';
import { Rating, capitalize } from '@mui/material';

type Props = { recipe: RecipeDetailType };

const RecipeDetailCard: React.FC<Props> = ({ recipe }) => {
  return (
    <article className="RecipeDetailCard">
      <h1 className="RecipeDetailCard__title">{recipe.title}</h1>

      <div className="RecipeDetailCard__top">
        <div className="RecipeDetailCard__top-left">
          <TimeIcon time={recipe.cookingTimeInMinutes} />
          <Line vertical />
          <MealTypeIcon type={recipe.category[0]} />
          <Line vertical />
          <MealTypeIcon type={`For ${recipe.servings} persons`} />
        </div>
        <div className="RecipeDetailCard__top-right">
          <Rating />
          <Line vertical />
          <AddFavoriteBtn recipe={recipe} />
        </div>
      </div>

      <img
        src={recipe.image}
        alt="recipe image"
        className='RecipeDetailCard__image'
      />
      {/* <div className="RecipeDetailCard__nutritions-block"> */}
      <ul className="RecipeDetailCard__nutritions">
        {Object.entries(recipe.nutritions).map(([key, value]) => (
          <li key={key} className="RecipeDetailCard__nutrition">
            <p className="RecipeDetailCard__nutrition-key">{capitalize(key)}</p>
            <p className="RecipeDetailCard__nutrition-value">{value}</p>
          </li>
        ))}
      </ul>
      {/* <h5 className='RecipeDetailCard__h5'>Nutrition Information</h5>
        {Object.entries(recipe.nutritions).map(([key, value]) => (
          <div key={key} className="RecipeDetailCard__nutrition">
            <p className="RecipeDetailCard__nutrition-key">{capitalize(key)}</p>
            <p className="RecipeDetailCard__nutrition-value">{value}</p>
          </div>
        ))} */}
      {/* </div> */}

      <p className="RecipeDetailCard__summary">{recipe.summary}</p>

      {/* <div className="RecipeDetailCard__block"> */}
      <ul className="RecipeDetailCard__ingredients">Ingredients
        {recipe.ingredients.map(ingredient => (
          <Fragment key={ingredient.name}>
            <li className="RecipeDetailCard__ingredient">
              <span>icon</span>
              <p>{`${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort}`}</p>
              <p>{ingredient.name}</p>
            </li>

            <Line />
          </Fragment>
        ))}
      </ul>
      {/* </div> */}

      {/* <div className="RecipeDetailCard__block"> */}
      <ul className="RecipeDetailCard__steps">Directions
        {recipe.steps.map(step => (
          <Fragment key={step.number}>
            <li className="RecipeDetailCard__step">
              <div className="RecipeDetailCard__step-top">
                <span>icon</span>
                <p>{step.number}</p>
                <p>{`ingridients you will need: ${step.ingredients}`}</p>
              </div>
              <p>{step.step}</p>
            </li>
            <Line />
          </Fragment>
        ))}
      </ul>
      {/* </div> */}


    </article>
  );
};

export default RecipeDetailCard;
