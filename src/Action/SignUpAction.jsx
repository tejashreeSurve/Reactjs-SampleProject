export const setFnameError = (value) => ({
  type: "SET_FNAMEERROR",
  payload: `*${value}`,
});
export const setMnameError = (value) => ({
  type: "SET_MNAMEERROR",
  payload: `*${value}`,
});
export const setLnameError = (value) => ({
  type: "SET_LNAMEERROR",
  payload: `*${value}`,
});
export const setUseremailError = (value) => ({
  type: "SET_USEREMAILERROR",
  payload: `*${value}`,
});
export const setPasswordError = (value) => ({
  type: "SET_PASSWORDERROR",
  payload: `*${value}`,
});

export const signUpForm = (value) => ({
  type: "SIGN_UP_FORM",
  payload: value,
});
