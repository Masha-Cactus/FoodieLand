import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { CssLinkBtn } from '../../MUI components/CssLinkBtn';
import { Link } from 'react-router-dom';

export default function FadeMenu({}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CssLinkBtn
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableRipple
        onClick={handleClick}
      >
        Recipes
      </CssLinkBtn>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/recipes" style={{ color: '#333' }}>
          All recipes
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My recipes</MenuItem>
        <MenuItem onClick={handleClose}>Create new recipe</MenuItem>
      </Menu>
    </div>
  );
}
