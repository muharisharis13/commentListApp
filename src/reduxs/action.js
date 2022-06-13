import { GET_BOOL_NAV } from "./stringType";

export const SET_GET_BOOL_NAV = (data) => {
  return {
    type: GET_BOOL_NAV,
    value: data,
  };
};
