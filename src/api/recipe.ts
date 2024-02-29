import { client } from './axiosClient';
import {
  RecipeDetailType,
  RecipeType,
} from '../types/recipeType';

// const key = '60c7bcd768ef4da7a6209061d7a862fc';

export const getRecipes = () => {
  // return client.get<RecipeType[]>('/recipes');
  return client.get<RecipeType[]>('/recipes.json');
};

export const getRecipeById = (recipeId: number | null) => {
  return client.get<RecipeDetailType>(`/recipes/${recipeId}`);
};

export const createRecipe = (data: Omit<RecipeType, 'recipeId'>) => {
  return client.post<RecipeType>('/recipes', data);
};

export const deleteRecipe = (recipeId: number) => {
  return client.delete(`/recipes/${recipeId}`);
};

export const updateRecipe = (data: RecipeType) => {
  return client.put<RecipeType>(`/users/${data.recipeId}`, data);
};
