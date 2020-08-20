export const initialState = {
  userEmail: "",
  password: "",
  showpassword: "",
  loading: false,
  errors: {},
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USEREMAIL":
      return { ...state, userEmail: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_SHOWPASSWORD":
      return { ...state, showpassword: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };
    default:
      return initialState;
  }
}

export default LoginReducer;
