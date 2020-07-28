

const userDataReducer = (state = {name: null},action)=>{
if(action.type === 'ADD_USER'){
    return {
        ...state,
        name:action.payload,
    };
}
return state;
};
export default userDataReducer;