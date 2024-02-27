import { Container } from '@mui/material';
import { withStyles } from '@mui/styles';

export const CssContainer = withStyles({
  root: {
    '&.MuiContainer-root': {
      paddingLeft:' 0 !important',
    },
  },
})(Container);
