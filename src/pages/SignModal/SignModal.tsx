import { Box, IconButton, Modal } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SignInForm from '../../components/Forms/SignInForm/SignInForm';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Close } from '@mui/icons-material';
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';
import {
  hideSignIn,
  hideSignUp,
  openSignIn,
  openSignUp,
} from '../../features/modalsSlice';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    paddingInline: '40px',
  },
  h1: {
    alignSelf: 'flex-start',
    fontSize: 36,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#717171',
  },
  mainText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#717171',
  },
  close: {
    top: 0,
    left: '45%',
  },
});

const SignInModal: React.FC = () => {
  const {
    shouldSignInBeShow,
    shouldSignUpBeShow,
  } = useAppSelector(state => state.modals);
  const dispatch = useAppDispatch();
  const classes = useStyles();

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
    >
      <Box className={classes.root}>
        <IconButton
          className={classes.close}
          aria-label="toggle password visibility"
          // onClick={() => dispatch(hideSignIn())}
          onClick={handleCloseClick}
        >
          <Close />
        </IconButton>

        <h2
          id="parent-modal-title" className={classes.h1}>
          {shouldSignInBeShow ? 'Sign In' : 'Sign Up'}</h2>
        <p className={classes.text} style={{ alignSelf: 'flex-start' }}>
          {shouldSignInBeShow
            // eslint-disable-next-line @typescript-eslint/quotes
            ? "Log in to easily find the recipe you're looking for"
            : 'Enter your details for registration and easy recipes search'}
        </p>

        {shouldSignInBeShow ? (<SignInForm />) : (<SignUpForm />)}

        <p className={classes.mainText}>
          {shouldSignInBeShow
            ? "Don't have an account? "
            : 'Already have an account? '}
          <strong
            onClick={handleModalClick}
            style={{ color: '#333', cursor: 'pointer' }}
          >
            {shouldSignInBeShow ? 'Sign Up' : 'Sign In'}
          </strong>
        </p>
        <p className={classes.text}>Sign in with help</p>
        <div className="icons"></div>
      </Box>
    </Modal>
  );
};

export default SignInModal;
