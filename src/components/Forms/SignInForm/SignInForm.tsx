import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import {
  FormHelperText,
  Button,
  Container,
  InputLabel,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from '@mui/material';
import './SignInForm.scss';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  box: {
    paddingInline: 0,
    paddingLeft: 0,
  },
  root: {
    width: 420,
    height: 430,
    backgroundColor: '#fff',
    display: 'flex',
    gap: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
  },
  field: {
    height: 45,
    width: 425,
    paddingBlock: 27,
    paddingInline: 14,
    display: 'flex',
  },
  btn: {
    height: 45,
    width: 425,
    paddingBlock: 27,
    paddingInline: 14,
    display: 'flex',
    borderColor: 'blue',
    backgroundColor: '#717171',
    '&:hover': {
      backgroundColor: '#E0E0E0',
      borderColor: 'red',
    },
  },
  password: {
    paddingBottom: 14,
  },
});

const SignInForm = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyles();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault();
  };

  useEffect(() => {
    setErrMsg('');
  }, [user, password, errMsg]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <Container className={classes.box} sx={{ paddingLeft: 0 }}>
      <form
        noValidate
        autoComplete="off"
        action=""
        onSubmit={handleSubmit}
        className={classes.root}
      >

        <FormControl
          className={classes.password}
          required
        >
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            className={classes.field}
            id="email"
            aria-describedby="email"
            onChange={e => setUser(e.target.value)}
            type="email"
            label="Email"
            placeholder="example@gmail.com"
            // sx={{
            //   borderColor: 'initial',
            //   '&:focus': {
            //     borderColor: '#E0E0E0',
            //   },
            // }}
          />
          <FormHelperText id="email">
            Some important text about email
          </FormHelperText>
        </FormControl>

        <FormControl
          className={classes.password}
          variant="outlined"
          required
        >
          <InputLabel
            htmlFor="password"
          >Password</InputLabel>
          <OutlinedInput
            className={classes.field}
            onChange={e => setPassword( e.target.value)}
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            aria-describedby="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword()}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="********"
          />
          <FormHelperText id="password-text">
            Some important text
          </FormHelperText>
        </FormControl>

        <Button
          className={classes.btn}
          type="submit"
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: '#717171',
            '&:hover': {
              backgroundColor: '#E0E0E0',
            },
          }}
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignInForm;

