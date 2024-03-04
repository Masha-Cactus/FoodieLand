/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import { client } from './axiosClient';
import {
  RecipeDetailType,
  RecipeType,
} from '../types/recipeType';

// const key = '60c7bcd768ef4da7a6209061d7a862fc';

export const getRecipes = () => {
  // return client.get<RecipeType[]>('/recipes');
  return client.get<RecipeType[]>(
    'https://masha-cactus.github.io/recipes.json');
};

export const getRecipeById = (recipeId: number | null) => {
  // return client.get<RecipeDetailType>(`/recipes/${recipeId}`);
  return client.get<RecipeDetailType>('https://masha-cactus.github.io/recipeById.json');
};

export const createRecipe = (data: Omit<RecipeDetailType, 'recipeId'>) => {
  return client.post<RecipeDetailType>('/recipes', data);
};

export const deleteRecipe = (recipeId: number) => {
  return client.delete(`/recipes/${recipeId}`);
};

export const updateRecipe = (data: RecipeDetailType) => {
  return client.put<RecipeDetailType>(`/users/${data.recipeId}`, data);
};
