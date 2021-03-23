import React from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border 1px solid black;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%);
  justify-content: center;
  background-color:#ppb800;
  padding: 5%
  
  

`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  //border: 1px solid red;
  
`;

const ButtonWrapper = styled.div`
 //do not remove
`;

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10%
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
  flex-direction: row-reverse;
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

const Button = styled.button`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  padding-left: 80px;
  padding-right: 80px;
  background: #ffb800;
  border: 0.5px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%);
`;

const LoginText =styled.div`
 text-align: center;
`

const LoginPage = () => {
  return (
    <LoginForm>
      <FormContainer>
        <Banner>
          <Header>NBRLY</Header>
          <ImgIcon src="../images/Mess3.png" alt="navbar-logo" />
        </Banner>
        <LoginText>
          <h2>
          Connect with like-minded people in your <br></br> vicinity for sports,
          nightlife, and everything in between
          </h2>
          </LoginText>
        <FormWrapper>
          <FormGroup>
            <Label>Username</Label>
            <Input type="email" placeholder="Email / Username"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="password"></Input>
          </FormGroup>
          
          <ButtonWrapper>
          <Button className="btn-lg btn-block">Log in</Button>
          <Link to="/Signup">
            <Button className="btn-lg btn-block">Get Started</Button>
          </Link>
          </ButtonWrapper>
          </FormWrapper>
      </FormContainer>
    </LoginForm>
  );
};

export default LoginPage;
