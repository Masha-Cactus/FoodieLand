import { RecipeType } from './recipeType';

export interface UserType {
  userName: string;
  email: string;
  pwd: string;
  userId: number;
}

export interface UserInfoType {
  favorites: RecipeType[];
  userRecipes: RecipeType[];
}
