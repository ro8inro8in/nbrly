import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import messageBubbles from '../images/message-bubbles.svg';

const ItemWrap = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  height: 160px;
  width: 640px;
  margin: 20px;
  padding-left: 20px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 0.5fr;
  align-items: end;

  @media screen and (max-width: 700px) {
    height: 80px;
    width: 310px;
    font-size: 0.5rem;
    padding-left: 10px;
    margin: 10px;
  }
`;

const UserPic = styled.img`
  grid-row: 1/4;
  align-self: center;
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
`;

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 1rem;
`;
const UserName = styled.h3`
  margin-bottom: 0.5rem;
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

//const Icon = styled(FontAwesomeIcon)``;

const UserLocation = styled.p`
  margin: 0;
`;

const ProfileLink = styled(Link)`
  align-self: start;
  margin-left: 1rem;
  font-weight: 600;
  color: #ffb800;
`;

const MessageBubbles = styled.img`
  width: 50%;
  margin-bottom: 10px;
  grid-row: 1 /2;
  grid-column: 3/4;
`;

const ContactLink = styled.a`
  align-self: start;
  color: #ffb800;
  font-weight: 600;
`;

const ResultItem = ({ userID, pic, name, location, email }) => {
  return (
    <ItemWrap>
      <UserPic src={pic} alt="user's profile picture" />
      <UserInfoWrap>
        <UserName>
          {name}
        </UserName>
        <UserLocation>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
        </UserLocation>
      </UserInfoWrap>
      <ProfileLink to={`/Profile/${userID}`}>View Profile</ProfileLink>

      <MessageBubbles src={messageBubbles} />
      <ContactLink href={`mailto:${email}`}>Contact</ContactLink>
    </ItemWrap>
  );
};

export default ResultItem;
