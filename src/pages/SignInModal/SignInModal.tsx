import { Box, IconButton, Modal } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SignInForm from '../../components/Forms/SignInForm/SignInForm';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { hideSignIn, openSignUp } from '../../features/modalsSlice';
import { Close } from '@mui/icons-material';

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
    // justifyContent: 'center',
    alignItems: 'center',
    paddingInline: '40px',
  },
  h1: {
    alignSelf: 'flex-start',
    fontSize: 36,
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#717171',
  },
  mainText: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#717171',
  },
  close: {
    top: 0,
    left: '45%',
  },
});

const SignInModal: React.FC = () => {
  const { shouldSignInBeShow } = useAppSelector(state => state.modals);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const handleClick = () => {
    dispatch(hideSignIn());
    dispatch(openSignUp());
  };

  return (
    <Modal
      open={shouldSignInBeShow}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className={classes.root}>
        {/* <Button
          type="button"
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={() => dispatch(hideSignIn())}
        >
          Close
        </Button> */}

        <IconButton
          className={classes.close}
          aria-label="toggle password visibility"
          onClick={() => dispatch(hideSignIn())}
        >
          <Close />
        </IconButton>

        <h2
          id="parent-modal-title"
          className={classes.h1}
        >Sign In</h2>
        <p className={classes.text}>
          Log in to easily find the recipe you&apos;re looking for
        </p>

        <SignInForm />
        <p>
          Don&apos;t have an account?
          <p onClick={handleClick}>Sign up</p>
        </p>
        <p>Sign in with help</p>
        <div className="icons"></div>
      </Box>
    </Modal>
  );
};

export default SignInModal;
