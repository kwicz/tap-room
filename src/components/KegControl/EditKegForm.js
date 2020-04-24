import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditKegForm (props) {
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;