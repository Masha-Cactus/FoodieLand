import './GoTopBtn.scss';

type Props = {};

const GoTopBtn: React.FC<Props> = ({}) => {
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='GoTopBtn' onClick={goTop}>
      <div className="GoTopBtn__icon" />
    </div>
  );
};

export default GoTopBtn;
