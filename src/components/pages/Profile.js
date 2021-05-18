import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import withAuth from "../withAuth";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import geodist from "geodist";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "../../styles/SignUpStyles";

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

const EditProfileLink = styled.a`
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

const Profile = ({
  geolocation,
  updateLocation,
  orderedMatches,
  thisUserProfile,
}) => {
  const initialState = {
    profileImage: "../images/profileplaceholder.png",
    name: "",
    aboutMe: "",
    interests: "",
    age: "",
    distance: "",
    email: "",
  };

  const [userData, setUserData] = useState(initialState);
  const { userID } = useParams();
  const { profileImage, name, aboutMe, interests, age, distance, email } =
    userData;
  const { currentUser } = useAuth();
  const isThisUser = currentUser.uid === userID;

  useEffect(() => {
    let user = isThisUser
      ? thisUserProfile
      : orderedMatches.find((user) => user.uid === userID);
    const {
      firstName,
      lastName,
      aboutMe,
      interests,
      age,
      profileImage,
      latitude,
      longitude,
      email,
    } = user;

    const interestsString = interests.join(", ");
    const distanceRaw = geodist(geolocation, { latitude, longitude });
    const distance = distanceRaw + 1;

    setUserData((prev) => {
      return {
        ...prev,
        profileImage,
        name: `${firstName} ${lastName}`,
        aboutMe,
        interests: interestsString,
        age,
        distance,
        email,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID]);

  useEffect(() => {
    updateLocation();
  }, [updateLocation]);

  return (
    <>
      <UserCard>
        <UserImg src={profileImage} alt="user" />

        <h1>{name}</h1>
        {isThisUser && <EditProfileLink>Edit Profile</EditProfileLink>}
        {!isThisUser && (
          <SmallHeading>
            {" "}
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {`< ${distance} mi.`}
          </SmallHeading>
        )}
      </UserCard>
      {!isThisUser && (
        <a style={{ width: "200px" }} href={`mailto: ${email}`}>
          <Button style={{ width: "200px" }}>Contact</Button>
        </a>
      )}

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
