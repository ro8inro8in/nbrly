import React, { useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
// import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import CheckBox from "../CheckBox";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  
`;
const ImgContainer = styled.div`
  width: 50%;
  padding: 50px;
  // border: 1px solid red;
`;
const FormContainer = styled.div`
  width: 50%;
  
`;

const Banner = styled.div`
  display: flex;
  width: 50%;
  // border: 1px solid red;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  // padding: 10%;
  margin: auto;
  height: 100%;
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

const ImgIcon = styled.img`
  display: flex;
  width: 81px;
  height: 91px;

  top: 0px;
  @media screen and (max-width: 960px) {
    left: 300px;
  }
  @media screen and (max-width: 460px) {
    left: 160px;
  }
`;
const ProfileImg = styled.img`
  width: 100%;
`;

const Button = styled.button`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  max-width: 330px;
  margin-top: 20px;
  background: #ffb800;
  border: 0.5px solid #000000;
  cursor: pointer;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%);
`;

const SignUp = () => {
  const initialState = {
    fields: {
      firstName: "",
      lastName: "",
      email: "",
      confrimEmail: "",
      password: "",
      confirmPassword: "",
      aboutMe: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(fields.email, fields.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  const handleFieldChange = (event) => {
    console.log("gin");
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <LoginForm>
      <Banner>
        <ImgIcon src="../images/Mess3.png" alt="navbar-logo" />
        <Header>NBRLY</Header>
      </Banner>
      <MainContainer>
        <ImgContainer>
          <ProfileImg
            src="../images/profileplaceholder.png"
            alt="profile-picture"
          />
          <Button onClick={handleSubmit} className="btn-lg btn-block">
            Upload Image
          </Button>
        </ImgContainer>

        <FormContainer>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              name="FirstName"
              type="FirstName"
              placeholder="First Name"
              value={fields.firstName}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              name="lastName"
              type="lastName"
              placeholder="Last Name"
              value={fields.lastName}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>Username</Label>
            <Input
              name="email"
              type="email"
              placeholder="Email / Username"
              value={fields.email}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Confirm Email</Label>
            <Input
              name="confrimEmail"
              type="confrimEmail"
              placeholder="Confrim Email"
              value={fields.confrimEmail}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="password"
              value={fields.password}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Confim Password</Label>
            <Input
              name="confirmPassword"
              type="confirmPassword"
              placeholder="Confirm Password"
              value={fields.confirmPassword}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
        </FormContainer>
      </MainContainer>

      <Label>Interests</Label>
      <CheckBox />

      <Label>About Me</Label>
      <Input
        name="aboutMe"
        style={{ width: "100%", height: "100%" }}
        type="textarea"
        placeholder="About Me"
        value={fields.aboutMe}
        onChange={handleFieldChange}
      ></Input>
      <Button onClick={handleSubmit} className="btn-lg btn-block">
        Create Profile
      </Button>

      {/* <Link to="/Signup"> */}
    </LoginForm>
  );
};

export default SignUp;
