import { Box, IconButton, Modal } from '@mui/material';
import SignInForm from '../../components/Forms/SignInForm/SignInForm';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Close } from '@mui/icons-material';
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';
import './SignModal.scss';
import {
  hideSignIn,
  hideSignUp,
  openSignIn,
  openSignUp,
} from '../../features/modalsSlice';

const SignInModal: React.FC = () => {
  const { shouldSignInBeShow, shouldSignUpBeShow } = useAppSelector(
    state => state.modals,
  );
  const dispatch = useAppDispatch();

  const handleModalClick = () => {
    if (shouldSignInBeShow) {
      dispatch(openSignUp());
      dispatch(hideSignIn());
    } else {
      dispatch(openSignIn());
      dispatch(hideSignUp());
    }
  };

  const handleCloseClick = () => {
    if (shouldSignInBeShow) {
      dispatch(hideSignIn());
    } else {
      dispatch(hideSignUp());
    }
  };

  return (
    <Modal
      open={shouldSignInBeShow || shouldSignUpBeShow}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="SignModal"
    >
      <Box className="SignModal__box">
        <div className="SignModal__top">
          <h2 id="parent-modal-title" className="SignModal__title">
            {shouldSignInBeShow ? 'Sign In' : 'Sign Up'}
          </h2>

          <IconButton
            // className={classes.close}
            className="SignModal__close"
            aria-label="toggle password visibility"
            onClick={handleCloseClick}
          >
            <Close />
          </IconButton>
        </div>
        <p className="SignModal__text SignModal__text--start">
          {shouldSignInBeShow
            // eslint-disable-next-line @typescript-eslint/quotes
            ? "Log in to easily find the recipe you're looking for"
            : 'Enter your details for registration and easy recipes search'}
        </p>

        {shouldSignInBeShow ? <SignInForm /> : <SignUpForm />}

        <p className="SignModal__mainText">
          {shouldSignInBeShow
            ? "Don't have an account? "
            : 'Already have an account? '}
          <span
            onClick={handleModalClick}
            className="SignModal__text SignModal__text--dark"
          >
            {shouldSignInBeShow ? 'Sign Up' : 'Sign In'}
          </span>
        </p>
        <div className="SingModal__bot">
          <p className="SignModal__text SignModal__text--bot">
            Sign in with help
          </p>
          <div className="SignModal__icons">
            <span className="SignModal__icon SignModal__icon--facebook" />
            <span className="SignModal__icon SignModal__icon--apple" />
            <span className="SignModal__icon SignModal__icon--gmail" />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default SignInModal;
