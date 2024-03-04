/* eslint-disable max-len */
import { useDispatch } from 'react-redux';
import RecipeDetailCard from '../../components/Cards/RecipeDetailCard/RecipeDetailCard';
import { useAppSelector } from '../../store/hooks';
import './RecipePage.scss';
import { fetchSelectedRecipe } from '../../features/selectedRecipeSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const RecipePage: React.FC<Props> = ({}) => {
  const { selectedRecipe } = useAppSelector(state => state.recipes);

  const dispatch = useDispatch();
  const { recipeId } = useParams();

  useEffect(() => {
    // dispatch(fetchSelectedRecipe((+recipeId) || null));
    dispatch(fetchSelectedRecipe(3));
  }, [dispatch, recipeId]);

  return (
    <section className='RecipePage'>
      {selectedRecipe ? (
        <RecipeDetailCard recipe={selectedRecipe}/>) : (
        <h1>No selected recipe</h1>
      )}
    </section>
  );
};

export default RecipePage;

