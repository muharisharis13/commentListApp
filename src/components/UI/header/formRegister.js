import React from "react";
import InputUI from "components/UI/input";

const FormRegister = (props) => {
  const { register, errors, getValues } = props;

  return (
    <div>
      <h3>Register</h3>
      <InputUI
        register={register}
        name="email"
        errors={errors.email}
        errorsMessage="Format Email Salah"
        required={true}
        pattern={/^\S+@\S+$/i}
        type="email"
        placeholder="Email"
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
      <InputUI
        register={register}
        name="rePassword"
        errors={errors.rePassword}
        errorsMessage="Wajib diisi"
        type="password"
        required={true}
        placeholder="password"
        getValues={getValues().rePassword}
      />
    </div>
  );
};

export default FormRegister;
