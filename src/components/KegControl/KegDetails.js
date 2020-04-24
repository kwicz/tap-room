import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingOrder } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <p>Name: {keg.name}</p>
      <p>Brand: {keg.brand}</p>
      <p>Alcohol Content: {keg.alcoholContent}</p>
      <p>Price: {keg.price}</p>
      <p>Remaining Pints: {keg.remainingPints}</p>
      <button onClick={()=> onClickingOrder(keg.id, keg.remainingPints) }>Order Pint</button>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete this Keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingOrder: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;