import React from "react";
import styled from "styled-components";
// import { DropdownButton, Dropdown } from "react-bootstrap";

const DropMenuWrap= styled.div`

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

const DropDown = () => {
  return (
    <>
    <DropMenuWrap>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">Drink</option>
        <option value="2">Drink Hard</option>
        <option value="3">Drink Harder</option>
        <option value="3">Drink Hard With A Vengeance</option>
      </select>
      </DropMenuWrap>
    </>
  );
};

export default DropDown;
