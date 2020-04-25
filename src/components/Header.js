import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';




const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
}));

function Header(){
  const classes = useStyles();

  return (
      <h1 className={classes.root}>Tap Room Inventory Tracker</h1>
  );
}

export default Header;