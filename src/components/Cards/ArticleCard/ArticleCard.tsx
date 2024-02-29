
import { ArticleType } from '../../../types/articleType';
import './ArticleCard.scss';

type Props = {
  article: ArticleType;
};

const ArticleCard: React.FC<Props> = ({ article }) => {
  const {
    title,
    description,
    date,
    author,
    imgUrl,
  } = article;

  return (
    <div className='ArticleCard'>
      <img src={imgUrl} alt="article" className="ArticleCard__image"/>
      <div className="ArticleCard__content">
        <h4 className="ArticleCard__title">{title}</h4>
        <p className="ArticleCard__description">{description}</p>
        <div className="ArticleCard__data">
          <p className="ArticleCard__author">{author}</p>
          <p className="ArticleCard__date">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

