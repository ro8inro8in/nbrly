import React from 'react';
import styled from 'styled-components';
// import { DropdownButton, Dropdown } from "react-bootstrap";
import interests from '../lib/interests';

const DropMenuWrap = styled.div`
height: 80px:
margin-top -80px;
padding-top: 40px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;


@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
}
`;

const ActivitySelect = () => {
  let value = 0;
  const options = interests.map((interest) => {
    value = +1;
    return <option value={value}>{interest}</option>;
  });
  
  return (
    <>
      <DropMenuWrap>
        <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
          {options}
        </select>
      </DropMenuWrap>
    </>
  );
};

export default ActivitySelect;
