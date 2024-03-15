/* eslint-disable no-console */
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import {
  FormHelperText,
  InputLabel,
  IconButton,
  InputAdornment,
  capitalize,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CssFormContol } from '../../MUI components/CssFormControl';
import { CssContainer } from '../../MUI components/CssContainer';
import { CssSubmitButton } from '../../MUI components/CssSubmitBtn';
import { CssInputField } from '../../MUI components/CssInputField';
import classNames from 'classnames';
import { defineType } from '../../../helpers/form/defineType';
import { loginUser } from '../../../api/user';
import { validateForm } from '../../../helpers/form/validateForm';
import { PWD_REGEX } from '../../../helpers/staticData';
import { z } from 'zod';
import { useAppDispatch } from '../../../store/hooks';
import { loginSuccess } from '../../../features/authSlice';

const useStyles = makeStyles({
  form: {
    width: 420,
    display: 'flex',
    gap: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

interface FormData {
  email: string;
  pwd: string;
}

const SignInForm = () => {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<FormData>({
    email: '',
    pwd: '',
  });

  const [errors, setErrors] = useState<FormData>({
    email: '',
    pwd: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const isFormFilled = Object.values(user).every(field => !!field.length);

  const classes = useStyles();

  const formSchema = z
    .object({
      email: z.coerce.string().trim().email(),
      pwd: z.string().trim().regex(PWD_REGEX),
    })
    .required();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      const result = await validateForm<FormData>(user, formSchema);

      if (result.isValid) {
        try {
          const response = await loginUser(user);

          dispatch(loginSuccess(response));
          console.log('response', response);
        } catch (error) {
          console.error(error);
        }

      } else {
        console.log(result.formErrors);
        Object.entries(result.formErrors).forEach(([key, msg]) =>
          setErrors(c => ({ ...c, [key]: msg })),
        );
        console.log('Form Error:', result.formErrors);
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrMsg(`Error creating user: ${err.message}`);
      } else {
        setErrMsg('Unknown error occurred');
      }

      console.log('errMsg', errMsg);
    }
  };

  useEffect(() => {
    setErrors(curr => ({ ...curr, email: '' }));
  }, [user.email]);

  useEffect(() => {
    setErrors(curr => ({ ...curr, pwd: '' }));
  }, [user.pwd]);

  return (
    <CssContainer>
      <form
        noValidate
        autoComplete="off"
        action=""
        onSubmit={handleSubmit}
        className={classes.form}
      >
        {Object.keys(user).map(key => (
          <CssFormContol
            key={key}
            required
            error={!!errors[key as keyof FormData].length}
          >
            <InputLabel htmlFor="name">{capitalize(key)}</InputLabel>
            <CssInputField
              name={key}
              id={key}
              aria-describedby={key}
              onChange={handleInputChange}
              type={defineType(key, showPassword)}
              placeholder={`Enter your ${key}`}
              label={capitalize(key)}
              sx={{ height: 45, width: 425 }}
              endAdornment={
                key === 'pwd' && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
            <FormHelperText id={key}>
              {`Some important text about ${key}`}
            </FormHelperText>
          </CssFormContol>
        ))}

        <CssSubmitButton
          type="submit"
          variant="contained"
          disabled={!isFormFilled}
          className={classNames({
            filled: isFormFilled,
          })}
        >
          Sign In
        </CssSubmitButton>
      </form>
    </CssContainer>
  );
};

export default SignInForm;
