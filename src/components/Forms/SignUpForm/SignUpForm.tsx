/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { createUser } from '../../../api/user';
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  capitalize,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { CssFormContol } from '../../MUI components/CssFormControl';
import { CssContainer } from '../../MUI components/CssContainer';
import { CssSubmitButton } from '../../MUI components/CssSubmitBtn';
import { CssInputField } from '../../MUI components/CssInputField';
import classNames from 'classnames';
import { z } from 'zod';
import { validateForm } from '../../../helpers/form/validateForm';
import { PWD_REGEX, USERNAME_REGEX } from '../../../helpers/staticData';
import { defineType } from '../../../helpers/form/defineType';
// import { useAppDispatch } from '../../../store/hooks';
// import { loginSuccess } from '../../../features/authSlice';

interface FormData {
  name: string;
  lastname: string;
  email: string;
  pwd: string;
  matchPwd: string;
}

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
  // const dispatch = useAppDispatch();

  const [user, setUser] = useState<FormData>({
    name: '',
    lastname: '',
    email: '',
    pwd: '',
    matchPwd: '',
  });

  const [errors, setErrors] = useState<FormData>({
    name: '',
    lastname: '',
    email: '',
    pwd: '',
    matchPwd: '',
  });

  const [errMsg, setErrMsg] = useState('');

  const formSchema = z
    .object({
      name: z.string().trim().regex(USERNAME_REGEX),
      lastname: z.string().trim().regex(USERNAME_REGEX),
      email: z.coerce.string().trim().email(),
      pwd: z.string().trim().regex(PWD_REGEX),
      matchPwd: z.string().trim().regex(PWD_REGEX),
    })
    .required();

  const isFormFilled = Object.values(user).every(field => !!field.length);

  useEffect(() => {
    setErrors(curr => ({ ...curr, name: '' }));
  }, [user.name]);

  useEffect(() => {
    setErrors(curr => ({ ...curr, lastname: '' }));
  }, [user.lastname]);

  useEffect(() => {
    setErrors(curr => ({ ...curr, email: '' }));
  }, [user.email]);

  useEffect(() => {
    setErrors(curr => ({ ...curr, pwd: '' }));
  }, [user.pwd]);

  useEffect(() => {
    setErrors(curr => ({ ...curr, matchPwd: '' }));
  }, [user.matchPwd]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      const result = await validateForm<FormData>(user, formSchema);

      if (result.isValid) {
        const { name, lastname, email, pwd } = user;

        try {
          const response = await createUser({
            name,
            lastname,
            email,
            pwd,
          });

          // dispatch(loginSuccess(response));
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  type ShowPwdType = {
    showPwd: boolean,
    showMatchPwd: boolean,
  };

  const [showPassword, setShowPassword] = useState<ShowPwdType>({
    showPwd: false,
    showMatchPwd: false,
  });

  const handleClickShowPassword = (field: string) => {
    if (field === 'pwd') {
      setShowPassword(cur => ({ ...cur, showPwd: !showPassword.showPwd }));
    } else {
      setShowPassword(cur => ({
        ...cur,
        showMatchPwd: !showPassword.showMatchPwd,
      }));
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault();
  };

  const isVisible = (key: string) => {
    if (key === 'pwd' || key === 'matchPwd') {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => {
              if (key === 'matchPwd') {
                handleClickShowPassword('match');
              } else {
                handleClickShowPassword('pwd');
              }
            }}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {key === 'matchPwd' ? (
              !showPassword.showMatchPwd ? (
                <VisibilityOff />
              ) : (
                <Visibility />
              )
            ) : !showPassword.showPwd ? (
              <VisibilityOff />
            ) : (
              <Visibility />
            )}
          </IconButton>
        </InputAdornment>
      );
    }

    return;
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
              type={defineType(key, showPassword[`show${capitalize(key)}` as keyof ShowPwdType])}
              placeholder={`Enter your ${key}`}
              label={capitalize(key)}
              sx={{ height: 45, width: 425 }}
              endAdornment={isVisible(key)}
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
          Submit
        </CssSubmitButton>
      </form>
    </CssContainer>
  );
};

export default SignUpForm;
