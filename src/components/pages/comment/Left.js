import React, { useState } from "react";
import styled from "styled-components";
import * as color from "components/UI/styles/color";
import ListComment from "./listComment";
import FormComment from "./formComment";
import CommentJSON from "../../../utils/comments.json";

const Left = () => {
  const [data, setData] = useState(CommentJSON);
  const [idSelected, setIdSelected] = useState([]);

  const changeButtonVote = (id, name) => {
    const findId = idSelected.find((find) => find.id === id);

    if (!findId) {
      setIdSelected((state) => [...state, { id, name }]);
      if (name === "tambah") {
        setData(
          data.map((obj) => {
            const getIdSub = obj.replies.find((findData) => findData.id === id);
            if (getIdSub) {
              return {
                ...obj,
                replies: obj.replies.map((obj1) => {
                  if (obj1.id === id) {
                    return { ...obj1, point: obj1.point + 1 };
                  }
                  return obj1;
                }),
              };
            } else {
              if (obj.id === id) {
                return { ...obj, point: obj.point + 1 };
              }
            }
            return obj;
          })
        );
      } else if (name === "kurang") {
        setData(
          data.map((obj) => {
            const getIdSub = obj.replies.find((findData) => findData.id === id);
            if (getIdSub) {
              return {
                ...obj,
                replies: obj.replies.map((obj1) => {
                  if (obj1.id === id) {
                    return { ...obj1, point: obj1.point - 1 };
                  }
                  return obj1;
                }),
              };
            } else {
              if (obj.id === id) {
                return { ...obj, point: obj.point - 1 };
              }
            }
            return obj;
          })
        );
      }
    }
  };

  return (
    <Container>
      <section>
        <h1>
          Lampu Webcam tiba tiba menyala sendiri tanpa membuka aplikasi webcam
        </h1>
        <div className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          nisi magnam eaque illum esse suscipit cum reprehenderit doloremque
          provident voluptates distinctio ratione, perferendis tempora impedit
          dicta enim. Quidem quia sed nulla. Atque ratione obcaecati, doloribus,
          asperiores nostrum iusto sunt saepe mollitia, officia ab corrupti
          eaque minus ex exercitationem hic corporis cumque reprehenderit
          voluptate. Exercitationem cupiditate nemo perspiciatis nulla, corrupti
          quod sit, totam neque accusantium iure earum sapiente ducimus in
          assumenda. Dolor, iusto! Vel expedita minima nulla officiis animi
          dolores repudiandae non nobis corporis minus adipisci itaque dicta
          autem quam nesciunt iusto, rerum cupiditate. Aspernatur dolorum
          perspiciatis neque, iure id voluptatum!
        </div>
      </section>
      <div className="komentar">
        <h2>Komentar</h2>
        <div className="line"></div>
      </div>

      <div className="list-comment">
        {data.map((item, idx) => (
          <ListComment
            key={idx}
            item={item}
            handlerVote={changeButtonVote}
            idSelected={idSelected}
          />
        ))}
      </div>

      <div className="komentar">
        <h2>Tambah Komentar</h2>
        <div className="line"></div>
      </div>

      <section style={{ marginTop: "20px" }}>
        <FormComment />
      </section>
    </Container>
  );
};

export default Left;

const Container = styled.div`
  .komentar {
    display: flex;
    align-items: center;
    h2 {
      padding-right: 30px;
    }
    .line {
      background-color: ${color.GRAY};
      flex: 1;
      height: 0.5px;
    }
  }
  .text {
    font-size: 11pt;
  }
  section {
    max-width: 90%;
  }
`;
