import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';

function KegList(props){
  
  return (
    <React.Fragment>
    <hr/>
    {props.kegList.map((keg) =>
      <Keg 
        whenKegClicked = { props.onKegSelection }
        name={keg.name}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  keglist: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;