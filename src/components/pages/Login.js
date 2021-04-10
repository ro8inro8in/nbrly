import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  FormContainer,
  TopContainer,
  FormWrapper,
  Header,
  Banner,
  BottomContainer,
  ImgIcon,
  Button,
  GetStartedDiv,
  LogInButton,
  LoginText,
  // Label,
} from '../../styles/LoginStyles.js';

const LoginPage = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });
  let history = useHistory();
  const { login } = useAuth();

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    // setError("");
    //setLoading(true);
    try {
      await login(fields.email, fields.password);
      history.push('/Home');
    } catch (err) {
      console.log(err);
      // setError("Please check password and email are correct!");
    }

    //setLoading(false);
  };

  return (
    <FormContainer>
      <TopContainer>
        <Banner>
          <ImgIcon src="../images/Mess3.png" alt="navbar-logo" />
          <Header>NBRLY</Header>
        </Banner>
        <LoginText>
          Connect with like-minded people in your vicinity for sports, nightlife
          and everything in between
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
            disabled={loading}
            className="btn-sml btn-block"
            onClick={handleLogin}
          >
            Log in
          </LogInButton>
        </FormWrapper>
      </BottomContainer>
    </FormContainer>
  );
};

export default LoginPage;
