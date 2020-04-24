import React from 'react';
import PropTypes from "prop-types";
// import { v4 } from 'uuid';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>Brewed by {props.brand}</h4>
        <p>{props.alcoholContent}</p>
        <p>{props.price}</p>
      </div>
    </React.Fragment>
  );
};
// Keg.id = v4()

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;