import { AccordionActions } from "@material-ui/core";

export const initialState = {
  userListArray: [],
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERLISTARRAY":
      return { ...state, userListArray: action.payload };
    default:
      return state;
  }
}

export default UserReducer;
