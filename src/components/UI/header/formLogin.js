import React from "react";
import InputUI from "components/UI/input";

const FormLogin = (props) => {
  const { register, errors, getValues } = props;

  return (
    <div>
      <h3>Login</h3>
      <InputUI
        register={register}
        name="email"
        errors={errors.email}
        errorsMessage="Format Email Salah"
        required={true}
        pattern={/^\S+@\S+$/i}
        placeholder="Email"
        type="email"
        getValues={getValues().email}
      />
      <InputUI
        register={register}
        name="password"
        errors={errors.password}
        errorsMessage="Wajib diisi"
        type="password"
        required={true}
        placeholder="password"
        getValues={getValues().password}
      />
    </div>
  );
};

export default FormLogin;
