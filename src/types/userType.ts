import { RecipeType } from './recipeType';

export interface UserType {
  name: string;
  lastname: string;
  email: string;
  pwd: string;
  userId: number;
}

export interface UserInfoType {
  favorites: RecipeType[];
  userRecipes: RecipeType[];
}
