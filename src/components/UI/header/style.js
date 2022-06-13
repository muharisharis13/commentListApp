import styled from "styled-components";
import * as color from "components/UI/styles/color";

export const Container = styled.header`
  background-color: ${color.BROWN};
  color: ${color.GRAY_LIGHT};
  height: 50px;
  display: flex;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Title = styled.div`
  /* flex: 1; */

  font-weight: 900;
  @media (orientation: portrait) {
    flex: 1;
  }
`;

export const Search = styled.div`
  flex: 1;
  padding: 0px 30px;

  @media (orientation: portrait) {
    display: none;
  }
`;

export const Navbar = styled.div`
  /* flex: 1; */
  /* @media (orientation: portrait) {
    display: none;
  } */
`;

export const ButtonBurger = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  display: none;

  @media (orientation: portrait) {
    display: unset;
  }
`;
