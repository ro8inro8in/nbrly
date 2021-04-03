import React from "react";
import styled from "styled-components";
// import { DropdownButton, Dropdown } from "react-bootstrap";
import interests from "../lib/interests";

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

const ActivitySelect = ({ handleActivitySelect }) => {
  // let value = 0;
  const options = interests.map((interest) => {
    // value = +1;
    return (
      <option key={interest} value={interest}>
        {interest}
      </option>
    );
  });

  return (
    <>
      <DropMenuWrap>
        <select
          onChange={(event) => handleActivitySelect(event)}
          name="user-activity"
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue>Choose an activity</option>
          {options}
        </select>
      </DropMenuWrap>
    </>
  );
};

export default ActivitySelect;
