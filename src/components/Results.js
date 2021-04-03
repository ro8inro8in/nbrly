import ResultItem from "./ResultItem";
import styled from "styled-components";
import users from "../lib/mock_user_data.json";
// import "./images/profileplaceholder.png";

const ResultsWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultsText = styled.p`
  color: #ffb800;
  font-size: 1.2rem;
  font-weight: 600;

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const Results = ({ orderedMatches }) => {
  console.log(orderedMatches);
  const searchResults = orderedMatches.map((user) => {
    return (
      <ResultItem
        key={`${user.firstName} ${user.lastName}`}
        userID={`${user.firstName} ${user.lastName}`}
        name={`${user.firstName} ${user.lastName}`}
        location={`< ${user.distance} mi.`}
        pic="./images/profileplaceholder.png"
      />
    );
  });

  return (
    <>
      <ResultsWrap>
        <ResultsText>People near you also interested in [activity]</ResultsText>
        {searchResults}
      </ResultsWrap>
    </>
  );
};

export default Results;
