import React from "react";
import * as styles from "./styles";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <styles.Container className="wrap">
      <styles.Input type="text" placeholder="Search" className="search" />
      <FaSearch cursor="pointer" />
    </styles.Container>
  );
};

export default Search;
