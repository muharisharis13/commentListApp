import React from "react";
import styled from "styled-components";
import InfoComment from "./infoComment";
import SubListComment from "./subListComment";

const ListComment = ({ item, handlerVote, idSelected }) => {
  return (
    <Container>
      <div className="wrap-image">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt={"avatar"}
        />
      </div>
      <div className="wrap-comment">
        <InfoComment
          item={item}
          handlerVote={handlerVote}
          idSelected={idSelected}
        />
        <div className="sub-comment" style={{ marginTop: "10px" }}>
          {item?.replies.map((itemRep, idx) => (
            <SubListComment
              key={idx}
              item={itemRep}
              handlerVote={handlerVote}
              idSelected={idSelected}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ListComment;

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;

  .wrap-comment {
    margin-left: 15px;
  }
  .wrap-image {
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
  }
`;
