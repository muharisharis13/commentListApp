import React, { useEffect } from "react";
import ModalModule from "modules/Modal";
import Formlogin from "./formLogin";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as color from "components/UI/styles/color";
import Button from "components/UI/button/button";

const ModalLogin = (props) => {
  const { show, onHide } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const btnSubmit = (data) => {
    console.log({ data });
  };

  useEffect(() => {
    reset();
  }, [show, reset]);

  return (
    <ModalModule show={show} onHide={onHide} size="sm">
      <div style={{ padding: "5px 20px" }}>
        <BtnClose className="times" onClick={onHide}>
          &times;
        </BtnClose>
        <form className="form" onSubmit={handleSubmit(btnSubmit)}>
          <Formlogin
            register={register}
            errors={errors}
            getValues={getValues}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </ModalModule>
  );
};

export default ModalLogin;

const BtnClose = styled.div`
  position: absolute;
  cursor: pointer;
  top: -20px;
  right: -20px;
  display: flex;
  background-color: ${color.RED};
  color: ${color.GRAY_LIGHT};
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;
