import { combineReducers } from '@reduxjs/toolkit';
import recipesReducer from '../features/recipesSlice';
import modalReducer from '../features/modalsSlice';
import articlesReducer from '../features/articlesSlice';
import authReducer from '../features/authSlice';
import userReducer from '../features/userSlice';
import favoriteReducer from '../features/favoriteSlice';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  modals: modalReducer,
  articles: articlesReducer,
  auth: authReducer,
  user: userReducer,
  favorites: favoriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
