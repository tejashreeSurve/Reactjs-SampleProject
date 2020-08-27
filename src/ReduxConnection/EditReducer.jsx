export const initialState = {
  userid: "",
  fname: "",
  mname: "",
  lname: "",
  useremail: "",
  password: "",
  isverified: "",
  fnameerror: "",
  mnameerror: "",
  lnameerror: "",
};

function EditReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERID":
      return { ...state, userid: action.payload };
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
    case "SET_ISVERIFIED":
      return { ...state, isverified: action.payload };
    case "SET_FNAMEERROR":
      return { ...state, fnameerror: action.payload };
    case "SET_MNAMEERROR":
      return { ...state, mnameerror: action.payload };
    case "SET_LNAMEERROR":
      return { ...state, lnameerror: action.payload };
    default:
      return initialState;
  }
}

export default EditReducer;
