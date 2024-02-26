/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RecipeDetailType } from '../types/recipeType';
import { getRecipeById } from '../api/recipe';

export interface SelectedRecipeState {
  selectedRecipe: RecipeDetailType | null,
  isLoading: boolean,
  hasError: boolean,
}

const initialState: SelectedRecipeState = {
  selectedRecipe: null,
  isLoading: false,
  hasError: false,
};

export const fetchSelectedRecipe = createAsyncThunk(
  'selectedREcipe/fetchSelectedRecipe',
  async (recipeId: number | null) => {
    const recipe = await getRecipeById(recipeId);

    return recipe;
  },
);

export const selectedRecipeSlice = createSlice({
  name: 'selectedRecipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectedRecipe.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchSelectedRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedRecipe = action.payload;
      })
      .addCase(fetchSelectedRecipe.rejected, (state) => {
        state.selectedRecipe = null;
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default selectedRecipeSlice.reducer;
