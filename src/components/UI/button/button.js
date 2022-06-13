import React from "react";
import styled from "styled-components";
import * as color from "components/UI/styles/color";

const Button = ({ children, type, onClick, secondColor }) => {
  return (
    <ButtonStyled type={type} onClick={onClick} secondColor={secondColor}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: ${({ secondColor }) =>
    secondColor ? color.GRAY_LIGHT : color.BROWN};
  color: ${({ secondColor }) => (secondColor ? color.BROWN : color.GRAY_LIGHT)};
  cursor: pointer;
  height: 40px;
  border-radius: 3px;
  font-size: 11pt;
  min-width: 100px;

  &:hover {
    background-color: ${({ secondColor }) =>
      secondColor ? color.GRAY_LIGHT : color.BROWN};
    color: ${({ secondColor }) =>
      secondColor ? color.BROWN : color.GRAY_LIGHT};
  }
`;
