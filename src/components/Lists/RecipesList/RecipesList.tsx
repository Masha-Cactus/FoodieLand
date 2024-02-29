import classNames from 'classnames';
import { RecipeType } from '../../../types/recipeType';
import RecipeCard from '../../Cards/RecipeCard/RecipeCard';
import './RecipesList.scss';

type Props = {
  recipes: RecipeType[];
  column? :boolean;
};

const RecipesList: React.FC<Props> = ({ recipes, column }) => {
  return (
    <div className={classNames('RecipesList', {
      'RecipesList--column': column,
    })}>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.recipeId} />
      ))}
    </div>
  );
};

export default RecipesList;

