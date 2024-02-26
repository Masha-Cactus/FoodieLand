/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { createUser } from '../../../api/user';
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,23}/;
const PSW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]){7,24}/;

const useStyles = makeStyles({
  root: {
    width: 425,
    backgroundColor: '#fff',
    display: 'flex',
    gap: 22,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  field: {
    height: 45,
    width: 425,
    paddingBlock: 27,
    paddingInline: 14,
    display: 'flex',
  },
  password: {
    paddingBottom: 14,
  },
});

const SignUpForm = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    userEmail: '',
    validUserEmail: false,
    userEmailError: false,
  });
  const [password, setPassword] = useState({
    pwd: '',
    validPwd: false,
    pwdError: false,
  });
  const [matchPassword, setMatchPassword] = useState({
    matchPwd: '',
    validMatchPwd: false,
    matchPwdError: false,
  });

  const { userEmail, validUserEmail, userEmailError } = user;
  const { pwd, validPwd, pwdError } = password;
  const { matchPwd, validMatchPwd, matchPwdError } = matchPassword;

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setUser(curr => ({ ...curr, userEmailError: false }));
  }, [userEmail]);

  useEffect(() => {
    setPassword(curr => ({ ...curr, pwdError: false }));
  }, [pwd]);

  useEffect(() => {
    setMatchPassword(curr => ({ ...curr, matchPwdError: false }));
  }, [matchPwd]);

  const validate = () => {
    setUser(curr => ({
      ...curr,
      validUserEmail: USER_REGEX.test(userEmail),
      userEmailError: !USER_REGEX.test(userEmail),
    }));

    setPassword(curr => ({
      ...curr,
      validPwd: PSW_REGEX.test(pwd),
      pwdError: !PSW_REGEX.test(pwd),
    }));

    setMatchPassword(curr => ({
      ...curr,
      validMatchPwd: pwd === matchPwd,
      matchPwdError: pwd !== matchPwd,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    validate();

    if (validUserEmail && validPwd && validMatchPwd) {
      try {
        const response = await createUser({ userEmail, pwd });

        console.log('response', response);
      } catch (error) {
        if (error instanceof Error) {
          setErrMsg(`Error creating user: ${error.message}`);
        } else {
          setErrMsg('Unknown error occurred');
        }

        console.log('errMsg', errMsg);
      }
    }
  };

  const [showPassword, setShowPassword] = useState({
    showPwd: false,
    showMatchPwd: false,
  });

  const handleClickShowPassword = (field: string) => {
    if (field === 'pwd') {
      setShowPassword(cur => ({ ...cur, showPwd: !showPassword.showPwd }));
    } else {
      setShowPassword(cur => (
        { ...cur, showMatchPwd: !showPassword.showMatchPwd }));
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault();
  };

  return (
    <Container>
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
          error={userEmailError}
        >
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            className={classes.field}
            id="email"
            aria-describedby="email"
            onChange={e => setUser(cur => (
              { ...cur, userEmail: e.target.value }))}
            type="email"
            placeholder="example@gmail.com"
            label="Email"
          />
          <FormHelperText id="email">
            Some important text about email
          </FormHelperText>
        </FormControl>

        <FormControl
          className={classes.password}
          variant="outlined"
          required
          error={pwdError}
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            className={classes.field}
            id="password"
            aria-describedby="password-text"
            onChange={e => setPassword(c => ({ ...c, pwd: e.target.value }))}
            type={showPassword.showPwd ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword('pwd')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!showPassword.showPwd ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText id="password-text">
            Some important text
          </FormHelperText>
        </FormControl>

        <FormControl
          className={classes.password}
          variant="outlined"
          required
          error={matchPwdError}
        >
          <InputLabel htmlFor="matchPassword">Confirm Password</InputLabel>
          <OutlinedInput
            className={classes.field}
            id="matchPassword"
            aria-describedby="matchPassword-text"
            onChange={e => setMatchPassword(curr => (
              { ...curr, matchPwd: e.target.value }))}
            type={showPassword.showMatchPwd ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword('match')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!showPassword.showMatchPwd
                    ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
          <FormHelperText id="password-text">
            Some important text
          </FormHelperText>
        </FormControl>

        <Button
          className={classes.field}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
