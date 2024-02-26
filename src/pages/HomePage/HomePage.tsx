/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import RecipesList from '../../components/Lists/RecipesList/RecipesList';
import { useAppSelector } from '../../store/hooks';
import './HomePage.scss';
import { categories } from '../../helpers/staticData';
import CategoriesList from '../../components/Lists/CategoriesList/CategoriesList';
import LinkBtn from '../../components/elements/LinkBtn/LinkBtn';

const visibleCategories = [...categories].slice(0, 7);

const HomePage: React.FC = () => {
  const { recipes } = useAppSelector(state => state.recipes);
  const popularRecipes = [...recipes]
    .sort((a, b) => {
      return a.rating - b.rating;
    })
    .slice(0, 9);

  // console.log('popularRecipes', popularRecipes);
  // console.log(recipes);

  return (
    <section className="HomePage">
      {/* <h1>Home Page Title</h1> */}
      <img
        // eslint-disable-next-line max-len
        src="https://images.stockcake.com/public/a/c/b/acb17adb-d0a5-4e16-8128-56f46e42a3f3/rustic-kitchen-morning-stockcake.jpg"
        alt="Main_picture"
        className="HomePage__image"
      />
      <section className="HomePage__section">
        <h2 className="HomePage__title">Categories</h2>

        <div className="HomePage__content">
          <CategoriesList categories={visibleCategories} />
        </div>
      </section>

      <section className="HomePage__section HomePage__section--recipes">
        <h2 className="HomePage__title HomePage__title--recipes">
          Simple and tasty recipes
        </h2>
        <p className="HomePage__decription">
          {'Lorem ipsum dolor sit amet, consectetuipisicing elit,'
            + 'sed do eiusmod tempor incididunt ut labore et dolore magna'
            + 'aliqut enim ad minim'}
        </p>

        <div className="HomePage__content">
          <RecipesList recipes={popularRecipes} />
        </div>
      </section>

      <section className="HomePage__section HomePage__section--article">
        <div className="HomePage__intro">
          <h2 className="HomePage__title">
            Everyone can be a chef in their own kitchen
          </h2>
          <p className="HomePage__decription HomePage__decription--article">
            {'Lorem ipsum dolor sit amet, consectetuipisicing elit,'
              + 'sed do eiusmod tempor incididunt ut labore et dolore magna'
              + 'aliqut enim ad minim'}
          </p>

          <div className="HomePage__btn">
            <LinkBtn path='blog' text='Learn More'/>
          </div>

        </div>

        <div className="HomePage__content HomePage__content--article">
          <img
            src="https://images.stockcake.com/public/4/c/d/4cde232e-e51f-4b0a-aabc-a0a7a9ac5a4a/baking-fresh-bread-stockcake.jpg"
            alt="baking"
            className='HomePage__img'
          />
        </div>
      </section>
    </section>
  );
};

export default HomePage;
