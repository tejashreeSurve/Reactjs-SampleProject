export const setuseremail = (value) => ({
  type: "SET_USEREMAIL",
  payload: value,
});

export const setPassword = (value) => ({
  type: "SET_PASSWORD",
  payload: value,
});

export const setShowpassword = (value) => ({
  type: "SET_SHOWPASSWORD",
  payload: value,
});

export const setLoading = (value) => ({
  type: "SET_LOADING",
  payload: value,
});

export const setUsernameError = (value) => ({
  type: "SET_USERNAMEERROR",
  payload: value,
});

export const setPasswordError = (value) => ({
  type: "SET_PASSWORDERROR",
  payload: value,
});
