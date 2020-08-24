export const initialState = {
  fname: "",
  mname: "",
  lname: "",
  useremail: "",
  password: "",
  fnameerror: "",
  mnameerror: "",
  lnameerror: "",
  useremailerror: "",
  passworderror: "",
};

function SignUpReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FNAME":
      return { ...state, fname: action.payload };
    case "SET_MNAME":
      return { ...state, mname: action.payload };
    case "SET_LNAME":
      return { ...state, lname: action.payload };
    case "SET_USEREMAIL":
      return { ...state, useremail: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_FNAMEERROR":
      return { ...state, fnameerror: action.payload };
    case "SET_MNAMEERROR":
      return { ...state, mnameerror: action.payload };
    case "SET_LNAMEERROR":
      return { ...state, lnameerror: action.payload };
    case "SET_USEREMAILERROR":
      return { ...state, useremailerror: action.payload };
    case "SET_PASSWORDERROR":
      return { ...state, passworderror: action.payload };
  }
}

export default SignUpReducer;
