import React from "react";
import InputUI from "components/UI/input/index";
import TextAreaUI from "components/UI/input/textarea";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "components/UI/button/button";

const FormComment = ({}) => {
  // eslint-disable-line no-use-before-define
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const btnSubmit = React.useCallback((data) => {
    console.log({ data });
    return null;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <form onSubmit={handleSubmit(btnSubmit)}>
        <InputUI
          name="nama"
          placeholder="Nama"
          type="text"
          register={register}
          errors={errors.nama}
          errorsMessage="Wajib diisi"
          showLabel={false}
          required={true}
          getValues={getValues().nama}
        />
        <InputUI
          name="email"
          placeholder="email"
          type="email"
          pattern={/^\S+@\S+$/i}
          register={register}
          errors={errors.email}
          errorsMessage="Format Email Salah"
          showLabel={false}
          required={true}
          getValues={getValues().email}
        />
        <TextAreaUI
          name="comment"
          placeholder="comment"
          register={register}
          errors={errors.comment}
          errorsMessage="Wajib diisi"
          showLabel={false}
          required={true}
          type="text"
          getValues={getValues().comment}
        />
        <div style={{ display: "flex", gap: "20px" }}>
          <Button onClick={() => reset()} secondColor>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Container>
  );
};

export default FormComment;

const Container = styled.div``;
