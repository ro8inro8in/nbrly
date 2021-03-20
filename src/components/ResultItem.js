import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pic from '../images/results-item-pic-placeholder.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import messageBubbles from '../images/message-bubbles.svg';

const ItemWrap = styled.div`
  border: 1px solid black;
  height: 160px;
  width: 640px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 0.5fr;
  align-items: end;
`;

const UserPic = styled.img`
  grid-row: 1/4;
  align-self: center;
`;

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 25px;

`;
const UserName = styled.h3`
  margin-bottom: 10px;
`;

const Icon = styled(FontAwesomeIcon)``;

const UserLocation = styled.p`
  margin: 0;
`;

const ProfileLink = styled(Link)`
  align-self: start;
  margin-left: 25px;
`;

const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: start;
  grid-column: 3/4;
`;

const MessageBubbles = styled.img`
  width: 60px;
  margin-bottom: 10px;
  grid-row: 1 /2;
  grid-column: 3/4;
`;

const ContactLink = styled.a`
  align-self: start;
`;

const ResultItem = () => {
  return (
    <ItemWrap>
      <UserPic src={pic} alt="user's profile picture" />
      <UserInfoWrap>
        <UserName>Polly Pocket</UserName>
        <UserLocation>
          <Icon icon={faMapMarkerAlt} /> Less than a mile
        </UserLocation>
      </UserInfoWrap>
      <ProfileLink>View Profile</ProfileLink>

      <MessageBubbles src={messageBubbles} />
      <ContactLink>Contact</ContactLink>
    </ItemWrap>
  );
};

export default ResultItem;
