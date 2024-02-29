import { Rating } from '@mui/material';
import './ReviewCard.scss';

type Props = {};

const ReviewCard: React.FC<Props> = ({}) => {
  return (
    <article className="ReviewCard">
      <div className="ReviewCard__top">
        <img src="" alt="autor photo" />
        <div className="ReviewCard__info">
          <h4 className="ReviewCard__title">Nattasha Mith</h4>
          <p className="ReviewCard__text">Sydney, USA</p>
        </div>
      </div>

      <div className="ReviewCard__text ReviewCard__text--margin">
        The best service! Thanks to this service, I found the perfect co-working
        space
      </div>

      <div className="ReviewCard__data">
        <p className="ReviewCard__date">August 18,2022</p>
        <Rating />
      </div>
    </article>
  );
};

export default ReviewCard;
