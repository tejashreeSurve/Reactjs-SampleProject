export const initialState = {
  useremail: "",
  password: "",
  showpassword: "",
  useremailerror: "",
  passworderror: "",
  loading: false,
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
    default:
      return initialState;
  }
}

export default LoginReducer;
