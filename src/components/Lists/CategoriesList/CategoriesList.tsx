import { CategoryType } from '../../../types/categoryType';
import CategoryCard from '../../Cards/CategoryCard/CategoryCard';
import './CategoriesList.scss';

type Props = {
  categories: CategoryType[];
};

const CategoriesList: React.FC<Props> = ({ categories }) => {
  return (
    <div className='CategoriesList'>
      {categories.map(category => (
        <CategoryCard key={category.type} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
