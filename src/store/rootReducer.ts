import { combineReducers } from '@reduxjs/toolkit';
import recipesReducer from '../features/recipesSlice';
import modalReducer from '../features/modalsSlice';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  modals: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
