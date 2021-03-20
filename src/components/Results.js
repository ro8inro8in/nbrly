import ResultItem from './ResultItem';
import styled from 'styled-components';
import users from '../lib/mock_user_data.json';

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

const Results = () => {
  const searchResults = users.map((user) => {
    return (
      <ResultItem
        key={user.id}
        userID={user.id}
        pic={user.image}
        name={`${user.first_name} ${user.last_name}`}
        location={`${user.longitude}, ${user.latitude}`}
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
