import React from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid red;
`;

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  padding: 10%;
  height: 100%;
`;

const Header = styled.div`
  color: white;
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 50%;
  //border: 1px solid red;
`;
const ImgIcon = styled.img`
  display: flex;
  justify-content: center;

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

const Button1 = styled.div`

  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
  1px 1px 0 #000;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%); 
  margin-bottom: 10px; 
  width: 50%;
  // max-width: 330px;
  padding: 15px;s
  height: 100%;
  background-color: #FFD74B;
  border: 1px solid #000000;
  cursor: pointer;
  text-align: center
`;
const Button2 = styled.div`

  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
  1px 1px 0 #000;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%); 
  // margin: 10px; 
   width: 50%;
  // max-width: 330px;
  padding: 15px;s
  height: 100%;
  background-color: #FFD74B;
  border: 1px solid #000000;
  cursor: pointer;
  text-align: center
`;

const LoginPage = () => {
  return (
    <LoginForm>
      <FormContainer>
        <Banner>
          <Header>NBRLY</Header>
          <ImgIcon src="../images/Mess3.png" alt="navbar-logo" />
        </Banner>
        <h2>
          Connect with like-minded people in your vicinity for sports,
          nightlife, and everything in between
        </h2>
        <FormWrapper>
          <FormGroup>
            <Label>Username</Label>
            <Input type="email" placeholder="Email / Username"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="password"></Input>
          </FormGroup>
          </FormWrapper>
          <ButtonWrapper>
          <Button1 className="btn-lg btn-block">Log in</Button1>
          <Link to="/Signup">
            <Button2 className="btn-lg btn-block">Get Started</Button2>
          </Link>
          </ButtonWrapper>
        
      </FormContainer>
    </LoginForm>
  );
};

export default LoginPage;
