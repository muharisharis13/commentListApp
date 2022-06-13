import React from "react";
import * as Styles from "./style";
import SearchComponent from "../search";
import NavbarUI from "../nav";
import { FaBars } from "react-icons/fa";
import { connect } from "react-redux";
import { SET_GET_BOOL_NAV } from "reduxs/action";

const Header = (props) => {
  const { setBoolNav } = props;
  return (
    <Styles.Container>
      <Styles.Wrap className="container">
        <Styles.Title>Forum Anak IT</Styles.Title>
        <Styles.Search>
          <SearchComponent />
        </Styles.Search>
        <Styles.Navbar>
          <NavbarUI />
        </Styles.Navbar>
        <Styles.ButtonBurger onClick={() => setBoolNav(true)}>
          <FaBars />
        </Styles.ButtonBurger>
      </Styles.Wrap>
    </Styles.Container>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    setBoolNav: (payload) => dispatch(SET_GET_BOOL_NAV(payload)),
  };
};

const mapsStateProps = (state) => {
  return {
    boolNav: state.boolNav,
  };
};

export default connect(mapsStateProps, mapDispatchProps)(Header);
