import './GoTopBtn.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

type Props = {};

const GoTopBtn: React.FC<Props> = ({}) => {
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='GoTopBtn' onClick={goTop}>
      <ArrowUpwardIcon />
      {/* <div className="GoTopBtn__icon" /> */}
      {/* <p>Go Top</p> */}
    </div>
  );
};

export default GoTopBtn;
