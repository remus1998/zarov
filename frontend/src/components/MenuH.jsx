import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  menuH: {
    position: 'absolute',
    top: '25px',
    right: '50px',
    '@media (min-width: 360px) and (max-width: 700px)': {
      right: '0px'
    },
   '@media (max-width: 700px)': {
      right: '0px'
    },
  },
  iconB: {
    width: '100px',
    height: '100px',
    color: 'white',
    stroke: 'white',
    backgroundColor: '#138073',
    '&:hover': {
      color: '#138073',
      stroke: '#138073',
      backgroundColor: 'white',
      border: "2px solid #138073",
    },
    '@media (max-width: 1300px)': {
      width: '90px',
      height: '90px',
    },
    '@media (max-width: 1000px)': {
      width: '80px',
      height: '80px',
    },
    '@media (max-width: 520px)': {
      right: '10px',
      width: '80px',
      height: '80px',
    }
  },
  icon: {
    fontSize: 65,
    '@media (max-width: 1300px)': {
      fontSize: 55,
    },
    '@media (max-width: 1000px)': {
      fontSize: 55,
    },
    '@media (max-width: 520px)': {
      fontSize: 55,
    }
  }
});

const options = [
  'Home',
  "About",
  'Contact'
];

function MenuH() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menuH}>
      <IconButton className={classes.iconB} aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className={classes.icon} />
      </IconButton>

      <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}
        PaperProps={{
          style: {
            minWidth: '150px',
            maxHeight: '150px',
            color: 'black',
            backgroundColor: 'white'
          },
        }}>
        {options.map((option) => (
          <MenuItem key={uuidv4()} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default MenuH;