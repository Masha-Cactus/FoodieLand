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
  nutrition: {
    calories: number;
    totalFat: number;
    protein: number;
    carbohydrate: number;
    cholesterol: number;
  }
}

export interface RecipeType {
  recipeId: number;
  title: string;
  // quantity: number;
  cookingTimeInMinutes: number;
  category: string[];
  imageUrl: string;
  rating: number;
}

// export interface RecipeType {
//   results: {
//     id: number;
//     name: string;
//     quantity: number;
//     cookingTimeInMinutes: number;
//     category: string;
//     imageUrl: string;
//     rating: number;
//   }
// }

// export interface RecipeResType {
//   results: RecipeType[];
// }
