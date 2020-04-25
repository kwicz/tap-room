import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function KegList(props){
  const classes = useStyles();

  return (
    <React.Fragment className={classes.root} >
    {props.kegList.map((keg) =>
      <Keg 
        whenKegClicked = { props.onKegSelection }
        onClickingOrder = { props.onClickingOrder }
        name={keg.name}
        brand={keg.brand}
        alcoholContent={keg.alcoholContent}
        remainingPints={keg.remainingPints}
        id={keg.id}
        key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  keglist: PropTypes.array,
  onKegSelection: PropTypes.func,
  onClickingOrder: PropTypes.func
};

export default KegList;