import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  margin: 5px 15px 5px 3px;
`;

const Input = styled.input`
  margin: 5px;
  justify-self: start;
`;

const CheckBox = ({ name, defaultChecked = false, onChange }) => {
  return (
    <>
      <Input
        type="checkbox"
        name={name}
        default
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <Label>{name}</Label>
    </>
  );
};

export default CheckBox;
