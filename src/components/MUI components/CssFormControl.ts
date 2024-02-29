import { FormControl } from '@mui/material';
import { withStyles } from '@mui/styles';

export const CssFormContol = withStyles({
  root: {
    '&.MuiFormControl-root': {
      width: 'fit-content',
    },
    '& label': {
      color: '#C4C4C4',
      '&.Mui-focused': { color: '#212021' },
    },
    '& .MuiOutlinedInput-root': {
      '&.MuiOutlinedInput-root fieldset': {
        borderColor: '#C4C4C4',
      },
    },
  },
})(FormControl);
