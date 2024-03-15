type Ingredient = {
  name: string;
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    }
  }
};

export interface RecipeDetailType {
  recipeId: number;
  title: string;
  quantity: number;
  cookingTimeInMinutes: number;
  category: string[];
  image: string;
  rating: number;
  servings: number;
  ingredients: Ingredient[];
  steps: {
    number: number,
    step: string,
    ingredients: string[],
    equipment: string[],
  }[];
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
  image: string;
  rating: number;
}

export interface RecipesType {
  content: RecipeType[];
}
