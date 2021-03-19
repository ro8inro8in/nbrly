import React from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

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
  background-color: #FFD74B;
  border: 1px solid #000000;
  cursor: pointer;
  text-align: center
`;

const LoginPage = () => {
  return (
    <LoginForm>
      <Form className="Login-form">
        <ImgIcon>
          <img src="../images/Mess3.png" alt="navbar-logo" />
        </ImgIcon>
        <Header>NBRLY</Header>
        <h2>
          Connect with like-minded people in your vicinity for sports,
          nightlife, and everything in between
        </h2>

        <FormGroup>
          <Label>Username</Label>
          <Input type="email" placeholder="Email / Username"></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="password"></Input>
        </FormGroup>

        <Button className="btn-lg btn-block">Log in</Button>
        <Link to="/Signup">
          <Button className="btn-lg btn-block">Get Started</Button>
        </Link>
      </Form>
    </LoginForm>
  );
};

export default LoginPage;
