import { GET_BOOL_NAV } from "./stringType";

const initialState = {
  boolNav: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOL_NAV:
      return {
        ...state,
        boolNav: action.value,
      };

    default:
      return state;
  }
};

export { reducer };
