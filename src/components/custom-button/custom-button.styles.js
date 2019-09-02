import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  border: none;

  &:hover {
    background-color: black;
    color: white;
    opacity: 0.85;
    border: none;
  }
`;

const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
//can create else if within styled elements instead of in compenent element
const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInButtonStyles;
  } else if (props.inverted) {
    return invertedButtonStyles;
  } else {
    return buttonStyles;
  }
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  border: none;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
