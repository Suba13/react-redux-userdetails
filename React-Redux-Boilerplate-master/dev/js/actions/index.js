export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const deleteUser = (user) => {
    return {
        type: 'DELETE_USER',
        payload: user
    }
};
export const modify = (user) => {
    console.log("hii");
    console.log(user);
    return {
        type: 'MODIFY_USER',
        payload: user
    }
};
export const showDetails = (value) => {
    return {
    type: 'showDetails',
    payload: {showContent:value}
    }
    };
    export const addUser=(user)=>{
        console.log(user);
        return{
            type:'ADD_USER',
            payload:user
        }
    };