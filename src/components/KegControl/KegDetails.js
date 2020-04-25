import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Clear from '@material-ui/icons/Clear';
import Create from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:100,
    borderRadius:4,
    width: 300,
      /* Basic styling and alignment */
    /* For Neumorphism Effect */
    backgroundColor: "#E0E5EC",
    boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)"
      /* For Neumorphism Effect */
  }
}));

function KegDetails(props) {
  const { keg, onClickingDelete, onClickingOrder } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          title={keg.name}
          subheader={keg.brand}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
           {keg.alcoholContent} ALCOHOL CONTENT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {keg.remainingPints} REMAINING PINTS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           ${keg.price}.00 PER PINT
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={()=> props.onClickingOrder(props.id, props.remainingPints)}>
            <AttachMoney />
          </IconButton>
          <IconButton onClick={ props.onClickingEdit } aria-label="share">
            <Create />
          </IconButton>
          <IconButton onClick={()=> onClickingDelete(keg.id) }aria-label="share">
            <Clear />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};


KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingOrder: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetails;