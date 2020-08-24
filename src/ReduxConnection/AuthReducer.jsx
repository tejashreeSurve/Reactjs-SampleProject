export const initialState = {
  authenticated: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_USER": {
      console.log("In the Auth Reducer", action.payload);
      return { ...state, authenticated: action.payload };
    }
    default:
      return initialState;
  }
};
export default AuthReducer;
