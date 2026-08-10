import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: #6B8AC680;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const StyledSpinnerWrapper = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
`
