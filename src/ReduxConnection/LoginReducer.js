export const initialState = {
  userEmail: "",
  password: "",
  showpassword: "",
  loading: false,
  userError: "",
  passwordError: "",
  errors: "",
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USEREMAIL":
      return { ...state, userEmail: action.payload };
    case "SET_PASSWORD": {
      console.log("In Reducer Password", action.payload);
      return { ...state, password: action.payload };
    }
    case "SET_SHOWPASSWORD":
      return { ...state, showpassword: action.payload };
    case "SET_LOADING": {
      console.log("In Reducer Loading", action.payload);
      return { ...state, loading: action.payload };
    }
    case "SET_USERNAMEERROR":
      return { ...state, userError: action.payload };
    case "SET_PASSWORDERROR":
      return { ...state, passwordError: action.payload };
    case "SET_ERROR":
      return { ...state, errors: action.payload };
    default:
      return initialState;
  }
}

export default LoginReducer;
