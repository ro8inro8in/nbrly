import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  max-width: 960px;
  height: 100%;

  @media screen and (max-width: 890px) {
    width: 100%;
    padding: 3px;
  } ;
`;

export const Banner = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;

  @media screen and (max-width: 700px) {
    height: 85px;
  } ;
`;

export const ImgIcon = styled.img`
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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 40px;
  @media screen and (max-width: 890px) {
    flex-direction: column;
    align-items: center;
  } ;
`;

export const UploadImageContainer = styled.div`
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

export const ProfileImg = styled.img`
  width: 360px;
  height: 360px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 30px;
  @media screen and (min-width: 700px) and (max-width: 890px) {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 700px) {
    width: 180px;
    height: 180px;
    margin-bottom: 10px;
  } ;
`;

export const CustomFileUpload = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 50px;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
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
    width: 180px;
    height: 40px;
  } ;
`;

export const FormContainer = styled.div`
  width: 50%;

  @media screen and (min-width: 630px) and (max-width: 890px) {
    width: 620px;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  } ;
`;

export const Header = styled.div`
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

export const InterestsWrap = styled.div`
  width: 100%;
  background: white;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: 630px) and (max-width: 890px) {
    width: 620px;
  } ;
`;

export const CheckboxesWrap = styled.div`
  display: grid;
  width: calc((30px + 140px) *5)
  margin: 0 auto;
  grid-template-columns: repeat(5, 30px 140px);
  justify-items: start;

  @media screen and (min-width: 700px) and (max-width: 890px) {
    grid-template-columns: repeat(3, 30px 140px);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 30px 140px);
    font-size: 0.8rem;
  } ;
`;

export const Label = styled.label``;

export const Subheading = styled.h5`
  display: inline;
  align-self: flex-start;
  padding: 10px 0px 10px 0px;
  @media screen and (min-width: 630px) and (max-width: 890px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 700px) {
    padding-left: 10px;
  } ;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 8px;
  resize: vertical;
  &::-webkit-input-placeholder {
    transform: translateY(-30px);
  }
  @media screen and (min-width: 630px) and (max-width: 890px) {
    width: 620px;
  } ;
`;

export const Button = styled.button`
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  width: 100%;
  max-width: 330px;
  margin-top: 20px;
  margin-bottom: 50px;
  height: 52px;
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
