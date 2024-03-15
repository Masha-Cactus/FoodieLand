/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RecipeDetailType, RecipeType } from '../types/recipeType';
import { getRecipeById, getRecipes } from '../api/recipe';

export interface RecipesState {
  recipes: RecipeType[],
  recipesIsLoading: boolean,
  recipesHasError: boolean,
  selectedRecipe: RecipeDetailType | null,
  selectedRecipeIsLoading: boolean,
  selectedRecipeHasError: boolean,
}

const initialState: RecipesState = {
  recipes: [],
  recipesIsLoading: false,
  recipesHasError: false,
  selectedRecipe: null,
  selectedRecipeIsLoading: false,
  selectedRecipeHasError: false,
};

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    const response = await getRecipes();
    const recipes = response.content;

    return recipes;
  },
);

export const fetchRecipeById = createAsyncThunk(
  'recipes/fetchRecipeById',
  async (recipeId: number | null) => {
    const selectedRecipe = await getRecipeById(recipeId);

    return selectedRecipe;
  },
);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.recipesIsLoading = false;
        state.recipesHasError = false;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipesIsLoading = true;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.recipesIsLoading = true;
        state.recipesHasError = true;
      })
      .addCase(fetchRecipeById.pending, (state) => {
        state.selectedRecipeIsLoading = false;
        state.selectedRecipeHasError = false;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.selectedRecipeIsLoading = true;
        state.selectedRecipe = action.payload;
      })
      .addCase(fetchRecipeById.rejected, (state) => {
        state.selectedRecipeIsLoading = true;
        state.selectedRecipeHasError = true;
      });
  },
});

export default recipesSlice.reducer;
