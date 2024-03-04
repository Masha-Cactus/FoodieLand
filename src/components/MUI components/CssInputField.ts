import { OutlinedInput } from '@mui/material';
import { withStyles } from '@mui/styles';

export const CssInputField = withStyles({
  root: {
    '&.MuiInputBase-root': {
      paddingBlock: 27,
      paddingInline: 14,
      display: 'flex',
      '&:hover': {},
      '&:focus': {},
    },
  },
})(OutlinedInput);
