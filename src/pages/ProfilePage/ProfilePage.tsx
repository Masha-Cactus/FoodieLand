import { InputLabel } from '@mui/material';
import { CssContainer } from '../../components/MUI components/CssContainer';
import { CssFormContol } from '../../components/MUI components/CssFormControl';
import './ProfilePage.scss';
import { CssInputField } from '../../components/MUI components/CssInputField';
import { useAppSelector } from '../../store/hooks';
import { useState } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { CssSubmitButton } from '../../components/MUI components/CssSubmitBtn';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   form: {
//     width: '100%',
//     display: 'grid',
//     // gridTemplate: '1fr 1fr',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap: 24,
//     alignItems: 'center',
//   },
// });

const ProfilePage: React.FC = () => {
  const { name, lastname, email, country, city, image } = useAppSelector(
    state => state.user,
  );

  const [user, setUser] = useState({
    userName: name,
    userLastname: lastname,
    userEmail: email,
    userCountry: country,
    userCity: city,
    userImage: image,
  });
  const [open, setOpen] = useState(false);

  // const classes = useStyles();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
  ) => {
    setUser(cur => ({ ...cur, [field]: e.target.value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <section className="ProfilePage">
      <h3 className="ProfilePage__title">Profile</h3>

      <div className="ProfilePage__top" style={{ gridColumn: 'span 2' }}>
        <img src={image} alt="Profile Photo" className="ProfilePage__image" />
        <div className="ProfilePage__name">
          <p>{`${name} ${lastname}`}</p>
          <p>{`${country}, ${city}`}</p>
          <p>{email}</p>
        </div>

        <ModeEditIcon onClick={() => setOpen(!open)} />
      </div>

      {open && (
        <CssContainer>
          <form action="" className="ProfilePage__form" onSubmit={handleSubmit}>
            <CssFormContol>
              <InputLabel>Name</InputLabel>
              <CssInputField
                id="name"
                type="text"
                label="Name"
                value={user.userName}
                onChange={e => handleChange(e, 'userName')}
              />
            </CssFormContol>

            <CssFormContol>
              <InputLabel>Lastname</InputLabel>
              <CssInputField
                id="lastname"
                type="text"
                label="Lastname"
                value={user.userLastname}
                onChange={e => handleChange(e, 'userLastname')}
              />
            </CssFormContol>

            <CssFormContol>
              <InputLabel>Country</InputLabel>
              <CssInputField
                id="country"
                type="text"
                label="Country"
                value={user.userCountry}
                onChange={e => handleChange(e, 'userCountry')}
              />
            </CssFormContol>

            <CssFormContol>
              <InputLabel>City</InputLabel>
              <CssInputField
                id="city"
                type="text"
                label="Cuty"
                value={user.userCity}
                onChange={e => handleChange(e, 'userCity')}
              />
            </CssFormContol>

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
