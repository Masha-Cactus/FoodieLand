import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';

export const CssSubmitButton = withStyles({
  root: {
    '&.MuiButtonBase-root': {
      height: 45,
      width: 425,
      paddingBlock: 27,
      paddingInline: 14,
      display: 'flex',
      borderColor: 'blue',
      backgroundColor: '#E0E0E0',
      '&:hover': {
        backgroundColor: '#E0E0E0',
      },
    },
    '&.MuiButtonBase-root.filled': {
      backgroundColor: '#717171',
      '&:hover': {
        backgroundColor: '#717171',
      },
    },
  },
})(Button);
