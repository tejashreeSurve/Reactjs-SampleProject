export const getAllUserData = (value) => ({
  type: "GET_ALL_USER",
  payload: value,
});

export const deleteUserData = (value) => ({
  type: "DELETE_USER",
  payload: value,
});
