import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ActivitySelect from "../ActivitySelect";
import Results from "../Results";
import withAuth from "../withAuth";

const TitleHomeWrap = styled.div`

height: 80px:
margin-top -80px;
padding-top: 80px;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
  text-align: center;
}
`;

const Home = ({
  geolocation,
  updateLocation,
  getSearchResults,
  orderedMatches,
}) => {
  console.log({ geolocation });

  useEffect(() => {
    updateLocation();
  }, []);

const [selectedActivity, setSelectedActivity]=useState("Choose an activity")

const handleActivitySelect = (event) => {
  const {value} = event.target
  setSelectedActivity(value)
  getSearchResults(value)
}

  return (
    <>
      <TitleHomeWrap>
        <h2>What do you want to do today?</h2>
      </TitleHomeWrap>
      <ActivitySelect getSearchResults={getSearchResults} handleActivitySelect={handleActivitySelect} />
      <Results orderedMatches={orderedMatches} selectedActivity={selectedActivity} />
    </>
  );
};

export default withAuth(Home);
