import React from 'react';

const CheckBox = ({ name, defaultChecked = false, onChange }) => {
  return (
    <input
      type="checkbox"
      name={name}
      default
      defaultChecked={defaultChecked}
      onChange={onChange}
    />
  );
};

export default CheckBox;
