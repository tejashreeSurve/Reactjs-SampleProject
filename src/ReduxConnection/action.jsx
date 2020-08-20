export function addNewUser(userdetail) {
  return {
    type: "ADD_USER",
    payload: userdetail,
  };
}

export function fetchNewUser(users) {
  return {
    type: "FETCH_USER",
    payload: users,
  };
}
