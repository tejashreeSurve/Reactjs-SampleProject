export const initialState = {
  useremail: "teju123@gmail.com",
  password: "teju123",
  showpassword: "",
  useremailerror: "",
  passworderror: "",
  loading: false,
  userToken: "",
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USEREMAIL":
      return { ...state, useremail: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_SHOWPASSWORD":
      return { ...state, showpassword: action.payload };
    case "SET_USEREMAILERROR":
      return { ...state, useremailerror: action.payload };
    case "SET_PASSWORDERROR":
      return { ...state, passworderror: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_USERTOKEN":
      return { ...state, userToken: action.payload };
    default:
      return state;
  }
}

export default LoginReducer;
