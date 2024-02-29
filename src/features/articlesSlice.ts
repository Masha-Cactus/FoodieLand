/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ArticleType } from '../types/articleType';
import { getArticles } from '../api/article';

export interface ArticlesState {
  articles: ArticleType[],
  isLoading: boolean,
  hasError: boolean,
}

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  hasError: false,
};

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const articles = (await getArticles());

    return articles;
  },
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = true;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.isLoading = true;
        state.hasError = true;
      });
  },
});

export default articlesSlice.reducer;
