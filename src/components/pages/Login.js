import React, { useState } from "react";
import styled from "styled-components";
import { FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
  background-color: #ppb800;
`;

const TopContainer = styled.div`
  padding: 7em;
  @media (max-width: 768px) {
    padding: 4em;
  }
`;

const FormWrapper = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    padding-top: 4em;
    padding-bottom: 4em;
  }
`;

const Header = styled.div`
  color: white;
  font-size: 3.5rem;
  align-items: center;
  text-align: center;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImgIcon = styled.img`
  width: 91px;
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

const Button = styled.button`
  color: white;
  font-size: 1.7rem;
  font-weight: bold;

  background: #ffb800;
  border: 0.5px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%);
`;

const GetStartedDiv = styled.div`
  display: flex;
  align-items: center;
`;

const LogInButton = styled.button`
  color: white;
  font-size: 1rem;
  font-weight: bold;

  background: #ffb800;
  border: 0.5px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%);
`;

const LoginText = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const LoginPage = ({ handleLogin }) => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <FormContainer>
      <TopContainer>
        <Banner>
          <ImgIcon src="../images/Mess3.png" alt="navbar-logo" />
          <Header>NBRLY</Header>
        </Banner>
        <LoginText>
          Connect with like-minded people in your vicinity for sports,
          nightlife, and everything in between
        </LoginText>
      </TopContainer>
      <BottomContainer>
        <GetStartedDiv>
          <Link to="/Signup">
            <Button className="btn-lg btn-block">Get Started</Button>
          </Link>
        </GetStartedDiv>
        <FormWrapper>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              id="password"
              placeholder="Password"
              name="password"
              type="password"
              value={fields.password}
              onChange={handleFieldChange}
            ></Input>
          </FormGroup>

          <LogInButton
            className="btn-sml btn-block"
            onClick={() => handleLogin(fields.email, fields.password)}
          >
            Log in
          </LogInButton>
        </FormWrapper>
      </BottomContainer>
    </FormContainer>
  );
};

export default LoginPage;
