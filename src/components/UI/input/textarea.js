import React from "react";
import styled from "styled-components";
import * as color from "components/UI/styles/color";

const TextAreaUI = ({
  placeholder = "placeholder",
  register,
  name,
  errors,
  type = "text",
  errorsMessage,
  required = false,
  pattern,
  showLabel = true,

  getValues,
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {showLabel && (
        <label
          htmlFor={name}
          style={{ textTransform: "capitalize", fontSize: "11pt" }}
        >
          {name}
        </label>
      )}
      <InputStyled
        type={type}
        placeholder={placeholder}
        {...register(name, { required: required, pattern: pattern })}
        errors={errors}
        id={name}
        rows={10}
        getValues={getValues ? true : false}
      />
      {errors && (
        <div style={{ color: "red", fontSize: "10pt" }}>{errorsMessage}</div>
      )}
    </div>
  );
};

export default TextAreaUI;

const InputStyled = styled.textarea`
  width: 100%;
  border-radius: 3px;
  border: thin solid
    ${({ errors, getValues }) =>
      errors ? color.RED : getValues ? color.GREEN : color.GRAY};

  font-size: 11pt;
  &::placeholder {
    font-size: 11pt;
  }
  &:focus {
    outline: none;
  }
`;
