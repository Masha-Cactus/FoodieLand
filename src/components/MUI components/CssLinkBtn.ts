import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';

export const CssLinkBtn = withStyles({
  root: {
    '&.MuiButtonBase-root': {
      color: '#333',
      // position: 'relative',
      display: 'inline',
      borderColor: 'blue',
      fontWeight: 500,
      fontSize: 16,
      margin: 0,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'inherit',
        color: '#000',
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
