import React from "react";
import styled from "styled-components";
import * as color from "components/UI/styles/color";
import Left from "components/pages/comment/Left";
import Right from "components/pages/comment/right";

const CommentsContainer = () => {
  return (
    <Container className="container">
      <div className="left">
        <Left />
      </div>
      <div className="right">
        <Right />
      </div>
    </Container>
  );
};

export default CommentsContainer;

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  min-height: 100vh;

  .left {
    flex: 1;
    border-right: thin solid ${color.GRAY};
  }
  .right {
    flex: 0.4;
  }

  padding-bottom: 20px;
  @media (orientation: portrait) {
    flex-direction: column;

    .left {
      border-right: none;
    }
  }
`;
