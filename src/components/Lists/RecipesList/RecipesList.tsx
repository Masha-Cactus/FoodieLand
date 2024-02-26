import { RecipeType } from '../../../types/recipeType';
import RecipeCard from '../../Cards/RecipeCard/RecipeCard';
import './RecipesList.scss';

type Props = {
  recipes: RecipeType[];
};

const RecipesList: React.FC<Props> = ({ recipes }) => {
  return (
    <div className="RecipesList">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.recipeId} />
      ))}
    </div>
  );
};

export default RecipesList;

