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
  nutrition: {
    calories: number;
    totalFat: number;
    protein: number;
    carbohydrate: number;
    cholesterol: number;
  };
  diet: {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: true,
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
