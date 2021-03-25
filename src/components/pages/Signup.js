import React, { useState } from "react";
import styled from "styled-components";
import { FormGroup, Input } from "reactstrap";
// import { Link } from "react-router-dom";
import "firebase/auth";
import CheckBox from "../CheckBox";
import { firebase, db } from "../../index";
import interests from "../../lib/interests";
const geofire = require("geofire-common");

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 700px) {
    padding: 3px;
  } ;
`;

const Banner = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  @media screen and (max-width: 700px) {
    height: 85px;
  } ;
`;

const ImgIcon = styled.img`
  display: flex;
  width: 91px;
  height: 91px;
  top: 0px;
  @media screen and (max-width: 960px) {
    left: 300px;
  }
  @media screen and (max-width: 460px) {
    left: 160px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 40px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  } ;
`;

const UploadImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 20px;
  margin-left: 5rem;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
    padding: 5px;
    margin-bottom: 15px;
  } ;
`;

const ProfileImg = styled.img`
  width: 360px;
  height: 360px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 30px;
  border: 5px solid white;
  @media screen and (max-width: 700px) {
    width: 180px;
    height: 180px;
    margin-bottom: 10px;
  } ;
`;

const CustomFileUpload = styled.label`
  width: 230px;
  height: 52px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  background: #ffb800;
  border: 0.5px solid #000000;
  border-radius: 5px;
  padding: 3px 0;
  cursor: pointer;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%);
  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
    width: 180px;
    height: 40px;
  } ;
`;

const FormContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 700px) {
    width: 90%;
  } ;
`;

const Header = styled.div`
  color: white;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  left: 706px;
  top: 13px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const InterestsDiv = styled.div`
  width: 100%;
  background: white;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const CheckboxesWrap = styled.div`
  display: grid;
  width: calc((30px + 140px) *5)
  margin: 0 auto;
  grid-template-columns: repeat(5, 30px 140px);
  justify-items: start;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 30px 140px);
    max-width: 100%;
    font-size: 0.8rem;
  } ;
`;

const Label = styled.label``;

const SubHeading = styled.h5`
  align-self: flex-start;
  padding: 10px 0px 10px 0px;
  @media screen and (max-width: 700px) {
    padding-left: 10px;
  } ;
`;

const Button = styled.button`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  max-width: 330px;
  margin-top: 20px;
  margin-bottom: 50px;
  height: 54px;
  background: #ffb800;
  border: 0.5px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%);
  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
    width: 200px;
  } ;
`;

const SignUp = ({ geolocation, logIn }) => {
  const initialState = {
    fields: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      aboutMe: "",
    },
    interestsSelectors: interests.map((interest) => {
      return { value: interest, isChecked: false };
    }),
    selectedFile: null,
    imagePreview: "",
  };

  const [fields, setFields] = useState(initialState.fields);
  const [interestsSelectors, setInterestsSelectors] = useState(
    initialState.interestsSelectors
  );
  const [selectedFile, setSelectedFile] = useState(initialState.selectedFile);
  const [imagePreview, setImagePreview] = useState(initialState.imagePreview);

  // tempporary fix to handle lack of location data
  let hash;
  if (geolocation) {
    hash = geofire.geohashForLocation([
      geolocation.latitude,
      geolocation.longitude,
    ]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInterests = [];
    interestsSelectors.forEach((interest) => {
      if (interest.isChecked) {
        userInterests.push(interest.value);
      }
    });
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(fields.email, fields.password);
      const uid = userCredential.user.uid;
      const storageRef = firebase.storage().ref();
      const userPicRef = storageRef.child(`${uid}-image.jpg`);
      await userPicRef.put(selectedFile);
      const imageURL = await userPicRef.getDownloadURL();
      await firebase.firestore().collection("users").doc(uid).set({
        firstName: fields.firstName,
        lastName: fields.lastName,
        age: fields.age,
        aboutMe: fields.aboutMe,
        interests: userInterests,
        profileImage: imageURL,
        geohash: hash,
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
      });
      alert("Profile successfully created.");
      onclick = { logIn };
      window.location.href = "/Home";
    } catch (error) {
      alert("Sorry, something went wrong. Please try again.");

      console.log(error);
    }
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleBoxChange = (event) => {
    const { name, defaultChecked } = event.target;
    console.log(interestsSelectors);
    if (defaultChecked) {
      setInterestsSelectors((items) => {
        items.find((item) => item.value === name).isChecked = false;
        return [...items];
      });
    } else {
      setInterestsSelectors((items) => {
        items.find((item) => item.value === name).isChecked = true;
        return [...items];
      });
    }
  };

  const fileSelectedHandler = (event) => {
    setImagePreview(URL.createObjectURL(event.target.files[0]));
    setSelectedFile(event.target.files[0]);
  };

  const checkboxes = interests.map((interest) => {
    return (
      <CheckBox
        key={interest}
        name={interest}
        onChange={handleBoxChange}
        defaultChecked={
          interestsSelectors.find((item) => item.value === interest).isChecked
        }
      />
    );
  });

  return (
    <LoginForm>
      <Banner>
        <ImgIcon src="../images/Mess3.png" alt="navbar-logo" />
        <Header>NBRLY</Header>
      </Banner>
      <MainContainer>
        <UploadImageContainer>
          <ProfileImg src={imagePreview} />
          <CustomFileUpload>
            Choose image
            <input
              style={{ display: "none" }}
              type="file"
              accept="image/png, image/jpeg"
              onChange={fileSelectedHandler}
            />
          </CustomFileUpload>
        </UploadImageContainer>

        <FormContainer>
          <FormGroup>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              name="firstName"
              type="text"
              placeholder="What should people call you?"
              value={fields.firstName}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              name="lastName"
              placeholder="Your family name"
              value={fields.lastName}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              placeholder="36"
              value={fields.age}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="joe@bloggs.com"
              value={fields.email}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirm-email">Confirm Email</Label>
            <Input
              id="confirm-email"
              name="confirmEmail"
              type="email"
              placeholder="Please type your email again"
              value={fields.confirmEmail}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Choose a strong password"
              value={fields.password}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="Please type your password again"
              value={fields.confirmPassword}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
        </FormContainer>
      </MainContainer>

      <SubHeading>Interests</SubHeading>
      <InterestsDiv>
        <CheckboxesWrap>{checkboxes}</CheckboxesWrap>
      </InterestsDiv>

      <SubHeading>About Me</SubHeading>
      <Input
        name="aboutMe"
        style={{ width: "100%", height: "100%", marginBottom: "30px" }}
        type="textarea"
        placeholder="Introduce yourself!"
        value={fields.aboutMe}
        onChange={handleFieldChange}
      ></Input>
      <Button onClick={handleSubmit}>Create Profile</Button>

      {/* <Link to="/Signup"> */}
    </LoginForm>
  );
};

export default SignUp;
