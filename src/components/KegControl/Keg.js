import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import AttachMoney from '@material-ui/icons/AttachMoney';
import List from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:50,
    borderRadius:4,
    width:150,
    height:225,
      /* Basic styling and alignment */
    /* For Neumorphism Effect */
    backgroundColor: "#E0E5EC",
    boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)"
      /* For Neumorphism Effect */
  }
}));

function Keg(props) {
  const classes = useStyles();
  const iconButtonStyle = {
    backgroundColor: "#E0E5EC",
    boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)",
    margin: 6,
    color: "#e53935"
  }
  const iconButtonStyleDisabled = {
    backgroundColor: "#E0E5EC",
    boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)",
    margin: 6,
    color: "rgb(163,177,198,0.6)"
  }
  let orderButton = <IconButton 
    style={iconButtonStyle} 
    onClick={()=> props.onClickingOrder(props.id, props.remainingPints)}>
      <AttachMoney />
    </IconButton>;
  let cardContent = <CardContent>{props.remainingPints} pints left</CardContent>;
  if (props.remainingPints == 0) {
    orderButton = <IconButton 
      style={iconButtonStyleDisabled} 
      disabled
      onClick={()=> props.onClickingOrder(props.id, props.remainingPints)}>
        <AttachMoney />
      </IconButton>;
    cardContent = <CardContent>SOLD OUT!</CardContent>;
  }

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          title={props.name}
        />
        {cardContent}
        <CardActionArea>
          {orderButton}
          <IconButton style={iconButtonStyle} onClick={() => props.whenKegClicked(props.id)} >
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