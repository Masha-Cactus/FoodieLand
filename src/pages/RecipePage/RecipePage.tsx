/* eslint-disable max-len */
import RecipeDetailCard from '../../components/Cards/RecipeDetailCard/RecipeDetailCard';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './RecipePage.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../../features/recipesSlice';

type Props = {};

const RecipePage: React.FC<Props> = ({}) => {
  const { selectedRecipe } = useAppSelector(state => state.recipes);

  const dispatch = useAppDispatch();
  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(fetchRecipeById(+recipeId || null));
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

