import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import './BackBtn.scss';

const BackBtn = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      className="BackBtn"
      aria-label="button"
      type="button"
      onClick={goBack}
    >
      <KeyboardBackspaceIcon />
      <p className="BackBtn__text">Back</p>
    </button>
  );
};

export default BackBtn;
