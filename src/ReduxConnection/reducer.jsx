export const userDataReducer = (state = { userdetail: {} }, action) => {
  if (action.type === "ADD_USER") {
    return {
      ...state,
      userdetail: action.payload,
    };
  }
  return state;
};

export const fetchDataReducer = (state = { users: [] }, action) => {
  if (action.type === "FETCH_USER") {
    return {
      ...state,
      users: action.payload,
    };
  }
  return state;
};
