import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

//to add more styles to more than one element create styles using css``
const OptionContainerStyles = css`
  padding: 0px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-top: -25px;
`;

//to use components in styles add them as such...styled(Component)``
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
`;

//string interpelation used to add styles to more than one element
export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
