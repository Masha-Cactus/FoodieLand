import { RecipeDetailType } from '../../../types/recipeType';
import AddFavoriteBtn from '../../elements/AddFavoriteBtn/AddFavoriteBtn';
import './RecipeDetailCard.scss';

type Props = { recipe: RecipeDetailType };

const RecipeDetailCard: React.FC<Props> = ({ recipe }) => {
  return (
    <article className="RecipeDetailCard">
      <AddFavoriteBtn recipe={recipe} />
      <h1 className="RecipeDetailCard__title">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt="recipe image"
        className='RecipeDetailCard__image'
      />
      <div className="RecipeDetailCard__nutritions">
        <h5 className='RecipeDetailCard__h5'>Nutrition Information</h5>
        {Object.entries(recipe.nutritions).map(([key, value]) => (
          <div key={key} className="RecipeDetailCard__line">
            <p className="RecipeDetailCard__nutrition-key">{key}</p>
            <p className="RecipeDetailCard__nutrition-value">{value}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default RecipeDetailCard;
