import RecipesList from '../../components/Lists/RecipesList/RecipesList';
import BackBtn from '../../components/elements/BackBtn/BackBtn';
import './RecipesPage.scss';

type Props = {};

const RecipesPage: React.FC<Props> = ({}) => {
  return (
    <section className='RecipesPage'>
      <h1>Resipes Page title</h1>
      <BackBtn />
      <RecipesList /> 
    </section>
  );
};

export default RecipesPage;

