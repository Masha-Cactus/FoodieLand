/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RecipeType } from '../types/recipeType';
import { getRecipes } from '../api/recipe';

export interface RecipesState {
  recipes: RecipeType[],
  isLoading: boolean,
  hasError: boolean,
}

const initialState: RecipesState = {
  recipes: [],
  isLoading: false,
  hasError: false,
};

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    const recipes = (await getRecipes());

    return recipes;
  },
);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = true;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.isLoading = true;
        state.hasError = true;
      });
  },
});

export default recipesSlice.reducer;
