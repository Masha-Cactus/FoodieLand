/* eslint-disable max-len */
import RecipesList from '../../components/Lists/RecipesList/RecipesList';
import BackBtn from '../../components/elements/BackBtn/BackBtn';
import { useAppSelector } from '../../store/hooks';
import './FavoritesPage.scss';

type Props = {};

const FavoritesPage: React.FC<Props> = ({}) => {
  const { recipes } = useAppSelector(state => state.recipes);

  return (
    <section className='FavoritesPage'>
      <BackBtn />
      <h1 className='FavoritesPage__title'>Favorites</h1>
      <p className='FavoritesPage__text'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>

      <RecipesList recipes={recipes}/>
    </section>
  );
};

export default FavoritesPage;

