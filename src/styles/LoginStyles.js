import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #ppb800;
  max-width: 960px;
`;

export const TopContainer = styled.div`
  padding: 7em;
  @media (max-width: 768px) {
    padding: 4em;
  }
`;

export const FormWrapper = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 60%;
    padding-top: 4em;
    padding-bottom: 4em;
  }
`;

export const Header = styled.div`
  color: white;
  font-size: 3.5rem;
  align-items: center;
  text-align: center;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgIcon = styled.img`
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

export const Button = styled.button`
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

export const GetStartedDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const LogInButton = styled.button`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  height: 35px;
  background: #ffb800;
  border: 0.5px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;
  text-align: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  box-shadow: 0 8px 16px rgb(38 38 48 / 20%);
`;

export const LoginText = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;