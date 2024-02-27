import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import {
  FormHelperText,
  InputLabel,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CssFormContol } from '../../MUI components/CssFormControl';
import { CssContainer } from '../../MUI components/CssContainer';
import { CssSubmitButton } from '../../MUI components/CssSubmitBtn';
import { CssInputField } from '../../MUI components/CssInputField';
import classNames from 'classnames';

const useStyles = makeStyles({
  form: {
    width: 420,
    display: 'flex',
    gap: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const SignInForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const isFormFilled = !!userName.length
  && !!email.length
  && !!password.length;

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
  }, [userName, email, password, errMsg]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
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

        <CssFormContol required>
          <InputLabel variant='outlined'>UserName</InputLabel>
          <CssInputField
            id="userName"
            aria-describedby="userName"
            onChange={e => setUserName(e.target.value)}
            type="text"
            label="UserName"
            placeholder="Enter your UserName"
          />
          <FormHelperText id="userName">
            Some important text about userName
          </FormHelperText>
        </CssFormContol>

        <CssFormContol required>
          <InputLabel htmlFor="email">Email</InputLabel>
          <CssInputField
            id="email"
            aria-describedby="email"
            onChange={e => setEmail(e.target.value)}
            type="email"
            label="Email"
            placeholder="example@gmail.com"
          />
          <FormHelperText id="email">
            Some important text about email
          </FormHelperText>
        </CssFormContol>

        <CssFormContol required>
          <InputLabel htmlFor="password">Password</InputLabel>
          <CssInputField
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
            Some important text about password
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
          Sign In
        </CssSubmitButton>
      </form>
    </CssContainer>
  );
};

export default SignInForm;

