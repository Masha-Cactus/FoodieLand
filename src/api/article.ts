import { client } from './axiosClient';
import { ArticleDetaiiledType, ArticleType } from '../types/articleType';

export const getArticles = () => {
  // return client.get<ArticleType[]>('/articles');
  return client.get<ArticleType[]>('/articles.json');
};

export const getArticleById = (articleId: number | null) => {
  return client.get<ArticleDetaiiledType>(`/articles/${articleId}`);
};
