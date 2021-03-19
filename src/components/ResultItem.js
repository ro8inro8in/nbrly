import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pic from '../images/results-item-pic-placeholder.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import messageBubbles from '../images/message-bubbles.svg';

const ItemWrap = styled.div`
  border: 1px solid purple;
  height: 160px;
  width: 786px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: end;
`;

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;


const UserPic = styled.img`
  grid-row: 1/4;
  align-self: center;
`;

const UserName = styled.h3`

  
`;

const Icon = styled(FontAwesomeIcon)``;

const UserLocation = styled.p`


`;

const ProfileLink = styled(Link)`

`;


const MessageBubbles = styled.img`
  grid-column: 3/4;
  grid-row: 2/3;
`;

const ContactLink = styled.a`
  grid-column: 3/4;
  grid-row: 3/4;
`;

const ResultItem = () => {
  return ( 
    <ItemWrap>
      <UserPic src={pic} alt="user's profile picture" />
      <UserInfoWrap>
        <UserName>Polly Pocket</UserName>
        <UserLocation><Icon icon={faMapMarkerAlt} /> Less than a mile</UserLocation>
        <ProfileLink>View Profile</ProfileLink>
      </UserInfoWrap>
      <MessageBubbles src={messageBubbles} />
      <ContactLink>Contact</ContactLink>
    </ItemWrap> );
}
 
export default ResultItem;


