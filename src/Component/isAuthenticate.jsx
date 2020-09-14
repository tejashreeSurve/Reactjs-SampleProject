export const isAuthenticate = () => {
  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token") !== null) {
    return true;
  } else {
    return false;
  }
};
