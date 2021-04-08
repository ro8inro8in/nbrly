import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import withAuth from '../withAuth';
import { getUserById } from '../../helpers/getUserById';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import geodist from 'geodist';
import { useAuth } from "../../contexts/AuthContext"

const UserImg = styled.img`
  width: 15em;
  height: 15em;
  border-radius: 50%;
  object-fit: cover;
`;

const UserCard = styled.div`
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditProfileLink = styled(Link)`
  background: #ffd74b;
  padding: 0.4em;
  font-weight: bold;
`;

const SmallHeading = styled.p`
  color: #ffb800;
  font-weight: bold;
  font-size: 0.9em;
`;

const ProfileText = styled.p``;

const UserBio = styled.div`
  padding: 2em 10em;
  @media (max-width: 768px) {
    padding: 2em 4em;
  }
`;

const Profile = ({ geolocation, updateLocation, uid }) => {
  const initialState = {
    profileImage: '../images/profileplaceholder.png',
    name: 'name',
    aboutMe: 'about',
    interests: 'interests',
    age: 0,
    distance: 0,
  };

  const [userData, setUserData] = useState(initialState);
  const { userID } = useParams();
  const { profileImage, name, aboutMe, interests, age, distance } = userData;
  const { currentUser } = useAuth();
  const isThisUser  = currentUser.uid === userID;
  

  useEffect(() => {
    updateLocation();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const userDoc = await getUserById(userID);
      if (!userDoc.exists) {
        alert('User not found');
      } else {
        const {
          firstName,
          lastName,
          aboutMe,
          interests,
          age,
          profileImage,
          latitude,
          longitude,
        } = userDoc.data();
        const interestsString = interests.join(', ');
        const distance = geodist(geolocation, { latitude, longitude });
        setUserData((prev) => {
          return {
            ...prev,
            profileImage,
            name: `${firstName} ${lastName}`,
            aboutMe,
            interests: interestsString,
            age,
            distance,
          };
        });
      }
    };

    fetchData();
  }, [userID]);

  return (
    <>
      <UserCard>
        <UserImg src={profileImage} alt="user" />

        <h1>{name}</h1>
        {isThisUser && <EditProfileLink>Edit Profile</EditProfileLink>}
        {!isThisUser && (
          <SmallHeading>
            {' '}
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {`< ${distance} mi.`}
          </SmallHeading>
        )}
      </UserCard>

      <UserBio>
        <SmallHeading>About</SmallHeading>
        <ProfileText> {aboutMe} </ProfileText>

        <SmallHeading>Interests</SmallHeading>
        <ProfileText> {interests} </ProfileText>

        <SmallHeading>Age</SmallHeading>
        <ProfileText> {age} </ProfileText>
      </UserBio>
    </>
  );
};

export default withAuth(Profile);
