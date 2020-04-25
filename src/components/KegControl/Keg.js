import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { red } from '@material-ui/core/colors';
import AttachMoney from '@material-ui/icons/AttachMoney';
import List from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:100,
    borderRadius:4,
    width:150,
    height:250,
      /* Basic styling and alignment */
    /* For Neumorphism Effect */
    backgroundColor: "#E0E5EC",
    boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)"
      /* For Neumorphism Effect */
  },
  IconButton: {
    color: red
  }
}));

function Keg(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          title={props.name}
        />
        <CardContent>
          {props.remainingPints} pints left
        </CardContent>
        <CardActionArea>
          <IconButton onClick={()=> props.onClickingOrder(props.id, props.remainingPints)}>
            <AttachMoney />
          </IconButton>
          <IconButton onClick={() => props.whenKegClicked(props.id)} >
            <List />
          </IconButton>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};


Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  description: PropTypes.string,
  alcoholContent: PropTypes.string,
  price: PropTypes.number,
  remainingPints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onClickingOrder: PropTypes.func
};

export default Keg;