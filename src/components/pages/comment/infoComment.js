import React from "react";
import styled from "styled-components";
import { Moment } from "utils/moment";
import * as color from "components/UI/styles/color";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const InfoComment = ({ item, handlerVote, idSelected }) => {
  return (
    <Container>
      <strong className="name">{item?.author}</strong>
      <small className="date">{Moment(new Date(item?.date))}</small>
      <div className="comments">{item?.message}</div>

      <div className="wrap-point">
        <div className="text">{item?.point} point</div>
        <BtnTambah
          onClick={() => handlerVote(item.id, "tambah")}
          className="tambah"
          active={
            idSelected?.find(
              (find) => find.id === item.id && find.name === "tambah"
            )
              ? true
              : false
          }
        >
          <FaArrowUp />
        </BtnTambah>
        <BtnKurang
          onClick={() => handlerVote(item.id, "kurang")}
          className="kurang"
          active={
            idSelected?.find(
              (find) => find.id === item.id && find.name === "kurang"
            )
              ? true
              : false
          }
        >
          <FaArrowDown />
        </BtnKurang>
      </div>
    </Container>
  );
};

export default InfoComment;

const BtnKurang = styled.button`
  background-color: ${({ active }) => (active ? color.RED : "default")};
  color: ${({ active }) => (active ? color.GRAY_LIGHT : color.BLACK)};
`;
const BtnTambah = styled.button`
  background-color: ${({ active }) => (active ? color.GREEN : "default")};
  color: ${({ active }) => (active ? color.GRAY_LIGHT : color.BLACK)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${color.BLACK};
  font-size: small;

  .text {
    font-size: small;
  }

  .wrap-point {
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 5px;

    button {
      border: none;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
    }
  }
`;
