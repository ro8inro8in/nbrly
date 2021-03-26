/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import 'firebase/auth';
import interests from '../../lib/interests';
import { FormGroup, Input } from 'reactstrap';
import CheckBox from '../CheckBox';
import ErrorMessage from '../ErrorMessage';
import {
  LoginForm,
  Banner,
  ImgIcon,
  MainContainer,
  UploadImageContainer,
  ProfileImg,
  CustomFileUpload,
  FormContainer,
  Header,
  InterestsWrap,
  CheckboxesWrap,
  Label,
  Subheading,
  TextArea,
  Button,
} from '../../styles/SignUpStyles.js';

import { createUser } from './helpers/databaseRequests.js';

const geofire = require('geofire-common');

const SignUp = ({ geolocation, logIn }) => {
  const initialState = {
    fields: {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      aboutMe: '',
    },
    interestsSelectors: interests.map((interest) => {
      return { value: interest, isChecked: false };
    }),
    selectedFile: null,
    imagePreview: '../images/profileplaceholder.png',
    errors: {
      firstName: false,
      lastName: false,
      age: false,
      email: false,
      confirmEmail: false,
      password: false,
      confirmPassword: false,
      aboutMe: false,
      interests: false,
      emailsMismatch: false,
      passwordsMismatch: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [interestsSelectors, setInterestsSelectors] = useState(
    initialState.interestsSelectors
  );
  const [selectedFile, setSelectedFile] = useState(initialState.selectedFile);
  const [imagePreview, setImagePreview] = useState(initialState.imagePreview);
  const [errors, setErrors] = useState(initialState.errors);
  const errorMessages = {
    blank: 'Field cannot be blank',
    checkboxes: 'Please tick at least one',
    emailMatch: `Emails don't match`,
    passwordMatch: `Passwords don't match`,
  };
  // tempporary fix to handle lack of location data
  let hash;
  if (geolocation) {
    hash = geofire.geohashForLocation([
      geolocation.latitude,
      geolocation.longitude,
    ]);
  }

  const validateForm = (userInterests) => {
    let isFormValid = true;
    const values = {
      interests: userInterests.length ? false : true,
      emailsMismatch: fields.email !== fields.confirmEmail,
      passwordsMismatch: fields.password !== fields.confirmPassword,
    };

    for (const field in fields) {
      if (!fields[field]) {
        values[field] = true;
      }
    }

    for (const value in values) {
      if (values[value]) {
        isFormValid = false;
      }
    }
    setErrors((errors) => ({ ...errors, ...values }));
    return isFormValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(initialState.errors);
    const userInterests = [];
    interestsSelectors.forEach((interest) => {
      if (interest.isChecked) {
        userInterests.push(interest.value);
      }
    });
    const valid = validateForm(userInterests);
    if (valid) {
      const profileData = {
        firstName: fields.firstName,
        lastName: fields.lastName,
        age: fields.age,
        aboutMe: fields.aboutMe,
        interests: userInterests,
        geohash: hash,
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
      };
      createUser(profileData, selectedFile, fields.email, fields.password);
    }
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleBoxChange = (event) => {
    const { name, defaultChecked } = event.target;

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

  return (
    <LoginForm onSubmit={handleSubmit}>
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
              style={{ display: 'none' }}
              type="file"
              accept="image/png, image/jpeg"
              onChange={fileSelectedHandler}
            />
          </CustomFileUpload>
        </UploadImageContainer>

        <FormContainer>
          <FormGroup>
            <Label htmlFor="firstname">First Name</Label>
            {errors.firstName && <ErrorMessage message={errorMessages.blank} />}
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
            {errors.lastName && <ErrorMessage message={errorMessages.blank} />}
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
            {errors.age && <ErrorMessage message={errorMessages.blank} />}
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
            {errors.email && <ErrorMessage message={errorMessages.blank} />}
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
            {errors.confirmEmail && (
              <ErrorMessage message={errorMessages.blank} />
            )}
            {errors.emailsMismatch && (
              <ErrorMessage message={errorMessages.emailMatch} />
            )}
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
            {errors.password && <ErrorMessage message={errorMessages.blank} />}
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
            {errors.confirmPassword && (
              <ErrorMessage message={errorMessages.blank} />
            )}
            {errors.passwordsMismatch && (
              <ErrorMessage message={errorMessages.passwordMatch} />
            )}
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

      <Subheading>
        Interests
        {errors.interests && (
          <ErrorMessage message={errorMessages.checkboxes} />
        )}
      </Subheading>

      <InterestsWrap>
        <CheckboxesWrap>
          {interests.map((interest) => {
            return (
              <CheckBox
                key={interest}
                name={interest}
                onChange={handleBoxChange}
                defaultChecked={
                  interestsSelectors.find((item) => item.value === interest)
                    .isChecked
                }
              />
            );
          })}
        </CheckboxesWrap>
      </InterestsWrap>

      <Subheading>
        About Me
        {errors.aboutMe && <ErrorMessage message={errorMessages.blank} />}
      </Subheading>

      <TextArea
        name="aboutMe"
        placeholder="Introduce yourself!"
        value={fields.aboutMe}
        onChange={handleFieldChange}
      ></TextArea>
      <Button type="submit">Create Profile</Button>

      {/* <Link to="/Signup"> */}
    </LoginForm>
  );
};

export default SignUp;
