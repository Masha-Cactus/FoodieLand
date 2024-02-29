import { ArticleType } from '../../../types/articleType';
import ArticleCard from '../../Cards/ArticleCard/ArticleCard';
import './ArticlesList.scss';

type Props = {
  articles: ArticleType[];
};

const ArticlesList: React.FC<Props> = ({ articles }) => {
  return (
    <div className='ArticlesList'>
      {articles.map(article => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;

