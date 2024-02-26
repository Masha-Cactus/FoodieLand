import './Rating.scss';

type Props = {
  rating: number;
};

const Rating: React.FC<Props> = ({ rating }) => {
  const MAX_STARS = 5;
  const filledStars = Math.round(rating);
  const emptyStars = MAX_STARS - filledStars;

  const renderStars = (count: number, isFilled: boolean) => {
    const starIcon = isFilled ? '★' : '☆';

    return Array.from({ length: count }, (_, i) => (
      <span key={i}>{starIcon}</span>
    ));
  };

  return (
    <div className='Rating'>
      {renderStars(filledStars, true)}
      {renderStars(emptyStars, false)}
    </div>
  );
};

export default Rating;
