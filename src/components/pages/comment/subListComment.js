import React from "react";
import styled from "styled-components";
import InfoComment from "./infoComment";

const SubListComment = ({ item, handlerVote, idSelected }) => {
  return (
    <Container>
      <div className="wrap-image-sub">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="avatar"
        />
      </div>
      <div className="wrap-comment-sub">
        <InfoComment
          item={item}
          handlerVote={handlerVote}
          idSelected={idSelected}
        />
      </div>
    </Container>
  );
};

export default SubListComment;

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;

  .wrap-comment-sub {
    margin-left: 15px;
  }
  .wrap-image-sub {
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
`;
