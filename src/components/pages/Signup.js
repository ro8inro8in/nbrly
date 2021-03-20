import React, { useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
// import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";


const LoginForm = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 10%;
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
  width: 186px;
  left: 706px;
  top: 13px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const ImgIcon = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 81px;
  height: 91px;
  left: 50%;
  top: 0px;
  @media screen and (max-width: 960px) {
    left: 300px;
  }
  @media screen and (max-width: 460px) {
    left: 160px;
  }
`;

const Button = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
  1px 1px 0 #000;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%);  
  width: 100%;
  max-width: 330px;
  padding: 15px;s
  margin: auto;
  height: 100%;
  background-color: red;
  border: 1px solid #000000;
  cursor: pointer;
  text-align: center
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
    firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });

}

  const handleFieldChange = (event) => {
    console.log("gin");
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <LoginForm>
      <Form className="Login-form">
        <ImgIcon>
          <img src="../images/Mess3.png" alt="navbar-logo" />
        </ImgIcon>
        <Header>NBRLY</Header>
        <h2>Give me all your bank details</h2>
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

        <Button onClick={handleSubmit}className="btn-lg btn-block">Create Profile</Button>
        {/* <Link to="/Signup"> */}
      </Form>
    </LoginForm>
  );
};

export default SignUp;
