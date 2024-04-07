import { client } from './axiosClient';
import { ArticleDetaiiledType, ArticleType } from '../types/articleType';

export const getArticles = () => {
  return client.get<ArticleType[]>('api/article');
  // return client.get<ArticleType[]>('/articles.json');
};

export const getArticleById = (articleId: number | null) => {
  return client.get<ArticleDetaiiledType>(`api/article/${articleId}`);
};
