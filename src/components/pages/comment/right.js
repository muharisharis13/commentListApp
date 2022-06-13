import React from "react";
import styled from "styled-components";
import * as color from "components/UI/styles/color";

const data = [
  "Bersihkan laptop dari butiran debu",
  "Cara akses website menggunakan koneksi openVPN",
  "Batas aman overclock PC rakitan",
  "Cara mengetahui akun Facebook di-hack melalui aplikasi",
  "Tutorial: Langkah-langkah mencegah website untuk track user",
];

const Right = () => {
  return (
    <Container>
      <h3>Diskusi {data.length} Teratas</h3>

      {data.map((item, idx) => (
        <div key={idx} className="list-wrap">
          <div className="number">{idx + 1}</div>
          <div className="text">{item}</div>
        </div>
      ))}
    </Container>
  );
};

export default Right;

const Container = styled.div`
  margin-left: 20px;

  .list-wrap {
    .number {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${color.GRAY_LIGHT};
      background-color: ${color.BROWN};
      font-weight: 600;
      width: 20px;
      height: 20px;
    }
    .text {
      font-weight: 500;
    }
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: small;
    margin-bottom: 10px;
  }
`;
