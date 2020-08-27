const initialState = {
  userDetails: {},
  userListData: [],
};

function ReduxReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERDETAILS":
      return { ...state, userDetails: action.payload };
    case "SET_USERSLIST":
      return { ...state, userListData: action.payload };
    default:
      return state;
  }
}

export default ReduxReducer;
