import { OutlinedInput } from '@mui/material';
import { withStyles } from '@mui/styles';

export const CssInputField = withStyles({
  root: {
    '&.MuiInputBase-root': {
      height: 45,
      width: 425,
      paddingBlock: 27,
      paddingInline: 14,
      display: 'flex',
      borderColor: 'blue !important',
      outlineColor: 'red !important',
      '&:hover': {
        borderColor: 'red !important',
        outlineColor: 'red !important',
      },
      '&:focus': {
        borderColor: 'red !important',
        outlineColor: 'red !important',
      },
    },
  },
})(OutlinedInput);
