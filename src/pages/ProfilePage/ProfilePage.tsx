/* eslint-disable no-console */
import { InputLabel, capitalize } from '@mui/material';
import { CssContainer } from '../../components/MUI components/CssContainer';
import { CssFormContol } from '../../components/MUI components/CssFormControl';
import './ProfilePage.scss';
import { CssInputField } from '../../components/MUI components/CssInputField';
import { useAppSelector } from '../../store/hooks';
import { useEffect, useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { CssSubmitButton } from '../../components/MUI components/CssSubmitBtn';
import { z } from 'zod';
import { PWD_REGEX, USERNAME_REGEX } from '../../helpers/staticData';
import { updateUser } from '../../api/user';
import { validateForm } from '../../helpers/form/validateForm';

interface FormData {
  name: string;
  lastname: string;
  email: string;
  country: string;
  city: string;
  image: string;
}

const ProfilePage: React.FC = () => {
  const user = useAppSelector(state => state.user);

  const [newUser, setNewUser] = useState<FormData>({
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    country: user.country,
    city: user.city,
    image: user.image,
  });
  const [errors, setErrors] = useState<FormData>({
    name: '',
    lastname: '',
    email: '',
    country: '',
    city: '',
    image: '',
  });
  const formSchema = z
    .object({
      name: z.string().trim().regex(USERNAME_REGEX),
      lastname: z.string().trim().regex(USERNAME_REGEX),
      email: z.coerce.string().trim().email(),
      country: z.string().trim().regex(PWD_REGEX),
      city: z.string().trim().regex(PWD_REGEX),
      image: z.string(),
    })
    .required();
  const [errMsg, setErrMsg] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setNewUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setOpen(false);

    try {
      const result = await validateForm<FormData>(user, formSchema);

      if (result.isValid) {
        const response = await updateUser({
          ...newUser,
          userId: user.userId,
        },
        );

        console.log('response', response);
      } else {
        console.log(result.formErrors);
        Object.entries(result.formErrors).forEach(
          ([key, msg]) => setErrors(c => ({ ...c, [key]: msg })),
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
    setErrors(curr => ({ ...curr, name: '' }));
  }, [newUser.name]);

  useEffect(() => {
    setErrors(curr => ({ ...curr, lastname: '' }));
  }, [newUser.lastname]);

  useEffect(() => {
    setErrors(curr => ({ ...curr, email: '' }));
  }, [newUser.email]);

  useEffect(() => {
    setErrors(curr => ({ ...curr, country: '' }));
  }, [newUser.country]);

  useEffect(() => {
    setErrors(curr => ({ ...curr, city: '' }));
  }, [newUser.city]);

  return (
    <section className="ProfilePage">
      <h3 className="ProfilePage__title">Profile</h3>

      <div className="ProfilePage__top">
        <img
          src={user.image}
          alt="Profile Photo"
          className="ProfilePage__image"
        />
        <div className="ProfilePage__name">
          <p>{`${name} ${user.lastname}`}</p>
          <p>{`${user.country}, ${user.city}`}</p>
          <p>{user.email}</p>
        </div>

        <ModeEditIcon onClick={() => setOpen(!open)} />
      </div>

      {open && (
        <CssContainer>
          <form action="" className="ProfilePage__form" onSubmit={handleSubmit}>
            {Object.keys(newUser).map(key => (
              <CssFormContol
                error={!!errors[key as keyof FormData].length}
                key={key}
              >
                <InputLabel>{capitalize(key)}</InputLabel>
                <CssInputField
                  name={key}
                  id={key}
                  type={key === 'email' ? 'email' : 'text'}
                  placeholder={`Enter your ${key}`}
                  label={capitalize(key)}
                  value={newUser[key as keyof FormData]}
                  onChange={handleChange}
                  sx={{ height: 48, width: 407 }}
                />
              </CssFormContol>
            ))}

            <CssSubmitButton
              type="submit"
              variant="contained"
              // disabled={isFormFilled}
              // className={classNames({
              //   filled: isFormFilled,
              // })}
            >
              Save
            </CssSubmitButton>
          </form>
        </CssContainer>
      )}
    </section>
  );
};

export default ProfilePage;
