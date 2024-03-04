import { RecipeType } from './recipeType';

export interface UserType {
  name: string;
  lastname: string;
  email: string;
  userId: number;
  country: string;
  city: string;
  image: string;
}

export interface UserInfoType {
  favorites: RecipeType[];
  userRecipes: RecipeType[];
}
