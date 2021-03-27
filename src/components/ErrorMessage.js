import styled from 'styled-components';

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 0 0 0 2px;
  justify-self: flex-start;
  font-weight: 300;
 
`;

const ErrorMessage = ({message}) => {
  return ( <StyledErrorMessage>{message}</StyledErrorMessage>);
}
 
export default ErrorMessage;