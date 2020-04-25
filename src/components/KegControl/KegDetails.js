import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LocalDrink from '@material-ui/icons/LocalDrink';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
    avatar: {
    backgroundColor: red[500],
  }
}));

function KegDetails(props) {
  const { keg, onClickingDelete, onClickingOrder } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <LocalDrink />
            </Avatar>
          }
          title={keg.name}
          subheader={keg.brand}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
           {keg.alcoholContent}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Pints remaining in this keg: {keg.remainingPints}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           ${keg.price}.00 per pint
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <button onClick={()=> onClickingOrder(keg.id, keg.remainingPints) }>Order Pint</button>
          </IconButton>
          <IconButton aria-label="share">
            <button onClick={ props.onClickingEdit }>Update Keg</button>
          </IconButton>
          <IconButton aria-label="share">
          <button onClick={()=> onClickingDelete(keg.id) }>Delete this Keg</button>
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