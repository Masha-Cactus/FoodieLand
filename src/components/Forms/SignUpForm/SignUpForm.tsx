/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { createUser } from '../../../api/user';
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { CssFormContol } from '../../MUI components/CssFormControl';
import { CssContainer } from '../../MUI components/CssContainer';
import { CssSubmitButton } from '../../MUI components/CssSubmitBtn';
import { CssInputField } from '../../MUI components/CssInputField';
import classNames from 'classnames';

const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,23}/;
const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,23}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]){7,24}/;

const useStyles = makeStyles({
  form: {
    width: 420,
    display: 'flex',
    gap: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const SignUpForm = () => {
  const classes = useStyles();
  // const [user, setUser] = useState({
  //   name:
  //   lastname:
  // })
  const [userName, setUserName] = useState({
    name: '',
    validName: false,
    nameError: false,
  });
  const [userLastname, setUserLastname] = useState({
    lastname: '',
    validLastname: false,
    lastnameError: false,
  });
  const [userEmail, setUserEmail] = useState({
    email: '',
    validEmail: false,
    emailError: false,
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

  const { name, validName, nameError } = userName;
  const { lastname, validLastname, lastnameError } = userLastname;
  const { email, validEmail, emailError } = userEmail;
  const { pwd, validPwd, pwdError } = password;
  const { matchPwd, validMatchPwd, matchPwdError } = matchPassword;

  const isFormFilled = !!name.length
  && !!lastname.length
  && !!email.length
  && !!pwd.length
  && !!matchPwd.length;

  const isFormValid = validName
  && validLastname
  && validEmail
  && validPwd
  && validMatchPwd;

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setUserName(curr => ({ ...curr, userNameError: false }));
  }, [userName]);

  useEffect(() => {
    setUserLastname(curr => ({ ...curr, lastnameError: false }));
  }, [lastname]);

  useEffect(() => {
    setUserEmail(curr => ({ ...curr, emailError: false }));
  }, [email]);

  useEffect(() => {
    setPassword(curr => ({ ...curr, pwdError: false }));
  }, [pwd]);

  useEffect(() => {
    setMatchPassword(curr => ({ ...curr, matchPwdError: false }));
  }, [matchPwd]);

  const validate = () => {
    setUserName(curr => ({
      ...curr,
      validName: USERNAME_REGEX.test(name),
      nameError: !USERNAME_REGEX.test(name),
    }));

    setUserLastname(curr => ({
      ...curr,
      validUserLastname: USERNAME_REGEX.test(lastname),
      userLastnameError: !USERNAME_REGEX.test(lastname),
    }));

    setUserEmail(curr => ({
      ...curr,
      validEmail: EMAIL_REGEX.test(email),
      emailError: !EMAIL_REGEX.test(email),
    }));

    setPassword(curr => ({
      ...curr,
      validPwd: PWD_REGEX.test(pwd),
      pwdError: !PWD_REGEX.test(pwd),
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

    if (isFormValid) {
      try {
        const response = await createUser({ name, lastname, email, pwd });

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
    <CssContainer>
      <form
        noValidate
        autoComplete="off"
        action=""
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <CssFormContol
          required
          error={nameError}
        >
          <InputLabel htmlFor="name">Name</InputLabel>
          <CssInputField
            id="name"
            aria-describedby="name"
            onChange={e => setUserName(cur => (
              { ...cur, name: e.target.value }))}
            type="text"
            placeholder="Enter your Name"
            label="UserName"
          />
          <FormHelperText id="userName">
            Some important text about Name
          </FormHelperText>
        </CssFormContol>

        <CssFormContol
          required
          error={lastnameError}
        >
          <InputLabel htmlFor="userName">Lastname</InputLabel>
          <CssInputField
            id="lastname"
            aria-describedby="lastname"
            onChange={e => setUserLastname(cur => (
              { ...cur, lastname: e.target.value }))}
            type="text"
            placeholder="Enter your Lastname"
            label="Lastname"
          />
          <FormHelperText id="userName">
            Some important text about Lastname
          </FormHelperText>
        </CssFormContol>

        <CssFormContol
          required
          error={emailError}
        >
          <InputLabel htmlFor="email">Email</InputLabel>
          <CssInputField
            id="email"
            aria-describedby="email"
            onChange={e => setUserEmail(cur => (
              { ...cur, email: e.target.value }))}
            type="email"
            placeholder="example@gmail.com"
            label="Email"
          />
          <FormHelperText id="email">
            Some important text about email
          </FormHelperText>
        </CssFormContol>

        <CssFormContol
          required
          error={pwdError}
        >
          <InputLabel htmlFor="password">Password</InputLabel>
          <CssInputField
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
        </CssFormContol>

        <CssFormContol
          required
          error={matchPwdError}
        >
          <InputLabel htmlFor="matchPassword">Confirm Password</InputLabel>
          <CssInputField
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
        </CssFormContol>

        <CssSubmitButton
          type="submit"
          variant="contained"
          disabled={isFormFilled}
          className={classNames({
            'filled': isFormFilled,
          },
          )}
        >
          Submit
        </CssSubmitButton>
      </form>
    </CssContainer>
  );
};

export default SignUpForm;
