type Ingredient = {
  name: string;
  quantity: number;
};

export interface RecipeDetailType {
  recipeId: number;
  title: string;
  quantity: number;
  cookingTimeInMinutes: number;
  category: string[];
  imageUrl: string;
  rating: number;
  ingredients: Ingredient[];
  steps: { description: string }[];
  summary: string;
  cuisines: string[];
  nutritions: {
    calories: number;
    totalFat: number;
    protein: number;
    carbohydrate: number;
    cholesterol: number;
  };
  diet: {
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    dairyFree: boolean,
    veryHealthy: boolean,
  };
}

export interface RecipeType {
  recipeId: number;
  title: string;
  cookingTimeInMinutes: number;
  category: string[];
  imageUrl: string;
  rating: number;
}
