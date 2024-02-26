import { Box, Button, Modal } from '@mui/material';
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';
import './SignUpModal.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { hideSignUp, openSignIn } from '../../features/modalsSlice';
import './SignUpModal.scss';
import { makeStyles } from '@mui/styles';

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 45,
    width: 425,
  },
});

const SignUpModal: React.FC = () => {
  const { shouldSignUpBeShow } = useAppSelector(state => state.modals);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const handleClick = () => {
    dispatch(openSignIn());
    dispatch(hideSignUp());
  };

  return (
    <Modal
      open={shouldSignUpBeShow}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="SignInModal"
    >
      <Box className={classes.root}>
        <Button
          // type="button"
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={() => dispatch(hideSignUp())}
        >
          Close
        </Button>

        <h2 id="parent-modal-title">Sign In</h2>
        <p>Log in to easily find the job you&apos;re looking for</p>

        <SignUpForm />
        <p>
          Already have an account?
          <p onClick={handleClick}>Sign in</p>
        </p>
        <p>Sign in with help</p>
        <div className="icons"></div>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
