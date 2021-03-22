import React from "react";

const CheckBox = ({ name, checked = false, onChange }) => {
  return (
  <input type="checkbox" name={name} checked={checked} onChange={onChange} />   
 
  );
};

export default CheckBox;

