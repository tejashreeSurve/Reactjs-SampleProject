

export const addNewUser=(name)=>{
    return{
        type:'ADD_USER',
        payload:name,
    }
}

export default addNewUser;