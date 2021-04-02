import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import withAuth from "../withAuth";

const UserImg = styled.img`
  width: 15em;
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

const Profile = ({test}) => {
  console.log({test})
  return (
    <>
      <UserCard>
        <UserImg src="../images/profileplaceholder.png" alt="user" />

        <h1>Name</h1>
        <EditProfileLink>Edit Profile</EditProfileLink>
      </UserCard>

      <UserBio>
        <SmallHeading>About</SmallHeading>
        <ProfileText> Lorem Ipsum </ProfileText>

        <SmallHeading>Interests</SmallHeading>
        <ProfileText> Lorem Ipsum </ProfileText>

        <SmallHeading>Age</SmallHeading>
        <ProfileText> Lorem Ipsum </ProfileText>

        <SmallHeading>Location</SmallHeading>
        <ProfileText> Lorem Ipsum </ProfileText>
      </UserBio>
    </>
  );
};

export default withAuth(Profile);
