export const initialState = {
  user: null,
  emailToVerify: null,
};

export const actionTypes = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
  SET_EMAIL_VERIFICATION: "SET_EMAIL_VERIFICATION:",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    case actionTypes.SET_EMAIL_VERIFICATION:
      return {
        ...state,
        user: action.email,
      };
    default:
      return state;
  }
};

export default reducer;
