import styled from "styled-components";
import * as color from "components/UI/styles/color";

export const Container = styled.div`
  background-color: ${color.GRAY};
  display: flex;
  height: 30px;
  overflow: hidden;
  border-radius: 2px;
  align-items: center;
  transition: 250ms;
  color: ${color.BROWN_DARK};
  padding: 0 0.75rem;
  &:focus-within {
    background-color: ${color.GRAY_LIGHT};
  }
  @media (orientation: portrait) {
    width: 100%;
  }
`;

export const Input = styled.input`
  height: 30px;
  flex-grow: 1;
  border: none;
  background-color: transparent;
  &::placeholder {
    color: ${color.BROWN_DARK};
  }
  &:focus {
    outline: none;
  }
`;
