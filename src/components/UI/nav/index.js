import React, { useState } from "react";
import styled from "styled-components";
import dataNav from "./dataNav";
import * as color from "../styles/color";
import ModalLogin from "components/UI/header/ModalLogin";
import ModalRegister from "components/UI/header/ModalRegister";
import Search from "../search";
import { connect } from "react-redux";
import { SET_GET_BOOL_NAV } from "reduxs/action";

const Navbar = (props) => {
  const { boolNav, setBoolNav } = props;
  const [bool, setBool] = useState({
    login: false,
    register: false,
  });

  const onClickModalHandler = (name) => {
    if (name === "Login") {
      setBool((state) => ({
        ...state,
        login: true,
      }));
    } else if (name === "Register") {
      setBool((state) => ({
        ...state,
        register: true,
      }));
    }
  };

  return (
    <Container active={boolNav}>
      <ButtonClose onClick={() => setBoolNav(false)}>&times;</ButtonClose>
      <ContainerSearch>
        <Search />
      </ContainerSearch>
      {dataNav.map((item, idx) => (
        <ContainerDropdown style={{ position: "relative" }}>
          <NavText
            onClick={!item.sub ? () => onClickModalHandler(item.name) : null}
            key={idx}
          >
            {item.name}
          </NavText>
          {item.sub && (
            <DropDownContent>
              {item.sub.map((sub, idxSub) => (
                <TextSub key={idxSub}>{sub.name}</TextSub>
              ))}
            </DropDownContent>
          )}
        </ContainerDropdown>
      ))}

      {/* MODAL ====== */}
      <ModalLogin
        show={bool.login}
        onHide={() => setBool((state) => ({ ...state, login: false }))}
      />
      <ModalRegister
        show={bool.register}
        onHide={() => setBool((state) => ({ ...state, register: false }))}
      />
    </Container>
  );
};

const mapStateProps = (state) => {
  return {
    boolNav: state.boolNav,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    setBoolNav: (payload) => dispatch(SET_GET_BOOL_NAV(payload)),
  };
};
export default connect(mapStateProps, mapDispatchProps)(Navbar);

const ContainerSearch = styled.div`
  display: none;
  @media (orientation: portrait) {
    display: flex;
    width: 100%;
    align-items: flex-end;
  }
`;
const ButtonClose = styled.button`
  display: none;
  @media (orientation: portrait) {
    background-color: ${color.RED};
    color: ${color.GRAY_LIGHT};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    font-size: 17pt;
    border-radius: 3px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: auto;
  @media (orientation: portrait) {
    flex-direction: column;
    width: 50vw;
    align-items: flex-end;
    padding: 0px 10px;
    position: fixed;
    top: 0;
    transition: 250ms;
    right: ${({ active }) => (active ? "0px" : "-1000px")};
    background-color: ${color.BLACK};
    height: 100vh;
    padding-top: 20px;
  }
`;

const NavText = styled.div`
  color: ${color.GRAY_LIGHT};
  cursor: pointer;
  padding: 0px 10px;
  height: 50px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${color.BLACK};
  }
  @media (orientation: portrait) {
    &:hover {
      background-color: ${color.BLACK};
    }
  }
`;

const DropDownContent = styled.div`
  display: block;
  opacity: 0;
  position: absolute;
  transition: 250ms;
  background-color: ${color.BROWN_DARK};
  color: ${color.GRAY_LIGHT};
  min-width: 160px;
  z-index: 1;

  @media (orientation: portrait) {
    display: flex;
    flex-direction: column;
    position: unset;
    opacity: 1;
    background-color: ${color.BLACK};
    align-items: flex-end;
    margin-right: 20px;
  }
`;

const TextSub = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: ${color.GRAY_LIGHT};
  cursor: pointer;
  &:hover {
    background-color: ${color.BLACK};
  }
`;
const ContainerDropdown = styled.div`
  &:hover ${DropDownContent} {
    display: block;
    opacity: 1;
  }
  @media (orientation: portrait) {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    width: 100%;

    &:hover ${DropDownContent} {
      display: flex;
      flex-direction: column;
      position: unset;
      opacity: 1;
      background-color: ${color.BLACK};
      align-items: flex-end;
      margin-right: 20px;
    }
  }
`;
