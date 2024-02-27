/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useCallback, useState } from 'react';
import RecipesList from '../../components/Lists/RecipesList/RecipesList';
import { useAppSelector } from '../../store/hooks';
import './HomePage.scss';
import { categories } from '../../helpers/staticData';
import CategoriesList from '../../components/Lists/CategoriesList/CategoriesList';
import LinkBtn from '../../components/elements/LinkBtn/LinkBtn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Stack } from '@mui/material';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import ReviewCard from '../../components/Cards/ReviewCard/ReviewCard';

const visibleCategories = [...categories].slice(0, 7);

const HomePage: React.FC = () => {
  const { recipes } = useAppSelector(state => state.recipes);
  const popularRecipes = [...recipes]
    .sort((a, b) => {
      return a.rating - b.rating;
    })
    .slice(0, 9);

  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="HomePage">
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
            <LinkBtn path="blog" text="Learn More" />
          </div>
        </div>

        <div className="HomePage__content HomePage__content--article">
          <img
            src="https://images.stockcake.com/public/4/c/d/4cde232e-e51f-4b0a-aabc-a0a7a9ac5a4a/baking-fresh-bread-stockcake.jpg"
            alt="baking"
            className="HomePage__img"
          />
        </div>
      </section>

      <section className="HomePage__section HomePage__section--review">
        <div className="HomePage__title-zone">
          <h2 className="HomePage__title">What they say about us</h2>

          <Stack direction="row" spacing={3}>
            <ArrowBackIosIcon
              onClick={handlePrevious}
              // disable={activeIndex === 0}
            />
            <ArrowForwardIosIcon
              onClick={handleNext}
              // disable={handleDisabled()}
            />
          </Stack>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          // onRealIndexChange={(el: SwiperClass) =>
          //   setActiveIndex(el.activeIndex)
          // }
          className="product-slider__slides"
          spaceBetween={24}
          scrollbar={{ draggable: true }}
          breakpoints={{
            370: {
              slidesPerView: 3,
            },
            // 520: {
            //   slidesPerView: 3,
            // },
            // 900: {
            //   slidesPerView: 4,
            // },
          }}
        >
          <SwiperSlide>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};

export default HomePage;
