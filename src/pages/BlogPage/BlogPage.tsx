/* eslint-disable max-len */
import { useEffect } from 'react';
import BackBtn from '../../components/elements/BackBtn/BackBtn';
import './BlogPage.scss';
import { fetchArticles } from '../../features/articlesSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ArticlesList from '../../components/Lists/ArticlesList/ArticlesList';
import RecipesList from '../../components/Lists/RecipesList/RecipesList';
import SubscribeInput from '../../components/elements/SubscribeInput/SubscribeInput';

type Props = {};

const BlogPage: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const { articles } = useAppSelector(state => state.articles);
  const { recipes } = useAppSelector(state => state.recipes);
  const visibleRecipes = [ ...recipes ].slice(2, 5);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  // console.log(recipes);
  // console.log(articles);

  return (
    <section className='BlogPage'>
      <BackBtn />
      <h1 className='BlogPage__title'>Blog & Article</h1>
      <p className="BlogPage__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </p>

      <SubscribeInput gray/>

      <div className="BlogPage__content">
        <ArticlesList articles={articles} />
        <div className="BlogPage__recipes">
          <h3 className="BlogPage__h3">Tasty Recipes</h3>
          <RecipesList column recipes={visibleRecipes}/>
        </div>
      </div>

    </section>
  );
};

export default BlogPage;


